package hello.mappers;

import fr.xebia.extras.selma.IoC;
import fr.xebia.extras.selma.Mapper;
import fr.xebia.extras.selma.Maps;
import hello.beans.Comment;
import hello.clientbeans.CCommentDetail;
import hello.clientbeans.CComment;

@Mapper(withIoC = IoC.SPRING)
public interface CommentMapper {
	@Maps(withIgnoreFields = {
			"hello.beans.Comment.commentId",
			"hello.beans.Comment.articleId",
			"hello.clientbeans.CCommentDetail.comments"
	})
	CCommentDetail convert(Comment comment);

	@Maps
	Comment mapFromC(CComment cComment);
}
