function calcCAGR(){
	var table = document.getElementById("myTableData");
	var rowCount = table.rows.length;
	var outdate = new Date(document.getElementById("asOnDate").value);
	var cagr = document.getElementById("cagr").value	
	var total=0;	
	for (var i=1; i < rowCount; i++){
		var indateId = "inDate"+i;		
		var invalId = "inVal"+i;
		var indate = new Date(document.getElementById(indateId).value);		
		var principle = document.getElementById(invalId).value;
		var days = (outdate - indate)/86400000;
		//alert(days);
		//alert(Math.pow((1+(cagr/100)),days/365));
		var compoundVal = ((Math.pow(1+(cagr/100),days/365))* principle);
		total = total+compoundVal;
		//alert(total);
		//alert("i is "+i);	
	}
	document.getElementById("totalVal").value=total;
}

function clear(obj){

}

function addRow() {		 
	var table = document.getElementById("myTableData");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    
    var inDateId="inDate"+rowCount;
    var inValId="inVal"+rowCount;

    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML= '<input id='+inDateId+' type="text" value='+getDateToday()+'>';
    row.insertCell(2).innerHTML= '<input id='+inValId+' type="text" value="">';
}

function deleteRow(obj) {
	 
	var index = obj.parentNode.parentNode.rowIndex;
	var table = document.getElementById("myTableData");
	table.deleteRow(index);
	
}

function getDateToday(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
	    dd='0'+dd
	} 

	if(mm<10) {
	    mm='0'+mm
	} 

	today = yyyy+'-'+mm+'-'+dd;
	return today;	
}

function setCurrentDate(id){
	var field = document.getElementById(id);
	field.value = getDateToday();
}