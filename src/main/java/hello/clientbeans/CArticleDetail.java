package hello.clientbeans;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonProperty;

@AllArgsConstructor
@Data
public class CArticleDetail {
	@JsonProperty(access = JsonProperty.Access.READ_ONLY)
	private int id;
	@NotNull
	private Date date;
	@NotBlank
	private String title;
	@NotBlank
	private String body;
	@JsonProperty("user")
	private CUser cUser;
}
