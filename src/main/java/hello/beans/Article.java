package hello.beans;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;

import java.util.Date;

@Data
@Getter
@Setter
public class Article {
	@Id
	private int id;
	private int userId;
	private Date date;
	private String title;
	private String body;
	private boolean active;
}
