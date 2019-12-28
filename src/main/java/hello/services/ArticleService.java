package hello.services;

import hello.beans.Article;
import hello.beans.LoggedUser;
import hello.beans.User;
import hello.clientbeans.CArticle;
import hello.clientbeans.CArticleDetail;
import hello.exceptions.ForbiddenException;
import hello.exceptions.NotFoundException;
import hello.mappers.ArticleMapper;
import hello.mappers.UserMapper;
import hello.repositories.ArticleRepository;
import lombok.RequiredArgsConstructor;
import lombok.val;
import lombok.var;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ArticleService {
	private final LoggedUser loggedInUser;
	private final ArticleRepository articleRepository;
	private final UserService userService;
	private final ArticleMapper articleMapper;
	private final UserMapper userMapper;

	public List<CArticle> getArticleList() {
		return articleMapper.mapToC(articleRepository.getArticlesPaginated(0, 5));
	}

	public CArticle postArticle(final int id) {
        articleRepository.postArticle(id, Date.from(Instant.now()));
	    return getArticleDetail(id);
    }

	public CArticle createArticle(final CArticle article) {
		article.setDate(Date.from(Instant.now()));
		article.getUser().setId(loggedInUser.getUser().getId());
		return articleMapper.mapToC(articleRepository.save(articleMapper.mapFromC(article)));
	}

	public CArticle updateArticle(final CArticle newArticle) {
		var article = getArticle(newArticle.getId());

		if(article.getUser().getId() != loggedInUser.getUser().getId()) {
			throw new ForbiddenException();
		}

		articleRepository.updateArticle(newArticle.getId(), Date.from(Instant.now()), article.getTitle(), article.getBody());
		article = articleRepository.getArticle(newArticle.getId());

		return articleMapper.mapToC(article);
	}

	public CArticle getArticleDetail(final int id) {
		Article article = articleRepository.getArticle(id);

        if(article == null) {
            if(loggedInUser.getUser() != null) {
                article = articleRepository.getUserArticle(id, loggedInUser.getUser().getId());
            }
            else{
                throw new NotFoundException(String.format("Article with id %d not found", id));
            }
        }

        articleRepository.increaseVisitorCount(id);
		return articleMapper.mapToC(article);
	}

	public Article getArticle(final int id) {
		val article = articleRepository.getArticle(id);

		if(article == null) {
			throw new NotFoundException(String.format("Article with id %d not found", id));
		}

		return article;
	}

	public CArticle softRemoveArticle(final int id) {
		val article = getArticle(id);

		if(article.getUser().getId() != loggedInUser.getUser().getId()) {
			throw new ForbiddenException();
		}

		//articleRepository.softRemoveArticle(id);
		//TODO: make replacement with normal delete
		return articleMapper.mapToC(article);
	}

	public List<CArticle> getArticlesPaginated(final int offset, final int size) {
		return articleMapper.mapToC(articleRepository.getArticlesPaginated(offset, size));
	}

	public List<CArticle> getArticlesByUserIdPaginated(final int id, final int offset, final int size) {
		return articleMapper.mapToC(articleRepository.getArticlesByUserIdPaginated(id, offset, size));
	}

	public List<CArticle> getTopArticles() {
		return articleMapper.mapToC(articleRepository.getMostVisitedArticles());
	}
}
