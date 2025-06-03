// Navbar Fixed

window.onscroll = function() {
    const header = document.querySelector('header');

    const fixedNav = header.offsetTop;

    const toTop = document.querySelector('#to-top');

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden')
        toTop.classList.add('flex')
    } else {
        header.classList.remove('navbar-fixed')
        toTop.classList.remove('flex')
        toTop.classList.add('hidden')
    }
}


// Hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})


// Klik diluar hamburger

window.addEventListener('click', function (e) {
    if(e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active')
        navMenu.classList.add('hidden')
    }
})


// dark mode

const darkMode = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkMode.addEventListener('click', function() {
    if (darkMode.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
})


// pindahkan posisi toggle sesuai mode

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkMode.checked = true;
  } else {
    darkMode.checked = false;
  }


// Send WhatsApp
// function sendWhatsApp() {
//     var no_hp = "62895378007252";

//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var message = document.getElementById('message').value;
//     var url = "https://wa.me/" + no_hp + "?text=" +
//         "Nama :" + name + "%0a" +
//         "Email :" + email + "%0a" +
//         "Pesan :" + message + "%0a%0a" +
//         "Hallloooooooooooooooo";

//     window.open(url, '_blank').focus();
// }



