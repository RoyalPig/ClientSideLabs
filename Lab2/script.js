// JavaScript File: script.js

// Assigning a location string for testing
const location = "Halifax"; // You can change this for testing
const currentDate = new Date();
const startDate = new Date(currentDate.getFullYear(), 0, 19); // Jan 19
const endDate = new Date(currentDate.getFullYear(), 1, 19); // Feb 19

function getLocationInfo(location) {
    if (location === "Halifax") {
        return "Halifax Airport, Code: YHZ";
    } else {
        return "Where are you located and where are you going?";
    }
}

function getTravelInfo() {
    if (currentDate >= startDate && currentDate <= endDate) {
        return "I am traveling in Costa Rica.";
    } else {
        return "I am home in Halifax.";
    }
}

// Using getElementById to output to the HTML
document.getElementById("output").innerHTML = getLocationInfo(location) + "<br>" + getTravelInfo();
