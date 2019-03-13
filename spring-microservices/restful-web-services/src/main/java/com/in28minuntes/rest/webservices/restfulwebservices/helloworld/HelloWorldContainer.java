package com.in28minuntes.rest.webservices.restfulwebservices.helloworld;

import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.i18n.LocaleContextResolver;

@RestController
public class HelloWorldContainer {

	@Autowired
	private MessageSource messageSource;
	
//	@RequestMapping(method=RequestMethod.GET, path="/hello-world")
	@GetMapping(path="/hello-world")
	public String helloWorld() {
		return "Hello world";
	}

	@GetMapping(path="/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("Hello world");
	}

	@GetMapping(path="/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldPAthVariable(@PathVariable String name) {
		return new HelloWorldBean(String.format("Hello world %s", name));
	}

	@GetMapping(path="/hello-world-internazionalized")
	public String helloWorldInternazionalized(@RequestHeader(name="Accept-Language", required=false) Locale locale) {
		return messageSource.getMessage("good.morning.message", null, locale);
	}

	@GetMapping(path="/hello-world-internazionalized-mejorado")
	public String helloWorldInternazionalizedMejorado() {
		return messageSource.getMessage("good.morning.message", null, LocaleContextHolder.getLocale());
	}
}
