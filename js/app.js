$(".testimonial-slider").slick({
  dots: true,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 1000,
  slickGoTo: 0,
  speed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// =================Our Dedicated Investigators===========================
var shareButtons = document.querySelectorAll(".share-button");
var socialLinksList = document.querySelectorAll(".social-links");

shareButtons.forEach(function (shareButton, index) {
  shareButton.addEventListener("click", function () {
    socialLinksList[index].classList.toggle("hideLink");
  });
});

// up to down button

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 2000) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

// video animation
var modal = document.getElementById("videoPopup");
var btn = document.getElementById("openBtn");
var span = document.getElementById("closeBtn");
var video = document.getElementById("videoPlayer");

btn.onclick = function () {
  modal.style.display = "block";
  // video.play();
};
span.onclick = function () {
  modal.style.display = "none";
  video.pause();
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    video.pause();
  }
};

// video two

var modalTwo = document.getElementById("videoPopupTwo");
var btnTwo = document.getElementById("openBtnTwo");
var spanTwo = document.getElementById("closeBtnTwo");
var videoTwo = document.getElementById("videoPlayerTwo");

btnTwo.onclick = function () {
  modalTwo.style.display = "block";
  // video.play();
};
spanTwo.onclick = function () {
  modalTwo.style.display = "none";
  videoTwo.pause();
};
window.onclick = function (event) {
  if (event.target == modalTwo) {
    modalTwo.style.display = "none";
    videoTwo.pause();
  }
};

// Google Maps
// AIzaSyAZGR13cjZVJxyCDnxS7Bx9qf1SXf56I2I

// function initMap() {
//   // Latitude and longitude of the selected location
//   const myLatLng = {
//     lat: 25.96857573108464,
//     lng: 89.69032766079003,
//   };
//   // create select location
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 12,
//     center: myLatLng,
//   });
//   // info window content
//   var contentString =
//     '<div id="content">' +
//     '<div id="siteNotice">' +
//     "</div>" +
//     '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
//     '<div id="bodyContent">' +
//     "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
//     "sandstone rock formation in the southern part of the " +
//     "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
//     "south west of the nearest large town, Alice Springs; 450&#160;km " +
//     "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
//     "features of the Uluru - Kata Tjuta National Park. Uluru is " +
//     "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
//     "Aboriginal people of the area. It has many springs, waterholes, " +
//     "rock caves and ancient paintings. Uluru is listed as a World " +
//     "Heritage Site.</p>" +
//     '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
//     "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
//     "(last visited June 22, 2009).</p>" +
//     "</div>" +
//     "</div>";

//   // add info window
//   const infowindow = new google.maps.InfoWindow({
//     content: contentString,
//     ariaLabel: "myLatLng",
//   });
//   // const infowindow = new google.maps.InfoWindow({
//   //   content: contentString,
//   // });

//   // The marker, positioned at selected location
//   const marker = new google.maps.Marker({
//     position: myLatLng,
//     map,
//     title: "Uluru (Ayers Rock)",
//   });

//   // const marker = new google.maps.Marker({
//   //   position: myLatLng,
//   //   map: map,
//   //   title: "Hi world",
//   // });

//   // Marker click event: open info window

//   marker.addListener("click", () => {
//     infowindow.open({
//       anchor: marker,
//       map,
//     });
//   });

//   // google.maps.event.addEventListener(marker, "click", function () {
//   //   infoWindow.open(map, marker);
//   // });

//   // open info window on load
//   infoWindow.open(map, marker);
// }
// window.initMap = initMap;

// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
function initMap() {
  const uluru = { lat: -25.363, lng: 131.044 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Uluru",
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map,
    title: "Uluru (Ayers Rock)",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
}

window.initMap = initMap;
