const letters = 'ASDFGHJWETYU';

document.addEventListener('keypress', event => {
    if (letters.includes(event.key.toUpperCase())) {
        let audio = new Audio(`keys_sound/${event.key.toUpperCase()}.mp3`)
        audio.play();
    }
});