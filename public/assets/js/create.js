$(document).ready(function () {

    var input = $('#userInput').val().trim();

    $(".data-input").on("submit", function (event) {
        event.preventDefault();
        console.log(input);
        createNewRow();
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
            $.ajax("/api/locations/new", {
                type: "POST",
                data: userData
            }).then(
                function () {
                    console.log("created new location");
                    location.reload();
                }
            );
        }
        else {
            alert("Please fill out all fields before submitting!");
        }

        return false;
    });
})
