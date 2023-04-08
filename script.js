
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
// big deals countdown timer
const bigDealsDay = document.getElementById('day');
const bigDealsHour = document.getElementById('hour');
const bigDealsMinute = document.getElementById('minute');
const bigDealsSecond = document.getElementById('second');
// initialize date, month, year
let date = new Date();
let monthIndex = date.getMonth();
let year = date.getFullYear();
let dayConst = 86400;
let hourConst = 3600;
let minuteConst = 60;
let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
'August', 'September', 'October', 'November', 'December'];
// display countdown timer
function updateCountDownTimer(time, dest) {
    dest[0].textContent = time[0];
    dest[1].textContent = time[1];
    dest[2].textContent = time[2];
    dest[3].textContent = time[3];
}
// big deals timer --> Infinite Countdown
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
    // createCountdown = createInfiniteCountdown('18', '20:00:00');
    updateDest = [bigDealsDay, bigDealsHour, bigDealsMinute, bigDealsSecond];
    timerValues = [days, hours, minutes, seconds];
    updateCountDownTimer(timerValues, updateDest);
}, 1000, '26', '20:00:00');
// ----------------- COMING SOON BIG OFFER SECTION END -----------------
// ----------------- COMING SOON BIG OFFER SECTION END -----------------
// ----------------- COMING SOON BIG OFFER SECTION END -----------------




// ----------------- GREAT DEALS SECTION START -----------------
// ----------------- GREAT DEALS SECTION START -----------------
// ----------------- GREAT DEALS SECTION START -----------------
// selecting great deals product elements
let greatDealsProducts = document.querySelectorAll('.great-deals-product-wrap');
let greatDealsProductImage = document.querySelectorAll('.great-deals-image img');
let greatDealsProductName = document.querySelectorAll('.gd-product-name');
let greatDealsProductDiscount = document.querySelectorAll('.gd-discount');
let greatDealsProductPrice = document.querySelectorAll('.gd-price');
let greatDealsProductUnit = document.querySelectorAll('.gd-unit');
let greatDealsProductPrevPrice = document.querySelectorAll('.gd-price-del');
let greatDealsProductPrevUnit = document.querySelectorAll('.gd-unit-del');
let greatDealsProductRating = document.querySelectorAll('.gd-rating-avg strong');
let greatDealsProductReviewCount = document.querySelectorAll('.gd-review-count');
let greatDealsProductOfferEndsDate = document.querySelectorAll('.offer-ends-date');
// selecting great deals timer elements
const greatDealsDay = document.querySelectorAll('.gd-timer-days');
const greatDealsHour = document.querySelectorAll('.gd-timer-hours');
const greatDealsMinute = document.querySelectorAll('.gd-timer-minutes');
const greatDealsSecond = document.querySelectorAll('.gd-timer-seconds');
// Initialize month and year index
let monthIndex1 = date.getMonth();
let year1 = date.getFullYear();
let monthIndex2 = date.getMonth();
let year2 = date.getFullYear();
let monthIndex3 = date.getMonth();
let year3 = date.getFullYear();
// set timer values
let date1 = `18`,
    time1 = `22:20:05`;
let date2 = `20`,
    time2 = `18:40:15`;
let date3 = `22`,
    time3 = `16:20:30`;
