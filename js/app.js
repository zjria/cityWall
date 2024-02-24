$(".testimonial-slider").slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1000,
  slickGoTo: 0,
  speed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
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

// =================Our Dedicated Investigators===========================
var shareButtons = document.querySelectorAll(".share-button");
var socialLinksList = document.querySelectorAll(".social-links");

shareButtons.forEach(function (shareButton, index) {
  shareButton.addEventListener("click", function () {
    socialLinksList[index].classList.toggle("show");
  });
});
