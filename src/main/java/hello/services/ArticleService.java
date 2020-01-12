package hello.services;

import fr.xebia.extras.selma.Maps;
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
import java.util.ArrayList;
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
		return mapToC(articleRepository.getArticles());
	}

	public CArticle postArticle(final int id) {
        articleRepository.postArticle(id, Date.from(Instant.now()));
	    return getArticleDetail(id);
    }

	public CArticle createArticle(final CArticle article) {
		article.setDate(Date.from(Instant.now()));

		Article article1 = articleMapper.mapFromC(article);
		article1.setUserId(loggedInUser.getUser().getId());
		article1 = articleRepository.save(article1);
		return mapToC(article1);
	}

	public CArticle updateArticle(final CArticle newArticle) {
		var article = articleRepository.getUserArticle(newArticle.getId(), loggedInUser.getUser().getId());

		if(article == null || article.getUserId() != loggedInUser.getUser().getId()) {
			throw new ForbiddenException();
		}

		articleRepository.updateArticle(newArticle.getId(), Date.from(Instant.now()), newArticle.getTitle(), newArticle.getBody());
		article = articleRepository.getUserArticle(newArticle.getId(), loggedInUser.getUser().getId());

		return mapToC(article);
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

		if(article.isActive()) articleRepository.increaseVisitorCount(id);
		return mapToC(article);
	}

	public Article getArticle(final int id) {
		val article = articleRepository.getArticle(id);

		if(article == null) {
			throw new NotFoundException(String.format("Article with id %d not found", id));
		}

		return article;
	}

	public CArticle removeArticle(final int id) {
		val article = getArticle(id);

		if(article.getUserId() != loggedInUser.getUser().getId()) {
			throw new ForbiddenException();
		}
		articleRepository.deleteById(id);
		return mapToC(article);
	}

	public List<CArticle> getArticlesByUserIdPaginated(final int id, final int offset, final int size) {
		return mapToC(articleRepository.getArticlesByUserIdPaginated(id, offset, size));
	}

	public List<CArticle> getTopArticles() {
		List<Article> articles = articleRepository.getMostVisitedArticles();
		return mapToC(articles);
	}

	private CArticle mapToC(Article article) {
		CArticle cArticle = new CArticle();

		User user = userService.getUser(article.getUserId());
		user.setPassword(null);
		cArticle.setUser(user);
		cArticle.setDate(article.getDate());
		cArticle.setId(article.getId());
		cArticle.setActive(article.isActive());
		cArticle.setBody(article.getBody());
		cArticle.setTitle(article.getTitle());

		return cArticle;
	}

	private List<CArticle> mapToC(List<Article> articles){
		List<CArticle> cArticles = new ArrayList<>();

		for(Article article : articles){
			cArticles.add(mapToC(article));
		}

		return cArticles;
	}

	public int getNumberOfArticlePages(int pageSize) {
		int numberOfArticles = articleRepository.getCountOfActiveArticles();

		return (int) Math.ceil(numberOfArticles / (double) pageSize);
	}
}
