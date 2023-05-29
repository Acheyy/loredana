/* <![CDATA[ */
var flatsomeVars = {
  lightbox: {
    close_markup:
      '<button title="%title%" type="button" class="mfp-close"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>',
    close_btn_inside: false,
  },
  user: { can_edit_pages: false },
  i18n: { mainMenu: "Main Menu" },
};
/* ]]> */
var picker = new Pikaday({
  field: document.getElementById("last-period"),
  format: "DD/MM/YYYY",
  onSelect: function () {
    console.log(this.getMoment().format("DD/MM/YYYY"));
  },
});
// Show date picker when calendar icon is clicked
document.getElementById("calendar-icon").addEventListener("click", function () {
  picker.show();
});

function calculateDueDate() {
  var lastPeriodInput = document.getElementById("last-period");
  if (!lastPeriodInput.value) {
    document.getElementById("due-date").innerHTML = "Vă rugăm selectați data.";
    return;
  }

  var lastPeriod = moment(lastPeriodInput.value, "DD/MM/YYYY");

  if (lastPeriod.isValid()) {
    // Calculate date of conception (2 weeks after last period)
    var conceptionDate = moment(lastPeriod).add(14, "days");

    // Calculate due date (40 weeks after last period)
    var dueDate = moment(lastPeriod).add(280, "days");

    document.getElementById("due-date").innerHTML =
      "Data estimată a conceperii: <strong>" +
      conceptionDate.format("DD/MM/YYYY") +
      "</strong><br>Data probabilă a nașterii: <strong>" +
      dueDate.format("DD/MM/YYYY") +
      "</strong>";
  } else {
    document.getElementById("due-date").innerHTML =
      "Vă rugăm să introduceți o dată validă.";
  }
}

jQuery(document).ready(function(){
  jQuery('a').on('click', function(event){
      if(this.hash !== ""){
          event.preventDefault();

          var hash = this.hash;

          jQuery('html, body').animate({
              scrollTop: jQuery(hash).offset().top
          }, 800, function(){
              window.location.hash = hash;
          });
      }
  });
});