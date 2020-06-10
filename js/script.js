$(document).ready(
  function() {

    // DROPDOWN
    $('.con-dropdown').mouseenter(
      function() {

        $('.con-dropdown .dropdown').fadeOut(50);
        $(this).children('.dropdown').fadeIn(300);
      }
    );
    $('.con-dropdown').mouseleave(
      function() {

        $(this).children('.dropdown').fadeOut(50);
      }
    );
  }
);
