package hello.controllers;

import hello.clientbeans.CImage;
import hello.clientbeans.CUser;
import hello.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class UserController {
	private final UserService userService;

	@PostMapping("/login")
	@ResponseStatus(HttpStatus.OK)
	public String authenticate(@Valid @RequestBody CUser user) {
		return userService.authenticateUser(user);
	}

	@PostMapping("/register")
	@ResponseStatus(HttpStatus.CREATED)
	public String register(@Valid @RequestBody CUser user) {
		return userService.registerUser(user);
	}

	@PostMapping("/image")
	@ResponseStatus(HttpStatus.OK)
	public String uploadImage(@Valid @RequestBody CImage img) {
		return userService.uploadImage(img);
	}

	@GetMapping("/user/detail")
	@ResponseStatus(HttpStatus.OK)
	public CUser getUserDetail() {
		return userService.getUserDetail();
	}
}
