package hello.clientbeans;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonProperty;

@Data
public class CUser {
	@JsonProperty(access = JsonProperty.Access.READ_ONLY)
	private int id;
	@NotBlank
	@Size(min = 3, max = 20, message = "Required number of characters is between 3 and 20")
	private String username;
	@NotBlank
	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	@Size(min = 5, max = 28, message = "Required number of characters is between 8 and 28")
	private String password;
	private CImage image;
	private String token;
}
