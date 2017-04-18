package com.series.carpincho;

import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Component;
import org.springframework.web.context.WebApplicationContext;

@Component
@Scope(value = WebApplicationContext.SCOPE_SESSION, proxyMode = ScopedProxyMode.TARGET_CLASS)
public class UserComponent {

	private Usuario user;

	public Usuario getLoggedUser() {
		return user;
	}

	public void setLoggedUser(Usuario user) {
		this.user = user;
	}

	public boolean isLoggedUser() {
		return this.user != null;
	}

}
