package com.in28minuntes.rest.webservices.restfulwebservices.user;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.*;
import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.mvc.ControllerLinkBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.in28minuntes.rest.webservices.restfulwebservices.exception.BadRequest;
import com.in28minuntes.rest.webservices.restfulwebservices.exception.PostNotFoundException;
import com.in28minuntes.rest.webservices.restfulwebservices.exception.USerNotFoundException;

@RestController
public class UserController {

	@Autowired
	private UserDaoService userService;
	
	@GetMapping("/users")
	public List<User> retrieveAll() {
		return userService.findAll();
	}
	
	@GetMapping("/users/{id}")
	public Resource<User> retrieveUser(@PathVariable int id) {
		User user = userService.findOne(id);
		
		if(user == null) {
			throw new USerNotFoundException("id-" + id);
		}
		
		Resource<User> resource = new Resource<User>(user);
		ControllerLinkBuilder linkTo = linkTo(methodOn(this.getClass()).retrieveAll());
		resource.add(linkTo.withRel("all-users"));
		
		return resource;
	}
	
	@DeleteMapping("/users/{id}")
	public void deleteUser(@PathVariable int id) {
		User user = userService.deleteById(id);
		
		if(user == null) {
			throw new USerNotFoundException("id-" + id);
		}
		
	}

	@PostMapping("/users")
	public ResponseEntity<Object> createUser(@Valid @RequestBody User user) {
		
		if(user == null || user.getName() == null || user.getBirthDate() == null) {
			throw new BadRequest("Parameters must not be null");
		}
		
		User savedUser = userService.save(user);
		
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(savedUser.getId()).toUri();
		
		return ResponseEntity.created(location).build();
	}

//	@GetMapping("/users/{id}/posts")
//	public List<Post> retrieveAllPosts(@PathVariable int id) {
//		return userService.findAllPosts(id);
//	}
//
//	@GetMapping("/users/{id}/posts/{postId}")
//	public Post findOnePost(@PathVariable int id, @PathVariable int postId) {
//		Post post =  userService.findOnePost(id, postId);
//		
//		if(post == null) {
//			throw new PostNotFoundException("User id-" + id + " Post id-" + postId);
//		}
//		
//		return post;
//	}
//	
//	@PostMapping("/users/{userId}/posts")
//	public ResponseEntity<Object> createPost(@PathVariable int userId, @RequestBody Post post) {
//		
//		if(post == null || post.getTitle() == null 
//				|| post.getText() == null || post.getCreationDate() == null) {
//			throw new BadRequest("Parameters must not be null");
//		}
//		
//		Post savedPost = userService.savePost(userId, post);
//		
//		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{postId}").buildAndExpand(post.getId()).toUri();
//		
//		return ResponseEntity.created(location).build();
//	}
//	
}
