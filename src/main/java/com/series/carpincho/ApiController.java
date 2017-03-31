package com.series.carpincho;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

@RestController
public class ApiController {

	@Autowired
	private SeriesRepository series;

	@Autowired
	private UsuariosRepository usuarios;

	@Autowired
	private UserComponent userComponent;

	interface UsuarioDetalle extends Usuario.Basico, Usuario.Concreto, Serie.Basico {
	}

	@PostMapping(value = "/usuario")
	@ResponseStatus(HttpStatus.CREATED)
	public Usuario nuevoUsuario(@RequestBody Usuario usuario) {

		usuarios.save(usuario);

		return usuario;
	}

	@JsonView(Usuario.Basico.class)
	@GetMapping(value = "/usuarios")
	public List<Usuario> getUsuarios() {
		return usuarios.findAll();
	}

	@JsonView(UsuarioDetalle.class)
	@GetMapping(value = "/usuario/{id}")
	public ResponseEntity<Usuario> getUsuario(@PathVariable long id) {

		Usuario usuario = usuarios.findOne(id);

		if (usuario != null) {
			return new ResponseEntity<Usuario>(usuario, HttpStatus.OK);
		} else {
			return new ResponseEntity<Usuario>(HttpStatus.NOT_FOUND);
		}
	}

	@JsonView(Serie.Basico.class)
	@GetMapping(value = "/series")
	public List<Serie> getSeries() {
		return series.findAll();
	}

	@GetMapping(value = "/serie/{id}")
	public ResponseEntity<Serie> getSerie(@PathVariable long id) {

		Serie serie = series.findOne(id);

		if (serie != null) {
			return new ResponseEntity<Serie>(serie, HttpStatus.OK);
		} else {
			return new ResponseEntity<Serie>(HttpStatus.NOT_FOUND);
		}
	}
}
