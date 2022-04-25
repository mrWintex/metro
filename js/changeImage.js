$(function(){
    $(".photo-option").on("click", function() {
        $(".photo-wrapper").css("display", "none");
        $("#"+$(this).attr("data-photo-id")).css("display", "block");
    });
});