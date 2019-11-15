package hello.clientbeans;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonProperty;

@EqualsAndHashCode
@Data
public class CImage {
	@JsonProperty(access = JsonProperty.Access.READ_ONLY)
	Integer id;
	@NotBlank
	String name;
	@NotBlank
	String suffix;
	@NotNull
	Integer size;
	@NotBlank
	String content;
}
