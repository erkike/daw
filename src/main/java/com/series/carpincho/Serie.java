package com.series.carpincho;

import java.util.ArrayList;
import java.util.List;

public class Serie {

	private String nombre;
	private String descripcion;
	private String trailer = "https://www.youtube.com/embed/ia1Fbg96vL0";
	private List<Temporada> temporadas = new ArrayList();
	private List<Comentario> comentarios = new ArrayList();

	public Serie() {

	}

	public Serie(String nombre, String descripcion) {
		this.nombre = nombre;
		this.descripcion = descripcion;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getTrailer() {
		return trailer;
	}

	public void setTrailer(String trailer) {
		this.trailer = trailer;
	}

	public List<Temporada> getTemporadas() {
		return temporadas;
	}

	public void setTemporadas(List<Temporada> temporadas) {
		this.temporadas = temporadas;
	}

	public List<Comentario> getComentarios() {
		return comentarios;
	}

	public void setComentarios(List<Comentario> comentarios) {
		this.comentarios = comentarios;
	}

	public void añadirComentario(Comentario comentario) {
		this.comentarios.add(comentario);
	}

	public void añadirTemporada(Temporada temporada) {
		this.temporadas.add(temporada);
	}

}
