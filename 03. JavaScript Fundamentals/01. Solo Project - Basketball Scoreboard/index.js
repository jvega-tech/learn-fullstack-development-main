

let homeScore = 0
let guestScore = 0
let homePoints = document.getElementById("homePoints")
let guestPoints = document.getElementById("guestPoints")









function onePointHome() {
    homeScore += 1
    homePoints.textContent = homeScore
}

function twoPointHome() {
    homeScore += 2
    homePoints.textContent = homeScore
}

function threePointHome() {
    homeScore += 3
    homePoints.textContent = homeScore
}

function resetHome() {
    homeScore = 0
    homePoints.textContent = homeScore
}




function onePointGuest() {
    guestScore += 1
    guestPoints.textContent = guestScore
}

function twoPointGuest() {
    guestScore += 2
    guestPoints.textContent = guestScore
}

function threePointGuest() {
    guestScore += 3
    guestPoints.textContent = guestScore
}

function resetGuest() {
    guestScore = 0
    guestPoints.textContent = guestScore
}