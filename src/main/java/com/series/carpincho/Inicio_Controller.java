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

		Serie cien = new Serie("Los 100", descripcion);
		cien.getComentarios().add(caca);
		Serie juegoTronos = new Serie("Juego de Tronos", descripcion);
		series.save(cien);
		series.save(new Serie("Breaking Bad", descripcion));
		series.save(juegoTronos);
		series.save(new Serie("Narcos", descripcion));
		series.save(new Serie("Westworld", descripcion));

		carpinchote.añadirSerieFavorita(cien);
		carpinchote.añadirSerieFavorita(juegoTronos);
		usuarios.save(carpinchote);

	}

	@RequestMapping("/")
	public String indice(Model model, @PageableDefault(value = 8) Pageable page) {

		Page<Serie> paginas = series.findAll(page);

		String ordenar;
		if (page.getSort() != null) {
			ordenar = paginas.getSort().iterator().next().getProperty();
		} else {
			ordenar = "Sin orden";
		}
		model.addAttribute("ordenar", ordenar);
		model.addAttribute("series", paginas);
		model.addAttribute("siguiente", !paginas.isLast());
		model.addAttribute("anterior", !paginas.isFirst());
		model.addAttribute("actual", paginas.getNumber());
		model.addAttribute("next", paginas.getNumber() + 1);
		model.addAttribute("prev", paginas.getNumber() - 1);

		return "index";
	}

	@RequestMapping("/{url}")
	public String serie(Model model, @PathVariable String url) {

		model.addAttribute("serie", series.findByUrl(url));

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
