document.addEventListener("DOMContentLoaded", ready);

function ready() {

    setTimeout(function() {

        $(".preloader").fadeOut(700);

    }, 800);   

}

$(document).ready(function() {

    var offsetTopWrapp = parseInt($(".wrapper").css("margin-top"));
    var offsetBottomWrapp = parseInt($(".wrapper").css("margin-bottom"));

    var hide_element;


    var countElementsInputIndex;
    var countElementsVal;

    // -------------------------------------------------------------------

    var promoSliderHeight = $(".promo-slider").height();
    var countSlides = $(".promo-slider .promoslider-txt").length - 1;
    var countSlidesIndex;
    var promoSlideTxtHeight;
    var promoSlideTxtTopCoor;

    // -------------------------------------------------------------------

    $(window).resize(function() {


        $(".wrapper").css({"min-height" : ( $(window).height() - offsetTopWrapp - offsetBottomWrapp ) + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // ------------------------------------------------------------------------------

        promoSliderHeight = $(".promo-slider").height();

    });


    $(function() {

        $(".wrapper").css({"min-height" : ( $(window).height() - offsetTopWrapp - offsetBottomWrapp ) + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    });

    // -----------------------------------------------

    $(function() {

        // var promoSliderHeight = $(".promo-slider").height();
        // var countSlides = $(".promo-slider .promoslider-txt").length - 1;
        // var countSlidesIndex;
        // var promoSlideTxtHeight;
        // var promoSlideTxtTopCoor;

        for(countSlidesIndex = 0; countSlidesIndex <= countSlides; countSlidesIndex++) {

            promoSlideTxtHeight = $(".promo-slider .promoslider-txt:eq("+ countSlidesIndex +")").height();

            promoSlideTxtTopCoor = ( promoSliderHeight - promoSlideTxtHeight ) / 2;

            $(".promo-slider .promoslider-txt:eq("+ countSlidesIndex +")").css({"top" : promoSlideTxtTopCoor + "px"});

        }

    });

    // -----------------------------------------------

    $(function() {

        $(".cart-btn").click( function() {

            $(".cart-dropdown-box").fadeIn(200);

        });

    });

    // -----------------------------------------------


    $(document).mouseup(function (e){

        hide_element = $('.search-form, .sign-form, .cart-dropdown-box');

        if (!hide_element.is(e.target)

            && hide_element.has(e.target).length === 0) {

            hide_element.fadeOut(300);
        }

    });


    // -----------------------------------------------

    $(function() {

        $(".search-btn").click(function() {

            $(".search-form").fadeIn(300);

        });


        $(".sign-btn").click(function() {

            $(".sign-form").fadeIn(300);

        });

    });

    // ----------------------------------------------------------------

    $(function() {

        $(".count-elements button").click(function() {

            countElementsInputIndex = $(this).parent(".count-elements").index(".count-elements");

            countElementsVal = $(".count-elements-val:eq("+ countElementsInputIndex +")").val();

            if( $(this).hasClass("elem-minus-btn") && countElementsVal > 0 ) {

                countElementsVal--;

            } else if( $(this).hasClass("elem-plus-btn") ) {

                countElementsVal++;

            }

            $(".count-elements-val:eq("+ countElementsInputIndex +")").val(countElementsVal);

        });

    });




});
