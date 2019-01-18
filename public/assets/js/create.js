$(document).ready(function () {

    var input = $('#userInput').val().trim();

    $(".data-input").on("submit", function (event) {
        event.preventDefault();
        console.log(input);
        console.log($("#q2").val());
        function validateForm() {
            var isValid = true;
            $('.form-control').each(function () {
                if ($(this).val() === '')
                    isValid = false;
            });
            $('.chosen-select').each(function () {
                if ($(this).val() === "")
                    isValid = false
            })
            return isValid;
        }
        if (validateForm() == true) {

            var userData = {
                name: input,
                climate: $("#q2").val(),
                bestSeason: $("#q3").val()

            }
            $.post("/api/locations/new", userData).done(function(data){
                console.log(data);
                console.log("created new location");
                location.reload();
            });
                
            
        }
        else {
            alert("Please fill out all fields before submitting!");
        }

        return false;
    });
})