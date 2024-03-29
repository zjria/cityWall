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

// home fore
// navbar header field

const form = document.querySelector("form");
form.addEventListener("click", () => {
  form.classList.add("active");
});
