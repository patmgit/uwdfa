"use strict";

(function(){

  window.onload = function(){
    let hamburger = $("hamburger");
    let navbar = $("navbar");
    let home = document.querySelector(".home");

    hamburgerClick();
  };

  function hamburgerClick() {
    let hamburger = $("hamburger");
    let navbar = $("navbar");
    hamburger.onclick = toggle;
  }

  function toggle() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Open menu
    navbar.classList.toggle("visible");
  }

  /**
   * Shortcut to get the document element by id
   * @param id - (string) the string value of the ID of the DOM element you are getting
   * @return (element) the DOM element with that particular ID
   */
  function $(id) {
    return document.getElementById(id);
  }

})();
