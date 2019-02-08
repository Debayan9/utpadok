$(document).ready(function() {
    $("#InlineFrame1").hide();
    $("#wb_Text2").hide();
    $("#Button1").click(function() {
        var a = $("#Editbox1").val();
        var s1 = dsmath.factor(a);
        var s2 = s1.toString();

        $("#wb_Text2").show();
        $("#wb_Text2").text("উৎপাদক গুলো= " + s2);

    });
    //alert("test loading script");
});