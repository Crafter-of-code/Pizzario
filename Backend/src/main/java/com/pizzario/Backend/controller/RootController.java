package com.pizzario.Backend.controller;

import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.annotation.PostConstruct;

@RestController
//@RequestMapping("/home")
public class RootController {
 @GetMapping
 public Map GetRequest() {
	 
	 Map<String, String> data = new HashMap();
		data.put("name","Uzair");
		data.put("user", "How are you");
		 List<Map<String, String>> list = new ArrayList<Map<String, String>>();
		 list.add(data);
		System.out.println(list);
		return data;
 }
 @PostConstruct
 public void init() {
     System.out.println("✅ root controller loaded!");
 }
}
