function showLockMessage(msg) {
    const toast = document.getElementById("lock-message");
    toast.innerText = msg;
    toast.style.display = "block";
    
    setTimeout(() => {
        toast.style.display = "none";
    }, 2500);
}

function unlockChapter() {
    const audio = document.getElementById("myAudio");
    audio.play().catch(e => console.log("Audio play blocked or file not found"));

    const welcome = document.getElementById("welcome-page");
    const main = document.getElementById("main-content");

    // Efek Transisi
    welcome.classList.add("fade-up");
    
    setTimeout(() => {
        welcome.style.display = "none";
        main.style.display = "block";
        
        // Munculkan konten utama
        setTimeout(() => {
            main.style.opacity = "1";
            main.style.transform = "translateY(0)";
        }, 100);

        // Mulai animasi hati
        setInterval(createHeart, 300);
    }, 1000);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-fall');
    heart.innerHTML = '🤍';
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.style.opacity = Math.random();
    heart.style.fontSize = Math.random() * 10 + 10 + 'px';
    
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}