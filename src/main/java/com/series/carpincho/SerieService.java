package com.series.carpincho;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;




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
	public Page<Serie> findAll(Pageable page){
		return repository.findAll(page);
	}

	public void save(Serie serie) {
		repository.save(serie);
	}

	public void delete(Serie serie) {
		repository.delete(serie);
	}
	public Serie addComentario(Serie serie,Comentario comentario){
		comentario.setUsuario(userComponent.getLoggedUser());
		serie.getComentarios().add(comentario);
		return repository.save(serie);
	}
}
