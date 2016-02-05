<%@page import="com.test.bulkdeals.model.BulkDealsBean"%>
<%@page import="java.util.List"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head><title>Hello :: Spring Application</title></head>
  <body>
  	<style>
		table,th,td
		{
		border:1px solid black;
		border-collapse:collapse;
		}
	</style>

    <h1><c:out value="Items JSP"/> - Spring Application</h1>
    <table width="100%">
	    <tr>
	    	<td width="10%">Date</td>
	    	<td width="10%">Symbol</td>
	    	<td width="25%">SecurityName</td>
	    	<td width="25%">ClientName</td>
	    	<td width="5%">BuySell</td>
	    	<td width="15%">QtyTraded</td>
	    	<td width="10%">Price</td>
	    </tr>   
    <c:forEach varStatus="status" items="${list}" var="dealsData">
    	<tr>
    		 <td><c:out value="${dealsData.date}"></c:out></td>
    		 <td><c:out value="${dealsData.symbol}"></c:out></td>
    		 <td><c:out value="${dealsData.securityName}"></c:out></td>
    		 <td><c:out value="${dealsData.clientName}"></c:out></td>
    		 <td><c:out value="${dealsData.buySell}"></c:out></td>
    		 <td><c:out value="${dealsData.qtyTraded}"></c:out></td>
    		 <td><c:out value="${dealsData.tradePrice}"></c:out></td>    	
    </c:forEach>
    </table>    
    <p>Greetings.</p>
  </body>
</html>