;(function($){
    "use strict";

    /* ==========================================================================
       Preloader
    ========================================================================== */
    $(window).on('load', function() {
         $('#status').fadeOut(); 
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({'overflow':'visible'});
    })

    $(document).ready(function(){

    /* ==========================================================================
        Parallax
    ========================================================================== */
    var $parallax = $('.parallaxie');
    if($parallax.length > 0){
        $parallax.parallaxie({
            speed: .975
        });
    }

     /* ==========================================================================
        Wow
    ========================================================================== */
    new WOW().init();


    /* ==========================================================================
      Mailchimp ajax
    ========================================================================== */
    if($('.mailchimp').length > 0) {
        /*  MAILCHIMP  */
        $('.mailchimp').ajaxChimp({
            language: 'es',
            callback: mailchimpCallback,
            url: "https://gmail.us8.list-manage.com/subscribe/post?u=dd00a6e222a827748e67dd5d6&amp;id=5f045a38b3" //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".
        });
    }

    function mailchimpCallback(resp) {
        if (resp.result === 'success') {
            $('.subscription-success').html(resp.msg).fadeIn(1000);
            $('.subscription-error').fadeOut(500);

        } else if (resp.result === 'error') {
            $('.subscription-error').html(resp.msg).fadeIn(1000);
        }
    }
    $.ajaxChimp.translations.es = {
        'submit': 'Submitting...',
        0: 'We have sent you a confirmation email',
        1: 'Please enter a value',
        2: 'An email address must contain a single @',
        3: 'The domain portion of the email address is invalid (the portion after the @: )',
        4: 'The username portion of the email address is invalid (the portion before the @: )',
        5: 'This email address looks fake or invalid. Please enter a real email address'
    };


    /* ==========================================================================
        Menu click scroll
    ========================================================================== */

    var $navItem = $('.right-nav a, .demo a');
    if($navItem.length > 0 ){
        $navItem.on('click', function (e) {
            $(document).off("scroll");
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
                || location.hostname == this.hostname) {

                var target = $(this.hash),
                headerHeight = $(".navbar").height()-2; // Get fixed header height

                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

                if (target.length) {
                    $('html,body').animate({
                      scrollTop: target.offset().top - headerHeight
                    }, 1000);
                    return false;
                }
            }
        });
    }
     /* ==========================================================================
        Accordion
    ========================================================================== */

    function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
    }
    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);


    /* ==========================================================================
        pricing
    ========================================================================== */
        var e = document.getElementById("filt-monthly"),
        d = document.getElementById("filt-hourly"),
        t = document.getElementById("switcher"),
        m = document.getElementById("monthly"),
        y = document.getElementById("hourly");
        e.addEventListener("click", function(){
          t.checked = false;
          e.classList.add("toggler--is-active");
          d.classList.remove("toggler--is-active");
          m.classList.remove("none");
          y.classList.add("none");
        });

        d.addEventListener("click", function(){
          t.checked = true;
          d.classList.add("toggler--is-active");
          e.classList.remove("toggler--is-active");
          m.classList.add("none");
          y.classList.remove("none");
        });

        t.addEventListener("click", function(){
          d.classList.toggle("toggler--is-active");
          e.classList.toggle("toggler--is-active");
          m.classList.toggle("none");
          y.classList.toggle("none");
        })

    })

})(jQuery); 