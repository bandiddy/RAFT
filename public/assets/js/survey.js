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

        var userData = {
            name: input,
            climate: $("#q1").val(),
            bestSeason: $("#q2").val(),
            
        }



        $.post("/api/locations/new", userData).done(function (data) {

            $("#matchLocation").text(data.name);
            $("#resultsModal").modal('toggle');
        });
    }

    else {
        alert("Please fill out all fields before submitting!");
    }

    return false;
  });
})