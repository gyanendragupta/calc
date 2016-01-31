package com.test;

import java.io.IOException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@SuppressWarnings("serial")
public class TestServlet extends HttpServlet{
	
public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException{
	System.out.println("inside servlets");
	res.getOutputStream().print("Hello World!!");
	
}
}
