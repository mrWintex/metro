$(function () {
    $(".photo-option").on("click", function () {
        $('#photo-slick-container').slick('slickGoTo', $(this).attr("data-photo-id"));
    });

    shown = false;
    $("#menu-list-button").on("click", function () {
        shown = !shown;
        $("#menu-list-button").toggleClass("active", shown);
        $("#menu-list").css("display", (shown ? "block" : "none"));
        $(".menu-list-header").addClass("d-none").removeClass("d-flex");
    });
    $(document).on("click", function (e) {
        if ($(e.target).closest("#menu-list").length === 0 && $(e.target).closest("#menu-list-button").length === 0 && $(e.target).closest("#metro-menu-button").length === 0) {
            shown = false;
            $("#menu-list").css("display", "none");
            $("#menu-list-button").removeClass("active");
            $(".navigation-bottom-mobile").removeClass("d-none").addClass("d-block");
            $(".menu-list-header").addClass("d-none").removeClass("d-flex");
        }
    });
    $("#metro-menu-button").on("click", function(){
        shown = !shown;
        $("#menu-list").css("display", (shown ? "block" : "none"));
        if(shown){
            $(".navigation-bottom-mobile").removeClass("d-block").addClass("d-none"); 
            $(".menu-list-header").removeClass("d-none").addClass("d-flex");
            $(".menu").removeClass("d-none").addClass("d-flex");
        }
        else{
            $(".menu-list-header").addClass("d-none").removeClass("d-flex");
            $(".navigation-bottom-mobile").removeClass("d-none").addClass("d-block"); 
            $(".menu").removeClass("d-flex").addClass("d-none");
        }
    });
    $(".menu-item-link.root").on("click", function(){
        $hasClass = $(this).hasClass("active");
        $(".menu-item-link.root").removeClass("active");
        $(this).toggleClass("active", !$hasClass);
    });
    $("#metro-search").on("focusin", function(){
        ShowDarkFilter();
    }).on("focusout", function(){
        ShowDarkFilter(false);
    });
});

function ShowDarkFilter(show = true){
    if(show)
        $("#dark-filter").addClass("show");
    else
        $("#dark-filter").removeClass("show");
}