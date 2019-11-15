package hello.controllers;

import hello.clientbeans.CArticle;
import hello.clientbeans.CArticleDetail;
import hello.services.ArticleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class ArticleController {
	private final ArticleService articleService;

	@GetMapping("/")
	@ResponseStatus(HttpStatus.OK)
	public List<CArticle> index() {
		return articleService.getArticleList();
	}

	@PostMapping("/article")
	@ResponseStatus(HttpStatus.OK)
	public CArticle createArticle(@Valid @RequestBody CArticle article) {
		return articleService.createArticle(article);
	}

	@GetMapping("/article/{id}")
	@ResponseStatus(HttpStatus.OK)
	public CArticleDetail getArticle(@PathVariable int id) {
		return articleService.getArticleDetail(id);
	}

	@DeleteMapping("/article/{id}")
	@ResponseStatus(HttpStatus.OK)
	public CArticle removeArticle(@PathVariable int id) {
		return articleService.softRemoveArticle(id);
	}

	@PutMapping("/article/{id}")
	@ResponseStatus(HttpStatus.OK)
	public CArticle updateArticle(@Valid @RequestBody CArticle article, @PathVariable int id) {
		article.setId(id);
		return articleService.updateArticle(article);
	}

	@GetMapping("/article")
	@ResponseStatus(HttpStatus.OK)
	public List<CArticle> getArticlesPaginated(@RequestParam(defaultValue = "1") int page, @RequestParam(defaultValue = "5") int size) {
		return articleService.getArticlesPaginated((page-1) * size, size);
	}

	@GetMapping("/user/{id}/article")
	@ResponseStatus(HttpStatus.OK)
	public List<CArticle> getArticleByUserIdPaginated(@PathVariable int id, @RequestParam(defaultValue = "1") int page, @RequestParam(defaultValue = "5") int size) {
		return articleService.getArticlesByUserIdPaginated(id, (page-1) * size, size);
	}
}
