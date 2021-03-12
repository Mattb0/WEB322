function detailPaymentCalculation(mortAmount,mortDownPayment,mortRate,mortAmortization) {
    //********************************************************************************//
    //*   This function calculates the monthly payment based on the following:       *//
    //*                                                                              *//
    //*               M = P [ i(1 + i)n ] / [ (1 +  i)n - 1]                         *//
    //*                                                                              *//
    //*   Note: This function also updates the payment amount on the form            *//
    //********************************************************************************//
     var paymentError = "";
     var v = mortAmount * 1;
     var d = mortDownPayment * 1;
     var i = mortRate * 1;
     var y = mortAmortization * 1;
     var a = v - d;
     i = i/100/12;
     n = y * 12;
     var f = Math.pow((1+i),n);

     var p = (a * ((i*f)/(f-1))).toFixed(2);

     if (p=="NaN" || p=="Infinity") 
	 {
		document.forms[0].payment.value = "";
     }
     else 
	 {
		document.forms[0].payment.value = p;
     }

} // End of detailPaymentCalculation function


// VALIDATE PROPETY VALUE //
function calculatePayment() {   

	function validatePropval()
	{
		var pval = document.getElementById("propValue").value;
		var dpay = document.getElementById("downPay").value;
		downpay + 65000;
		
		if (pval == 0)  // checks if number is empty
		{
				document.getElementById("errorlog").innerHTML += '-Property Value is required.<br>';
				return 1;
		}
		else if (pval < 0)  // checks if number is less than 0
		{
		document.getElementById("errorlog").innerHTML += '-Property Value cannot be negative.<br>';
		return 1;
		}
		else if(isNaN(pval) == true) // checks if pval is a number
		{
				document.getElementById("errorlog").innerHTML += '-Property Value has to be a number.<br>';
				return 1;
		}
		else	
		{
			if(pval > dpay)  // checks if value is correct
			{
				//debug
			}
			else	// is value lower than dval + 65k return false
			{
				document.getElementById("errorlog").innerHTML += '-Property Value needs to be atleast $65,000 higher than down payment.<br>';
				return 1;
			}
		}
	}	
}
/////////////////////////////////////////////////////////////////////////
	

// VALIDATE DOWNPAYMENT

function validateDownpay()
{
	var dpay = document.getElementById("downPay").value;
	var pval = document.getElementById("propValue").value;
	var percent = +pval * 0.20;

	if (dpay == 0)  // checks if number is empty
	{
		document.getElementById("errorlog").innerHTML += '-Down Payment is required.<br>';
		return 1;
	}
	else if (dpay < 0)  // checks if number is less than 0
	{
		document.getElementById("errorlog").innerHTML += '-Down Payment cannot be negative.<br>';
		return 1;
	}
	else if(isNaN(dpay) == true) // checks if var is a number
	{
			document.getElementById("errorlog").innerHTML += '-Down Payment has to be a number.<br>';
			return 1;
	}
	else	
	{
		if(dpay >= percent)  // checks if value is correct
		{
			// Debugging reasons
		}
		else	// is value atleast 20% of pval?
		{
			document.getElementById("errorlog").innerHTML += '-Down Payment must be at least 20% of the value of the property .<br>';
			return 1;
		}
	}

}
////////////////////////////////////////
	
	

// INTRATE VALIDATION //
function validateIntrate()
{
	var interest = document.getElementById("intRate").value;		

	if (interest == 0)  // checks if number is empty
	{
		document.getElementById("errorlog").innerHTML += '-Interest Rate is required.<br>';
		return 1;
	}
	else if(isNaN(interest) == true) // checks if var is a number
	{
		document.getElementById("errorlog").innerHTML += '-Interest Rate has to be a number.<br>';
		return 1;
	}
	else if(interest >= 3.000 && interest <= 16.000)
	{
	}
	else
	{
		document.getElementById("errorlog").innerHTML += '-Interest Rate has to be >= 3 and <= 16.<br>';
		return 1;
	}
}
////////////////////////////////////////


