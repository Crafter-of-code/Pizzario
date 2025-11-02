package com.pizzario.Backend.model;

import java.util.ArrayList;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
@Component  // ✅ Tells Spring to create and manage this class as a bean
public class HomePageModel {

    private String h1 = "Best Pizza Show in Delhi";
    private String afterHeroSectionH2 = "Welcome to The Pizza Show – Delhi!";
    private String afterHeroSectionP =
        "Delhi’s Ultimate Celebration of All Things Pizza!\n\n" +
        "Get ready to bite into a world of cheesy indulgence, saucy stories, and crusty creativity at The Pizza Show, the capital’s first and biggest pizza-centric experience! Whether you're a die-hard pepperoni fan or swear by Neapolitan classics, this event is a must-visit for foodies, families, and pizza lovers alike.\n\n" +
        "From live pizza-making demos by international chefs to tasting counters, pizza-eating contests, and exclusive pop-ups by Delhi’s top pizzerias — it’s more than a show, it’s a full-blown festival.";
   private java.util.List<uspModel> firstUspInfo = new ArrayList<uspModel>();

    public String getH1() {
        return h1;
    }


	public String getAfterHeroSectionH2() {
        return afterHeroSectionH2;
    }


    public String getAfterHeroSectionP() {
        return afterHeroSectionP;
    }
    public List<uspModel> getFirstUsp() {
    	firstUspInfo.add(new uspModel("Artisan Pizza Village","Try 50+ styles of pizzas from around the world"));
    	return firstUspInfo;
    }
}
