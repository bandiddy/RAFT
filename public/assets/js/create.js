$(document).ready(function () {

    var input = $('#userInput').val().trim();
    
    $("#sbumit").on("click", function (event) {
        event.preventDefault();
        console.log(input);
        console.log($("#q2").val());
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