// AMORTIZATION VALIDATION //
function validateAmort()
{
	var amort = document.getElementById("amortization").value;

	if (amort == 0)  // checks if number is empty
	{
		document.getElementById("errorlog").innerHTML += '-Amortization is required.<br>';
		return 1;
	}
	else if(isNaN(amort) == true) // checks if var is a number true means not
	{
		document.getElementById("errorlog").innerHTML += '-Amortization has to be a number.<br>';
		return 1;
	}
	else if(amort >= 3.000 && amort <= 16.000)
	{
		//document.getElementById("errorlog").innerHTML += '';
	}
	else
	{
		document.getElementById("errorlog").innerHTML += '-Amortization has to be >= 5 and <= 20.<br>';
		return 1;
	}

}
////////////////////////////

var chk;
chk += validatePropval();
chk += validateDownpay();
chk += validateAmort();
chk += validateIntrate();

if(chk != 0 )
{
	var propval = document.getElementById("propValue").value;		
	var downpay = document.getElementById("downPay").value;	
	var interest = document.getElementById("intRate").value;
	var amort = document.getElementById("amortization").value;
	detailPaymentCalculation(propval, downpay, interest, amort)
		
}

// End of calculatePayment function
    //********************************************************************************//
    //*   You will need to call the functions that validate the following:           *//
    //********************************************************************************//
    //*        (1)              (2)              (3)             (4)                 *//
    //********************************************************************************//
    //*   Property value  -  Down payment  -  Interest rate -  Amortization          *//
    //********************************************************************************//
    //*   If there are no errors, then call                                          *//
    //*                                                                              *//
    //*      detailPaymentCalculation(...., ......, ......, ......);                 *//
    //*                                                                              *//
    //*   and make sure to pass the four values in the order shown above.            *//
    //*                                                                              *//
    //********************************************************************************//
    //*   If there are errors, present the client the following message in the       *//
    //*   reserved area on the form:                                                 *//
    //*                                                                              *//
    //*   Please complete the form first and then click on Calculate Monthly Payment *//
    //*                                                                              *//
    //********************************************************************************//
// LIST:  income, downpay,  propvalue, proplocation, intrate, amort, month, year
//******************************************************************************//


