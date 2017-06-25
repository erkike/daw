package com.series.carpincho;

import java.io.File;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class SerieService {
	@Autowired
	protected UserComponent userComponent;

	@Autowired
	private SeriesRepository repository;

	public Serie findByUrl(String url) {
		return repository.findByUrl(url);
	}

	public Serie findByNombre(String nombre) {
		return repository.findByNombre(nombre);
	}

	public Serie findOne(long id) {
		return repository.findOne(id);
	}

	public List<Serie> findAll() {
		return repository.findAll();
	}

	public Page<Serie> findAll(Pageable page) {
		return repository.findAll(page);
	}

	public void save(Serie serie) {
		repository.save(serie);
	}

	public void delete(Serie serie) {
		repository.delete(serie);
	}

	public Serie addComentario(Serie serie, Comentario comentario) {
		comentario.setUsuario(userComponent.getLoggedUser());
		serie.getComentarios().add(comentario);
		return repository.save(serie);
	}

	public String subirImagen(MultipartFile imageMultiPartFile, String user, String files_folder) throws IOException {
		String filename = user + ".jpg";
		if (!imageMultiPartFile.isEmpty()) {
			try {
				File filesFolder = new File(files_folder);
				if (!filesFolder.exists()) {
					filesFolder.mkdirs();
				}
				File uploadedFile = new File(filesFolder.getAbsolutePath(), filename);
				imageMultiPartFile.transferTo(uploadedFile);
				return filename;
			} catch (Exception e) {
				return ("ERROR" + e);
			}

		}
		return "ERROR";
	}
}
