package com.series.carpincho;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;
import com.series.carpincho.UsuarioRestController.UsuarioDetalle;

@RestController
public class LoginController {

	private static final Logger log = LoggerFactory.getLogger(LoginController.class);

	@Autowired
	private UserComponent userComponent;

	@Autowired
	private UsuariosRepository usuarios;

	@JsonView(UsuarioDetalle.class)
	@RequestMapping("/logIn")
	public ResponseEntity<Usuario> logIn() {

		if (!userComponent.isLoggedUser()) {
			log.info("Not user logged");
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		} else {
			Usuario loggedUser = usuarios.findOne(userComponent.getLoggedUser().getId());
			log.info("Logged as " + loggedUser.getUser());
			return new ResponseEntity<Usuario>(loggedUser, HttpStatus.OK);
		}
	}

	@RequestMapping("/logout")
	public ResponseEntity<Boolean> logOut(HttpSession session) {

		if (!userComponent.isLoggedUser()) {
			log.info("No user logged");
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		} else {
			session.invalidate();
			log.info("Logged out");
			return (new ResponseEntity<>(true, HttpStatus.OK));

		}
	}

}