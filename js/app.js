$(document).ready(function () {
  // Start Back To Top
  $(".btn-backtotops").hide();
  $(window).scroll(function () {
    let getscrolltop = $(this).scrollTop();
    console.log(getscrolltop);

    if (getscrolltop >= 370) {
      $(".btn-backtotops").fadeIn(1000);
    } else {
      $(".btn-backtotops").fadeOut(1000);
    }
  });
  // End Back To Top

  // Start Headers

  // Start Nav

  $(".navbuttons").click(function () {
    $(".navbuttons").toggleClass("crossxs");
  });

  $(window).scroll(function () {
    let getscrolltop = $(this).scrollTop();
    console.log("getscrolltop");

    if (getscrolltop >= 200) {
      $(".navbar").addClass("navmenus");
    } else {
      $(".navbar").removeClass("navmenus");
    }
  });

  // End Nav

  // End Headers

  // Start properties

  $(".properitylists").click(function () {
    // for acitve items
    // $(this).addClass("activeitems");
    // $(this).siblings().removeClass("activeitems");
    $(this).addClass("activeitems").siblings().removeClass("activeitems");

    // for filter
    let getattvalue = $(this).attr("data-filter");
    console.log(getattvalue);

    if (getattvalue === "all") {
      $(".filters").show("slide", 500);
    } else {
      $(".filters")
        .not("." + getattvalue)
        .hide("slide", 500);

      $(".filters")
        .filter("." + getattvalue)
        .show("slide", 500);
    }
  });

  //For image overlay (or) Lightbox2
  lightbox.option({
    showImageNumberLabel: false,
  });
});
// End properties

//Start Adv

//End Adv

// Start Footer
const getyear = $("#getyear");
const getFullYear = new Date().getUTCFullYear();
getyear.text(getFullYear);
// End Footer
