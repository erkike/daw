package com.series.carpincho;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonView;

@RestController
public class UsuarioRestController {

	private static final Path FILES_FOLDER = Paths.get("../angular/src/assets/img/perfil");

	@Autowired
	private SerieService service;
	@Autowired
	private UsuarioService uService;

	@Autowired
	private UserComponent userComponent;

	interface UsuarioDetalle extends Usuario.Basico, Usuario.Concreto, Serie.Basico {
	}

	@PostMapping(value = "/usuarios")
	public ResponseEntity<Usuario> nuevoUsuario(@RequestBody Usuario usuario) {

		List<Usuario> lista = uService.findAll();
		boolean igual = false;

		for (Usuario user : lista) {
			if (!igual) {
				igual = user.getUser().equals(usuario.getUser());
			}
		}

		if (!igual) {
			uService.save(usuario);
			return new ResponseEntity<Usuario>(usuario, HttpStatus.CREATED);
		} else {
			return new ResponseEntity<Usuario>(HttpStatus.CONFLICT);
		}
	}

	@JsonView(Usuario.Basico.class)
	@GetMapping(value = "/usuarios")
	public List<Usuario> getUsuarios() {
		return uService.findAll();
	}

	@JsonView(UsuarioDetalle.class)
	@GetMapping(value = "/usuarios/{id}")
	public ResponseEntity<Usuario> getUsuario(@PathVariable long id) {

		Usuario usuario = uService.findOne(id);

		if (usuario != null) {
			return new ResponseEntity<Usuario>(usuario, HttpStatus.OK);
		} else {
			return new ResponseEntity<Usuario>(HttpStatus.NOT_FOUND);
		}
	}

	@JsonView(UsuarioDetalle.class)
	@DeleteMapping(value = "/usuarios/{id}")
	public ResponseEntity<Usuario> borrarUsuario(@PathVariable long id) {

		Usuario usuario = uService.findOne(id);

		if (usuario != null) {
			uService.delete(usuario);
			return new ResponseEntity<Usuario>(usuario, HttpStatus.OK);
		} else {
			return new ResponseEntity<Usuario>(HttpStatus.NOT_FOUND);
		}
	}

	@JsonView(UsuarioDetalle.class)
	@PutMapping(value = "/usuarios/{id}")
	public ResponseEntity<Usuario> modificarUsuario(@PathVariable long id, @RequestBody Usuario modificado) {

		Usuario usuario = uService.findOne(id);

		if (usuario != null) {
			if (usuario.getId() == userComponent.getLoggedUser().getId()) {
				// List<Usuario> amigos = usuario.getAmigos();
				// List<Serie> favoritas = usuario.getSeriesFavoritas();
				// modificado.setAmigos(amigos);
				// modificado.setSeriesFavoritas(favoritas);
				usuario.setNombre(modificado.getNombre());
				usuario.setEmail(modificado.getEmail());
				usuario.setApellido(modificado.getApellido());
				// usuario.setUser(modificado.getUser());
				uService.save(modificado);
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

		Usuario usuario = uService.findOne(id);
		Usuario amigo = uService.findOne(id2);

		if (usuario != null && amigo != null) {
			if (usuario.getId() == userComponent.getLoggedUser().getId()) {
				if (usuario.getAmigos().contains(amigo)) {
					return new ResponseEntity<Usuario>(HttpStatus.CONFLICT);
				} else {
					usuario.getAmigos().add(amigo);
					uService.save(usuario);
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

		Usuario usuario = uService.findOne(id);
		Usuario amigo = uService.findOne(id2);

		if (usuario != null && amigo != null) {
			if (usuario.getId() == userComponent.getLoggedUser().getId()) {
				usuario.getAmigos().remove(amigo);
				uService.save(usuario);
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

		Usuario usuario = uService.findOne(id);
		Serie serie = service.findOne(id2);

		if (usuario != null && serie != null) {
			if (usuario.getId() == userComponent.getLoggedUser().getId()) {
				if (usuario.getSeriesFavoritas().contains(serie)) {
					return new ResponseEntity<Usuario>(HttpStatus.CONFLICT);
				} else {
					usuario.getSeriesFavoritas().add(serie);
					uService.save(usuario);
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

		Usuario usuario = uService.findOne(id);
		Serie serie = service.findOne(id2);

		if (usuario != null && serie != null) {
			if (usuario.getId() == userComponent.getLoggedUser().getId()) {
				usuario.getSeriesFavoritas().remove(serie);
				uService.save(usuario);
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
	@PutMapping(value = "/usuarios/{id}/imagen")
	public ResponseEntity<Usuario> putUserImage(@PathVariable Integer id, @RequestParam("file") MultipartFile file)
			throws IOException {

		Usuario user = uService.findOne(id);

		if (user != null) {
			if (user.getId() == userComponent.getLoggedUser().getId()) {
				uService.subirImagen(file, user.getUser(), FILES_FOLDER.toString());
				user.setImg(user.getUser());
				uService.save(user);
				userComponent.setLoggedUser(user);
				return new ResponseEntity<Usuario>(user, HttpStatus.OK);
			} else {
				return new ResponseEntity<Usuario>(HttpStatus.FORBIDDEN);
			}
		} else {
			return new ResponseEntity<Usuario>(HttpStatus.NOT_FOUND);
		}
	}
}
