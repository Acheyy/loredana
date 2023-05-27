jQuery(document).ready(function () {
  function initialize() {
    console.log("da");
    var styles = {
      flatsome: [
        {
          featureType: "administrative",
          stylers: [{ visibility: "on" }],
        },
        {
          featureType: "road",
          stylers: [{ visibility: "on" }, { hue: "#af59b4" }],
        },
        {
          stylers: [
            { visibility: "on" },
            { hue: "#af59b4" },
            { saturation: 37 },
          ],
        },
      ],
    };

    var myLatlng = new google.maps.LatLng(43.964264, 25.337008);
    var myOptions = {
      zoom: 17,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      mapTypeId: "flatsome",
      draggable: true,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.TOP_LEFT,
      },
      // panControl: true,
      // panControlOptions: {
      //   position: google.maps.ControlPosition.TOP_LEFT
      // },
      mapTypeControl: true,
      mapTypeControlOptions: {
        position: google.maps.ControlPosition.TOP_LEFT,
      },
      // scaleControl: true,
      // scaleControlOptions: {
      //   position: google.maps.ControlPosition.TOP_LEFT
      // },
      streetViewControl: true,
      streetViewControlOptions: {
        position: google.maps.ControlPosition.TOP_LEFT,
      },
      // overviewMapControl: true,
      // overviewMapControlOptions: {
      //   position: google.maps.ControlPosition.TOP_LEFT
      // },
      scrollwheel: false,
      disableDoubleClickZoom: true,
    };
    var map = new google.maps.Map(
      document.getElementById("map-1069635629-inner"),
      myOptions
    );
    var styledMapType = new google.maps.StyledMapType(styles["flatsome"], {
      name: "flatsome",
    });
    map.mapTypes.set("flatsome", styledMapType);

    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: "",
    });
  }

  if (!(typeof google === "object" && typeof google.maps === "object")) {
    return;
  }

  initialize();
  google.maps.event.addDomListener(window, "resize", initialize);
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
