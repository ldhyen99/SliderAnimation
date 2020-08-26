"use strict";

document.addEventListener("DOMContentLoaded", function () {
  //Khai bao hieu ung click btn dot chuyen slide
  var btnDot = document.querySelectorAll('.btn-change-slide ul li'); // return mang btnDot

  btnDot.forEach(function (item) {
    item.addEventListener('click', function () {
      //Delete all class btn-active before add
      btnDot.forEach(function (item) {
        item.classList.remove('btn-active');
      });
      this.classList.add('btn-active');
    });
  });
});