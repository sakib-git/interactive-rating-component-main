const container = document.querySelector('.container');
const thankYou = document.querySelector('.thank-you ');
const submitButton = document.getElementById('submit');
const rateAgain = document.getElementById('rate-again');

const rating = document.getElementById('rating');
const btn = document.querySelectorAll('.btn')

submitButton.addEventListener('click', () => {
    thankYou.classList.remove('hidden');
    container.style.display = 'none'
})

rateAgain.addEventListener('click', () =>  {
    thankYou.classList.add('hidden');
    container.style.display = 'block'
})

btn.forEach((btns) => {
    btns.addEventListener('click', () => {
        rating.innerHTML = btns.innerHTML
    })
})