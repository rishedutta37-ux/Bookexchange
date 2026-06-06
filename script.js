/* =========================
   SEARCH BOX ANIMATION
========================= */

const searchInput = document.querySelector(".search-box input");

if(searchInput){

searchInput.addEventListener("focus", () => {

searchInput.style.transform = "scale(1.03)";
searchInput.style.transition = "0.3s";

});

searchInput.addEventListener("blur", () => {

searchInput.style.transform = "scale(1)";

});

}

/* =========================
   CONTACT SELLER BUTTON
========================= */

const contactButtons =
document.querySelectorAll(".book-card button");

contactButtons.forEach(button => {

button.addEventListener("click", () => {

showNotification(
"📚 Seller contact feature coming soon!"
);

});

});

/* =========================
   VIEW PROFILE BUTTON
========================= */

const profileBtn =
document.querySelector(".seller-card button");

if(profileBtn){

profileBtn.addEventListener("click", () => {

showNotification(
"👤 Seller profile page coming soon!"
);

});

}

/* =========================
   PLAN BUTTONS
========================= */

const planButtons =
document.querySelectorAll(".plan-card button");

planButtons.forEach(button => {

button.addEventListener("click", () => {

const plan =
button.parentElement.querySelector("h3").textContent;

showNotification(
`✅ ${plan} Plan Selected`
);

});

});

/* =========================
   CATEGORY CLICK EFFECT
========================= */

const categories =
document.querySelectorAll(".category");

categories.forEach(category => {

category.addEventListener("click", () => {

category.classList.add("clicked");

showNotification(
`📖 ${category.textContent} Selected`
);

setTimeout(() => {

category.classList.remove("clicked");

},600);

});

});

/* =========================
   FAQ TOGGLE
========================= */

const faqItems =
document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

item.addEventListener("click", () => {

const answer =
item.querySelector("p");

if(answer.style.display === "block"){

answer.style.display = "none";

}else{

answer.style.display = "block";

}

});

});

/* Hide FAQ answers initially */

faqItems.forEach(item => {

const answer =
item.querySelector("p");

if(answer){

answer.style.display = "none";

}

});

/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const revealElements =
document.querySelectorAll(
".book-card,.plan-card,.testimonial,.stat-card,.step"
);

function revealOnScroll(){

revealElements.forEach(element => {

const position =
element.getBoundingClientRect().top;

const screenPosition =
window.innerHeight - 100;

if(position < screenPosition){

element.style.opacity = "1";
element.style.transform = "translateY(0)";

}

});

}

revealElements.forEach(element => {

element.style.opacity = "0";
element.style.transform = "translateY(40px)";
element.style.transition = "0.6s ease";

});

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

/* =========================
   HERO BUTTONS
========================= */

const browseBtn =
document.querySelector(".primary-btn");

if(browseBtn){

browseBtn.addEventListener("click", () => {

document
.querySelector(".books")
.scrollIntoView({
behavior:"smooth"
});

});

}

const sellBtn =
document.querySelector(".secondary-btn");

if(sellBtn){

sellBtn.addEventListener("click", () => {

showNotification(
"📤 Book Upload Feature Coming Soon!"
);

});

}

/* =========================
   LOGIN BUTTON
========================= */

const loginBtn =
document.querySelector(".login-btn");

if(loginBtn){

loginBtn.addEventListener("click", () => {

showNotification(
"🔑 Login System Coming Soon!"
);

});

}

/* =========================
   SIGNUP BUTTON
========================= */

const signupBtn =
document.querySelector(".signup-btn");

if(signupBtn){

signupBtn.addEventListener("click", () => {

showNotification(
"🚀 Registration Feature Coming Soon!"
);

});

}

/* =========================
   SEARCH FUNCTION
========================= */

const searchButton =
document.querySelector(".search-box button");

if(searchButton){

searchButton.addEventListener("click", () => {

const value =
searchInput.value.toLowerCase();

const books =
document.querySelectorAll(".book-card");

books.forEach(book => {

const title =
book.querySelector("h3")
.textContent
.toLowerCase();

if(title.includes(value)){

book.style.display = "block";

}else{

book.style.display = "none";

}

});

});

}

/* =========================
   NOTIFICATION SYSTEM
========================= */

function showNotification(message){

const notification =
document.createElement("div");

notification.classList.add(
"notification"
);

notification.textContent =
message;

document.body.appendChild(
notification
);

setTimeout(() => {

notification.classList.add(
"show"
);

},100);

setTimeout(() => {

notification.classList.remove(
"show"
);

setTimeout(() => {

notification.remove();

},500);

},3000);

}

/* =========================
   PAGE LOADER EFFECT
========================= */

window.addEventListener(
"load",
() => {

document.body.style.opacity =
"0";

document.body.style.transition =
"1s";

setTimeout(() => {

document.body.style.opacity =
"1";

},100);

}
);

/* =========================
   CURRENT YEAR AUTO UPDATE
========================= */

const copyright =
document.querySelector(".copyright");

if(copyright){

copyright.innerHTML =
`© ${new Date().getFullYear()} BookSwap. All Rights Reserved.`;

}