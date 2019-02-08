$(document).ready(function() {
    $("#InlineFrame1").hide();
    $("#wb_Text2").hide();
    $("#wb_Text1").css({"background-color":"#FFFFFF"});
    $("#Button1").click(function() {
        var a = $("#Editbox1").val();
        var s1 = dsmath.factor(a);
        var s2 = s1.toString();
        var s3=s2.replace(/,/g ,", ")
        $("#wb_Text2").show();
        $("#wb_Text2").text("উৎপাদক গুলো= " + s3);

    });
    //alert("test loading script");
});