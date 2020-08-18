const allCards = [
    { id: 0, name: 'start', srcset: './img/start.jpg' },
    { id: 1, name: '1', srcset: './img/1.jpg' },
    { id: 6, name: '6', srcset: './img/6.jpg' },
    { id: 9, name: '9', srcset: './img/9.jpg' },
    { id: 10, name: '10', srcset: './img/10.jpg' },
    { id: 11, name: '11', srcset: './img/11.jpg' },
    { id: 12, name: '12', srcset: './img/12.jpg' },
    { id: 13, name: '13', srcset: './img/13.jpg' },
    { id: 14, name: '14', srcset: './img/14.jpg' },
    { id: 10, name: '16', srcset: './img/16.jpg' },
    { id: 11, name: '17', srcset: './img/17.jpg' },
    { id: 12, name: '18', srcset: './img/18.jpg' },
    { id: 13, name: '19', srcset: './img/19.jpg' },
    { id: 14, name: '20', srcset: './img/20.jpg' },
    { id: 15, name: '21', srcset: './img/21.jpg' },
    { id: 16, name: '22', srcset: './img/22.jpg' },
    { id: 17, name: '23', srcset: './img/23.jpg' },
    { id: 18, name: '24', srcset: './img/24.jpg' },
    { id: 19, name: '26', srcset: './img/26.jpg' },
    { id: 20, name: '28', srcset: './img/28.jpg' },
    { id: 21, name: '29', srcset: './img/29.jpg' },
    { id: 22, name: '30', srcset: './img/30.jpg' },
    { id: 23, name: '33', srcset: './img/33.jpg' },
    { id: 24, name: '35', srcset: './img/35.jpg' },
    { id: 25, name: '36', srcset: './img/36.jpg' },
    { id: 26, name: '37', srcset: './img/37.jpg' },
    { id: 27, name: '40', srcset: './img/40.jpg' },
    { id: 28, name: '43', srcset: './img/43.jpg' },
    { id: 29, name: '45', srcset: './img/45.jpg' },
    { id: 30, name: '46', srcset: './img/46.jpg' },
    { id: 31, name: '52', srcset: './img/52.jpg' },
    { id: 32, name: '54', srcset: './img/54.jpg' },
    { id: 33, name: '55', srcset: './img/55.jpg' },
    { id: 34, name: '58', srcset: './img/58.jpg' },
    { id: 35, name: '64', srcset: './img/64.jpg' },
    { id: 36, name: '67', srcset: './img/67.jpg' },
    { id: 37, name: '68', srcset: './img/68.jpg' },
    { id: 38, name: '69', srcset: './img/69.jpg' },
    { id: 39, name: '70', srcset: './img/70.jpg' },
    { id: 40, name: '71', srcset: './img/71.jpg' },
    { id: 41, name: '72', srcset: './img/72.jpg' },
    { id: 42, name: '74', srcset: './img/74.jpg' },
    { id: 43, name: '75', srcset: './img/75.jpg' },
    { id: 44, name: '77', srcset: './img/77.jpg' },
    { id: 45, name: '79', srcset: './img/79.jpg' },
    { id: 46, name: '82', srcset: './img/82.jpg' },
    { id: 47, name: '83', srcset: './img/83.jpg' },
    { id: 48, name: '86', srcset: './img/86.jpg' },
    { id: 49, name: '95', srcset: './img/95.jpg' },
    { id: 50, name: '97', srcset: './img/97.jpg' },
    { id: 51, name: '99', srcset: './img/99.jpg' },
    { id: 52, name: 'B', srcset: './img/B.jpg' },
    { id: 53, name: 'G', srcset: './img/G.jpg' },
    { id: 54, name: 'H', srcset: './img/H.jpg' },
    { id: 55, name: 'i', srcset: './img/i.jpg' },
    { id: 56, name: 'q', srcset: './img/q.jpg' },
    { id: 57, name: 'S', srcset: './img/S.jpg' },
    { id: 58, name: 'V', srcset: './img/V.jpg' },
    { id: 59, name: 'X', srcset: './img/X.jpg' },
    { id: 60, name: 'Y', srcset: './img/Y.jpg' },
];

const selectElement = document.querySelector('.ice-cream');
const logging = document.querySelector('.logging');
const loggingArray = [];

selectElement.addEventListener('change', event => {
    numberSomething = `${event.target.value}`;
    console.log(numberSomething);
    let pickedCard = allCards[(id = `${event.target.value}`)];
    loggingArray.push(pickedCard.name);

    document
        .querySelector('.result')
        .appendChild(document.createElement('img')).srcset = pickedCard.srcset;
    document
        .querySelector('.result')
        .appendChild(document.createElement('img'))
        .setAttribute('id', `${event.target.value}`);

    logging.textContent = 'Picked cards (in order): ' + loggingArray;
});

let resultingDiv = document.querySelector('.result');
resultingDiv.addEventListener('click', event => {
    let g = event.target;
    resultingDiv.removeChild(g);
});
