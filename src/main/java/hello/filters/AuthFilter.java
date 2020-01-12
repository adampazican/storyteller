package hello.filters;

import hello.beans.LoggedUser;
import hello.services.UserService;
import hello.services.TokenService;
import lombok.RequiredArgsConstructor;
import lombok.val;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

@Component
@RequiredArgsConstructor
public class AuthFilter extends OncePerRequestFilter {
	private final TokenService tokenService;
	private final UserService userService;
	private final LoggedUser loggedInUser;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		val whitelist = Arrays.asList(
			"GET:^/api/v1/$",
			"GET:^/api/v1/top-articles$",
			"GET:^/api/v1/article$",
			"POST:^/api/v1/register$",
			"POST:^/api/v1/login$",
			"GET:^/api/v1/article/\\d+/comment$",
			"GET:^/api/v1/article/count$",
			"GET:^/api/v1/user/\\d+/article$"
		);

		val optional = Arrays.asList(
			"POST:^/api/v1/article/\\d+$"
		);

		if (checkPath(whitelist, request) || !request.getServletPath().contains("api")) {
			filterChain.doFilter(request, response);
			return;
		}

		val authHeader = request.getHeader("x-access-token");
		if(authHeader == null && checkPath(optional, request)){
			filterChain.doFilter(request, response);
			return;
		}

		if(authHeader == null || authHeader.isEmpty()) {
			response.sendError(400, "No token provided");
			return;
		}

		val username = tokenService.verifyToken(authHeader);
		val user = userService.getUser(username);

		if (user == null) {
			response.sendError(400, "Unauthorized");
			return;
		}

		loggedInUser.setUser(user);
		filterChain.doFilter(request, response);
	}

	private boolean checkPath(List<String> paths, HttpServletRequest request) {
		return paths.parallelStream().map(path -> path.split(":"))
			 .anyMatch(pathInfo -> request.getMethod().equalsIgnoreCase(pathInfo[0]) && request.getServletPath().matches(pathInfo[1]));
	}
}
