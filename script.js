
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




// ----------------- CUSTOMER REVIEW ANIMATION SECTION START -----------------
// ----------------- CUSTOMER REVIEW ANIMATION SECTION START -----------------
// ----------------- CUSTOMER REVIEW ANIMATION SECTION START -----------------
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
// ----------------- CUSTOMER REVIEW ANIMATION SECTION END -----------------
// ----------------- CUSTOMER REVIEW ANIMATION SECTION END -----------------
// ----------------- CUSTOMER REVIEW ANIMATION SECTION END -----------------




// ----------------- FEATURED PRODUCTS AND ADD TO CART SECTION START -----------------
// ----------------- FEATURED PRODUCTS AND ADD TO CART SECTION START -----------------
// ----------------- FEATURED PRODUCTS AND ADD TO CART SECTION START -----------------
let sectionContent = document.querySelector('.section-content');

let toggleBar = document.querySelector('#toggle-bar');

toggleBar.addEventListener('click', function () {
    toggleBar.classList.toggle('active-toggler');
});
// =====================================
//    Product Cart Control Area Start
// =====================================
// selecting featured products and product cart elements
let shoppingCartBtn = document.querySelector('#icon-shopping-cart');
let cartIconProductCounter = document.querySelector('#item-counter');
let productCartArea = document.querySelector('#product-cart-area');
let favoriteIcon = document.querySelectorAll('.add-to-favorite > span');
let cartWishlistArea = document.querySelector('.cart-wishlist-area');
let itemDeleteConfirmationBoxTitle = document.querySelector('.remove-message-title h2');
let popupShadow = document.querySelector('.popup-shadow');
let removeCancelBtn = document.querySelector('#remove-cancel-btn');
let removeConfirmBtn = document.querySelector('#remove-confirm-btn');
let shoppingCart = document.querySelector('.shopping-cart-area');
let cartContentMenu = document.querySelectorAll('.cart-menu-items h2');
let cartCloseButton = document.querySelector('.cart-close-btn button');
let shoppingCartContentsArea = document.querySelectorAll('.shopping-cart-contents-area');
let featuredProducts = document.querySelectorAll('.product-wrap');
let productImage = document.querySelectorAll('.product-img img');
let productPrice = document.querySelectorAll('.f-product-price');
let productDiscount = document.querySelectorAll('.discount');
let productName = document.querySelectorAll('.product-name');
let currentPrice = document.querySelectorAll('.f-cur-price');
let productUnit = document.querySelectorAll('.f-product-unit');
let addToCartBtn = document.querySelectorAll('.add-to-cart-btn p');
let cartContentArea = document.querySelector('.cart-contents-area');
let shoppingCartArea = document.querySelector('.shopping-cart-wrap');
let buyingProductContent = document.querySelector('.buying-product-title');
let buyingDetailsFooter = document.querySelector('.buying-details-footer');
let totalBuyingItems = document.querySelector('.calculate-total-items p span');
let shoppingDetailsContent = document.querySelector('.shopping-details-content');
let totalBuyingItemsQuantity = document.querySelector('.calculate-total-quantity p');
let totalBuyingItemsAmount = document.querySelector('.calculate-total-amount p span');
let totalSelectedProduct = document.querySelector('#total-selected');
let totalFavoriteProduct = document.querySelector('#total-favorite');
let totalSelectedCounter = document.querySelector('#total-selected span');
let totalFavoriteCounter = document.querySelector('#total-favorite span');
let totalAddToBuyCounter = document.querySelector('#total-buying-item-counter');
let controllScrolling = document.querySelector('html');
// item counter
let countSelectedItem = 0;
let countFavoriteItem = 0;
let countAddToBuyItem = 0;
let countBuyProductSl = 0;
let countTotalWeight = 0;
let countTotalPieces = 0;
let countTotalAmount = 0;
let countTotalDozen = 0;
// store event data
let addedToCart = [];
let addedForBuy = [];
let newCartContent = [];
let addedToFavorite = [];
let newfavoriteItem = [];
let shoppingCartItem = [];
let storeShopItemsIndex = [];
let isSelectedItemActive = true;
// calculate and update current price
(function () {
    for (let i = 0; i < featuredProducts.length; i++) {
        let oldPrice = productPrice[i].textContent;
        let discount = productDiscount[i].textContent;
        let newPrice = oldPrice - Math.round((oldPrice * (discount / 100)));
        currentPrice[i].textContent = newPrice;
    }
})();
// show cart area
shoppingCartBtn.onclick = () => {
    toggleBar.classList.remove('active-toggler');
    productCartArea.classList.add('active-cart');
    controllScrolling.style.overflowY = 'hidden';
}
// remove cart area
cartCloseButton.onclick = () => {
    productCartArea.classList.remove('active-cart');
    controllScrolling.style.overflowY = 'auto';
}
// display cart buying header
function displayBuyingHeader(countValue) {
    let totalShopItems = shoppingDetailsContent.children.length;
    if (countValue > 0 && isSelectedItemActive === true) {
        buyingProductContent.classList.add('acvie-buying-title');
    } else if (totalShopItems > 0 && isSelectedItemActive === true) {
        buyingProductContent.classList.add('acvie-buying-title');
    } else {
        buyingProductContent.classList.remove('acvie-buying-title');
    }
}
// cart header menu switch and show/hide total items counter
(function () {
    for (let i = 0; i < cartContentMenu.length; i++) {
        cartContentMenu[i].addEventListener('click', function () {
            for (let j = 0; j < cartContentMenu.length; j++) {
                cartContentMenu[j].classList.remove('active-cart-menu');
                shoppingCartContentsArea[j].classList.remove('active-cart-content');
                totalSelectedProduct.classList.remove('active-product-counter');
                totalFavoriteProduct.classList.remove('active-product-counter');
            }
            cartContentMenu[i].classList.add('active-cart-menu');
            shoppingCartContentsArea[i].classList.add('active-cart-content');
            if (cartContentMenu[i].getAttribute('id') === 'selected-products') {
                totalSelectedProduct.classList.add('active-product-counter');
                if (countSelectedItem > 0) {
                    buyingProductContent.classList.add('acvie-buying-title');
                    totalSelectedCounter.innerHTML = countSelectedItem;
                } else {
                    totalSelectedCounter.innerHTML = 'No item found';
                }
                isSelectedItemActive = true;
            } else {
                totalFavoriteProduct.classList.add('active-product-counter');
                buyingProductContent.classList.remove('acvie-buying-title');
                if (countFavoriteItem > 0) {
                    totalFavoriteCounter.innerHTML = countFavoriteItem;
                } else {
                    totalFavoriteCounter.innerHTML = 'No item found';
                }

                isSelectedItemActive = false;
            }
            displayBuyingHeader(countSelectedItem);
        });
    }
})();
// set event data false
(function () {
    for (let i = 0; i < addToCartBtn.length; i++) {
        addedToCart[i] = false;
        addedForBuy[i] = false;
        addedToFavorite[i] = false;
    }
})();
// create elements for selected product content
function createSelectedProductsContent(image, name, price, unit, discount, preservative, time) {
    let newCartContent = document.createElement('div');
    newCartContent.setAttribute('class', 'cart-content');
    let newCartImageArea = document.createElement('div');
    newCartImageArea.setAttribute('class', 'cart-image-area');
    let newCartDetails = document.createElement('div');
    newCartDetails.setAttribute('class', 'cart-details');
    //children of newCartImageArea
    let newImage = document.createElement('img');
    newImage.src = image;
    newCartImageArea.appendChild(newImage);
    // childrens of newCartDetails
    let newHeading2 = document.createElement('h2');
    newHeading2.textContent = 'Product Details';
    let newPara = [];
    let newStrong = [];
    for (let i = 0; i < 6; i++) {
        newPara[i] = document.createElement('p');
        newStrong[i] = document.createElement('strong');
    }
    newStrong[0].textContent = 'Product name: ';
    newStrong[1].textContent = 'Price: ';
    newStrong[2].textContent = 'Discount: ';
    newStrong[3].textContent = 'Quantity: ';
    newStrong[4].textContent = 'Preservatives: ';
    newStrong[5].textContent = 'Added Time: ';
    for (let i = 0; i < 6; i++) {
        newPara[i].appendChild(newStrong[i]);
    }
    let newInput = document.createElement('input');
    newInput.setAttribute('type', 'number');
    newPara[3].appendChild(newInput);
    let newQuantitySpan = document.createElement('span');
    newQuantitySpan.innerHTML = `${unit}`;
    newQuantitySpan.style.paddingLeft = '0.4rem';
    newPara[3].appendChild(newQuantitySpan);
    let newSpan = [];
    for (let i = 0; i < 3; i++) {
        newSpan[i] = document.createElement('span');
    }
    newSpan[0].textContent = name;
    newSpan[1].textContent = price + `₱/${unit}`;
    newSpan[2].textContent = discount + '%';
    for (let i = 0; i < 3; i++) {
        newPara[i].appendChild(newSpan[i]);
    }
    let preservativeSpan = document.createElement('span');
    preservativeSpan.textContent = preservative;
    let timeSpan = document.createElement('span');
    timeSpan.textContent = time;
    newPara[4].appendChild(preservativeSpan);
    newPara[5].appendChild(timeSpan);
    let newShoppingButton = [];
    for (let i = 0; i < 2; i++) {
        newShoppingButton[i] = document.createElement('button');
    }
    newShoppingButton[0].textContent = 'Add to Buy';
    newShoppingButton[1].textContent = 'Remove Item';
    newShoppingButton[0].setAttribute('class', 'add-to-buy-btn');
    newShoppingButton[1].setAttribute('class', 'remove-item-btn');
    // adding children to parent element
    newCartDetails.appendChild(newHeading2);
    for (let i = 0; i < 6; i++) {
        newCartDetails.appendChild(newPara[i]);
    }
    for (let i = 0; i < 2; i++) {
        newCartDetails.appendChild(newShoppingButton[i]);
    }
    newCartContent.appendChild(newCartImageArea);
    newCartContent.appendChild(newCartDetails);
    return newCartContent;
}
// get product added time
function getAddedTime() {
    let dt = new Date();
    let dd = dt.getDate();
    let mm = dt.getMonth() + 1;
    let yyyy = dt.getFullYear();
    let HH = dt.getHours();
    let MM = dt.getMinutes();
    let XM = null;
    (HH >= 12) ? XM = 'PM': XM = 'AM';
    if (HH > 12) {
        HH -= 12;
    }
    if (HH == 0) {
        HH = 12;
    }
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    if (HH < 10) {
        HH = '0' + HH;
    }
    if (MM < 10) {
        MM = '0' + MM;
    }
    let format = `${dd}/${mm}/${yyyy}  ${HH}:${MM} ${XM}`;
    return format;
}
// add items to selected products
function addItemsToSelectedProducts(productIndex) {
    addToCartBtn[productIndex].style.background = 'orangered';
    addToCartBtn[productIndex].innerHTML = '<span class="icon-cart-arrow-down"></span> Added';
    let productCartImage = productImage[productIndex].src;
    let productCartName = productName[productIndex].textContent;
    let productCartPrice = productPrice[productIndex].textContent;
    let productCartUnit = productUnit[productIndex].textContent;
    let productCartDiscount = productDiscount[productIndex].textContent;
    let preservativeName = 'No';
    let addedTime = getAddedTime();
    newCartContent[productIndex] = createSelectedProductsContent(productCartImage, productCartName, productCartPrice, productCartUnit, productCartDiscount, preservativeName, addedTime);
    cartContentArea.insertBefore(newCartContent[productIndex], cartContentArea.firstChild);
}
// remove Items to selected products
function removeItemsToSelectedProducts(productIndex) {
    addToCartBtn[productIndex].style.background = '#459122';
    addToCartBtn[productIndex].innerHTML = '<span class="icon-cart-plus"></span> Add to Cart';
    cartContentArea.removeChild(newCartContent[productIndex]);
}
// active add to cart button of favorite item
function activeFavoriteItemAddToCartBtn(productIndex) {
    let favoriteItemAddToCartBtn = newfavoriteItem[productIndex].children[2].children[2].children[0];
    favoriteItemAddToCartBtn.style.background = 'orangered';
    favoriteItemAddToCartBtn.innerHTML = '<span class="icon-cart-arrow-down"></span> Added';
}
// deactive add to cart button of favorite item
function deactiveFavoriteItemAddToCartBtn(productIndex) {
    let favoriteItemAddToCartBtn = newfavoriteItem[productIndex].children[2].children[2].children[0];
    favoriteItemAddToCartBtn.style.background = '#459122';
    favoriteItemAddToCartBtn.innerHTML = '<span class="icon-cart-plus"></span> Add to Cart';
}
// create favorite content wrapper
function favoriteContentWrapper() {
    let newProductWrapper = document.createElement('div');
    newProductWrapper.setAttribute('class', 'product-wrap');

    return newProductWrapper;
}
// add items to favorite products
function addItemsToFavoriteProducts(productIndex) {
    favoriteIcon[productIndex].style.background = 'orangered';
    let clone = featuredProducts[productIndex].cloneNode(true);
    let favoriteContentWrap = favoriteContentWrapper();
    newfavoriteItem[productIndex] = favoriteContentWrap.appendChild(clone);
    cartWishlistArea.appendChild(newfavoriteItem[productIndex]);
}
// remove items to favorite products
function removeItemsToFavoriteProducts(productIndex) {
    favoriteIcon[productIndex].style.background = '#61790a';
    cartWishlistArea.removeChild(newfavoriteItem[productIndex]);
}
// show confirmation box
function activeConfirmationBox(confirmMessage) {
    itemDeleteConfirmationBox.classList.add('active-confirmation-box');
    itemDeleteConfirmationBoxTitle.innerHTML = confirmMessage;
    popupShadow.classList.add('active-popup-shadow');
    shoppingCart.style.overflow = 'hidden';
}
// remove confirmation box
function removeConfirmationBox() {
    itemDeleteConfirmationBox.classList.remove('active-confirmation-box');
    popupShadow.classList.remove('active-popup-shadow');
    shoppingCart.style.overflow = 'auto';
}
// display cart item counter
function displayCartCounter(countValue) {
    if (countValue > 0) {
        cartIconProductCounter.classList.add('active-item-counter');
    } else {
        cartIconProductCounter.classList.remove('active-item-counter');
    }
}
// create shopping cart item
function createShoppingCartItem(itemName, itemPrice, itemUnit, itemDiscount, presentPrice, itemQuantity) {
    let newParentDiv = document.createElement('div');
    newParentDiv.setAttribute('class', 'shopping-details');
    let newChildDiv = [];
    for (let i = 0; i < 8; i++) {
        newChildDiv[i] = document.createElement('div');
    }
    newChildDiv[0].setAttribute('class', 'product-sl');
    newChildDiv[1].setAttribute('class', 'product-name');
    newChildDiv[2].setAttribute('class', 'regular-price');
    newChildDiv[3].setAttribute('class', 'discount');
    newChildDiv[4].setAttribute('class', 'present-price');
    newChildDiv[5].setAttribute('class', 'product-quantity');
    newChildDiv[6].setAttribute('class', 'total-amount');
    newChildDiv[7].setAttribute('class', 'remove-item-btn');
    let newChildPara = [];
    for (let i = 0; i < 7; i++) {
        newChildPara[i] = document.createElement('p');
    }
    let removeBtn = document.createElement('button');
    removeBtn.innerHTML = 'Remove';
    removeBtn.setAttribute('class', 'remove-shop-item');
    let totalPrice = itemQuantity * presentPrice;
    totalPrice = totalPrice.toFixed(2);
    newChildPara[1].innerHTML = itemName;
    newChildPara[2].innerHTML = itemPrice + `₱/${itemUnit}`;
    newChildPara[3].innerHTML = itemDiscount + `%`;
    newChildPara[4].innerHTML = presentPrice + `₱/${itemUnit}`;
    newChildPara[5].innerHTML = itemQuantity + ` ${itemUnit}`;
    newChildPara[6].innerHTML = totalPrice + ` ₱`;
    for (let i = 0; i < 7; i++) {
        newChildDiv[i].appendChild(newChildPara[i]);
    }
    newChildDiv[7].appendChild(removeBtn);
    for (let i = 0; i < 8; i++) {
        newParentDiv.appendChild(newChildDiv[i]);
    }
    return newParentDiv;
}
// add items to shopping cart area
function addItemsToShoppingCartArea(itemIndex, buyBtn, itemQuantity) {
    totalAddToBuyCounter.innerHTML = ++countAddToBuyItem;
    buyBtn.style.background = 'crimson';
    buyBtn.innerHTML = 'Added';
    let getQuantity = Number(itemQuantity.value);
    let getItemName = productName[itemIndex].textContent;
    let getItemPrice = productPrice[itemIndex].textContent;
    let getItemUnit = productUnit[itemIndex].textContent;
    let getItemDiscount = productDiscount[itemIndex].textContent;
    let getPresentPrice = getItemPrice - ((getItemDiscount / 100) * getItemPrice);
    getPresentPrice = getPresentPrice.toFixed(2);
    shoppingCartItem[itemIndex] = createShoppingCartItem(getItemName, getItemPrice, getItemUnit, getItemDiscount, getPresentPrice, getQuantity);
    shoppingDetailsContent.appendChild(shoppingCartItem[itemIndex]);
    if (getItemUnit === 'kg') {
        countTotalWeight += getQuantity;
    } else if (getItemUnit === 'dzn') {
        countTotalDozen += getQuantity;
    } else if (getItemUnit === 'pcs') {
        countTotalPieces += getQuantity;
    }
    countTotalAmount += getPresentPrice * getQuantity;
}
// remove items to shopping cart area
function removeItemsToShoppingCartArea(itemIndex, buyBtn, itemQuantity) {
    totalAddToBuyCounter.innerHTML = --countAddToBuyItem;
    buyBtn.style.background = '#267247';
    buyBtn.innerHTML = 'Add to Buy';
    let getQuantity = Number(itemQuantity.value);
    let getItemPrice = productPrice[itemIndex].textContent;
    let getItemUnit = productUnit[itemIndex].textContent;
    let getItemDiscount = productDiscount[itemIndex].textContent;
    let getPresentPrice = getItemPrice - ((getItemDiscount / 100) * getItemPrice);
    shoppingDetailsContent.removeChild(shoppingCartItem[itemIndex]);
    if (getItemUnit === 'kg') {
        countTotalWeight -= getQuantity;
    } else if (getItemUnit === 'dzn') {
        countTotalDozen -= getQuantity;
    } else if (getItemUnit === 'pcs') {
        countTotalPieces -= getQuantity;
    }
    countTotalAmount -= getPresentPrice * getQuantity;
    itemQuantity.value = '';
}
// display buying details footer
function displayBuyingDetailsFooter(countValue) {
    if (countValue > 0) {
        buyingDetailsFooter.classList.add('active-buying-details-footer');
    } else {
        buyingDetailsFooter.classList.remove('active-buying-details-footer');
    }
    totalBuyingItems.innerHTML = shoppingDetailsContent.children.length;
    let quantityResult = ``;
    let quantityList = [countTotalWeight, countTotalDozen, countTotalPieces];
    for (let i = 0; i < quantityList.length; i++) {
        if (quantityList[i] !== 0) {
            if (quantityResult !== ``) {
                quantityResult += ` + `;
            }
            if (i === 0) {
                if (countTotalWeight % 1 === 0) {
                    quantityResult += `${countTotalWeight} kg`;
                } else {
                    quantityResult += `${countTotalWeight.toFixed(2)} kg`;
                }
            } else if (i === 1) {
                if (countTotalDozen % 1 === 0) {
                    quantityResult += `${countTotalDozen} dzn`;
                } else {
                    quantityResult += `${countTotalDozen.toFixed(2)} dzn`;
                }
            } else {
                if (countTotalPieces % 1 === 0) {
                    quantityResult += `${countTotalPieces} pcs`;
                } else {
                    quantityResult += `${countTotalPieces.toFixed(2)} pcs`;
                }
            }
        }
    }
    totalBuyingItemsQuantity.innerHTML = quantityResult;
    totalBuyingItemsAmount.innerHTML = countTotalAmount.toFixed(1);
}
// controll product serial number
function setProductSl() {
    let sl = 0;
    let shopItems = shoppingDetailsContent.children;
    for (let i = 0; i < shopItems.length; i++) {
        shopItems[i].children[0].children[0].innerHTML = ++sl;
    }
}
// remove shop itmes index from array
function removeShopItemsIndex(index) {
    for (let i = 0; i < storeShopItemsIndex.length; i++) {
        if (storeShopItemsIndex[i] === index) {
            for (let j = i; j < storeShopItemsIndex.length; j++) {
                storeShopItemsIndex[j] = storeShopItemsIndex[j + 1];
            }
        }
    }
    storeShopItemsIndex.length--;
}
// remove selected product item
function removeSelectedProduct(productIndex) {
    removeItemsToSelectedProducts(productIndex);
    if (newfavoriteItem[productIndex] !== undefined) {
        deactiveFavoriteItemAddToCartBtn(productIndex);
    }
    --countSelectedItem;
    totalSelectedCounter.innerHTML = countSelectedItem;
    cartIconProductCounter.innerHTML = countSelectedItem;
    displayBuyingHeader(countSelectedItem);
    displayCartCounter(countSelectedItem);
    addedToCart[productIndex] = false;
}
// remove shopping cart product
function removeShoppingCartProduct(productIndex) {
    let addToBuyBtn = newCartContent[productIndex].children[1].children[7];
    let itemQuantity = newCartContent[productIndex].children[1].children[4].children[1];
    removeItemsToShoppingCartArea(productIndex, addToBuyBtn, itemQuantity);
    displayBuyingDetailsFooter(countAddToBuyItem);
    displayBuyingHeader(countSelectedItem);
    itemQuantity.removeAttribute('disabled');
    removeShopItemsIndex(productIndex);
    setProductSl();
    addedForBuy[productIndex] = false;
}
// add product to shopping cart area
function addProductToShoppingCart(productIndex) {
    let addToBuyBtn = newCartContent[productIndex].children[1].children[7];
    let itemQuantity = newCartContent[productIndex].children[1].children[4].children[1];
    addItemsToShoppingCartArea(productIndex, addToBuyBtn, itemQuantity);
    displayBuyingDetailsFooter(countAddToBuyItem);
    itemQuantity.setAttribute('disabled', 'true');
    storeShopItemsIndex.push(productIndex);
    setProductSl();
}
// shopping items controll area
function controlShoppingProductItems(itemIndex) {
    let itemQuantity = newCartContent[itemIndex].children[1].children[4].children[1];
    if (addedForBuy[itemIndex] === false && itemQuantity.value !== '' && itemQuantity.value > 0) {
        addProductToShoppingCart(itemIndex);
        let shopItemRemoveBtn = shoppingCartItem[itemIndex].children[7].children[0];
        shopItemRemoveBtn.addEventListener('click', function () {
            removeShoppingCartProduct(itemIndex);
        });
        addedForBuy[itemIndex] = true;
    } else if (addedForBuy[itemIndex] === true && itemQuantity.value !== '' && itemQuantity.value > 0) {
        removeShoppingCartProduct(itemIndex);
    } else {
        if (itemQuantity.value === '') {
            alert('Please fill the quantity of your item');
        } else {
            alert('Please enter a valid quantity of your item');
        }
    }
}
// control selected product items
function controlSelectedProductItems(itemIndex) {
    if (addedToCart[itemIndex] === false) {
        addItemsToSelectedProducts(itemIndex);
        if (newfavoriteItem[itemIndex] !== undefined) {
            activeFavoriteItemAddToCartBtn(itemIndex);
        }
        let selectedProductRemoveBtn = newCartContent[itemIndex].children[1].children[8];
        selectedProductRemoveBtn.onclick = () => {
                removeSelectedProduct(itemIndex);
                // remove shopping cart item
                if (addedForBuy[itemIndex] === true) {
                    removeShoppingCartProduct(itemIndex);
                }

            }
            ++countSelectedItem;
        totalSelectedCounter.innerHTML = countSelectedItem;
        cartIconProductCounter.innerHTML = countSelectedItem;
        addedToCart[itemIndex] = true;
    } else {
        removeSelectedProduct(itemIndex);
        // remove shopping cart item
        if (addedForBuy[itemIndex] === true) {
            removeShoppingCartProduct(itemIndex);
        }
    }
    let addToBuyBtn = newCartContent[itemIndex].children[1].children[7];
    addToBuyBtn.onclick = () => {
        controlShoppingProductItems(itemIndex);
    }
    displayBuyingHeader(countSelectedItem);
    displayCartCounter(countSelectedItem);
}
// control favorite product items
function controlFavoriteProductItems(itemIndex) {
    if (addedToFavorite[itemIndex] === false) {
        addItemsToFavoriteProducts(itemIndex);
        totalFavoriteCounter.innerHTML = ++countFavoriteItem;
        addedToFavorite[itemIndex] = true;
    } else {
        removeItemsToFavoriteProducts(itemIndex);
        totalFavoriteCounter.innerHTML = --countFavoriteItem;
        addedToFavorite[itemIndex] = false;
    }
    let favoriteContent = newfavoriteItem[itemIndex].children[1].children[0];
    favoriteContent.addEventListener('click', function () {
        activeConfirmationBox('Remove item from wishlist?');
        removeConfirmBtn.onclick = () => {
            removeItemsToFavoriteProducts(itemIndex);
            totalFavoriteCounter.innerHTML = --countFavoriteItem;
            addedToFavorite[itemIndex] = false;
            removeConfirmationBox();
        }
        removeCancelBtn.onclick = () => {
            removeConfirmationBox();
        }

    });
    // select 'Add to Cart' button of favorite item
    let favoriteItemAddToCartBtn = newfavoriteItem[itemIndex].children[2].children[2].children[0];
    // actions while click 'Add to Cart' button of favorite item 
    favoriteItemAddToCartBtn.addEventListener('click', function () {
        controlSelectedProductItems(itemIndex);
    });
}
// controll product items and product cart area
(function () {
    for (let i = 0; i < addToCartBtn.length; i++) {
        // actions while click 'Add to Cart' button
        addToCartBtn[i].addEventListener('click', function () {
            controlSelectedProductItems(i);
        });
        // actions while click favorite icon 
        favoriteIcon[i].addEventListener('click', function () {
            controlFavoriteProductItems(i);
        });
    }
})();
// product cart 'Buy Items' button
let buyNowBtn = document.querySelector('#buy-items');
let buyingDetailsArea = document.querySelector('.buying-details-area');
let closeBuyingDetailsArea = document.querySelector('.close-buy-area');
// show shopping cart area
buyNowBtn.onclick = () => {
    buyingDetailsArea.classList.add('active-buying-details');
}
// remove shopping cart area
closeBuyingDetailsArea.onclick = () => {
    buyingDetailsArea.classList.remove('active-buying-details');
}
// select 'Remove all' button of shopping cart area
let removeAllShopItems = document.querySelector('#remove-all-items');
// remove all shopping cart items
removeAllShopItems.onclick = () => {
    if (countAddToBuyItem > 0) {
        activeConfirmationBox('Remove all items from cart?');
        removeConfirmBtn.onclick = () => {
            for (let i = 0; i < storeShopItemsIndex.length; i++) {
                let itemIndex = storeShopItemsIndex[i];
                let buyBtn = newCartContent[itemIndex].children[1].children[7];
                let itemQuantity = newCartContent[itemIndex].children[1].children[4].children[1];
                removeItemsToShoppingCartArea(itemIndex, buyBtn, itemQuantity);
                itemQuantity.removeAttribute('disabled');
                addedForBuy[itemIndex] = false;
            }
            storeShopItemsIndex = [];
            displayBuyingDetailsFooter(countAddToBuyItem);
            displayBuyingHeader(countSelectedItem);
            removeConfirmationBox();
        }
        removeCancelBtn.onclick = () => {
            removeConfirmationBox();
        }
    } else {
        alert('No items found in shopping cart');
    }
}
// ----------------- FEATURED PRODUCTS AND ADD TO CART SECTION END -----------------
// ----------------- FEATURED PRODUCTS AND ADD TO CART SECTION END -----------------
// ----------------- FEATURED PRODUCTS AND ADD TO CART SECTION END -----------------