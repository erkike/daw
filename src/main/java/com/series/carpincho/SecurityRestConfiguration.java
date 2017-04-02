package com.series.carpincho;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@Order(1)
public class SecurityRestConfiguration extends WebSecurityConfigurerAdapter {

	@Autowired
	public UsuarioRepositoryAuthenticationProvider userRepoAuthProvider;

	@Override
	protected void configure(HttpSecurity http) throws Exception {

		/*
		 * http.antMatcher("/usuarios"); http.antMatcher("/usuarios/nuevo");
		 * http.antMatcher("/series");
		 */

		// URLs that need authentication to access to it
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/usuarios/{id}/amigo/{id2}").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/usuarios/{id}/favorita/{id2}").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/usuarios/{id}").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/series/{id}/comentario").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/series/{id}/valoracion/{val}").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/usuarios/{id}").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/series/nueva").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/series/{id}").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/series/{id}").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/series/{id}/temporada/{num}/capitulo").hasRole("ADMIN");

		// Other URLs can be accessed without authentication
		http.authorizeRequests().anyRequest().permitAll();

		// Disable CSRF protection (it is difficult to implement with ng2)
		http.csrf().disable();

		// Use Http Basic Authentication
		http.httpBasic();

		// Do not redirect when logout
		http.logout().logoutSuccessHandler((rq, rs, a) -> {
		});
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {

		// Database authentication provider
		auth.authenticationProvider(userRepoAuthProvider);
	}
}
