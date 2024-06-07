document.addEventListener('DOMContentLoaded', (event) => {
    let count = 0;
    const button = document.getElementById('countButton');
    const counterDisplay = document.getElementById('counter');

    button.addEventListener('click', () => {
        count++;
        counterDisplay.textContent = count;
    });
});
