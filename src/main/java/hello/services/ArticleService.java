package hello.services;

import hello.beans.Article;
import hello.beans.LoggedUser;
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
		return articleMapper.mapToC(articleRepository.getAllArticles());
	}

	public List<CArticle> getMyArticleList() {
		return articleMapper.mapToC(articleRepository.getMyArticles(loggedInUser.getUser().getId()));
	}

	public CArticle createArticle(final CArticle article) {
		article.setDate(Date.from(Instant.now()));
		article.setUserId(loggedInUser.getUser().getId());
		return articleMapper.mapToC(articleRepository.save(articleMapper.mapFromC(article)));
	}

	public CArticle updateArticle(final CArticle newArticle) {
		var article = getArticle(newArticle.getId());

		if(article.getUserId() != loggedInUser.getUser().getId()) {
			throw new ForbiddenException();
		}

		articleRepository.updateArticle(newArticle.getId(), Date.from(Instant.now()), article.getTitle(), article.getBody());
		article = articleRepository.getArticle(newArticle.getId());

		return articleMapper.mapToC(article);
	}

	public CArticleDetail getArticleDetail(final int id) {
		val article = articleRepository.getArticle(id);

		if(article == null) {
			throw new NotFoundException(String.format("Article with id %d not found", id));
		}

		val author = userService.getUser(article.getUserId());

		return new CArticleDetail(article.getId(), article.getDate(), article.getTitle(), article.getBody(), userMapper.mapToC(author));
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

		if(article.getUserId() != loggedInUser.getUser().getId()) {
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
}
