package com.series.carpincho;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Inicio_Controller {

	/*
	 * private List<Comentario> comentarios = new ArrayList<>(); private
	 * AtomicLong comentarioId = new AtomicLong(); private List<Usuario>
	 * usuarios = new ArrayList<>(); private List<Serie> series = new
	 * ArrayList<>();
	 */

	@Autowired
	private SeriesRepository series;

	@Autowired
	private UsuariosRepository usuarios;

	@PostConstruct
	public void init() {
		String descripcion = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis euismod pretium. Sed aliquet risus sed ante laoreet luctus. In dapibus massa eu mauris euismod gravida. Donec tempus, orci eu tempor viverra, ex metus vulputate leo, et sodales odio nisi nec massa. Proin quis neque nec sem finibus elementum. Praesent ultrices ante sit amet suscipit blandit. Praesent vulputate nibh est, vitae fringilla odio mattis eget. Aenean congue orci et leo placerat, nec semper ipsum convallis. Cras vestibulum volutpat lectus sed efficitur.";
		Usuario carpinchote = new Usuario("Carpinchote");
		Usuario carpinchi = new Usuario("Carpinchi");
		Usuario carpancha = new Usuario("Carpancha");
		carpinchote.añadirAmigo(carpinchi);
		carpinchote.añadirAmigo(carpancha);

		usuarios.save(carpinchote);

		Comentario caca = new Comentario("Vaya caca", carpinchote);

		Serie cien = new Serie("Los 100", descripcion, 5, 2014);
		cien.getComentarios().add(caca);
		Serie juegoTronos = new Serie("Juego de Tronos", descripcion, 4, 2011);
		series.save(cien);
		series.save(new Serie("Breaking Bad", descripcion, 4, 2008));
		series.save(juegoTronos);
		series.save(new Serie("Narcos", descripcion, 3, 2015));
		series.save(new Serie("Westworld", descripcion, 2, 2016));

		carpinchote.añadirSerieFavorita(cien);
		carpinchote.añadirSerieFavorita(juegoTronos);
		usuarios.save(carpinchote);

	}

	@RequestMapping("/")
	public String indice(Model model, @PageableDefault(value = 2) Pageable page) {

		Page<Serie> paginas = series.findAll(page);

		model.addAttribute("series", paginas);
		model.addAttribute("siguiente", !paginas.isLast());
		model.addAttribute("numero", paginas.getNumberOfElements());
		model.addAttribute("next", paginas.getNumberOfElements() + 2);

		return "index";
	}

	@RequestMapping("/{url}")
	public String serie(Model model, @PathVariable String url) {

		model.addAttribute("serie", series.findByUrl(url));
		Integer[] indices = { 1, 2, 3, 4, 5 };
		String[] valoracion = { "desmarcado", "desmarcado", "desmarcado", "desmarcado", "desmarcado" };
		for (int i = 0; i < series.findByUrl(url).getValoracion(); i++) {
			valoracion[i] = "marcado";
		}
		model.addAttribute("valoraciones", valoracion);
		model.addAttribute("indices", indices);
		return "serie";
	}

	@RequestMapping("/{url}/comentarios")
	public String comentarios(Model model, Comentario comentario, @PathVariable String url) {

		if (!comentario.esVacio()) {
			Serie serie = series.findByUrl(url);
			comentario.setUsuario(usuarios.findOne((long) 1));
			serie.getComentarios().add(comentario);
			series.save(serie);
		}

		return "redirect:/{url}#comentarios";

	}

	@RequestMapping("/{url}/valoracion")
	public String valoracion(Model model, int n, @PathVariable String url) {

		Serie serie = series.findByUrl(url);
		serie.Valorar(n);
		series.save(serie);
		String[] valoracion = { "desmarcado", "desmarcado", "desmarcado", "desmarcado", "desmarcado" };
		for (int i = 0; i < series.findByUrl(url).getValoracion(); i++) {
			valoracion[i] = "marcado";
		}
		model.addAttribute("valoraciones", valoracion);

		return "redirect:/{url}#valoracion";

	}

	@RequestMapping("/{id}/capitulo1")
	public String capitulo(Model model, @PathVariable long id) {
		return "capitulo";
	}

	@RequestMapping("/login")
	public String login(Model model) {

		return "login";
	}

	@RequestMapping("/perfil/{id}")
	public String usuario(Model model, @PathVariable long id) {
		model.addAttribute("usuario", usuarios.findOne(id));
		return "perfil";
	}

	@RequestMapping("/perfil/{id}/editar")
	public String editar(Model model, Usuario u, @PathVariable long id) {

		model.addAttribute("usuario", usuarios.findOne(id));
		return "editar-perfil";
	}

}
