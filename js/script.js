
var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 1000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

let Section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a ');
window.onscroll = () => {
    Section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100)
};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-container, contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content p', { origin: 'right' });
/*Modal*/

//HTML LOOP
let html = document.querySelector('.html');
let hIndex = 0;
setInterval(() => {
    if (hIndex === 90) {
        clearInterval();
    } else {
        hIndex += 1;
        html.innerHTML = hIndex + '%';
    }
}, 20);
//CSS LOOP
let css = document.querySelector('.css');
let cIndex = 0;
setInterval(() => {
    if (cIndex === 80) {
        clearInterval();
    } else {
        cIndex += 1;
        css.innerHTML = cIndex + '%'
    }
}, 20);
//JS LOOP
let js = document.querySelector('.js');
let jIndex = 0;
setInterval(() => {
    if (jIndex === 65) {
        clearInterval();
    } else {
        jIndex += 1;
        js.innerHTML = jIndex + '%'
    }
}, 20);
//PHP  LOOP
let php = document.querySelector('.php');
let pIndex = 0;
setInterval(() => {
    if (pIndex === 60) {
        clearInterval();
    } else {
        pIndex += 1;
        php.innerHTML = pIndex + '%'
    }
}, 20);
