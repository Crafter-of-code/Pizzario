package com.pizzario.Backend.model;

import org.springframework.stereotype.Component;


public class uspModel {
	private String heading;
	private String Description;
	public uspModel(String heading,String Description) {
		this.heading = heading;
		this.Description = Description;
	}
	public String getHeading() {
		return heading;
	}
	public void setHeading(String heading) {
		this.heading = heading;
	}
	public String getDescription() {
		return Description;
	}
	public void setDescription(String description) {
		Description = description;
	}
	
}
