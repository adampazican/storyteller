package hello.repositories;

import com.fasterxml.jackson.annotation.JsonProperty;
import hello.beans.Comment;
import hello.clientbeans.CComment;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Repository
public interface CommentRepository extends CrudRepository<Comment, Integer> {

	@Query("SELECT \"comment\".id, \"user\".username, \"comment\".body, \"comment\".date, \"article_id\"\n" +
			"FROM \"comment\"\n" +
			"JOIN \"user\" ON \"user\".id = \"comment\".user_id\n" +
			"WHERE \"comment\".article_id = :articleId;")
	List<CComment> getCommentsForArticle(int articleId);

	@Query("SELECT id, user_id, body, date, comment_id, comment.article_id" +
			" FROM \"comment\"" +
			" JOIN comment_comment ON \"comment\".id = comment_comment.comment_id_2" +
			" WHERE comment_comment.comment_id = :commentId")
	List<Comment> getCommentsByCommentId(Integer commentId);
}
