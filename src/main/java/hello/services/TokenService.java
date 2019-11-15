package hello.services;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.val;
import org.apache.commons.lang3.time.DateUtils;
import org.springframework.stereotype.Service;

import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;
import java.sql.Date;
import java.time.Instant;

@Service
public class TokenService {
	private static final String SECRET_KEY = "Yn2kjibddFAWtnPJ2AFlL8WXmohJMCvigQggaEypa5E=";

	public String createJTW(final String id, final String issuer, final String subject) {
		val alg = SignatureAlgorithm.HS256;

		val apiKeySecretBytes = DatatypeConverter.parseBase64Binary(SECRET_KEY);
		val signingKey = new SecretKeySpec(apiKeySecretBytes, alg.getJcaName());

		val builder = Jwts.builder()
								 .setId(id)
								 .setIssuedAt(Date.from(Instant.now()))
								 .setIssuer(issuer)
								 .setExpiration(DateUtils.addDays(Date.from(Instant.now()), 1))
								 .setSubject(subject)
								 .signWith(signingKey, alg);
		return builder.compact();
	}

	public String verifyToken(final String jwt) {
		try {
			val claim = Jwts.parser()
						.setSigningKey(DatatypeConverter.parseBase64Binary(SECRET_KEY))
						.parseClaimsJws(jwt)
						.getBody();
			return claim.getSubject();
		} catch (Exception e) {
			return null;
		}
	}
}
