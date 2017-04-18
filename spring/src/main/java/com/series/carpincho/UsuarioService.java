package com.series.carpincho;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


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
}

