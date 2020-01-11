package hello.services;

import hello.beans.Comment;
import hello.beans.LoggedUser;
import hello.clientbeans.CComment;
import hello.mappers.CommentMapper;
import hello.repositories.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.time.Instant;
import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CommentService {
	private final CommentRepository commentRepository;
	private final CommentMapper commentMapper;
	private final ArticleService articleService;
	private final LoggedUser loggedUser;

	public List<CComment> getCommentsForArticle(final int articleId) {
		List<CComment> comments = commentRepository.getCommentsForArticle(articleId);
		return comments;
	}

	public CComment createComment(CComment cComment) {
		Comment comment = commentMapper.mapFromC(cComment);
		comment.setUserId(loggedUser.getUser().getId());

		comment.setDate(Date.from(Instant.now()));

		comment = commentRepository.save(comment);

		cComment = commentMapper.mapToC(comment);
		cComment.setUsername(loggedUser.getUser().getUsername());
		return cComment;
	}
}
