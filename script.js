
// ----------------- CARD TEXT SECTION START -----------------
// ----------------- CARD TEXT SECTION START -----------------
// ----------------- CARD TEXT SECTION START -----------------
let arrivalCard = document.querySelectorAll('.new-arrival-card');
let move = (arrivalCard[0].offsetWidth + 20) * 3;
let newArrival = setInterval(() => {
    if (move >= ((arrivalCard[0].offsetWidth + 20) * (arrivalCard.length / 2))) {
        move = 0;
    }
    for (let i = 0; i < arrivalCard.length; i++) {
        arrivalCard[i].style.transform = `translateX(-${move}px)`;
    }
    move += (arrivalCard[0].offsetWidth + 20) * 3;
}, 3000);
// ----------------- CARD TEXT SECTION END -----------------
// ----------------- CARD TEXT SECTION END -----------------
// ----------------- CARD TEXT SECTION END -----------------




// ----------------- COMING SOON BIG OFFER SECTION START -----------------
// ----------------- COMING SOON BIG OFFER SECTION START -----------------
// ----------------- COMING SOON BIG OFFER SECTION START -----------------
const bigDealsDay = document.getElementById('day');
const bigDealsHour = document.getElementById('hour');
const bigDealsMinute = document.getElementById('minute');
const bigDealsSecond = document.getElementById('second');
let date = new Date();
let monthIndex = date.getMonth();
let year = date.getFullYear();
let dayConst = 86400;
let hourConst = 3600;
let minuteConst = 60;
let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
'August', 'September', 'October', 'November', 'December'];
function updateCountDownTimer(time, dest) {
    dest[0].textContent = time[0];
    dest[1].textContent = time[1];
    dest[2].textContent = time[2];
    dest[3].textContent = time[3];
}
let timeCount = setInterval((date, time) => {
    let timerValues, updateDest;
    let curntTime = Date.now();
    let eventTime = new Date(`${month[monthIndex]} ${date}, ${year} ${time}`).getTime();
    let totalSeconds = (eventTime - curntTime) / 1000;
    if (totalSeconds < 0) {
        monthIndex = (monthIndex + 1) % 12;
        console.log(`Hello`);
        if (monthIndex === 0) {
            year = year + 1;
        }
        let eventTime = new Date(`${month[monthIndex]} ${date}, ${year} ${time}`).getTime();
        totalSeconds = (eventTime - curntTime) / 1000;
    }
    let days = Math.floor(totalSeconds / dayConst);
    totalSeconds = totalSeconds % dayConst;
    let hours = Math.floor(totalSeconds / hourConst);
    totalSeconds = totalSeconds % hourConst;
    let minutes = Math.floor(totalSeconds / minuteConst);
    totalSeconds = totalSeconds % minuteConst;
    let seconds = Math.floor(totalSeconds);
    if (days < 10) {
        days = '0' + days;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    updateDest = [bigDealsDay, bigDealsHour, bigDealsMinute, bigDealsSecond];
    timerValues = [days, hours, minutes, seconds];
    updateCountDownTimer(timerValues, updateDest);
}, 1000, '26', '20:00:00');
// ----------------- COMING SOON BIG OFFER SECTION END -----------------
// ----------------- COMING SOON BIG OFFER SECTION END -----------------
// ----------------- COMING SOON BIG OFFER SECTION END -----------------
