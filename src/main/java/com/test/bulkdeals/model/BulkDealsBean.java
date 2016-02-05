package com.test.bulkdeals.model;

public class BulkDealsBean {
	private String date;
	private String symbol;
	private String securityName;
	private String clientName;
	private String buySell;
	private int QtyTraded;
	private double tradePrice;
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getSymbol() {
		return symbol;
	}
	public void setSymbol(String symbol) {
		this.symbol = symbol;
	}
	public String getSecurityName() {
		return securityName;
	}
	public void setSecurityName(String securityName) {
		this.securityName = securityName;
	}
	public String getClientName() {
		return clientName;
	}
	public void setClientName(String clientName) {
		this.clientName = clientName;
	}
	public String getBuySell() {
		return buySell;
	}
	public void setBuySell(String buySell) {
		this.buySell = buySell;
	}
	public int getQtyTraded() {
		return QtyTraded;
	}
	public void setQtyTraded(int qtyTraded) {
		QtyTraded = qtyTraded;
	}
	public double getTradePrice() {
		return tradePrice;
	}
	public void setTradePrice(double tradePrice) {
		this.tradePrice = tradePrice;
	} 
}
