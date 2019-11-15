package hello.services;

import hello.beans.Comment;
import hello.beans.LoggedUser;
import hello.clientbeans.CComment;
import hello.clientbeans.CCommentDetail;
import hello.mappers.CommentMapper;
import hello.repositories.CommentRepository;
import lombok.RequiredArgsConstructor;
import lombok.val;
import org.springframework.stereotype.Service;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CommentService {
	private final CommentRepository commentRepository;
	private final CommentMapper commentMapper;
	private final ArticleService articleService;
	private final LoggedUser loggedUser;

	public List<CCommentDetail> getCommentsForArticle(final int articleId) {
		val topLevelComments = commentRepository.getTopLevelCommentsForArticle(articleId);
		return buildCommentsTree(topLevelComments);
	}

	private List<CCommentDetail> buildCommentsTree(List<Comment> comments) {
		val commentDetailList = new ArrayList<CCommentDetail>();

		comments.parallelStream().map(commentMapper::convert).forEach(commentDetail -> {
			commentDetail.setComments(buildCommentsTree(commentRepository.getCommentsByCommentId(commentDetail.getId())));
			commentDetailList.add(commentDetail);
		});

		return commentDetailList;
	}

	public CCommentDetail createComment(final CComment cComment) {
		cComment.setUserId(loggedUser.getUser().getId());

		val comment = commentMapper.mapFromC(cComment);

		if(articleService.getArticle(cComment.getArticleId()) == null) {
			throw new RuntimeException("ArticleId not found!");
		}

		comment.setDate(Date.from(Instant.now()));

		return commentMapper.convert(commentRepository.save(comment));
	}
}
