package hello.clientbeans;

import hello.beans.User;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonProperty;

@Data
public class CComment {
	@JsonProperty(access = JsonProperty.Access.READ_ONLY)
	private int id;
	@JsonProperty(access = JsonProperty.Access.READ_WRITE)
	private String username;
	@NotBlank
	@Size(min = 20, max = 200, message = "Required number of params is between 3 and 20")
	private String body;
	@NotNull
	private int articleId;
	@JsonProperty(access = JsonProperty.Access.READ_ONLY)
	private Date date;
}
