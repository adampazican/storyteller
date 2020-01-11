package hello.mappers;

import fr.xebia.extras.selma.IoC;
import fr.xebia.extras.selma.Mapper;
import fr.xebia.extras.selma.Maps;
import hello.beans.Comment;
import hello.clientbeans.CComment;

import java.util.List;

@Mapper(withIoC = IoC.SPRING)
public interface CommentMapper {

	@Maps(withIgnoreFields = {
			"userId",
			"username"
	})
	CComment mapToC(Comment comment);

	@Maps(withIgnoreFields = {
			"userId",
			"username"
	})
	Comment mapFromC(CComment comment);
}
