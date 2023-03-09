import data from './data.json' assert { type: 'json' };


const span_scores = document.querySelectorAll('.summary__right-side-box-number');
const categories = document.querySelectorAll('figure span')
const icons = document.querySelectorAll('figure img')

data.forEach((data, index) => {
    // Entering the score on the page
    span_scores[index].textContent = data.score;

    // Entering the category on the page
    categories[index].textContent = data.category;

    // Entering the icons on the page
    icons[index].src = data.icon;
})
