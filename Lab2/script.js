const currentLocation = "Halifax"; // Change this value to test other locations
const currentDate = new Date();
const startDate = new Date(currentDate.getFullYear(), 0, 19); // Jan 19
const endDate = new Date(currentDate.getFullYear(), 1, 19); // Feb 19

console.log("JavaScript file loaded");

function getLocationMessage(currentLocation) {
    if (currentLocation === "Halifax") {
        return "Location: Halifax Airport, Code: YHZ";
    } else {
        return "Please specify your location and destination.";
    }
}

function getTravelStatus() {
    if (currentDate >= startDate && currentDate <= endDate) {
        return "Travel Status: Currently traveling in Costa Rica.";
    } else {
        return "Travel Status: Home in Halifax.";
    }
}

document.getElementById("output").innerHTML = getLocationMessage(currentLocation) + "<br>" + getTravelStatus();
