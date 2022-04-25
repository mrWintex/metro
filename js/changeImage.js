$(function(){
    $(".photo-option").on("click", function() {
        $(".photo-wrapper").removeClass("d-flex").addClass("d-none");
        $("#product-photo-"+$(this).attr("data-photo-id")).removeClass("d-none").addClass("d-flex");
    });
});