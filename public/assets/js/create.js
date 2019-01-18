$(document).ready(function () {

    var nameInput = $('#nameInput').val().trim();
    var countryInput = $('#countryInput').val().trim();
    var climateInput = $("#q3").val()
    var seasonInput = $("#q4").val()

    $(".create-data").on("submit", function (event) {
        event.preventDefault();
        console.log(nameInput);
        console.log($("#q3").val());
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
                name: nameInput,
                country: countryInput,
                climate: climateInput,
                bestSeason: seasonInput

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