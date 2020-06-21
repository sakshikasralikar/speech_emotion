$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});
function myFunction(a) {
  
   var myWindow = window.open("", "_self");
  myWindow.document.write("<p>I replaced the current window.</p>");
}
function myFunction(b) {
  window.open(, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,width=100%,height=100%");
}
function myFunction(c) {
  window.open(, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,width=100%,height=100%");
}
function myFunction(d) {
  window.open(, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,width=100%,height=100%");
}