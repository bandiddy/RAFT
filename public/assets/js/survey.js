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

        var surveyData = {
            climate: $("#q1").val(),
            bestSeason: $("#q2").val()
            
        }

        $.ajax("/api/locations", {
            type: "POST",
            data: surveyData
        }).then(
            function (data) {
                console.log("matching new location");
                location.reload();
                console.log(data);
            }
        );
    }

    else {
        alert("Please fill out all fields before submitting!");
    }

    return false;
  });
})