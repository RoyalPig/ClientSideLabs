let score = 0;
let unlockedObjects = [];
let unlockThresholds = { planet: 3, rocket: 7, alien: 10, star: 15 };

function clickCookie() {
    score++;
    updateScore();
    checkUnlockables();
    // This part remains the same, enlarging the cookie temporarily
    document.getElementById('cookie').style.transform = 'scale(1.1)';
    setTimeout(() => document.getElementById('cookie').style.transform = 'scale(1)', 100);
}

function updateScore() {
    document.getElementById('scoreValue').textContent = score;
}

function unlockObject(object) {
    if (!unlockedObjects.includes(object) && score >= unlockThresholds[object]) {
        unlockedObjects.push(object);
        let objElement = document.getElementById(object);
        objElement.classList.add('unlocked');
        objElement.style.display = 'block'; // Show if previously hidden
        alert(`Congratulations! You've unlocked the ${object}!`);
    } else if (unlockedObjects.includes(object)) {
        // Enlarge the space object when clicked without resetting size
        let objElement = document.getElementById(object);
        objElement.style.transform = 'scale(1.2)'; // Permanently enlarge
    }
}

function checkUnlockables() {
    Object.keys(unlockThresholds).forEach(object => {
        if (score >= unlockThresholds[object]) {
            unlockObject(object);
        }
    });
}
