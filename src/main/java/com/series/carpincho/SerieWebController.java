package com.series.carpincho;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SerieWebController {
	@Autowired
	private SeriesRepository series;

	@Autowired
	private UsuariosRepository usuarios;

	@Autowired
	private UserComponent userComponent;

	@RequestMapping("/")
	public String indice(Model model, @PageableDefault(value = 8) Pageable page) {

		Page<Serie> paginas = series.findAll(page);

		model.addAttribute("series", paginas);
		model.addAttribute("siguiente", !paginas.isLast());
		model.addAttribute("numero", paginas.getNumberOfElements());
		model.addAttribute("next", paginas.getNumberOfElements() + 8);

		return "index";
	}

	@RequestMapping("/{url}")
	public String serie(Model model, @PathVariable String url) {

		model.addAttribute("serie", series.findByUrl(url));

		String[] valoracion = { "desmarcado", "desmarcado", "desmarcado", "desmarcado", "desmarcado" };
		for (int i = 0; i < series.findByUrl(url).getValoracion(); i++) {
			valoracion[i] = "marcado";
		}
		model.addAttribute("valoraciones", valoracion);

		String favorito = "nofavorito";
		if (userComponent.getLoggedUser() != null) {
			if (usuarios.findByUser(userComponent.getLoggedUser().getUser()).getSeriesFavoritas()
					.contains(series.findByUrl(url))) {
				favorito = "favorito";
			}
		}
		model.addAttribute("favorito", favorito);

		return "serie";
	}

	@RequestMapping("/{url}/comentarios")
	public String comentarios(Model model, Comentario comentario, @PathVariable String url) {

		if (!comentario.esVacio()) {
			Serie serie = series.findByUrl(url);
			comentario.setUsuario(userComponent.getLoggedUser());
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

		return "redirect:/{url}#informacion";

	}

	@RequestMapping("/{url}/favorito")
	public String favorito(Model model, @PathVariable String url) {

		if (userComponent.getLoggedUser() != null) {
			Usuario usuario = usuarios.findByUser(userComponent.getLoggedUser().getUser());
			Serie serie = series.findByUrl(url);
			if (usuario.getSeriesFavoritas().contains(serie)) {
				usuario.getSeriesFavoritas().remove(serie);
			} else {
				usuario.getSeriesFavoritas().add(serie);
			}

			usuarios.save(usuario);
			userComponent.setLoggedUser(usuario);
		}

		return "redirect:/{url}#informacion";

	}
}
