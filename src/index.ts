import "./index.html"
import "./index.scss"
import $ from 'jquery';
import 'slick-carousel';

$(function () {
  $(".slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: $(".prev_button"),
    nextArrow: $(".next_button"),
  });

  $(".carrousel_up").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1000,
    vertical: true,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    centerMode: false,
  });

  $(".carrousel_down").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1000,
    vertical: true,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    centerMode: false,
  });

  $("#burger").on( "click", function () {
    $(".navigation").toggleClass("active");
  });

  $(".nav_link").on( "click", function () {
    $(".navigation").removeClass("active");
  });
});
