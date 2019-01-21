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
            
        })

    }

    else {
        alert("Please fill out all fields before submitting!");
    }

    return false;
  });
})
