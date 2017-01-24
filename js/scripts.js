$(document).ready(function() {

    //   preload
    // $(window).on('load', function () {

    //     setTimeout(function() {

    //         $(".preload-bg").fadeOut(500);

    //     }, 700);
  

    // });



    var offsetTopWrapp = parseInt($(".wrapper").css("margin-top"));
    var offsetBottomWrapp = parseInt($(".wrapper").css("margin-bottom"));



    $(window).resize(function() {


        $(".wrapper").css({"min-height" : ( $(window).height() - offsetTopWrapp - offsetBottomWrapp ) + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    });


    $(function() {

        $(".wrapper").css({"min-height" : ( $(window).height() - offsetTopWrapp - offsetBottomWrapp ) + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    });


    // -----------------------------------------------

    $(function() {

        $(".cart-btn").click( function() {

            $(".cart-dropdown-box").fadeIn(200);

        });

        $("*").click( function() {

            if( $(this).hasClass("cart-dropdown-box") ||  $(this).hasClass("cart-btn")) {

                return false;

            } else {

                $(".cart-dropdown-box").fadeOut(200);

            }

        });

    });

    // -----------------------------------------------

    // $(function() {

    //     var mainNavLinkIndex;

    //     $(".main-nav-link").bind({

    //       mouseenter: function() {

    //         mainNavLinkIndex = $(".main-nav-link").index(this);

    //         $(".main-nav-link:eq(" + mainNavLinkIndex + ")").addClass("pseudo_none");
    //         $(".main-nav-link:eq(" + mainNavLinkIndex + ")").addClass("active");

    //         // $(".main-nav-link:eq(" + mainNavLinkIndex + ") + .inner-nav").addClass("show");

    //         $(".main-nav-link:eq(" + ( mainNavLinkIndex - 1 ) + ")").addClass("pseudo_after");

    //         $(".main-nav-link:eq(" + ( mainNavLinkIndex + 1 ) + ")").addClass("pseudo_before");

    //       },

    //       mouseleave: function() {

    //         mainNavLinkIndex = $(".main-nav-link").index(this);

    //         setTimeout(function() {




    //             if($(".main-nav-link:eq("+ mainNavLinkIndex +")").next(".inner-nav").hasClass("show")) {

    //                 return true;

    //             } else {

    //                 $(".main-nav-link:eq(" + mainNavLinkIndex + ")").removeClass("pseudo_none");
                   
    //                 $(".main-nav-link:eq(" + mainNavLinkIndex + ") + .inner-nav").removeClass("show");

    //                 $(".main-nav-link:eq(" + mainNavLinkIndex + ")").removeClass("active");

    //                 $(".main-nav-link:eq(" + ( mainNavLinkIndex - 1 ) + ")").removeClass("pseudo_after");

    //                 $(".main-nav-link:eq(" + ( mainNavLinkIndex + 1 ) + ")").removeClass("pseudo_before");

    //             }

    //         }, 300);

    //       }

    //     });

    // });

    // $(".main-nav-link + .inner-nav").bind({

    //     mouseenter: function() {

    //         $(this).addClass("show");

    //     }, mouseleave: function() {

    //         $(this).removeClass("show");

    //         $(this).prev(".main-nav-link").removeClass("active");

    //     }

    // });


    // $(function() {

    //     var countMainNavLinks = $(".main-nav-link").length - 1;
    //     var countMainNavLinksIndex;

    //     console.log(countMainNavLinks);

    //     for( countMainNavLinksIndex = 0; countMainNavLinksIndex <= countMainNavLinks; countMainNavLinksIndex++ ) {

    //         if( $(".main-nav-link li:eq("+ countMainNavLinksIndex +") div").hasClass("inner-nav") ) {

    //             $(".main-nav-list li:eq("+ countMainNavLinksIndex +")").addClass("with-inner-nav");

    //         }

    //     }

    // });


    // -----------------------------------------------

    $(function() {

        $(".search-btn").click(function() {

            $(".search-form").fadeIn(300);

        });


        $(".sign-btn").click(function() {

            $(".sign-form").fadeIn(300);

        });

    });




});
