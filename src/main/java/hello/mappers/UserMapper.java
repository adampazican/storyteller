package hello.mappers;

import fr.xebia.extras.selma.IoC;
import fr.xebia.extras.selma.Mapper;
import fr.xebia.extras.selma.Maps;
import hello.beans.User;
import hello.clientbeans.CUser;

@Mapper(withIoC = IoC.SPRING)
public interface UserMapper {
	@Maps(withIgnoreFields = {
			"hello.beans.Image.filename",
			"token"
	})
	CUser mapToC(User user);
}
