'use strict'
$(document).ready(function () {

    var body = $('body');
    var bodyParent = $('html');

    /* page load as iframe */
    if (self !== top) {
        body.addClass('iframe');
    } else {
        body.removeClass('iframe');
    }

    /* menu open close */
    $('.menu-btn').on('click', function () {
        if (body.hasClass('menu-open') === true) {
            body.removeClass('menu-open');
            bodyParent.removeClass('menu-open');
        } else {
            body.addClass('menu-open');
            bodyParent.addClass('menu-open');
        }

        return false;
    });

    body.on("click", function (e) {
        if (!$('.sidebar').is(e.target) && $('.sidebar').has(e.target).length === 0) {
            body.removeClass('menu-open');
            bodyParent.removeClass('menu-open');
        }

        return true;
    });


    /* Filter button */
    $('.filter-btn').on('click', function () {
        if (body.hasClass('filter-open') === true) {
            body.removeClass('filter-open');
        } else {
            body.addClass('filter-open');
        }

        return false;
    });
    $('.filter-close').on('click', function () {
        if (body.hasClass('filter-open') === true) {
            body.removeClass('filter-open');
        }
    });


    /* menu style switch */
    $('#menu-pushcontent').on('change', function () {
        if ($(this).is(':checked') === true) {
            body.addClass('menu-push-content');
            body.removeClass('menu-overlay');
        }

        return false;
    });

    $('#menu-overlay').on('change', function () {
        if ($(this).is(':checked') === true) {
            body.removeClass('menu-push-content');
            body.addClass('menu-overlay');
        }

        return false;
    });


    /* back page navigation */
    $('.back-btn').on('click', function () {
        window.history.back();
        return false;
    });



    if ($('.footer').length > 0) {
        /** center button click toggle **/
        $('.centerbutton .nav-link').on('click', function () {
            $(this).toggleClass('active')
        })
        /* hide menu active */
        var centerbtnmenu = document.getElementById('menumodal');
        var centerbtn = document.getElementById('centermenubtn');

        centerbtnmenu.addEventListener('hide.bs.modal', function () {
            centerbtn.classList.remove('active')
        })
    }

    /* scroll y limited container height on page  */
    var scrollyheight = Number($(window).height() - $('.header').outerHeight() - $('.footer-info').outerHeight()) - 25;
    $('.scroll-y').height(scrollyheight);

});


$(window).on('load', function () {
    setTimeout(function () {
        $('.loader-wrap').fadeOut('slow');
    }, 1000);

    /* coverimg */
    $('.coverimg').each(function () {
        var imgpath = $(this).find('img');
        $(this).css('background-image', 'url(' + imgpath.attr('src') + ')');
        imgpath.hide();
    })


    /* url path on menu */
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
    $(' .main-menu ul a').each(function () {
        if (this.href === path) {
            $(' .main-menu ul a').removeClass('active');
            $(this).addClass('active');
        }
    });

    /* main container min height */
    $('main').css('min-height', $(window).height());

    if ($('.header.position-fixed').length > 0) {
        $('main').css('padding-top', $('.header').outerHeight() + 10);
    }
    if ($('.footer').length > 0) {
        $('main').css('padding-bottom', $('.footer').outerHeight() + 10);
    }


});


$(window).on('scroll', function () {

    /* scroll from top and add class */
    if ($(document).scrollTop() > '10') {
        $('.header.position-fixed').addClass('active');
    } else {
        $('.header.position-fixed').removeClass('active');
    }
});


$(window).on('resize', function () {
    /* main container min height */
    $('main').css('min-height', $(window).height())
});



// Javascript Pribadi

function password_show_hide() {

    var x = document.getElementById("password");

    var show_eye = document.getElementById("show_eye");

    var hide_eye = document.getElementById("hide_eye");

    hide_eye.classList.remove("d-none");

    if (x.type === "password") {

      x.type = "text";

      show_eye.style.display = "none";

      hide_eye.style.display = "block";

    } else {

      x.type = "password";

      show_eye.style.display = "block";

      hide_eye.style.display = "none";

    }

  }

// OTP
let digitValidate = function(ele){
    ele.value = ele.value.replace(/[^0-9]/g,'');
  }

  let tabChange = function(val){
      let ele = document.querySelectorAll('input');
      if(ele[val-1].value != ''){
        ele[val].focus()
      }else if(ele[val-1].value == ''){
        ele[val-2].focus()
      }   
   }

// Tab Detail Materi
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
      // Get the element with id="defaultOpen" and click on it
      document.getElementById("defaultOpen").click();


// Tab Tugas & Ujian Wali
function openCity(evt, cityName) {
    var i, tabcontent_wali, tablinks_wali;
    tabcontent_wali = document.getElementsByClassName("tabcontent-wali");
    for (i = 0; i < tabcontent_wali.length; i++) {
      tabcontent_wali[i].style.display = "none";
    }
    tablinks_wali = document.getElementsByClassName("tablinks-wali");
    for (i = 0; i < tablinks_wali.length; i++) {
      tablinks_wali[i].className = tablinks_wali[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
      // Get the element with id="defaultOpen" and click on it
      document.getElementById("defaultOpen").click();