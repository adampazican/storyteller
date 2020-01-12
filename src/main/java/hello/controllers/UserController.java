package hello.controllers;

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
	public CUser authenticate(@Valid @RequestBody CUser user) {
		CUser result = userService.authenticateUser(user);
		return result;
	}

	@PostMapping("/register")
	@ResponseStatus(HttpStatus.CREATED)
	public CUser register(@Valid @RequestBody CUser user) {
		return userService.registerUser(user);
	}


	@GetMapping("/user/detail")
	@ResponseStatus(HttpStatus.OK)
	public CUser getUserDetail() {
		return userService.getUserDetail();
	}
}
