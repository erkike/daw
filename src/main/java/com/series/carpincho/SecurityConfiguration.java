package com.series.carpincho;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

	@Override
	protected void configure(HttpSecurity http) throws Exception {

		// Public pages
		http.authorizeRequests().antMatchers("/").permitAll();
		http.authorizeRequests().antMatchers("/{url}").permitAll();
		http.authorizeRequests().antMatchers("/login").permitAll();
		http.authorizeRequests().antMatchers("/logout").permitAll();

		// Private pages
		http.authorizeRequests().antMatchers("/{url}/comentarios").authenticated();
		http.authorizeRequests().antMatchers("/{url}/valoracion").authenticated();
		http.authorizeRequests().antMatchers("/perfil/{id}").authenticated();
		http.authorizeRequests().antMatchers("/perfil/{id}/editar").authenticated();

		// Login form
		http.formLogin().loginPage("/login");
		http.formLogin().usernameParameter("user");
		http.formLogin().passwordParameter("password");
		http.formLogin().defaultSuccessUrl("/");
		http.formLogin().failureUrl("/login");

		// Logout
		http.logout().logoutUrl("/logout");
		http.logout().logoutSuccessUrl("/");

	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {

		// User
		auth.inMemoryAuthentication().withUser("Carpinchote").password("pass").roles("USER");
	}
}