$( document ).ready(function() {
    $(".button").mouseover(function () {
        const social = $(this).data("type");
        var socialLink = $(this).attr("href");

        $(".social-address-container").html('<h3 class="social-address '+ social +'">'+ socialLink +'</h3>');
    });

    $(".button").mouseout(function () {
        const social = $(this).data("type");
        console.log(social);
        $(".social-address-container").html('');
    });

});