package com.series.carpincho;

import java.io.File;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class UsuarioService {

	@Autowired
	private UsuariosRepository repository;

	public Usuario findByUser(String user) {
		return repository.findByUser(user);
	}

	public Usuario findOne(long id) {
		return repository.findOne(id);
	}

	public List<Usuario> findAll() {
		return repository.findAll();
	}

	public void save(Usuario usuario) {
		repository.save(usuario);
	}

	public void delete(Usuario usuario) {
		repository.delete(usuario);
	}

	public String subirImagen(MultipartFile imageMultiPartFile, String user, String files_folder) throws IOException {
		String filename = user + ".png";
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
