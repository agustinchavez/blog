var myKitties = [
{
    title: "Chcago Bikes",
    pic: "img/bikechicagodemo.png"
},
{
    title: "Weather Now",
    pic: "img/weather_code_pen.png"
},
{
    title: "Twitch Tv",
    pic: "img/twitch_tv.png"
},
{
    title: "Fourth Project",
    pic: "img/coming_soon.jpg"
}
];

$(document).ready(function() {
    $(".form-control").css("background-color", "pink");
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

    // work pictures
    for (var i = 0; i < myKitties.length; ++i) {
        $("#" + i).css("background-image", "url(" + myKitties[i].pic + ")");
    }
    ;

    $(".image").mouseenter(function() {
        console.log(myKitties[this.id].title);
        $(this).html("<p class='info'><span class='proj-title'>Title:</span> " + myKitties[this.id].title + "</p>");
    }
    ).mouseleave(function() {
        $("p.info").html("");
    }
    );

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
      $('#[item1]').tooltip();
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