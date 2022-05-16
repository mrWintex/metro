$(function () {
    $(".photo-option").on("click", function () {
        $(".photo-wrapper").removeClass("d-flex").addClass("d-none");
        $("#product-photo-" + $(this).attr("data-photo-id")).removeClass("d-none").addClass("d-flex");
    });

    shown = false;
    $("#menu-list-button").on("click", function () {
        shown = !shown;
        $("#menu-list-button").toggleClass("active", shown);
        $("#menu-list").css("display", (shown ? "block" : "none"));
    });
    $(document).on("click", function (e) {
        if ($(e.target).closest("#menu-list").length === 0 && $(e.target).closest("#menu-list-button").length === 0) {
            shown = false;
            $("#menu-list").css("display", "none");
            $("#menu-list-button").removeClass("active");
        }
    });
});