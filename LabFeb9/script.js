
var myNextBirthday = new Date("2024-07-03T00:00:00"); // Replace YYYY-MM-DD with your next birthday

function updateCountdown() {
    var now = new Date();
    var distance = myNextBirthday - now;

    // Time calculations for weeks, days, hours, minutes, and seconds
    var weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
    var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in an element with id="birthdayCountdown"
    document.getElementById("birthdayCountdown").innerHTML = "There are " + weeks + " weeks, " + days + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds until my next birthday!";

    // Update the count down every 1 second
    setTimeout(updateCountdown, 1000);
}

// Call the function on script load
updateCountdown();
