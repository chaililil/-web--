//1 часть задания со слайдеором
let slides = document.getElementsByTagName('img');

let picid = 0;

function showSlide(index) {
 for (let i = 0; i < slides.length; i++) {
  slides[i].classList.remove('active');
 }

 slides[index].classList.add('active');
 picid = index;
}

function next() {
 if (picid == slides.length - 1) {
  showSlide(0);
 } else {
  showSlide(picid + 1);
 }
}

function back() {
 if (picid == 0) {
  showSlide(slides.length - 1);
 } else {
  showSlide(picid - 1);
 }
}

showSlide(picid);

//2 часть задания с текстом о себе
let aboutMe = document.querySelector('.aboutMe h1');
let size = 36;


document.addEventListener('keydown', function (event) {
    if (event.key === '+' || event.key === '=') {
        size += 5;
        aboutMe.style.fontSize = size + 'px';

    }
    if (event.key === '-') {
        size -= 5;
        aboutMe.style.fontSize = size + 'px';
    }
    if (event.key === '0') {
        size = 36;
        aboutMe.style.fontSize = size + 'px';
    }
});


//3 часть задания с датой рождения
let birth = new Date(2004, 4, 12)
let date = document.getElementById("date");
let options = { day: 'numeric', month: 'long', year: 'numeric' };
date.innerHTML = birth.toLocaleDateString('ru-RU', options).toUpperCase();
let num = 0;
document.addEventListener('keydown', function (event) {
    if (event.key === 'y' || event.key === 'н') {
        
        num += 1;
        let today = new Date();
        let year = today.getFullYear();
        let newBirth = new Date(year, birth.getMonth(), birth.getDate());
        if (newBirth.getTime() < today.getTime()) {

            newBirth = new Date(year + 1, birth.getMonth(), birth.getDate());
        }
        let diffDays = Math.round(Math.abs((newBirth.getTime() - today.getTime()) / 1000 / 60 / 60 / 24));
        if (num % 2 != 0) {
            date.classList.add("dateStyle");
            date.innerHTML = birth.toLocaleDateString('ru-RU', options) + "<br \/>" + "Дней до дня рождения: " + diffDays;
        }
        else {
            date.classList.remove("dateStyle");
            date.innerHTML = birth.toLocaleDateString('ru-RU', options).toUpperCase();
        }
    }
});



