$(document).ready(function() {
    $(".form-control").css("background-color", "#a0bfde");
    $("#button").on("click", function() {
        console.log("clicked");

        var comment = $("#message-box").val();
        console.log(comment);

        $("#visible-comment").html(comment).css("color", "red");
        return false

    }
    )

    // contact form
    $("#message-box").on("keyup", function() {
        console.log("keyup happened");

        var charCount = $("#message-box").val().length;
        console.log(charCount);

        $("#char-count").html(charCount);

        if (charCount > 50) {
            $("#char-count").css("color", "red");
        } else {
            $("#char-count").css("color", "black");
        }
        ;
    }
    )

    var rows = $(".my-row");
    console.log(rows);
    for (var i = 0; i < rows.length; ++i) {
        if (i % 2 === 0) {
            $(rows[i]).css("background-color", "#5C85AD");
        }
        ;
    }
    ;

    // Javascript API

    function initialize() {
        var mapOptions = {
            center: new google.maps.LatLng(52.4918598,13.427565,18),
            zoom: 10
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            map: map,
            title: 'Click to zoom'
        });
        google.maps.event.addListener(marker, 'click', function() {
            map.setZoom(15);
            map.setCenter(marker.getPosition());
        }
        );
    }
    google.maps.event.addDomListener(window, 'load', initialize);

}
);

$(function () {
      // tooltip on a few words in the about me section.
      $('#item1').tooltip();
      // tooltip on words in the container section.
      $('[data-toggle="tooltip"]').tooltip();
      // scrollspy line
      $('body').scrollspy({ target: ".navbar" });
      // navbar
       var $root = $('html, body');
    $('.navbar-nav a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });
        return false;

    });
    });

//service wrapper show/hide/change background color
$(document).ready(function(){
    $("#design-description, #develop-description, #deploy-description").stop().hide();
});


$(document).ready(function(){
  $(".glyphicon-pencil").hover(function() {
   $(".glyphicon-pencil").stop().css("background","white");
   $("#design-description").stop().show();
}, function() {
   $(".glyphicon-pencil").stop().css("background","#0A3570"); //set it back
   $("#design-description").stop().hide();                 //set it back
});
});

$(document).ready(function(){
  $(".glyphicon-wrench").hover(function() {
   $(".glyphicon-wrench").stop().css("background","white");
   $("#develop-description").stop().show();
}, function() {
   $(".glyphicon-wrench").stop().css("background","#0A3570"); //set it back
   $("#develop-description").stop().hide();                 //set it back
});
});

$(document).ready(function(){
  $(".glyphicon-open").hover(function() {
   $(".glyphicon-open").stop().css("background","white");
   $("#deploy-description").stop().show();
}, function() {
   $(".glyphicon-open").stop().css("background","#0A3570"); //set it back
   $("#deploy-description").stop().hide();                 //set it back
});
});

// pop up windows

jQuery(function($) {

    /************** event to open the popup **************/

    $("a.toPopup1").click(function () {
        loading(); // loading
        setTimeout(function () { // then show popup, deley in .5 second
            loadPopup1(); // function show popup
        }, 500); // .5 second
        return false;
    });

    $("a.toPopup2").click(function () {
        loading(); // loading
        setTimeout(function () { // then show popup, deley in .5 second
            loadPopup2(); // function show popup
        }, 500); // .5 second
        return false;
    });

    $("a.toPopup3").click(function () {
        loading(); // loading
        setTimeout(function () { // then show popup, deley in .5 second
            loadPopup3(); // function show popup
        }, 500); // .5 second
        return false;
    });

    /************** event to close the popup **************/

    $(this).keyup(function (event) {
        if (event.which == 27) {
            disablePopup(); // function close pop up
        }
    });

    $(this).keyup(function (event) {
        if (event.which == 27) {
            disablePopup2(); // function close pop up
        }
    });

    $("#backgroundPopup").click(function () {
        disablePopup(); // function close pop up
    });

    $("#backgroundPopup").click(function () {
        disablePopup2(); // function close pop up
    });

    /************** start: functions. **************/

    function loading() {}

    var popupStatus = 0; // set value

    function loadPopup1() {
        if (popupStatus == 0) { // if value is 0, show popup
            $("#toPopup1").fadeIn(0500); // fadein popup div
            $("#backgroundPopup").css("opacity", "0.7");
            $("#backgroundPopup").fadeIn(0001);
            popupStatus = 1; // and set value to 1
        }
    }

    function loadPopup2() {
        if (popupStatus == 0) { // if value is 0, show popup
            $("#toPopup2").fadeIn(0500); // fadein popup div
            $("#backgroundPopup").css("opacity", "0.7");
            $("#backgroundPopup").fadeIn(0001);
            popupStatus = 1; // and set value to 1
        }
    }

    function loadPopup3() {
        if (popupStatus == 0) { // if value is 0, show popup
            $("#toPopup3").fadeIn(0500); // fadein popup div
            $("#backgroundPopup").css("opacity", "0.7");
            $("#backgroundPopup").fadeIn(0001);
            popupStatus = 1; // and set value to 1
        }
    }

    function disablePopup() {
        if (popupStatus == 1) { // if value is 1, close popup
            $("#toPopup1").fadeOut("normal");
            $("#toPopup2").fadeOut("normal");
            $("#toPopup3").fadeOut("normal");
            $("#backgroundPopup").fadeOut("normal");
            popupStatus = 0; // and set value to 0
        }
    }

    /************** end: functions. **************/

});
