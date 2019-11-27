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
			"hello.beans.User.password"
	})
	CArticle mapToC(Article article);

	@Maps
	Article mapFromC(CArticle article);

	@Maps()
	List<CArticle> mapToC(List<Article> articles);
}
