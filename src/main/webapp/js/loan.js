


function rightclickdis() {
	am = "Sorry...Right Click Is Disabled";
	bV = parseInt(navigator.appVersion)
	bNS = navigator.appname == "Netscape"
	bIE = navigator.appname == "Microsoft Internet Explorer"
	function nrc(e) {
		if (bNS && e.which > 1) {
			alert(am)
			return false

		} else if (bIE && (event.button > 1)) {
			alert(am)
			return false;
		}
	}
	document.onmousedown = nrc;
	if (document.layers)
		window.captureEvents(Event.MOUSEDOWN);
	if (bNS && bV < 5)
		window.onmousedown = nrc;
}

function RoundNumber(number) {
	with (Math) {
		//var result = (round(number * 100)) / 100;
		return round(number);
	}
}

function FormatNumber(number) {
	with (Math) {
		var fmt = "";
		var add = 9;
		fmt += number;
		for ( var i = 0; i < fmt.length; i++) {
			if (fmt.charAt(i) == ".") {
				add = i + 3;
				i = fmt.length;
			} else {
				fmt = fmt & "."
			}
		}
		fmt = fmt.substring(0, add);
		return fmt;
	}
}
function validateInputs(form) {
	a = form;
	if (a.loan_amount.value == "") {
		alert("Enter  the Amount");
		a.loan_amount.focus();
		a.loan_amount.select();
		return (false);
	}
	if (a.loan_amount.value) {
		s = a.loan_amount.value;
		if (parseFloat(s) == 0) {
			alert("Zeros are not allowed in Loan Amount ");
			a.loan_amount.value = '';
			a.loan_amount.focus();
			a.loan_amount.select();
			return (false);
		}
		if ((s.match(/[a-z A-Z]/)) != null) {
			alert("Enter Amount in numeric");
			a.loan_amount.value = '';
			a.loan_amount.focus();
			a.loan_amount.select();
			return (false);
		}
	}
	if (a.loan_rate.value == "") {
		alert("Enter Rate of Interest");
		a.loan_rate.focus();
		a.loan_rate.select();
		return (false);
	}
	if (a.loan_rate.value) {
		s = a.loan_rate.value;
		if ((s.match(/[a-z A-Z \- `  ! @ # $ % ^ & * ]/)) != null) {
			alert("Enter only  positive numerals for Interest Rate");
			a.loan_rate.value = '';
			a.loan_rate.focus();
			a.loan_rate.select();
			return (false);
		}
		if (parseFloat(s) == 0 || parseFloat(s) >= 100) {
			alert("Enter a valid interest rate - Range between 0.01 to 99.99");
			a.loan_rate.value = '';
			a.loan_rate.focus();
			a.loan_rate.select();
			return (false);
		}

		if ((s.indexOf(".", 0)) != (-1)) {
			s = s.substring(s.indexOf(".") + 1, s.length);
			if (s.length > 2) {
				alert("Only two decimal places are allowed in Interest Rate");
				a.loan_rate.value = '';
				a.loan_rate.focus();
				a.loan_rate.select();
				return (false);
			}
		}
	}
	if (a.loan_time.value == "") {
		alert("Enter the period");
		a.loan_time.focus();
		a.loan_time.select();
		return (false);
	}
	if (a.loan_time.value) {
		s = a.loan_time.value;
		if (parseFloat(s) == 0) {
			alert("Zeros are not allowed in No.of Installments");
			a.loan_time.value = '';
			a.loan_time.focus();
			a.loan_time.select();
			return (false);
		}
		if ((s.match(/[. a-z A-Z]/)) != null) {
			alert("Enter Period in numeric");
			a.loan_time.value = '';
			a.loan_time.focus();
			a.loan_time.select();
			return (false);
		}
	}
	return true;
}


function calculateEMI(form) {
	if (validateInputs(form)){
		var roi = form.loan_rate.value;
		roi = roi/ 100.00	
		roi /= 12;	
		var pow = 1;
		for ( var j = 0; j < form.loan_time.value; j++){
			pow = pow * (1 + roi);
		}				
		form.loan_emi.value = RoundNumber((form.loan_amount.value * pow * roi)/(pow - 1));	
		form.total_int.value = RoundNumber((form.loan_emi.value * form.loan_time.value)- form.loan_amount.value);		
	}
	// form.loan_emi.value=Math.ceil(form.loan_emi.value);
	// //form.total_int.value=Math.ceil(form.total_int.value);
}

function showAmortization(form){
	if (validateInputs(form)){
		var roi = form.loan_rate.value;
		roi = roi/ 100.00	
		roi /= 12;	
		var pow = 1;
		for ( var j = 0; j < form.loan_time.value; j++){
			pow = pow * (1 + roi);
		}
		var emi = RoundNumber((form.loan_amount.value * pow * roi)/(pow - 1));
		alert(emi);
		var table = document.getElementById("myTableData");
		clearTable(table);
		var outstandingAmt = form.loan_amount.value;
		//alert(outstandingAmt);
		var intComponent = 0;
		var emiTextBoxId;
		var roiTextBoxId;
		for ( var i = 1; i <= form.loan_time.value; i++){
			row = table.insertRow(i);
			//alert("row added");
	    	row.insertCell(0).innerHTML= '<input type="text" id="outstandingAmt'+i+'" disabled value='+outstandingAmt+'>';
	    	emiTextBoxId = "emi"+i;
	    	roiTextBoxId = "roi"+i;
	    	row.insertCell(1).innerHTML= '<input type="text" id='+emiTextBoxId+' value='+emi+'>'; 
	    	row.insertCell(2).innerHTML= '<input type="text" id='+roiTextBoxId+' value='+form.loan_rate.value+'>';	    	
	    	intComponent = RoundNumber(outstandingAmt*roi);
	    	row.insertCell(3).innerHTML= '<input type="text" disabled value='+intComponent+'>';
	        row.insertCell(4).innerHTML= '<input type="text" disabled value='+(emi - intComponent)+'>';
	        outstandingAmt = (outstandingAmt - emi);
		}
	}
}

function recalculate(form){
	var table = document.getElementById("myTableData");	
	//clearTable(table);
	var outstandingAmt = form.outstandingAmt1.value;
	alert(outstandingAmt);
	var emiTextBoxId;
	var roiTextBoxId;
	var roi = 0;
	var emi = 0;
	for(var i=1; outstandingAmt>0; i++ ){
		row = table.insertRow(i);
		//alert("row added");
    	row.insertCell(0).innerHTML= '<input type="text" id="outstandingAmt'+i+'" disabled value='+outstandingAmt+'>';
    	emiTextBoxId = "emi"+i;
    	roiTextBoxId = "roi"+i;
    	alert(emiTextBoxId);
    	alert(form.emiTextBoxId.value);
    	row.insertCell(1).innerHTML= '<input type="text" id='+emiTextBoxId+' value='+form.emiTextBoxId.value+'>'; 
    	row.insertCell(2).innerHTML= '<input type="text" id='+roiTextBoxId+' value='+form.roiTextBoxId.value+'>';	    	
    	roi = form.roiTextBoxId.value;
    	roi = (roi/100)/12;
    	alert(roi);
    	intComponent = RoundNumber(outstandingAmt*roi);
    	emi = form.emiTextBoxId.value;
    	row.insertCell(3).innerHTML= '<input type="text" disabled value='+intComponent+'>';
        row.insertCell(4).innerHTML= '<input type="text" disabled value='+(emi - intComponent)+'>';
        outstandingAmt = (outstandingAmt - emi);
	}
	
}

function clearTable(table){
	//alert("inside clear table?");
	var rowcount = table.rows.length;	
	for (var i= rowcount; i > 1; i--){
		//alert(rowcount);
		//alert("i: "+i);
		table.deleteRow((i-1));
	}
	//alert("cleared?");
	
}