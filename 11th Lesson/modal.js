$(document).ready(function() {
  $(".activate-modal").click(function(e) {
    // #dont follow the link
    e.preventDefault();
    // #show our modal
    $(".modal-wrapper").show();
    // #add the .modal-on class to <body>
    $("body").addClass("modal-on");
  });
  $(".exit").click(function(e) {
    e.preventDefault();
    //basically the opposite of activate
    $(".modal-wrapper").hide();
    $("body").removeClass("modal-on");
  });
});