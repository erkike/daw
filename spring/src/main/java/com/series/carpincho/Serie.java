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

import com.fasterxml.jackson.annotation.JsonView;

@Entity
public class Serie implements Comparator {

	interface Basico {
	}

	interface Concreto {
	}

	@JsonView(Basico.class)
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@JsonView(Basico.class)
	private String nombre;
	@JsonView(Basico.class)
	private String url;
	@JsonView(Basico.class)
	private String trailer;
	@JsonView(Basico.class)
	private int valoracion;
	@JsonView(Basico.class)
	private int año;
	private String img = "default";

	@JsonView(Basico.class)
	@Lob
	@Type(type = "org.hibernate.type.TextType")
	private String descripcion;

	@JsonView(Concreto.class)
	@OneToMany(cascade = CascadeType.ALL)
	private List<Temporada> temporadas = new ArrayList<>();

	@JsonView(Concreto.class)
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
		this.img = url;
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

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public void setValoracion(int valoracion) {
		this.valoracion = valoracion;
	}

	@Override
	public int compare(Object s1, Object s2) {
		return ((Serie) s1).getNombre().compareTo(((Serie) s2).getNombre());
	}

}