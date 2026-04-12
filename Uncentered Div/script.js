// Add a little JS to make the un-centering dynamic and miserable
document.addEventListener('mousemove', (e) => {
    // Calculate distance from center of screen
    const x = e.clientX - window.innerWidth / 2;
    const y = e.clientY - window.innerHeight / 2;

    // Apply it to the CSS variables so the whole wrapper moves AWAY from center
    // the more you move your mouse.
    document.documentElement.style.setProperty('--x-offset', `${x}px`);
    document.documentElement.style.setProperty('--y-offset', `${y}px`);
});

// The evasive button
const fixBtn = document.getElementById('btn-fix');

fixBtn.addEventListener('mouseenter', () => {
    // Calculate random new position that pushes the button off-screen or out of the natural flow
    const randomX = (Math.random() - 0.5) * 400;
    const randomY = (Math.random() - 0.5) * 400;
    
    // We override inline styles to force it away from cursor
    fixBtn.style.transform = `translate(${randomX}px, ${randomY}px) scale(0.8)`;
    fixBtn.style.position = 'absolute';
    
    // Changing inner text for added insolence
    const phrases = ["Missed!", "Too slow!", "Nope.", "Keep trying!", "Not today!", "Ha!"];
    fixBtn.innerText = phrases[Math.floor(Math.random() * phrases.length)];
});

// Reset button that actually breaks things more
const resetBtn = document.getElementById('btn-reset');
let clickCount = 0;

resetBtn.addEventListener('click', () => {
    clickCount++;
    const card = document.getElementById('main-card');
    
    if (clickCount === 1) {
        card.style.marginTop = "200px";
        resetBtn.innerText = "Wait, higher";
    } else if (clickCount === 2) {
        card.style.marginLeft = "300px";
        card.style.marginTop = "-100px";
        resetBtn.innerText = "Is that center?";
    } else if (clickCount === 3) {
        card.style.transform = "rotate(180deg)";
        resetBtn.innerText = "I give up";
    } else {
        document.body.style.display = "block"; // totally ruins flexbox centering
        card.style.margin = "0"; // ruins any previous margin hack
        resetBtn.innerText = "Ah, perfection.";
        resetBtn.disabled = true;
    }
});

// Dynamic target text
const targetBox = document.getElementById('target-box');
const targetArea = document.querySelector('.target-area');

targetArea.addEventListener('mouseenter', () => {
    targetBox.innerText = "Whoa, space bubble breached!";
});

targetArea.addEventListener('mouseleave', () => {
    targetBox.innerText = "I am perfectly centered.";
});
