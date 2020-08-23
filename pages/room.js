const gardenIgorImage = document.querySelector('.garden-igor-image');
const tvImage = document.querySelector('.tv-image');
const butterflyImage = document.querySelector('.butterfly-image');
const boardImage = document.querySelector('.board-image');
const livingHectorImage = document.querySelector('.living-hector-image');
const livingVictorImage = document.querySelector('.living-victor-image');
const livingIgorImage = document.querySelector('.living-igor-image');
const gardenHectorImage = document.querySelector('.garden-hector-image');
const gardenVictorImage = document.querySelector('.garden-victor-image');
const professorImage = document.querySelector('.professor-image');
const articleImage = document.querySelector('.article-image');

let roomClick = e => {
    e.target.classList.toggle('hidden');
};

gardenIgorImage.addEventListener('click', roomClick);
tvImage.addEventListener('click', roomClick);
butterflyImage.addEventListener('click', roomClick);
livingHectorImage.addEventListener('click', roomClick);
livingVictorImage.addEventListener('click', roomClick);
livingIgorImage.addEventListener('click', roomClick);
gardenHectorImage.addEventListener('click', roomClick);
gardenVictorImage.addEventListener('click', roomClick);
boardImage.addEventListener('click', roomClick);
professorImage.addEventListener('click', roomClick);
articleImage.addEventListener('click', roomClick);
