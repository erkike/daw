package com.series.carpincho;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	private String nombre;
	private String apellido;
	private String user;
	private String email;
	private String img;
	@OneToMany(cascade = CascadeType.ALL)
	private List<Usuario> amigos=new ArrayList<>();
	
	@OneToMany(cascade = CascadeType.ALL)
	private List<Serie> seriesFavoritas=new ArrayList<>();
	
	

	public Usuario() {
		this.img= "../img/img-profile.jpg";
	}

	public Usuario(String user) {
		this.user = user;
		this.img= "../img/img-profile.jpg";
	}
	public Usuario(String nombre, String apellido, String user, String email) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.user = user;
		this.email = email;
		this.img= "../img/img-profile.jpg";
	}

	public Usuario(String nombre, String usuario, String email) {
		this.nombre = nombre;
		this.user = usuario;
		this.email = email;
	}
	
	public List<Serie> getSeriesFavoritas() {
		return seriesFavoritas;
	}

	public void setSeriesFavoritas(List<Serie> seriesFavoritas) {
		this.seriesFavoritas = seriesFavoritas;
	}

	public void añadirAmigo(Usuario u) {
		this.amigos.add(u);
	}
	
	public void añadirSerieFavorita(Serie serie) {
		this.seriesFavoritas.add(serie);
	}
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public List<Usuario> getAmigos() {
		return amigos;
	}

	public void setAmigos(List<Usuario> amigos) {
		this.amigos = amigos;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}



	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String usuario) {
		this.user = usuario;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}
