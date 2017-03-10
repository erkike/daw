package com.series.carpincho;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;

import org.hibernate.annotations.Type;

@Entity
public class Serie {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	private String nombre;
	private String url;
	private String trailer = "https://www.youtube.com/embed/ia1Fbg96vL0";

	@Lob
	@Type(type = "org.hibernate.type.TextType")
	private String descripcion;

	@OneToMany(cascade = CascadeType.ALL)
	private List<Temporada> temporadas = new ArrayList<>();

	@OneToMany(cascade = CascadeType.ALL)
	private List<Comentario> comentarios = new ArrayList<>();

	public Serie() {

	}

	public Serie(String nombre, String descripcion) {
		this.nombre = nombre;
		this.url = nombre.replace(" ", "-");
		this.descripcion = descripcion;
	}

	public long getId() {
		return this.id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
		this.url = nombre.replace(" ", "-");
	}

	public String getUrl() {
		return url;
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

}
