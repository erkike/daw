package com.series.carpincho;

import java.util.ArrayList;
import java.util.Comparator;
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
public class Serie implements Comparator {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	private String nombre;
	private String url;
	private String trailer;
	private int valoracion;
	private int año;

	@Lob
	@Type(type = "org.hibernate.type.TextType")
	private String descripcion;

	@OneToMany(cascade = CascadeType.ALL)
	private List<Temporada> temporadas = new ArrayList<>();

	@OneToMany(cascade = CascadeType.ALL)
	private List<Comentario> comentarios = new ArrayList<>();

	public Serie() {

	}

	public Serie(String nombre, String descripcion, int valoracion, int año, String trailer) {
		this.nombre = nombre;
		this.url = nombre.replace(" ", "-");
		this.descripcion = descripcion;
		this.valoracion = valoracion;
		this.año = año;
		this.trailer = trailer;
	}

	public void Valorar(int valoracion) {
		this.valoracion = (valoracion + this.valoracion) / 2;
	}

	public int getValoracion() {
		return this.valoracion;
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

	public int getAño() {
		return año;
	}

	public void setAño(int año) {
		this.año = año;
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

	@Override
	public int compare(Object s1, Object s2) {
		return ((Serie) s1).getNombre().compareTo(((Serie) s2).getNombre());
	}

}