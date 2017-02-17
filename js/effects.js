// hide form on page load

$(document).ready(function() {
	$("#add-form").hide();
});

$(document).ready(function(){
	// hide add form on cancel button click
    $("#hide").click(function(){
        $("#add-form").hide();
		$("#show").show();
    });
	// show add form on new button click
    $("#show").click(function(){
        $("#add-form").show();
		$("#show").hide();
    });
});


// self invoking function for date picker
  $(function() {
      $( "#datepicker" ).datepicker({ minDate: -100, maxDate: "+1000" });
      $("#datepicker").datepicker("setDate",new Date());
      $( "#datepicker" ).datepicker( "option", "dateFormat", "dd/mm/yy");
    });
	
// http ajax call
$(document).ready(function(){
    $("#searchbttn").click(function(){
		var val = $('#searchvalueType').val();
		$.ajax({ url: "http://localhost/perl/get-appointments.cgi",
				 data: { 'data_id': val },
				dataType: 'json',
				error: function (textStatus, errorThrown) {
                alert("failed");
				},
				success: function(res){				
				var tb="<table class='table table-striped'> <tr> <th> Date  </th> <th> Time </th> <th> Description </th></tr>";
				for (var key in res) {
				tb = tb + " <tr> ";
					for (var key2 in res[key]){
					tb = tb +  " <td> " +res[key][key2] + "</td> ";
					}
				}
				document.getElementById("search-result").innerHTML =tb;
				
			
        }});
    });
});