// timer 01 --> Infinite Countdown
let timeCount1 = setInterval((date, time) => {
    let timerValues, updateDest;
    let curntTime = Date.now();
    let eventTime = new Date(`${month[monthIndex1]} ${date}, ${year1} ${time}`).getTime();
    let totalSeconds = (eventTime - curntTime) / 1000;
    if (totalSeconds < 0) {
        monthIndex1 = (monthIndex1 + 1) % 12;
        if (monthIndex1 === 0) {
            year1 = year1 + 1;
        }
        let eventTime = new Date(`${month[monthIndex1]} ${date}, ${year1} ${time}`).getTime();
        totalSeconds = (eventTime - curntTime) / 1000;
    }
    greatDealsProductOfferEndsDate[0].textContent = `${date} ${month[monthIndex1]} ${year1}`;
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
    updateDest = [greatDealsDay[0], greatDealsHour[0], greatDealsMinute[0], greatDealsSecond[0]];
    timerValues = [days, hours, minutes, seconds];
    updateCountDownTimer(timerValues, updateDest);
}, 1000, date1, time1);
// timer 02 --> Infinite Countdown
let timeCount2 = setInterval((date, time) => {
    let timerValues, updateDest;
    let curntTime = Date.now();
    let eventTime = new Date(`${month[monthIndex2]} ${date}, ${year2} ${time}`).getTime();
    let totalSeconds = (eventTime - curntTime) / 1000;
    if (totalSeconds < 0) {
        monthIndex2 = (monthIndex2 + 1) % 12;
        if (monthIndex2 === 0) {
            year2 = year2 + 1;
        }
        let eventTime = new Date(`${month[monthIndex2]} ${date}, ${year2} ${time}`).getTime();
        totalSeconds = (eventTime - curntTime) / 1000;
    }
    greatDealsProductOfferEndsDate[1].textContent = `${date} ${month[monthIndex2]} ${year2}`;
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
    updateDest = [greatDealsDay[1], greatDealsHour[1], greatDealsMinute[1], greatDealsSecond[1]];
    timerValues = [days, hours, minutes, seconds];
    updateCountDownTimer(timerValues, updateDest);
}, 1000, date2, time2);
// timer 03 --> Infinite Countdown
let timeCount3 = setInterval((date, time) => {
    let timerValues, updateDest;
    let curntTime = Date.now();
    let eventTime = new Date(`${month[monthIndex3]} ${date}, ${year3} ${time}`).getTime();
    let totalSeconds = (eventTime - curntTime) / 1000;
    if (totalSeconds < 0) {
        monthIndex3 = (monthIndex3 + 1) % 12;
        if (monthIndex3 === 0) {
            year3 = year3 + 1;
        }
        let eventTime = new Date(`${month[monthIndex3]} ${date}, ${year3} ${time}`).getTime();
        totalSeconds = (eventTime - curntTime) / 1000;
    }
    greatDealsProductOfferEndsDate[2].textContent = `${date} ${month[monthIndex3]} ${year3}`;
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
    updateDest = [greatDealsDay[2], greatDealsHour[2], greatDealsMinute[2], greatDealsSecond[2]];
    timerValues = [days, hours, minutes, seconds];
    updateCountDownTimer(timerValues, updateDest);
}, 1000, date3, time3);
// ----------------- GREAT DEALS SECTION END -----------------
// ----------------- GREAT DEALS SECTION END -----------------
// ----------------- GREAT DEALS SECTION END -----------------




// ----------------- FAQ SECTION START -----------------
// ----------------- FAQ SECTION START -----------------
// ----------------- FAQ SECTION START -----------------
let faqTitle = document.querySelectorAll('.faq-title');
let faqText = document.querySelectorAll('.faq-text');
let faqIcon = document.querySelectorAll('.faq-icon');
let faqPrevIndex = null;
for (let i = 0; i < faqTitle.length; i++) {
    faqTitle[i].addEventListener('click', () => {
        for (let j = 0; j < faqText.length; j++) {
            faqText[j].classList.remove('active-faq-text');
            faqIcon[j].classList.remove('active-faq-icon');
        }
        if (faqPrevIndex === i) {
            faqPrevIndex = null;
        } else {
            faqText[i].classList.add('active-faq-text');
            faqIcon[i].classList.add('active-faq-icon');
            faqPrevIndex = i;
        }
    });
}
// ----------------- FAQ SECTION END -----------------
// ----------------- FAQ SECTION END -----------------
// ----------------- FAQ SECTION END -----------------

 // CUSTOMER REVIEW ANIMATION
 let reviewContents = document.querySelectorAll('.review-content');
 let prevElemIndex = null;

 for (let i = 0; i < reviewContents.length; i++) {
     reviewContents[i].classList.add('close-review');
     reviewContents[i].onclick = () => {
         for (let j = 0; j < reviewContents.length; j++) {
             reviewContents[j].classList.toggle('close-review');
         }
     }
 }
// CUSTOMER REVIEW END




// ----------------- FEATURED HEART SECTION START -----------------
// ----------------- FEATURED HEART SECTION START -----------------
// ----------------- FEATURED HEART SECTION START -----------------
function myHeart(element) {
    const currentColor = element.style.backgroundColor;
    if (currentColor == "green") {
      element.style.backgroundColor = "orangered";
    } 
    else {
      element.style.backgroundColor = "green";
    }
  }