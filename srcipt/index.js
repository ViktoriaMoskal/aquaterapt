$(document).ready(function () {
    // первый слайдер
    $('.slider').slick({
        arrows: false, //стрелки прячем
        fade: true,  //затухание
        autoplay: true, //автоматическре переключенние слайда
        autoplaySpeed: 2000 //интервал в миллсекундах
    })
    // второй слайдер
    $('.review').slick({
        dots: true, // точки показываються 
        arrows: false,
        variableWidth: true, //адаптивная ширина
        centerMode: true, //уст по центру слайд
        slideToShow: 3, //показывает 3 слайда
        slideToScroll: 1, //скролить по одному 
        speed: 1000, //скорость слайдинга
        centerPadding: "0px",
        responsive: [
            {
                breakpoint: 705,
                settings: {
                    dots: false,
                    slideToShow: 1,
                    // autoplay: true,
                    // autoplaySpeed: 2000,
                    variableWidth: false,
                }
            }
        ]
    })
})

"use strict"
let map;
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 50.272796, lng: 30.31428 },
        zoom: 8
    })
}

