package com.series.carpincho;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

@RestController
public class UsuarioRestController {

	@Autowired
	private SeriesRepository series;

	@Autowired
	private UsuariosRepository usuarios;

	@Autowired
	private UserComponent userComponent;

	interface UsuarioDetalle extends Usuario.Basico, Usuario.Concreto, Serie.Basico {
	}

	@PostMapping(value = "/usuarios")
	public ResponseEntity<Usuario> nuevoUsuario(@RequestBody Usuario usuario) {

		List<Usuario> lista = usuarios.findAll();
		boolean igual = false;

		for (Usuario user : lista) {
			if (!igual) {
				igual = user.getUser().equals(usuario.getUser());
			}
		}

		if (!igual) {
			usuarios.save(usuario);
			return new ResponseEntity<Usuario>(usuario, HttpStatus.CREATED);
		} else {
			return new ResponseEntity<Usuario>(HttpStatus.CONFLICT);
		}
	}

	@JsonView(Usuario.Basico.class)
	@GetMapping(value = "/usuarios")
	public List<Usuario> getUsuarios() {
		return usuarios.findAll();
	}

	@JsonView(UsuarioDetalle.class)
	@GetMapping(value = "/usuarios/{id}")
	public ResponseEntity<Usuario> getUsuario(@PathVariable long id) {

		Usuario usuario = usuarios.findOne(id);

		if (usuario != null) {
			return new ResponseEntity<Usuario>(usuario, HttpStatus.OK);
		} else {
			return new ResponseEntity<Usuario>(HttpStatus.NOT_FOUND);
		}
	}

	@JsonView(UsuarioDetalle.class)
	@DeleteMapping(value = "/usuarios/{id}")
	public ResponseEntity<Usuario> borrarUsuario(@PathVariable long id) {

		Usuario usuario = usuarios.findOne(id);

		if (usuario != null) {
			usuarios.delete(usuario);
			return new ResponseEntity<Usuario>(usuario, HttpStatus.OK);
		} else {
			return new ResponseEntity<Usuario>(HttpStatus.NOT_FOUND);
		}
	}

	@JsonView(UsuarioDetalle.class)
	@PutMapping(value = "/usuarios/{id}")
	public ResponseEntity<Usuario> modificarUsuario(@PathVariable long id, @RequestBody Usuario modificado) {

		Usuario usuario = usuarios.findOne(id);

		if (usuario != null) {
			if (usuario.getId() == userComponent.getLoggedUser().getId()) {
				List<Usuario> amigos = usuario.getAmigos();
				List<Serie> favoritas = usuario.getSeriesFavoritas();
				modificado.setAmigos(amigos);
				modificado.setSeriesFavoritas(favoritas);
				usuarios.save(modificado);
				userComponent.setLoggedUser(usuario);
				return new ResponseEntity<Usuario>(usuario, HttpStatus.OK);
			} else {
				return new ResponseEntity<Usuario>(HttpStatus.FORBIDDEN);
			}
		} else {
			return new ResponseEntity<Usuario>(HttpStatus.NOT_FOUND);
		}
	}

	@JsonView(UsuarioDetalle.class)
	@PutMapping(value = "/usuarios/{id}/amigo/{id2}")
	public ResponseEntity<Usuario> amigoUsuario(@PathVariable long id, @PathVariable long id2) {

		Usuario usuario = usuarios.findOne(id);
		Usuario amigo = usuarios.findOne(id2);

		if (usuario != null && amigo != null) {
			if (usuario.getId() == userComponent.getLoggedUser().getId()) {
				if (usuario.getAmigos().contains(amigo)) {
					return new ResponseEntity<Usuario>(HttpStatus.CONFLICT);
				} else {
					usuario.getAmigos().add(amigo);
					usuarios.save(usuario);
					userComponent.setLoggedUser(usuario);
					return new ResponseEntity<Usuario>(usuario, HttpStatus.OK);
				}
			} else {
				return new ResponseEntity<Usuario>(HttpStatus.FORBIDDEN);
			}
		} else {
			return new ResponseEntity<Usuario>(HttpStatus.NOT_FOUND);
		}
	}

	@JsonView(UsuarioDetalle.class)
	@DeleteMapping(value = "/usuarios/{id}/amigo/{id2}")
	public ResponseEntity<Usuario> borrarAmigoUsuario(@PathVariable long id, @PathVariable long id2) {

		Usuario usuario = usuarios.findOne(id);
		Usuario amigo = usuarios.findOne(id2);

		if (usuario != null && amigo != null) {
			if (usuario.getId() == userComponent.getLoggedUser().getId()) {
				usuario.getAmigos().remove(amigo);
				usuarios.save(usuario);
				userComponent.setLoggedUser(usuario);
				return new ResponseEntity<Usuario>(usuario, HttpStatus.OK);
			} else {
				return new ResponseEntity<Usuario>(HttpStatus.FORBIDDEN);
			}
		} else {
			return new ResponseEntity<Usuario>(HttpStatus.NOT_FOUND);
		}
	}

	@JsonView(UsuarioDetalle.class)
	@PutMapping(value = "/usuarios/{id}/favorita/{id2}")
	public ResponseEntity<Usuario> favoritaUsuario(@PathVariable long id, @PathVariable long id2) {

		Usuario usuario = usuarios.findOne(id);
		Serie serie = series.findOne(id2);

		if (usuario != null && serie != null) {
			if (usuario.getId() == userComponent.getLoggedUser().getId()) {
				if (usuario.getSeriesFavoritas().contains(serie)) {
					return new ResponseEntity<Usuario>(HttpStatus.CONFLICT);
				} else {
					usuario.getSeriesFavoritas().add(serie);
					usuarios.save(usuario);
					userComponent.setLoggedUser(usuario);
					return new ResponseEntity<Usuario>(usuario, HttpStatus.OK);
				}
			} else {
				return new ResponseEntity<Usuario>(HttpStatus.FORBIDDEN);
			}
		} else {
			return new ResponseEntity<Usuario>(HttpStatus.NOT_FOUND);
		}
	}

	@JsonView(UsuarioDetalle.class)
	@DeleteMapping(value = "/usuarios/{id}/favorita/{id2}")
	public ResponseEntity<Usuario> borrarFavoritaUsuario(@PathVariable long id, @PathVariable long id2) {

		Usuario usuario = usuarios.findOne(id);
		Serie serie = series.findOne(id2);

		if (usuario != null && serie != null) {
			if (usuario.getId() == userComponent.getLoggedUser().getId()) {
				usuario.getSeriesFavoritas().remove(serie);
				usuarios.save(usuario);
				userComponent.setLoggedUser(usuario);
				return new ResponseEntity<Usuario>(usuario, HttpStatus.OK);
			} else {
				return new ResponseEntity<Usuario>(HttpStatus.FORBIDDEN);
			}
		} else {
			return new ResponseEntity<Usuario>(HttpStatus.NOT_FOUND);
		}
	}
}
