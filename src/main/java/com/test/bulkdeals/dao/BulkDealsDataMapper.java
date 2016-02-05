package com.test.bulkdeals.dao;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;


import com.test.bulkdeals.model.BulkDealsBean;

public class BulkDealsDataMapper implements RowMapper<BulkDealsBean> {

	public BulkDealsBean mapRow(ResultSet rs, int i) throws SQLException {
		BulkDealsBean bean = new BulkDealsBean();
		bean.setDate(rs.getString("Date"));
		bean.setSymbol(rs.getString("Symbol"));
		bean.setSecurityName(rs.getString("SecurityName"));
		bean.setClientName(rs.getString("ClientName"));
		bean.setBuySell(rs.getString("BuySell"));
		bean.setQtyTraded(rs.getInt("QtyTraded"));
		bean.setTradePrice(rs.getDouble("TradePrice"));
		return bean;
	}
}
