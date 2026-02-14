document.addEventListener('DOMContentLoaded', function() {
    // Animación de corazones flotantes (opcional, para más magia)
    const container = document.querySelector('.container');
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(heart);
    }
});
