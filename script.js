const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const heartAnimation = document.getElementById('heartAnimation');

yesBtn.addEventListener('click', () => {
    heartAnimation.classList.remove('hidden');
});

noBtn.addEventListener('mouseover', () => {
    const offsetX = Math.random() * 200 - 100; // Deslocamento aleatório
    const offsetY = Math.random() * 200 - 100; // Deslocamento aleatório

    const btnRect = noBtn.getBoundingClientRect();
    const containerRect = document.querySelector('.container').getBoundingClientRect();

    let newLeft = btnRect.left + offsetX;
    let newTop = btnRect.top + offsetY;

    // Garantir que o botão permaneça dentro do container
    if (newLeft < containerRect.left) newLeft = containerRect.left;
    if (newLeft + btnRect.width > containerRect.right) newLeft = containerRect.right - btnRect.width;
    if (newTop < containerRect.top) newTop = containerRect.top;
    if (newTop + btnRect.height > containerRect.bottom) newTop = containerRect.bottom - btnRect.height;

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${newLeft}px`;
    noBtn.style.top = `${newTop}px`;
});
