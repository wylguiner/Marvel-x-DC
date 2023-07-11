// navbar
let menuIcon = document.getElementById('menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');  
};

// Marvel Heroes

const bigMarvelImage = document.getElementById('marvel-selected'); //pega o ID da imagem grande da marvel
const marvelHero = document.getElementById('marvel-name');
const marvelDesc = document.getElementById('marvel-desc');

const smallMarvelImages = document.querySelectorAll('.marvel-heroes img') //pega todas as imgs pequenas marvel

smallMarvelImages.forEach((smallMarvelImage) => {
    smallMarvelImage.addEventListener('click', () => {
        const newSrc = smallMarvelImage.src;
        const newAlt = smallMarvelImage.alt;
        const newHero = smallMarvelImage.dataset.title;
        const newDesc = smallMarvelImage.dataset.description;

        bigMarvelImage.src = newSrc;
        bigMarvelImage.alt = newAlt;
        marvelHero.textContent = newHero;
        marvelDesc.textContent = newDesc;
    });
});

//DC Heroes

const bigDCImage = document.getElementById('dc-selected'); //pega o ID da imagem grande da marvel
const DCHero = document.getElementById('dc-name');
const DCDesc = document.getElementById('dc-desc');

const smallDCImages = document.querySelectorAll('.dc-heroes img') //pega todas as imgs pequenas marvel

smallDCImages.forEach((smallDCImage) => {
    smallDCImage.addEventListener('click', () => {
        const newSrc = smallDCImage.src;
        const newAlt = smallDCImage.alt;
        const newHero = smallDCImage.dataset.title;
        const newDesc = smallDCImage.dataset.description;

        bigDCImage.src = newSrc;
        bigDCImage.alt = newAlt;
        DCHero.textContent = newHero;
        DCDesc.textContent = newDesc;
    });
});