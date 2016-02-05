package com.test.bulkdeals;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



@SuppressWarnings("serial")
public class TestServlet extends HttpServlet{
	
public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException{
	ServletOutputStream out = res.getOutputStream();
	out.print("Hello World!!");
	Connection conn = null;

    try
    {
        String userName = "adminNf4WWpe";
        String password = "Zj33rplCxE6j";
        String url = "jdbc:mysql://127.5.96.130:3306/test";
        Class.forName ("com.mysql.jdbc.Driver").newInstance ();
        conn = DriverManager.getConnection (url, userName, password);
        out.println("Database connection established");
        Statement stmt = conn.createStatement();
        ResultSet rs = stmt.executeQuery("select * from BulkDeals");
        while (rs.next ())
        {
        	out.println(rs.getString("Symbol"));
        }
        rs.close();
        stmt.close();
        conn.close();
        
    }
    catch (Exception e)
    {
        System.err.println ("Cannot connect to database server");
    }
    finally
    {
        if (conn != null)
        {
            try
            {
                conn.close ();
                System.out.println ("Database connection terminated");
            }
            catch (Exception e) { /* ignore close errors */ }
        }
    }
	
}
}