function formValidation() {
	var errorcheck;

	// HIDDEN///////
	var jsActive = "xxxxxx";
	var lastName = "xxxxxx";
	var studentId = xxxxxx;
	var zenitAccount = "xxxxxx";
	/////////////

	// Testing vars
	var propval =+ document.getElementById("propValue").value;		
	var downpay =+ document.getElementById("downPay").value;	
	var amort =+ document.getElementById("amortization").value;
	/////////////
	
    errorcheck = validateDownpay(downpay, propval);
    errorcheck = validatePropval(propval, downpay);
		
	errorcheck = validateIncome();
	errorcheck = validateLocation();
	errorcheck = validateDetails();
	errorcheck = validateIntrate();
	errorcheck = validateAmort();
	errorcheck = validateMonth();
	errorcheck = validateYear();
	errorcheck = validateClient();
		
	// VALIDATE USER ID //		
	function validateUser()	
	{
		var user = document.getElementById("userId").value;
		var len = user.length;
		var zero = user.charAt(0);			
		var one = user.charAt(1);	
		var two = user.charAt(2);	
		var three = user.charAt(3);	
		var four = user.charAt(4);	
		var five = user.charAt(5);	
		var six = user.charAt(6);	
		var seven = user.charAt(7);	
		var eight = user.charAt(8);	
		var nine = user.charAt(9);	
		var zero = user.charAt(0).value;			

		alert(zero);
		
		if (len < 10 || len > 10)
		{
			document.getElementById("errorlog").innerHTML += 'UserID cannot be less than or more than 10 digits.<br>';
			return 1;
		}
		else if (four != '-')
		{
			document.getElementById("errorlog").innerHTML += '-UserID position 5 must be a hyphen.<br>';
			return 1;
		}
		else if(isNaN(zero) == true)
		{
			document.getElementbyId("errorlog").innerHTML += '-UserID positions 1-4 must be numeric digits.<br>';
			return 1;
		}	
	}	
		
	// VALIDATE CLIENT 
	function validateClient(){
	var cl = document.getElementById("client");
	var clV = document.getElementById("client").value;	
	var ap = clV.slice(-1);
	var test = "'";
		
	if (clV.length < 3)  // checks if  variable is empty
	{
		document.getElementById("errorlog").innerHTML += '-Client field is required.<br>';
		return 1;
	}
	
	else if (clV.charCodeAt(0) === test && clV.slice(-1) == test)
	{
		document.getElementById("errorlog").innerHTML += '-Client cannot have an apostrope at the begining of the end.<br>';
		return 1;
	}

	
	else if (clV.charAt(0) === "" && clV.charAt(clV.length-1) === "")
	{
		document.getElementById("errorlog").innerHTML += '-Client must have atleast 3 alphabetic characters.<br>';
		return 1;
	}
	
	
	else if(isNaN(cl) == true) // checks if cl is a number = 1 is not a num
	{
		//Testing purposes
	}
}


// INCOME VALIDATION /////
function validateIncome()
{
	var a = document.getElementById("income").selectedIndex;

	if (a != 1 && a != 2 && a != 3 && a != 4 && a != 5 && a != 6 && a != 7 && a != 8 && a != 9 && a != 10)
	{
		document.getElementById("errorlog").innerHTML += '-Income needs an option selected.<br>';
		return false;
	}
}
///////////////////////////////////

// LOCATION VALIDATION //
function validateLocation()
{
	var a = document.getElementById("propLocation").selectedIndex;
	if (a != 1 && a != 2 && a != 3 && a != 4 && a != 5)
	{
		document.getElementById("errorlog").innerHTML += '-Location needs an option selected.<br>';
		return false;
	}
}


// MORTAGE MONTH VALIDATION //
function validateMonth()
{
	var month = document.getElementById("mortMonth").value;
	var curDate = new Date();
	var curMonth = curDate.getMonth();

	if(isNaN(month) == true) // true = not a number
	{
		document.getElementById("errorlog").innerHTML += '-Month has to be a number.<br>';
		return false;
	}
	else if(month == 0)
	{

		document.getElementById("errorlog").innerHTML += '-Month is required.<br>';
		return false;
	}
	else if (month < 1 && month > 12)
	{
		document.getElementById("errorlog").innerHTML += '-Month has to be 1 to 12.<br>';
		return false;
	}
	else if(month == curMonth || month == curMonth + 1)
	{
		//Debug
	}
	else 
	{
		document.getElementById("errorlog").innerHTML += 'Month must equal current month or 1 greater.<br>';
		return false;
	}
}
///////////////////////////////////////////////////////



// VALIDATE YEAR //
//***************************************************************************************//
//*                                                                                     *//
//* This function calls the different functions to validate all required fields         *//
//*                                                                                     *//
//* Once you have called and validated all field, determine if any error(s)             *//
//*  have been encountered                                                              *//
//*                                                                                     *//
//* If any of the required fields are in error:                                         *//
//*                                                                                     *//
//*    present the client with a list of all the errors in reserved area                *//
//*         on the form and                                                             *//
//*          don't submit the form to the CGI program in order to allow the             *//
//*          client to correct the fields in error                                      *//
//*                                                                                     *//
//*    Error messages should be meaningful and reflect the exact error condition.       *//
//*                                                                                     *//
//*    Make sure to return false                                                        *//
//*                                                                                     *//
//* Otherwise (if there are no errors)                                                  *//
//*                                                                                     *//
//*    Recalculate the monthly payment by calling                                       *//
//*      detailPaymentCalculation(mortAmount,mortDownPayment,mortRate,mortAmortization) *//
//*                                                                                     *//
//*    Change the 1st. character in the field called client to upper case               *//
//*                                                                                     *//
//*    Change the initial value in the field called jsActive from N to Y                *//
//*                                                                                     *//
//*    Make sure to return true in order for the form to be submitted to the CGI        *//
//*                                                                                     *//
//***************************************************************************************//

function validateYear()
{
	var year = document.getElementById("mortYear").value;
	var d = new Date();
	var curYear = d.getFullYear();

	if(isNaN(year) == true) // true = not a number
	{
		document.getElementById("errorlog").innerHTML += '-Year has to be a number.<br>';
		return false;
	}
	else if(year == 0)
	{
		document.getElementById("errorlog").innerHTML += '-Year is required.<br>';
		return false;
	}
	else
	{
		document.getElementById("errorlog").innerHTML += '-Year must equal to current year or 1 greater.<br>';
		return false;
	}

	alert(errorcheck);
	if (errorcheck == false)
	{
		jsActive = "N";
		return false;
	} 
	else
	{
		jsActive = "Y";
		alert(jsActive);
		return true;
	}
}