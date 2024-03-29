package hello.beans;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;

import java.util.Date;

@Data
public class Comment {
	@Id
	private int id;
	private int userId;
	private int articleId;
	private String body;
	private Date date;
}
