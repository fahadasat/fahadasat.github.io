$(".commands").click(function () {
  let commandName = getCommandName($(this.children[0])[0].innerHTML);
  // console.log($(this.children[0])[0].innerHTML);
  $(this.children[0]).next().toggle();
  let visible = $(this.children[0]).next().is(":visible");
  if (visible) {
    $("div", this.children[0]).html(` &#8681 ${commandName} </span> `);
  } else {
    $("div", this.children[0]).html(` &#8680 ${commandName}</span> `);
  }
});

function showAll() {
  showInfoCommands("block");
  showFunCommands("block");
  showMiscCommands("block");
  showUtilityCommands("block");
  document.getElementById("all").style.backgroundColor = "#49bf9d";
  document.getElementById("info").style.backgroundColor = "#2c2c34";
  document.getElementById("fun").style.backgroundColor = "#2c2c34";
  document.getElementById("misc").style.backgroundColor = "#2c2c34";
  document.getElementById("utility").style.backgroundColor = "#2c2c34";
}

function showInfoCommands(display) {
  document.getElementById("all").style.backgroundColor = "#2c2c34";
  document.getElementById("info").style.backgroundColor = "#49bf9d";
  document.getElementById("fun").style.backgroundColor = "#2c2c34";
  document.getElementById("misc").style.backgroundColor = "#2c2c34";
  document.getElementById("utility").style.backgroundColor = "#2c2c34";
  for (
    let i = 0;
    i < document.getElementsByClassName("info_commands").length;
    i++
  ) {
    document.getElementsByClassName("info_commands")[i].style.display = display;
  }
}

function showFunCommands(display) {
  document.getElementById("all").style.backgroundColor = "#2c2c34";
  document.getElementById("info").style.backgroundColor = "#2c2c34";
  document.getElementById("fun").style.backgroundColor = "#49bf9d";
  document.getElementById("misc").style.backgroundColor = "#2c2c34";
  document.getElementById("utility").style.backgroundColor = "#2c2c34";
  for (
    let i = 0;
    i < document.getElementsByClassName("fun_commands").length;
    i++
  ) {
    document.getElementsByClassName("fun_commands")[i].style.display = display;
  }
}

function showMiscCommands(display) {
  document.getElementById("all").style.backgroundColor = "#2c2c34";
  document.getElementById("info").style.backgroundColor = "#2c2c34";
  document.getElementById("fun").style.backgroundColor = "#2c2c34";
  document.getElementById("misc").style.backgroundColor = "#49bf9d";
  document.getElementById("utility").style.backgroundColor = "#2c2c34";
  for (
    let i = 0;
    i < document.getElementsByClassName("misc_commands").length;
    i++
  ) {
    document.getElementsByClassName("misc_commands")[i].style.display = display;
  }
}

function showUtilityCommands(display) {
  document.getElementById("all").style.backgroundColor = "#2c2c34";
  document.getElementById("info").style.backgroundColor = "#2c2c34";
  document.getElementById("fun").style.backgroundColor = "#2c2c34";
  document.getElementById("misc").style.backgroundColor = "#2c2c34";
  document.getElementById("utility").style.backgroundColor = "#49bf9d";
  for (
    let i = 0;
    i < document.getElementsByClassName("utility_commands").length;
    i++
  ) {
    document.getElementsByClassName("utility_commands")[i].style.display =
      display;
  }
}

function getCommandName(text) {
  // console.log(text);
  let commandName = "";
  let temp = text.trim().split(" ");

  for (let i = 2; i < temp.length; i++) {
    if (temp[i] === "div") break;
    commandName += ` ${temp[i]}`;
  }
  return commandName;
}

(function ($) {
  var $window = $(window),
    $body = $("body"),
    $header = $("#header"),
    $footer = $("#footer"),
    $main = $("#main"),
    settings = {
      // Parallax background effect?
      parallax: true,

      // Parallax factor (lower = more intense, higher = less intense).
      parallaxFactor: 20,
    };

  // Breakpoints.
  breakpoints({
    xlarge: ["1281px", "1800px"],
    large: ["981px", "1280px"],
    medium: ["737px", "980px"],
    small: ["481px", "736px"],
    xsmall: [null, "480px"],
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Touch?
  if (browser.mobile) {
    // Turn on touch mode.
    $body.addClass("is-touch");

    // Height fix (mostly for iOS).
    window.setTimeout(function () {
      $window.scrollTop($window.scrollTop() + 1);
    }, 0);
  }

  // Footer.
  breakpoints.on("<=medium", function () {
    $footer.insertAfter($main);
  });

  breakpoints.on(">medium", function () {
    $footer.appendTo($header);
  });

  // Header.

  // Parallax background.

  // Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
  if (browser.name == "ie" || browser.mobile) settings.parallax = false;

  if (settings.parallax) {
    breakpoints.on("<=medium", function () {
      $window.off("scroll.strata_parallax");
      $header.css("background-position", "");
    });

    breakpoints.on(">medium", function () {
      $header.css("background-position", "left 0px");

      $window.on("scroll.strata_parallax", function () {
        $header.css(
          "background-position",
          "left " +
            -1 * (parseInt($window.scrollTop()) / settings.parallaxFactor) +
            "px"
        );
      });
    });

    $window.on("load", function () {
      $window.triggerHandler("scroll");
    });
  }

  // Main Sections: Two.

  // Lightbox gallery.
  $window.on("load", function () {
    $("#two").poptrox({
      caption: function ($a) {
        return $a.next("h3").text();
      },
      overlayColor: "#2c2c2c",
      overlayOpacity: 0.85,
      popupCloserText: "",
      popupLoaderText: "",
      selector: ".work-item a.image",
      usePopupCaption: true,
      usePopupDefaultStyling: false,
      usePopupEasyClose: false,
      usePopupNav: true,
      windowMargin: breakpoints.active("<=small") ? 0 : 50,
    });
  });
})(jQuery);
