// Create a list of all items
const kits = ['crash', 'kick', 'snare', 'tom']

const containerEl = document.querySelector('.container');

// Use forEach loop to create the box item one by one
kits.forEach((kit) => {
    // Create each button element one by one
    const btnEl = document.createElement('button');
    btnEl.classList.add('btn');
    btnEl.innerText = kit;
    btnEl.style.backgroundImage = 'url(images/' + kit + '.png)';
    containerEl.appendChild(btnEl);

    // Create each audio element one by one
    const audioEl = document.createElement('audio');
    audioEl.src = 'sounds/' + kit + '.mp3';
    containerEl.appendChild(audioEl);

    // Use click to trigger audio play
    btnEl.addEventListener('click', () => {
        audioEl.play();
    })

    // Use keyboard to trigger audio play. If the key pressed equals to the first letter of the kit, then audio plays
    window.addEventListener('keydown', (event) => {
        if (event.key === kit.slice(0, 1)) {
            audioEl.play();
            btnEl.style.transform = 'scale(0.9)';
            setTimeout(() => {
                btnEl.style.transform = 'scale(1)';
            }, 100)
        }
    })
})