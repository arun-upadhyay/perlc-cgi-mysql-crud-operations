// form validation code(form is submitted only when all the fields are filled).
function validateForm() {
	var submitDes=true;
    var dt = document.forms["addForm"]["Date"].value;
    if (dt == "") {
	document.getElementById("errorDate").innerHTML ="Date must be filled out";
    submitDes=false;
    }
	var tm = document.forms["addForm"]["Time"].value;
	if (tm == "") {
	document.getElementById("errorTime").innerHTML ="Time must be filled out";
    submitDes=false;
    }
	var des = document.forms["addForm"]["Description"].value;
	if (des == "") {
	document.getElementById("errorDescription").innerHTML ="Description must be filled out";
	submitDes=false;
    }
	return submitDes;
	
}