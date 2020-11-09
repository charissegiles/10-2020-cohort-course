var currentPosition = 0;
var nextImage = function () {
  currentPosition = currentPosition - 500;
  document.getElementById("imageSlider2").style.transform =
    "translateX(" + currentPosition + "px)";
};
var prevImage = function () {
  currentPosition = currentPosition + 500;
  document.getElementById("imageSlider2").style.transform =
    "translateX(" + currentPosition + "px)";
};

//test
var next = function () {
  if (currentPosition > -2000) {
    currentPosition = currentPosition - 500;
    document.getElementById("imageSlider2").style.transform =
      "translateX(" + currentPosition + "px)";
  }
};
var prev = function () {
  if (currentPosition < 0) {
    currentPosition = currentPosition + 500;
    document.getElementById("imageSlider2").style.transform =
      "translateX(" + currentPosition + "px)";
  }
};

setTimeout(nextImage, 1000);
setTimeout(nextImage, 2000);
setTimeout(nextImage, 3000);
setTimeout(nextImage, 4000);
setTimeout(prevImage, 5000);
setTimeout(prevImage, 6000);
setTimeout(prevImage, 7000);
setTimeout(prevImage, 8000);
