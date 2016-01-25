$(function() {
    $(".menu-button").click(function () {
        $(".mob-menu").toggle("slow");
    });
    $(".mob-menu li a").click(function () {
        $(".mob-menu").hide("slow");
    });
});
