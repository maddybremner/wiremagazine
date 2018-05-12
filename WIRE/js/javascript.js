$(document).ready(function() {


    $(".button").click(function() {

        if ($('.menu').css('display') == 'none') {
            $(".menu").show("slide", 300);
            $(".button").addClass("rotate");
        }

        else {
            $('.menu').hide('slide', 300);
            $(".button").removeClass("rotate");
        }

    });


    $(function () {
        $("#slides2").slidesjs({
            width: 580,
            height: 500

        });
    });

    $(function () {
        $("#slides3").slidesjs({
            width: 580,
            height: 386

        });
    });

    $(function(){
        $("#slides").slidesjs({
            effect: {
                slide: {
                    // Slide effect settings.
                    speed: 500
                    // [number] Speed in milliseconds of the slide animation.
                }

            }
        });
    });


});