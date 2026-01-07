let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function randomHand() {
    let randomSign = Math.floor ( Math.random() * 3 )
    return hands[randomSign]
}

console.log( randomHand() )


