
// Enviornment setting on page load.
$(document).ready(function() {
	$("#add-form").hide();
	$("#cancelButton").hide();
	$('#datepick').timepicker();
	
});

// events when NEW button is clicked
$(document).ready(function(){
	// hide add form on cancel button click
    $("#newButton").click(function(){
		if(document.getElementById("newButton").innerHTML =="SAVE"){
			$('#addForm').submit();			
		}else{	
		$("#add-form").show();
		$("#cancelButton").show();
       	document.getElementById("newButton").innerHTML="SAVE";
		}
    });
	
});

//events when CANCEL button is clicked
$(document).ready(function(){
	// hide add form on cancel button click
    $("#cancelButton").click(function(){
        $("#add-form").hide();
		document.getElementById("newButton").innerHTML="NEW";
		$("#cancelButton").hide();
    });
});

// self invoking function for date picker
  $(function() {
      $( "#datepicker" ).datepicker({ minDate: -100, maxDate: "+1000" });
      $("#datepicker").datepicker("setDate",new Date());
      $( "#datepicker" ).datepicker( "option", "dateFormat", "dd/mm/yy");
    });
// getAppointments() performs AJAX call to retrieve data from database.
function getAppointments(){
	$(document).ready(function(){
		// http server call to get the information about the appointments, data is stored as JSON
		$.ajax({ url: "/perl/cgi/get-appointments.cgi",
				data: { 'data_search': $('#searchvalueType').val() },
				dataType: 'json',
				error: function (textStatus, errorThrown) {
                alert("Sorry!!! AJAX Call failed.");
				},
				success: function(res){	
				// build a simle html table
				var tb="<table class='table table-striped'> <tr> <th> Date  </th> <th> Time </th> <th> Description </th></tr>";
				for (var key in res) {
				tb = tb + " <tr> ";
					for (var key2 in res[key]){
					tb = tb +  " <td> " +res[key][key2] + "</td> ";
					}
				}
				// dynamically render the html table to the index page(front page)  
				document.getElementById("search-result").innerHTML =tb;
			
        }});
   
});
	//return false not submit form(avoids refreshing of page)
	return false;
}
