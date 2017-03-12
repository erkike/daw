package com.series.carpincho;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class UserRepositoryAuthenticationProvider implements AuthenticationProvider {

	@Autowired
	private UsuariosRepository userRepository;

	@Override
	public Authentication authenticate(Authentication auth) throws AuthenticationException {
		
		Usuario user = userRepository.findByUser(auth.getName());

		if (user == null) {
			throw new BadCredentialsException("Usuario no encontrado");
		}
		
		String password = (String) auth.getCredentials();
		if (!new BCryptPasswordEncoder().matches(password, user.getPasswordHash())) {
			throw new BadCredentialsException("Contraseña incorrecta");
		}

		return new UsernamePasswordAuthenticationToken(user.getUser(), password);
	}

	@Override
	public boolean supports(Class<?> authenticationObject) {
		return true;
	}
}