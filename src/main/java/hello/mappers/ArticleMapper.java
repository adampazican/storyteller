package hello.mappers;

import fr.xebia.extras.selma.IoC;
import fr.xebia.extras.selma.Mapper;
import fr.xebia.extras.selma.Maps;
import hello.beans.Article;
import hello.clientbeans.CArticle;

import java.util.List;

@Mapper(withIoC = IoC.SPRING)
public interface ArticleMapper {

	@Maps(withIgnoreFields = {
			"user",
			"userId"
	})
	Article mapFromC(CArticle article);
}
