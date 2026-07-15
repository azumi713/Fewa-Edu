/* =========================================================
   FEWA KOKUSAI — MAIN.JS
   =========================================================
   This file makes the website WORK: the mobile menu, the
   English/Japanese switch, the homepage slideshow, the
   E-Profile flip-book, and the two popup forms.

   You should NOT need to edit this file to change any
   wording — go to the .html files (for English) or
   js/language.js (for Japanese) instead.
========================================================= */

let currentLang = 'en';

/* -----------------------------------------------------------
   LANGUAGE SWITCH
   The English text already lives in the HTML, so the first
   time we switch to Japanese we remember the original English
   text of every translatable element, then swap it back in
   later if the person switches back to English.
----------------------------------------------------------- */
const originalText = new Map();       // element -> its original English text
const originalPlaceholder = new Map(); // element -> its original English placeholder

function applyLanguage(){
  document.querySelectorAll('[data-i18n]').forEach(el => {
    if (!originalText.has(el)) originalText.set(el, el.textContent);
    const key = el.getAttribute('data-i18n');
    if (currentLang === 'jp' && JP[key]) {
      el.textContent = JP[key];
    } else {
      el.textContent = originalText.get(el);
    }
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    if (!originalPlaceholder.has(el)) originalPlaceholder.set(el, el.getAttribute('placeholder') || '');
    const key = el.getAttribute('data-i18n-ph');
    if (currentLang === 'jp' && JP[key]) {
      el.setAttribute('placeholder', JP[key]);
    } else {
      el.setAttribute('placeholder', originalPlaceholder.get(el));
    }
  });

  document.body.classList.toggle('lang-jp', currentLang === 'jp');
}

const langToggleBtn = document.getElementById('langToggle');
if (langToggleBtn) {
  langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'jp' : 'en';
    document.getElementById('langLabel').textContent = currentLang === 'en' ? 'EN / 日本語' : '日本語 / EN';
    applyLanguage();
  });
}

/* -----------------------------------------------------------
   MOBILE MENU
----------------------------------------------------------- */
const mobileBtn = document.getElementById('mobileBtn');
if (mobileBtn) {
  mobileBtn.addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('hidden');
  });
}

/* -----------------------------------------------------------
   HOMEPAGE SLIDESHOW
   Only runs if the slideshow elements exist on this page
   (i.e. we're on index.html).
----------------------------------------------------------- */
(function initSlideshow(){
  const imgs = document.querySelectorAll('[data-slide-img]');
  if (imgs.length === 0) return; // not on the home page — skip

  const captions = document.querySelectorAll('[data-caption]');
  const dots = document.querySelectorAll('.slide-dot');
  const prevBtn = document.getElementById('slidePrev');
  const nextBtn = document.getElementById('slideNext');
  let slideIndex = 0;
  const total = imgs.length;

  function goToSlide(i){
    slideIndex = (i + total) % total;
    imgs.forEach((img, idx) => img.classList.toggle('active', idx === slideIndex));
    captions.forEach((c, idx) => c.classList.toggle('hidden', idx !== slideIndex));
    dots.forEach((d, idx) => d.classList.toggle('bg-mint-400', idx === slideIndex));
  }

  if (prevBtn) prevBtn.onclick = () => goToSlide(slideIndex - 1);
  if (nextBtn) nextBtn.onclick = () => goToSlide(slideIndex + 1);
  dots.forEach(d => d.onclick = () => goToSlide(parseInt(d.dataset.slide, 10)));

  goToSlide(0);
  setInterval(() => goToSlide(slideIndex + 1), 4500);
})();

/* -----------------------------------------------------------
   STUDENT REVIEWS CAROUSEL
   Only runs if the review elements exist on this page
   (i.e. we're on index.html). Advances automatically every
   3 seconds and loops back to the first review after the last.
   BEGINNER TIP: change "3000" below to adjust the speed
   (in milliseconds — 3000 = 3 seconds).
----------------------------------------------------------- */
(function initReviewCarousel(){
  const slides = document.querySelectorAll('.review-slide');
  if (slides.length === 0) return; // not on the home page — skip

  const dots = document.querySelectorAll('.review-dot');
  let reviewIndex = 0;
  const total = slides.length;
  let timer = null;

  function goToReview(i){
    reviewIndex = (i + total) % total;
    slides.forEach((s, idx) => s.classList.toggle('hidden', idx !== reviewIndex));
    dots.forEach((d, idx) => d.classList.toggle('bg-mint-400', idx === reviewIndex));
    dots.forEach((d, idx) => d.classList.toggle('bg-white/40', idx !== reviewIndex));
  }

  function startAutoPlay(){
    clearInterval(timer);
    timer = setInterval(() => goToReview(reviewIndex + 1), 3000);
  }

  dots.forEach(d => d.onclick = () => { goToReview(parseInt(d.dataset.reviewDot, 10)); startAutoPlay(); });

  goToReview(0);
  startAutoPlay();
})();

/* -----------------------------------------------------------
   E-PROFILE FLIP-BOOK
   Only runs if the book elements exist on this page
   (i.e. we're on eprofile.html).
----------------------------------------------------------- */
(function initBook(){
  const pages = document.querySelectorAll('.book-page');
  if (pages.length === 0) return; // not on the e-profile page — skip

  const counter = document.getElementById('bookCounter');
  const prevBtn = document.getElementById('bookPrev');
  const nextBtn = document.getElementById('bookNext');
  let bookPage = 0;
  const total = pages.length;

  function updateBook(){
    pages.forEach((el) => {
      const p = parseInt(el.dataset.page, 10);
      el.style.transform = p < bookPage ? 'rotateY(-180deg)' : 'rotateY(0deg)';
      el.style.zIndex = p <= bookPage ? (100 - p) : (100 - (total - p));
    });
    if (counter) counter.textContent = `${bookPage + 1} / ${total}`;
  }

  if (prevBtn) prevBtn.onclick = () => { if (bookPage > 0) { bookPage--; updateBook(); } };
  if (nextBtn) nextBtn.onclick = () => { if (bookPage < total - 1) { bookPage++; updateBook(); } };

  updateBook();
})();

function downloadBrochure(){
  alert(currentLang === 'jp' ? 'ブローシャーの準備ができました（デモ）。' : 'Brochure download ready (demo).');
}

/* -----------------------------------------------------------
   APPLY NOW
   The "Apply Now" button links directly to Fewa's real Google
   Form (https://forms.gle/hXB4zRTCv4FULYE1A) — no popup needed.
----------------------------------------------------------- */

/* -----------------------------------------------------------
   CONTACT PAGE FORM (only present on contact.html)
----------------------------------------------------------- */
function submitContact(e){
  e.preventDefault();
  const spinner = document.getElementById('contactSpinner');
  spinner.classList.remove('hidden');
  setTimeout(() => {
    spinner.classList.add('hidden');
    const modal = document.getElementById('contactSuccessModal');
    modal.classList.remove('hidden'); modal.classList.add('flex');
    e.target.reset();
  }, 900);
  return false;
}
