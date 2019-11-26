package hello.repositories;

import hello.beans.Article;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface ArticleRepository extends CrudRepository<Article, Integer> {

	@Query("UPDATE article" +
			" SET title = :title, body=:body, date=:date" +
			" WHERE id = :id")
	@Modifying
	void updateArticle(int id, Date date, String title, String body);

	@Query("UPDATE article SET visitor_count = (SELECT visitor_count+1 FROM article WHERE id=:id) WHERE id=:id;" +
			"SELECT article.id, article.user_id, article.date, article.title, article.body" +
			" FROM article" +
			" JOIN \"user\" ON article.user_id = \"user\".id" +
			" WHERE article.id = :id" +
			" AND article.active = true;")
	Article getArticle(int id);

	@Query("SELECT article.id, article.user_id, article.date, article.title, substr(article.body, 30) as body, article.active" +
			" FROM article" +
			" WHERE article.active = true" +
			" ORDER BY article.date DESC" +
			" LIMIT :size" +
			" OFFSET :offset;")
	List<Article> getArticlesPaginated(int offset, int size);

	@Query("SELECT article.id, article.user_id, article.date, article.title, substr(article.body, 30) as body, article.active\n" +
			"FROM article\n" +
			"JOIN \"user\" ON (\"user\".id = article.user_id)\n" +
			"LIMIT :size\n" +
			"OFFSET :offset")
	List<Article> getArticlesByUserIdPaginated(int userId, int offset, int size);

	@Query("SELECT article.id, article.user_id, article.date, article.title, substr(article.body, 30) as body, article.active\n" +
			" FROM article" +
			" JOIN \"user\" ON (\"user\".id = article.user_id)" +
			" WHERE article.active = TRUE" +
			" ORDER BY article.visitor_count DESC" +
			" LIMIT 5;")
	List<Article> getMostVisitedArticles();
}
