$(function(){
    $selects = $(".cstm-select");
    $options = $(".option");

    $selects.on("click", function(){
        $(this).children(".select-box").toggleClass("active");
    });
    $options.on("click", function(){
        HideSelectBox(this);
        $(this).closest(".select-box").prev(".text").text($(this).children(".option-value").text());
    });
    $(document).on("click", function(e){
        if($(e.target).closest(".cstm-select").length !== 0) return;
        HideAllSelectBox();
    });

    function HideSelectBox(target){
        $(target).next(".select-box").removeClass("active");
    }

    function HideAllSelectBox(){
        $(".select-box").removeClass("active");
    }
});
