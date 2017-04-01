package com.series.carpincho;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class UsuarioWebController {
	private static final Path FILES_FOLDER = Paths.get("target/classes/static/img/perfil");
	private List<String> images = new ArrayList<>();

	@Autowired
	private SeriesRepository series;

	@Autowired
	private UsuariosRepository usuarios;

	@Autowired
	private UserComponent userComponent;

	@RequestMapping("/registro")
	public String registro(Model model, Usuario usuario) {

		usuarios.save(usuario);

		return "redirect:/";
	}

	@RequestMapping("/admin")
	public String admin(Model model) {

		List<Serie> lista = series.findAll();
		Collections.sort(lista, new Serie());

		model.addAttribute("series", lista);

		return "admin";
	}

	@RequestMapping("/admin/publicar")
	public String publicar(Serie serie) {

		series.save(serie);

		return "redirect:/admin";
	}

	@RequestMapping("/admin/editar")
	public String editar(String serie, int temporada, Capitulo capitulo) {

		Serie ser = series.findByNombre(serie);
		List<Temporada> lista = ser.getTemporadas();
		int i = 0;
		for (Temporada tem : lista) {
			if (tem.getNum() == temporada) {
				tem.getCapitulos().add(capitulo);
			}
			i++;
		}
		if (temporada > i) {
			List<Capitulo> capitulos = new ArrayList<>();
			capitulos.add(capitulo);
			lista.add(new Temporada(capitulos, temporada));

		}
		ser.setTemporadas(lista);
		series.save(ser);

		return "redirect:/admin";
	}

	@RequestMapping("/login")
	public String login(Model model) {

		return "login";
	}

	@RequestMapping("/perfil")
	public String usuario(Model model, HttpServletRequest request) {

		if (userComponent.getLoggedUser() == null) {
			return "login";
		} else {
			model.addAttribute("usuario", usuarios.findByUser(userComponent.getLoggedUser().getUser()));
			model.addAttribute("admin", request.isUserInRole("ADMIN"));

			return "perfil";
		}
	}

	@RequestMapping("/perfil/editar")
	public String editar(Model model, Usuario u) {

		model.addAttribute("usuario", usuarios.findByUser(userComponent.getLoggedUser().getUser()));

		return "editar-perfil";
	}

	@RequestMapping("/perfil/editar/guardar")
	public String guardar(Model model, Usuario usuario) {

		if (userComponent.getLoggedUser().getId() == usuario.getId()) {
			usuario.setAmigos(userComponent.getLoggedUser().getAmigos());
			usuario.setSeriesFavoritas(userComponent.getLoggedUser().getSeriesFavoritas());
			usuarios.save(usuario);
			userComponent.setLoggedUser(usuario);
		}

		return "redirect:/perfil";
	}

	@RequestMapping("/perfil/buscar")
	public String buscar(Model model, String user) {

		if (userComponent.getLoggedUser() != null) {
			Usuario usuario = usuarios.findByUser(userComponent.getLoggedUser().getUser());
			Usuario amigo = usuarios.findByUser(user);
			if (usuario.getAmigos().contains(amigo)) {
				usuario.getAmigos().remove(amigo);
			} else {
				usuario.getAmigos().add(amigo);
			}

			usuarios.save(usuario);
			userComponent.setLoggedUser(usuario);
		}

		return "redirect:/perfil#amigos";
	}

	@RequestMapping(value = "/perfil/editar", method = RequestMethod.POST)
	public ModelAndView handleFileUpload(@RequestParam("imageTitle") String imageTitle,
			@RequestParam("file") MultipartFile file) {

		if (userComponent.getLoggedUser() != null) {
			Usuario usuario = usuarios.findByUser(userComponent.getLoggedUser().getUser());
			String fileName = usuario.getUser() + ".png";

			if (!file.isEmpty()) {

				try {

					if (!Files.exists(FILES_FOLDER)) {
						Files.createDirectories(FILES_FOLDER);
					}

					File uploadedFile = new File(FILES_FOLDER.toAbsolutePath().toString(), fileName);
					file.transferTo(uploadedFile);

					images.add(imageTitle);

					return new ModelAndView("editar-perfil").addObject("imageTitle", images);

				} catch (Exception e) {
					e.printStackTrace();
					return new ModelAndView("editar-perfil").addObject("fileName", fileName).addObject("error",
							e.getClass().getName() + ":" + e.getMessage());
				}
			} else {
				return new ModelAndView("editar-perfil").addObject("error", "The file is empty");
			}
		}
		return new ModelAndView("editar-perfil").addObject("imageTitle", images);

	}

	@RequestMapping("/perfil/editar/{fileName:.+}")
	public void handleFileDownload(@PathVariable String fileName, HttpServletResponse res)
			throws FileNotFoundException, IOException {

		Path image = FILES_FOLDER.resolve(fileName);

		if (Files.exists(image)) {
			res.setContentType("image/png");
			res.setContentLength((int) image.toFile().length());
			FileCopyUtils.copy(Files.newInputStream(image), res.getOutputStream());

		} else {
			res.sendError(404, "File" + fileName + "(" + image.toAbsolutePath() + ") does not exist");
		}
	}

}
