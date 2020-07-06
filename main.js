"use strict";

function realtimeClock(){
    let rtClock = new Date();
    let hours = rtClock.getHours();
    let minutes = rtClock.getMinutes();
    let seconds = rtClock.getSeconds();

    let amPm = ( hours < 12 ) ? "AM" : "PM";

    hours =  ( hours < 12 ) ? hours - 12 : hours;

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    document.getElementById("clock").innerHTML =
    hours + " : " + minutes + " : " + seconds + " " + amPm;
    let t = setTimeout(realtimeClock, 500);
}

setInterval(function () {
    var hours = new Date().getHours();
    $("#hours").html((hours < 10 ? "0" : "") + hours);

    if (hours >= 10 && hours < 12) {
         if($("body").css("background-image").indexOf("sleeping.jpeg")==-1){
             $("body").css("background-image", "url(../img/sleeping.jpeg)");
         }
    }
    else if (hours >=12  && hours < 2) {
        if($("body").css("background-image").indexOf("eating.jpeg")==-1){
            $("body").css("background-image", "url(../img/eating.jpeg)");
        }
   } 
   else if (hours > 2 && hours < 4) {
    if($("body").css("background-image").indexOf("coding.jpeg")==-1){
        $("body").css("background-image", "url(../img/coding.jpeg)");
    }
}
  else if (hours > 4 && hours < 8) {
    if($("body").css("background-image").indexOf("out.jpeg")==-1){
        $("body").css("background-image", "url(../img/out.jpeg)");
    }
  }else {
         if($("body").css("background-image").indexOf("bg.jpeg")==-1){
            $("body").css("background-image", "url(../img/bg.jpeg)");
         }
    }
}, 1000);