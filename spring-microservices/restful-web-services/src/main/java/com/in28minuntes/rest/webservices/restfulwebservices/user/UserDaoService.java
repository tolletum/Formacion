package com.in28minuntes.rest.webservices.restfulwebservices.user;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class UserDaoService {

	private static List<User> users = new ArrayList<>();
	
	private static int usersCount = 3;
	
	static {
		
		users.add(new User(1, "Adam", new Date()));
		users.add(new User(2, "Eve", new Date()));
		users.add(new User(3, "Jack", new Date()));
	}
	
	public List<User> findAll() {
		return users;
	}
	
	public User save(User user) {
		if(user.getId()==null) {
			user.setId(++usersCount);
		}
		users.add(user);
		return user;
	}
	
	public User findOne(int id) {
		for(User user : users) {
			if(user.getId() == id) {
				return user;
			}
		}
		return null;
	}
	
	public User deleteById(int id) {
		Iterator<User> iterator = users.iterator();
		while (iterator.hasNext()) {
			User user = iterator.next();
			if(user.getId() == id) {
				iterator.remove();
				return user;
			}
		}
		return null;
	}

//	public List<Post> findAllPosts(int userId) {
//		for(User user : users) {
//			if(user.getId() == userId) {
//				return user.getPosts();
//			}
//		}
//		return null;
//	}
//	
//	public Post findOnePost(int userId, int postId) {
//		for(User user: users) {
//			if(user.getId() == userId) {
//				for(Post post : user.getPosts()) {
//					if(post.getId() == postId) {
//						return post;
//					}
//				}
//			}
//		}
//		return null;
//	}
//
//	public Post savePost(int userId, Post post) {
//		for(User user: users) {
//			if(user.getId() == userId) {
//				if(post.getId() == null) {
//					post.setId(user.getPosts().size() + 1);
//				}
//				user.getPosts().add(post);
//			}
//		}
//		return post;
//	}
}
