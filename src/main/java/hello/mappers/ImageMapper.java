package hello.mappers;

import fr.xebia.extras.selma.InheritMaps;
import fr.xebia.extras.selma.IoC;
import fr.xebia.extras.selma.Mapper;
import fr.xebia.extras.selma.Maps;
import hello.beans.Image;
import hello.clientbeans.CImage;

@Mapper(withIoC = IoC.SPRING)
public interface ImageMapper {
	@Maps(withIgnoreFields = {
			"hello.beans.Image.filename",
	})
	CImage mapToC(Image image);

	@InheritMaps(method = "mapToC")
	Image mapFromC(CImage cImage);
}
