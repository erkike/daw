package com.series.carpincho;

import java.util.List;

public class Usuario {
	private String nombre;
	private String apellido;
	private String usuario;
	private String email;
	private List<String> fecha;
	private String img;
	
	public Usuario(){		
	}
	
	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public Usuario(String nombre,String apellido,String usuario, String email,List<String> fecha){
		this.nombre=nombre;
		this.apellido=apellido;
		this.usuario=usuario;
		this.email=email;
		this.fecha=fecha;
	}
	public Usuario(String nombre,String usuario, String email){
		this.nombre=nombre;
		this.usuario=usuario;
		this.email=email;
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
	public String getUsuario() {
		return usuario;
	}
	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public List<String> getFecha() {
		return fecha;
	}
	public void setFecha(List<String> fecha) {
		this.fecha = fecha;
	}
	
		
}
