package hello.beans;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;

@EqualsAndHashCode
@Data
public class Image {
	@Id
	Integer id;
	String filename;
	String name;
	String suffix;
	Integer size;
	@Transient
	String content;
}
