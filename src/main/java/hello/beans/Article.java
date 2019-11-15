package hello.beans;

import lombok.Data;
import org.springframework.data.annotation.Id;

import java.util.Date;

@Data
public class Article {
	@Id
	private int id;
	private int userId; // TODO: change to user
	private Date date;
	private String title;
	private String body;
	//TODO: add new fields(active, category_id, visitor_count)
	//TODO: image?
}
