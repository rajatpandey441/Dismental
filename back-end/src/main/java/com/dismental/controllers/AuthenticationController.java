package com.dismental.controllers;

import com.dismental.services.AuthenticateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dismental.dto.AuthenticationRequest;
import com.dismental.dto.AuthenticationResponse;
import com.dismental.dto.RegisterRequest;
import com.dismental.entity.User;

import io.jsonwebtoken.ExpiredJwtException;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {
	private final AuthenticateService service;
	@Autowired
	public AuthenticationController(AuthenticateService service) {
		this.service = service;
	}
	public AuthenticationController() {
		this.service = new AuthenticateService();}
	
	@PostMapping("/register")
	public ResponseEntity<AuthenticationResponse> register(
			@RequestBody RegisterRequest request
	){
		return ResponseEntity.ok(service.register(request));
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> authenticate(
			@RequestBody AuthenticationRequest request
	){
		AuthenticationResponse response = service.authenticate(request);
		return ResponseEntity.ok()
				.header(HttpHeaders.AUTHORIZATION,response.getToken())
				.body(response.getUser());
	}
	
	@GetMapping("/validate")
	public ResponseEntity<?> validate(@RequestParam String token, @AuthenticationPrincipal User user){
		try {
			Boolean isTokenValid = service.isTokenValid(token,user);
			return ResponseEntity.ok(isTokenValid);
		}
		catch(ExpiredJwtException ex) {
			return ResponseEntity.ok(false);
		}
	}
	//DM-12 - Signup flow Enhancement. Return true if username exist and false if username doesnt exist
	@GetMapping("/checkUserNameExistence")
	public ResponseEntity<?> checkUserNameExistence(@RequestParam String username){
		return ResponseEntity.ok(service.checkUserNameExistence(username));
	}
}
