package com.in28minuntes.rest.webservices.restfulwebservices.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class PostNotFoundException extends RuntimeException {

	public PostNotFoundException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}

}
