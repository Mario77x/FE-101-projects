$(document).ready(function() {
  $(".activate-mm").click(function(e) {
    // #dont follow the link
    e.preventDefault();
    // #show our modal
    $(".m-wrapper").fadeIn();
    // #add the .modal-on class to <body>
    $("body").addClass("mm-on");
  });
  $(".exit").click(function(e) {
    e.preventDefault();
    //basically the opposite of activate
    $(".m-wrapper").hide();
    $("body").removeClass("mm-on");
  });
    $(".no").click(function(e) {
    e.preventDefault();
    //basically the opposite of activate
    $(".m-wrapper").hide();
    $("body").removeClass("mm-on");
  });
});