package com.pizzario.Backend.controller;

import jakarta.annotation.PostConstruct;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pizzario.Backend.model.HomePageModel;

@RestController
@RequestMapping("/home")
@CrossOrigin(origins = "http://localhost:4200/")
public class Home {
	private final HomePageModel homePageModel;
	static class intro{
		private String first;
		private String second;
		 intro(String first,String second) {
			this.first = first;
			this.second = second;
		}
		public String getFirst() {
			return first;
		}
		public void setFirst(String first) {
			this.first = first;
		}
		public String getSecond() {
			return second;
		}
		public void setSecond(String second) {
			this.second = second;
		}
		
	}
	public Home(HomePageModel homePageModel) {		
		this.homePageModel = homePageModel;
	}
    @GetMapping
    public HomePageModel New() {
    	return homePageModel;
    }

    @PostConstruct
    public void init() {
        System.out.println("✅ Home controller loaded!");
    }
}
