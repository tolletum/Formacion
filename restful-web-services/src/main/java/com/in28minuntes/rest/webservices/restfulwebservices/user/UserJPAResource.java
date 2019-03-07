package com.in28minuntes.rest.webservices.restfulwebservices.user;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.*;
import java.net.URI;
import java.util.List;
import java.util.Optional;

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
public class UserJPAResource {

	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/jpa/users")
	public List<User> retrieveAll() {
		return userRepository.findAll();
	}
	
	@GetMapping("/jpa/users/{id}")
	public Resource<User> retrieveUser(@PathVariable int id) {
		Optional<User> user = userRepository.findById(id);
		
		if(!user.isPresent()) {
			throw new USerNotFoundException("id-" + id);
		}
		
		Resource<User> resource = new Resource<User>(user.get());
		ControllerLinkBuilder linkTo = linkTo(methodOn(this.getClass()).retrieveAll());
		resource.add(linkTo.withRel("all-users"));
		
		return resource;
	}
	
	@DeleteMapping("/jpa/users/{id}")
	public void deleteUser(@PathVariable int id) {
		userRepository.deleteById(id);
				
	}

	@PostMapping("/jpa/users")
	public ResponseEntity<Object> createUser(@Valid @RequestBody User user) {
		
		if(user == null || user.getName() == null || user.getBirthDate() == null) {
			throw new BadRequest("Parameters must not be null");
		}
		
		User savedUser = userRepository.save(user);
		
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(savedUser.getId()).toUri();
		
		return ResponseEntity.created(location).build();
	}

	@GetMapping("/jpa/users/{id}/posts")
	public List<Post> retrieveAllPosts(@PathVariable int id) {
		Optional<User> user = userRepository.findById(id);
		
		if(!user.isPresent()) {
			throw new USerNotFoundException("id-" + id);
		}
		return user.get().getPosts();
	}
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
