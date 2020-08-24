/*!
 * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#sideNav",
  });

  // tooltips
  $('[data-toggle="tooltip"').tooltip();

  // skills_help
  $("#skills_help")
    .tooltip({
      title: "조금 사용해봤으며, 흥미가 있고 지속적으로 개발할 기술",
      placement: "right",
    })
    .on("click", function (e) {
      e.preventDefault();
    });

  // project modal
  $("#project_1").on("click", function (e) {
    e.preventDefault();
    $("#project_modal_1").modal("show");
  });
})(jQuery); // End of use strict
