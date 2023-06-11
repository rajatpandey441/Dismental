package com.dismental.dto;

public class RegisterRequest {
	private String username;
	private String password;
	private String registeredRole;
	private String email;
	private String name;
	@Override
	public String toString() {
		return "RegisterRequest [username=" + username + ", password=" + password + ", registeredRole=" + registeredRole
				+ ", email=" + email + ", name=" + name + "]";
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getRegisteredRole() {
		return registeredRole;
	}
	public void setRegisteredRole(String registeredRole) {
		this.registeredRole = registeredRole;
	}
	public RegisterRequest() {}
	public RegisterRequest(String username, String password) {
		
		this.username = username;
		this.password = password;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
}
