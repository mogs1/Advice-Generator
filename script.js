const title = document.getElementById('title');
const advice = document.getElementById('advice');
const adviceBtn = document.getElementById('dice');

function loadAdvice() {
    fetch(`https://api.adviceslip.com/advice`)
    .then(res => res.json())
    .then(data => {
        const header = data.slip.id;
        title.innerHTML =`<small>advice #${header}</small>`;

        const message = data.slip.advice
        advice.innerText = `${message}`;
    });
}

window.addEventListener('load', loadAdvice);
adviceBtn.addEventListener('click', loadAdvice)