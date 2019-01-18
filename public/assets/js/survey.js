$(document).ready(function(){



$("#submit").on("click", function () {
    console.log($("#q1").val())
    function validateForm() {
        var isValid = true;
     
      $('.chosen-select').each(function () {
            if ($(this).val() === "")
                isValid = false
        })
        return isValid;
    }
    if (validateForm() == true) {
        
        var surveyData = {};
        $.get("/api/userID").then(function(req){
            surveyData.UserId = req[0].id;
            surveyData.climate = $("#q1").val();
            surveyData.bestSeaon = $("#q3").val();
        }).then(function(req){
            console.log(surveyData);
        $.post("/api/locations", surveyData).done (function(data){
                console.log("matching new location");
                location.reload();
                console.log(data);
            });
        })

    }

    else {
        alert("Please fill out all fields before submitting!");
    }

    return false;
  });
})