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
		List<CArticle> result = articleService.getArticleList();
		return result;
	}

	@GetMapping("/top-articles")
	@ResponseStatus(HttpStatus.OK)
	public List<CArticle> getTopArticles() {
		List<CArticle> result = articleService.getTopArticles();
		return result;
	}

	@PostMapping("/article")
	@ResponseStatus(HttpStatus.OK)
	public CArticle createArticle(@Valid @RequestBody CArticle article) {
		return articleService.createArticle(article);
	}

	@PostMapping("/article/{id}")
	@ResponseStatus(HttpStatus.OK)
	public CArticle getArticle(@PathVariable int id) {
		return articleService.getArticleDetail(id);
	}

	@PostMapping("/article/{id}/post")
	@ResponseStatus(HttpStatus.OK)
	public CArticle postArticle(@PathVariable int id) {
		return articleService.postArticle(id);
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
        //TODO: embed Comment array into Article and give that back
        //its probably enough to only have 1 level of comment nesting, but thats
        //frontend implementation dependant
		return articleService.updateArticle(article);
	}

	@GetMapping("/article")
	@ResponseStatus(HttpStatus.OK)
	public List<CArticle> getArticlesPaginated(@RequestParam(defaultValue = "1") int page, @RequestParam(defaultValue = "3") int size) {
		return articleService.getArticlesPaginated((page-1) * size, size);
	}

	@GetMapping("/article/count")
	@ResponseStatus(HttpStatus.OK)
	public int getNumberOfArticlePages(@RequestParam(defaultValue = "3") int pageSize) {
		return articleService.getNumberOfArticlePages(pageSize);
	}

	@GetMapping("/user/{id}/article")
	@ResponseStatus(HttpStatus.OK)
	public List<CArticle> getArticleByUserIdPaginated(@PathVariable int id, @RequestParam(defaultValue = "1") int page, @RequestParam(defaultValue = "3") int size) {
		List<CArticle> result = articleService.getArticlesByUserIdPaginated(id, (page-1) * size, size);
		return result; //TODO: reevaluate
	}
}
