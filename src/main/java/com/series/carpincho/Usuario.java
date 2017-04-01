package com.series.carpincho;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
public class Usuario {

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
	private String apellido;
	@JsonView(Basico.class)
	private String user;
	@JsonView(Basico.class)
	private String email;
	@JsonView(Basico.class)
	private String passwordHash;
	private String img = "default";

	@JsonView(Basico.class)
	@ElementCollection(fetch = FetchType.EAGER)
	private List<String> roles;

	@JsonView(Concreto.class)
	@ManyToMany
	private List<Usuario> amigos = new ArrayList<>();

	@JsonView(Concreto.class)
	@ManyToMany
	private List<Serie> seriesFavoritas = new ArrayList<>();

	public Usuario() {

	}

	public Usuario(String user) {
		this.user = user;
		this.img = user;
		this.roles = new ArrayList<>(Arrays.asList("ROLE_USER"));
	}

	public Usuario(String nombre, String user, String email, String password, String... roles) {
		this.nombre = nombre;
		this.passwordHash = new BCryptPasswordEncoder().encode(password);
		this.user = user;
		this.email = email;
		this.img = user;
		this.roles = new ArrayList<>(Arrays.asList(roles));
	}

	public List<String> getRoles() {
		return roles;
	}

	public void setRoles(List<String> roles) {
		this.roles = roles;
	}

	public String getPasswordHash() {
		return passwordHash;
	}

	public void setPasswordHash(String passwordHash) {
		this.passwordHash = new BCryptPasswordEncoder().encode(passwordHash);
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
