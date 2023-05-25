document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-carousel", {
    width: "400px",
    height: "400px",
  }).mount();
});
var flatsomeVars = {
  lightbox: {
    close_markup:
      '<button title="%title%" type="button" class="mfp-close"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>',
    close_btn_inside: false,
  },
  user: { can_edit_pages: false },
  i18n: { mainMenu: "Main Menu" },
};
var prevScrollPos = jQuery(window).scrollTop();

jQuery(window).scroll(function () {
  var currentScrollPos = jQuery(window).scrollTop();

  if (currentScrollPos > prevScrollPos) {
    // Scrolling down
    console.log("Scrolling down");
  } else {
    // Scrolling up
    console.log("Scrolling up");
    console.log(currentScrollPos);
    if (currentScrollPos === 0) {
      removeStuck();
      console.log("da");
    }
  }

  prevScrollPos = currentScrollPos;
});
function removeStuck() {
  const stuck = document.querySelector(".stuck"); // Select the element with the "stuck" class using jQuery
  console.log(stuck);
  if (stuck) {
    stuck.classList.remove("stuck");
  }
}
