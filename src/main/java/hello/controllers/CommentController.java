package hello.controllers;

import hello.clientbeans.CComment;
import hello.services.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.jca.cci.core.support.CciDaoSupport;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class CommentController {
	private final CommentService commentService;

	@ResponseStatus(HttpStatus.OK)
	@GetMapping("/article/{articleId}/comment")
	public List<CComment> getCommentsForArticle(@PathVariable int articleId) {
		return commentService.getCommentsForArticle(articleId);
	}

	@ResponseStatus(HttpStatus.OK)
	@PostMapping("/comment")
	public CComment createCommentForArticle(@RequestBody CComment cComment) {
		CComment result = commentService.createComment(cComment);
		return result;
	}
}
