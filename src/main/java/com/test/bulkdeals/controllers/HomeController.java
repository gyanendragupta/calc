package com.test.bulkdeals.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.test.bulkdeals.dao.JdbcRepository;
import com.test.bulkdeals.model.BulkDealsBean;




@Controller
public class HomeController {	
	@Autowired
	JdbcRepository repo;

//	@RequestMapping(value = "/", method = RequestMethod.GET)
//	public ModelAndView showHome() {
//		return new ModelAndView("home");
//	}
	
	@RequestMapping(value = "/spring", method = RequestMethod.GET)
	public ModelAndView showItems() {		
		List<BulkDealsBean>  li = repo.getBulkDeals();
		System.out.println("Items :"+li);
		ModelAndView mv = new ModelAndView("home");
		mv.addObject("list", li);
		return mv; 
	}
}