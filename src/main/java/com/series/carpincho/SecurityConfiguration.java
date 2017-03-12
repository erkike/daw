package com.series.carpincho;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableGlobalMethodSecurity(securedEnabled = true)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

	@Autowired
	public UsuarioRepositoryAuthenticationProvider authenticationProvider;

	@Override
	protected void configure(HttpSecurity http) throws Exception {

		// Public pages
		http.authorizeRequests().antMatchers("/").permitAll();
		http.authorizeRequests().antMatchers("/{url}").permitAll();
		http.authorizeRequests().antMatchers("/login").permitAll();
		http.authorizeRequests().antMatchers("/registro").permitAll();
		http.authorizeRequests().antMatchers("/logout").permitAll();

		// Private pages
		http.authorizeRequests().antMatchers("/{url}/comentarios").authenticated();
		http.authorizeRequests().antMatchers("/{url}/valoracion").authenticated();
		http.authorizeRequests().antMatchers("/perfil").authenticated();
		http.authorizeRequests().antMatchers("/perfil/editar").authenticated();
		http.authorizeRequests().antMatchers("/perfil/editar/guardar").authenticated();

		// Login form
		http.formLogin().loginPage("/login");
		http.formLogin().usernameParameter("user");
		http.formLogin().passwordParameter("passwordHash");
		http.formLogin().defaultSuccessUrl("/");
		http.formLogin().failureUrl("/login");

		// Logout
		http.logout().logoutUrl("/logout");
		http.logout().logoutSuccessUrl("/");

	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		// Database authentication provider
		auth.authenticationProvider(authenticationProvider);
	}
}