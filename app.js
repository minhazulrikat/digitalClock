let Hours = document.getElementById("hours");
let Minutes = document.getElementById("minutes");
let Seconds = document.getElementById("Seconds");
let AmPm = document.getElementById("ampm"); 
setInterval(() => {
    let date = new Date();
    let timeHour = date.getHours();
    let timeMinute = date.getMinutes();
    let timeSecond = date.getSeconds();
   
    let hour12 = timeHour % 12;
    if (hour12 === 0) hour12 = 12; // 0 becomes 12

    // determine AM/PM
    let ampm = timeHour < 12 ? "AM." : "PM.";

    Hours.innerText = hour12;
    Minutes.innerText = timeMinute;
    Seconds.innerText = timeSecond;
    AmPm.innerText = ampm; // display AM/PM
}, 1000);


