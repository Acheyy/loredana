document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-carousel", {
    width: "100%",
    height: "400px",
    pagination: false,
    loop: true,
    breakpoints: {
      4000: { perPage: 5, width: "100%" },
      1300: { perPage: 3 },
      1000: { perPage: 2 },
      600: { perPage: 1 },
    },
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
  } else {
    if (currentScrollPos <= 100) {
      removeStuck();
    }
  }
  prevScrollPos = currentScrollPos;
});
function removeStuck() {
  const stuck = document.querySelector(".stuck"); // Select the element with the "stuck" class using jQuery
  if (stuck) {
    stuck.classList.remove("stuck");
  }
}
