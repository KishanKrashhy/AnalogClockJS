const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var getDate = new Date();

let hour = getDate.getHours();
let minutes = getDate.getMinutes();
let second = getDate.getSeconds();

let hrPos = (hour * 360 / 12) + (minutes * (360 / 60) / 12);
let minPos = (minutes * 360 / 60) + (second * (360 / 60) / 60);
let secPos = second * 360 / 60;

function run_clock() {

    hrPos = hrPos + (3/360);
    minPos = minPos + (6/60);
    secPos = secPos + 6;

    HOURHAND.style.transform = "rotate(" + hrPos + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPos + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPos + "deg)";
}

var interval = setInterval(run_clock, 1000);

