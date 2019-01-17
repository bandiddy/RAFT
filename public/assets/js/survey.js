var config = {
    '.chosen-select': {},
    '.chosen-select-deselect': { allow_single_deselect: true },
    '.chosen-select-no-single': { disable_search_threshold: 8 },
    '.chosen-select-no-results': { no_results_text: 'Oops, nothing found!' },
    '.chosen-select-width': { width: "95%" }
}
for (var selector in config) {
    $(selector).chosen(config[selector]);
}

$("#submit").on("click", function () {
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
            name: $("#name").val(),
            scores: [
                $("#q1").val(),
                $("#q2").val()
            ]
        }



        $.post("/api/locations", userData).done(function (data) {

            $("#matchLocation").text(data.name);
            $("#resultsModal").modal('toggle');
        });
    }
    else {
        alert("Please fill out all fields before submitting!");
    }

    return false;
});
