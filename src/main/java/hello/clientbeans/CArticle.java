package hello.clientbeans;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonProperty;

@Data
public class CArticle {
	@JsonProperty(access = JsonProperty.Access.READ_ONLY)
	private int id;
	@JsonProperty(access = JsonProperty.Access.READ_ONLY)
	private int userId; //TODO: should return whole User, take userId so maybe not readonly
	@JsonProperty(access = JsonProperty.Access.READ_ONLY)
	private Date date;
	@NotBlank
	@Size(min = 8, max = 28, message = "Required number of characters is between 8 and 28")
	private String title;
	@NotBlank
	@Size(min = 20, max = 20000, message = "Required number of characters is between 8 and 28")
	private String body;
}