package hello.beans;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.data.annotation.Id;

import javax.persistence.Column;
import java.util.Date;

@Data
@RequiredArgsConstructor
public class Article {
	@Id
	private int id;
	@Column(name = "user")
	private User user;
	private Date date;
	private String title;
	private String body;
	private boolean active;
	//TODO: add new fields(category_id)
	//TODO: image?
}
