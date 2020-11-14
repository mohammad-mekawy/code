$(document).ready(function () {
    var arr = [];

    for (i = 0; i < $("#journal").children().length; i++) {
        arr.push($("#journal").children()[i].id)
    }

    $("#journal").change(function () {
        var selectedJVal = $(this).children("option:selected").val();
        $("#vol > option").each(function (i) {
            $(this).prop("id", selectedJVal + `-${i+1}`)
            $(this).prop("value", selectedJVal + `-${i+1}`)
        })
        $("#issue > option").each(function (i) {
            var selectedVolVal = $("#vol").children("option:selected").val();
            $(this).prop("id", selectedVolVal + `-${i+1}`);
            $(this).prop("value", selectedVolVal + `-${i+1}`)
        })
    })

    $("#vol").change(function () {
        var selectedVolVal = $("#vol").children("option:selected").val();
        $("#issue > option").each(function (i) {
            $(this).prop("id", selectedVolVal + `-${i+1}`);
            $(this).prop("value", selectedVolVal + `-${i+1}`)
        })
    })

});