package hello.repositories;

import hello.beans.User;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
	@Query("INSERT INTO \"user\"(username, password)" +
			"VALUES(:username, :password)")
	@Modifying
	void createUser(String username, String password);

	@Query("SELECT id, username, password" +
			" from \"user\"" +
			" where username = :username")
	User getUser(String username);

	@Query("SELECT id, username, password" +
			" from \"user\"" +
			" where id = :userId")
	User getUser(int userId);
}
