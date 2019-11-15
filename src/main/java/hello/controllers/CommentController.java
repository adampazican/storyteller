package hello.controllers;

import hello.clientbeans.CComment;
import hello.clientbeans.CCommentDetail;
import hello.services.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class CommentController {
	private final CommentService commentService;

	@ResponseStatus(HttpStatus.OK)
	@GetMapping("/article/{articleId}/comment")
	public List<CCommentDetail> getCommentsForArticle(@PathVariable int articleId) {
		return commentService.getCommentsForArticle(articleId);
	}

	@ResponseStatus(HttpStatus.OK)
	@PostMapping("/comment")
	public CCommentDetail createCommentForArticle(@RequestBody CComment cComment) {
		return commentService.createComment(cComment);
	}
}
