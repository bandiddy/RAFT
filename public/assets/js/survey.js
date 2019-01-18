$(document).ready(function(){



$("#submit").on("click", function () {
    console.log($("#q1").val())
    function validateForm() {
        var isValid = true;
<<<<<<< HEAD
        $('.chosen-select').each(function () {
=======
     
      $('.chosen-select').each(function () {
>>>>>>> 74e3884585675795747ce94597c1868c178dd207
            if ($(this).val() === "")
                isValid = false
        })
        return isValid;
    }
    if (validateForm() == true) {

        var userData = {
            name: input,
            climate: $("#q1").val(),
            bestSeason: $("#q2").val(),
            
        }

<<<<<<< HEAD


        $.post("/api/locations/new", userData).done(function (data) {

            $("#matchLocation").text(data.name);
            $("#resultsModal").modal('toggle');
        });
=======
        $.post("/api/locations", surveyData).done (function(data){
           
         
                console.log("matching new location");
                location.reload();
                console.log(data);
            });
>>>>>>> 74e3884585675795747ce94597c1868c178dd207
    }

    else {
        alert("Please fill out all fields before submitting!");
    }

    return false;
  });
})