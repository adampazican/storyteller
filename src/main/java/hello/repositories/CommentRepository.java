package hello.repositories;

import hello.beans.Comment;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends CrudRepository<Comment, Integer> {

	@Query("SELECT DISTINCT ON(id) id, user_id, body, date, comment_id_2 as comment_id, comment.article_id" +
			" FROM \"comment\"" +
			" LEFT JOIN comment_comment" +
			" ON \"comment\".id = comment_comment.comment_id" +
			" WHERE \"comment\".id NOT IN(SELECT comment_id_2 FROM comment_comment)" +
			" AND comment.article_id = :articleId")
			//" AND comment.active = true" +
			//" AND COALESCE(comment_comment.active = true, true);")
	List<Comment> getTopLevelCommentsForArticle(int articleId);

	@Query("SELECT id, user_id, body, date, comment_id, comment.article_id" +
			" FROM \"comment\"" +
			" JOIN comment_comment ON \"comment\".id = comment_comment.comment_id_2" +
			" WHERE comment_comment.comment_id = :commentId")
	List<Comment> getCommentsByCommentId(Integer commentId);
}
