package hello.beans;

import lombok.Data;
import org.springframework.data.annotation.Id;

import java.util.Date;

@Data
public class Article {
	@Id
	private int id;
	private int userId; //TODO IMPORTANT: change to user
	private Date date;
	private String title;
	private String body;
	private boolean active;
	//TODO: add new fields(category_id)
	//TODO: image?
}
