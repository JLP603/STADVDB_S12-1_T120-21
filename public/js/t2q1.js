$(document).ready(function () {
    $("#btn_genre_director").click(function (e) { 
        
        var business_name = $("#business_name").val();
        var path = "/table2query1output-" + business_name;
        if  (business_name != ""){
            
            $(location).attr("href", path);
        }
        else {
            alert("Please fill up all the fields.")
        }
    });
});