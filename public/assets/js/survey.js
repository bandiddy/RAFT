$(document).ready(function(){



$(".form-control").on("submit", function (event) {
    event.preventDefault();
  
    function validateForm() {
        var isValid = true;
     
      $('.chosen-select').each(function () {
            if ($(this).val() === "")
                isValid = false
        })
        return isValid;
    }
    if (validateForm() == true) {
        
        var surveyData = {
           country: '',
           climate: $("#q1").val(),
           bestSeason: $("#q2").val()
        };

        $.post("/api/locations", surveyData).then(function(data){
            console.log(surveyData);
            $("#matchName").text(data.country);
            $("#matchClimate").text(data.country + " has a " + data.climate + " climate");
            $("#matchBestSeason").text("The best time to go is in " + data.bestSeason);
            $("#resultsModal").modal('toggle');
           
         
        })

    }

    else {
        alert("Please fill out all fields before submitting!");
    }

    return false;
  });
})
