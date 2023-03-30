
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


