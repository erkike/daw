package com.series.carpincho;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {

	@Autowired
	private SeriesRepository series;

	@Autowired
	private UsuariosRepository usuarios;

	@Autowired
	private UserComponent userComponent;

	@PostMapping(value = "/usuario")
	@ResponseStatus(HttpStatus.CREATED)
	public Usuario nuevoUsuario(@RequestBody Usuario usuario) {

		usuarios.save(usuario);

		return usuario;
	}

	@GetMapping(value = "/usuarios")
	public Collection<Usuario> getUsuarios() {
		return usuarios.findAll();
	}

	@GetMapping(value = "/usuario/{id}")
	public ResponseEntity<Usuario> getUsuario(@PathVariable long id) {

		Usuario usuario = usuarios.findById(id);

		if (usuario != null) {
			return new ResponseEntity<Usuario>(usuario, HttpStatus.OK);
		} else {
			return new ResponseEntity<Usuario>(HttpStatus.NOT_FOUND);
		}
	}
}
