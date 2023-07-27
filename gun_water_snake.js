const prompt = require("prompt-sync")({ sigint: true });
let value = ['snake', 'water', 'gun']


let chances = 1;
let computer_point = 0;
let human_point = 0;
let user_guess
while (chances <= 10) {
    let comp_guess = value[Math.floor(Math.random() * value.length)]
    console.log(comp_guess)
    user_guess = prompt("enter your turn : ")

    if (user_guess == "snake" && comp_guess == "water") {
        console.log("user win")
        human_point = human_point + 1
        console.log(`computer point is ${computer_point} and user point is ${human_point}`)

    }
    else if (user_guess == "snake" && comp_guess == "gun") {
        console.log("computer win")
        computer_point = computer_point + 1
        console.log(`computer point is ${computer_point} and user point is ${human_point}`)
    }
    else if (user_guess == "snake" && comp_guess == "snake") {
        console.log("draw")

        console.log(`computer point is ${computer_point} and user point is ${human_point}`)
    }
    else if (user_guess == "water" && comp_guess == "water") {
        console.log("draw")

        console.log(`computer point is ${computer_point} and user point is ${human_point}`)
    }
    else if (user_guess == "water" && comp_guess == "gun") {
        console.log("user win")
        human_point = human_point + 1
        console.log(`computer point is ${computer_point} and user point is ${human_point}`)
    }
    else if (user_guess == "water" && comp_guess == "snake") {
        console.log("computer win ")
        computer_point = computer_point + 1
        console.log(`computer point is ${computer_point} and user point is ${human_point}`)
    }
    else if (user_guess == "gun" && comp_guess == "water") {
        console.log("computer win")
        computer_point = computer_point + 1
        console.log(`computer point is ${computer_point} and user point is ${human_point}`)
    }
    else if (user_guess == "gun" && comp_guess == "gun") {
        console.log("draw")

        console.log(`computer point is ${computer_point} and user point is ${human_point}`)
    }
    else if (user_guess == "gun" && comp_guess == "snake") {
        console.log("computer win ")
        computer_point = computer_point + 1
        console.log(`computer point is ${computer_point} and user point is ${human_point}`)
    }
    else {
        console.log("you write wrong input")
        console.log(`computer point is ${computer_point} and user point is ${human_point}`)
    }
    chances += 1
}
console.log(`your chances left ${11 - chances} more`)
if (chances > 11) {
    console.log("Game over")
}

if (computer_point > human_point) {
    console.log("computer win the game")
}
else if (computer_point < human_point) {
    console.log("you win the game")
}
else {
    console.log("tie ")
}

