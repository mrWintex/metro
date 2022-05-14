$(function () {
    $(".photo-option").on("click", function () {
        $(".photo-wrapper").fadeOut(); $("#product-photo-" + $(this).attr("data-photo-id")).fadeIn();
        console.log("#product-photo-" + $(this).attr("data-photo-id"));
    });
});