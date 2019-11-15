package hello.beans;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;

@Data
public class User {
	@Id
	private int id;
	private String username;
	private String password;
	@Transient
	private Image image;
}
