package hello.repositories;

import hello.beans.Image;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends CrudRepository<Image, Integer> {
	@Query("select image.id, image.filename, image.name, image.suffix, image.size" +
			" from image" +
			" join \"user\" usr on usr.image_id = image.id" +
			" where usr.id = :userId;")
	Image getImageByUserId(Integer userId);
}
