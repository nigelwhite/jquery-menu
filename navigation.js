// #navigation is set to display none in css
// .nav-container has min height 48px to reserve space on the page, even when #navigation is hidden
// on page load navigation.html is inserted and then #navigation is displayed
// not perfect but it stops the worst of the flicker

// going to need to tinker with this somehow for mobile.....

$(function () {
  $("#navigation").load("navigation.html");
  $("#navigation").css("display", "block");
});
