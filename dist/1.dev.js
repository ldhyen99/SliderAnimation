"use strict";

document.addEventListener("DOMContentLoaded", function () {
  //Khai bao hieu ung click btn dot chuyen slide
  var btnDot = document.querySelectorAll('.btn-change-slide ul li');
  var slides = document.querySelectorAll('.carousel-slder ul li'); // return mang btnDot

  btnDot.forEach(function (item) {
    item.addEventListener('click', function () {
      //Delete all class btn-active before add
      btnDot.forEach(function (item) {
        item.classList.remove('btn-active');
      });
      this.classList.add('btn-active'); // Handle position when user click on btn, click on -> count numb of position

      var btnActive = this;
      var positionBtn = 0;

      for (positionBtn = 0; btnActive = btnActive.previousElementSibling; positionBtn++) {} // Het vong lap thi bien i = so thu tu


      slides.forEach(function (item) {
        item.classList.remove('slider-active');
        slides[positionBtn].classList.add('slider-active');
      });
    });
  });
});