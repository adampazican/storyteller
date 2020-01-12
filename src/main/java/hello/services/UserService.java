package hello.services;

import hello.beans.LoggedUser;
import hello.beans.User;
import hello.clientbeans.CUser;
import hello.exceptions.BadRequestException;
import hello.exceptions.ForbiddenException;
import hello.mappers.UserMapper;
import hello.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.val;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.io.FileUtils;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.Base64;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserService {
	private static final String SALT = "6e017b5464f820a6c1bb5e9f6d711a667a80d8ea";
	private final TokenService tokenService;
	private final UserRepository userRepository;
	private final LoggedUser loggedUser;
	private final UserMapper userMapper;

	public CUser authenticateUser(final CUser user) {
		val username = user.getUsername();
		val password = user.getPassword();

		if(username == null || password == null) {
			throw new BadRequestException("Wrong data");
		}

		val hashSecret = DigestUtils.sha256Hex(password + SALT);

		User targetUser = userRepository.getUser(username);

		if (targetUser == null) {
			throw new BadRequestException("User doesn't exist");
		}

		if(!hashSecret.equals(targetUser.getPassword())) {
			throw new ForbiddenException("Wrong password");
		}

		CUser targetCUser = userMapper.mapToC(targetUser);
		targetCUser.setToken(tokenService.createJTW("token", "java", username));
		return targetCUser;
	}

	public String registerUser(final CUser user) {
		if(userExists(user.getUsername())) {
			throw new BadRequestException("User already exists");
		}

		val passwd = user.getPassword() + SALT;
		userRepository.createUser(user.getUsername(), DigestUtils.sha256Hex(passwd));

		return user.getUsername() + " created successfully!";
	}

	public User getUser(final String username) {
		return userRepository.getUser(username);
	}

	User getUser(final int userId) {
		return userRepository.getUser(userId);
	}

	private boolean userExists(final String username) {
		return getUser(username) != null;
	}

	public CUser getUserDetail() {
		User user = userRepository.getUser(loggedUser.getUser().getId());
		return userMapper.mapToC(user);
	}
}
