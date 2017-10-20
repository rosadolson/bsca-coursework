
function Guesser(number, lives){
    this.number = number
    this.lives = lives
}


Guesser.prototype.guess = function(n){
    if(n > this.number){
        console.log(`${n} is too big.`)

        if(this.lives !== 0){
            this.lives = this.lives -1
            console.log(`You have ${this.lives} lives left.`)
        } else {
            console.log("Oops, you don't have any more lives!")
        }

    } else if(n < this.number){
        console.log(`${n} is too small.`)
       
        if(this.lives !== 0){
            this.lives = this.lives -1
            console.log(`You have ${this.lives} lives left.`)
        } else {
            console.log("Oops, you don't have any more lives!")
        }

    } else {
        console.log(`${n} is the correct number!`)
        console.log(`You have ${this.lives} lives left.`)
    }
}


const myGuess = new Guesser(10, 2)

myGuess.guess(50)
myGuess.guess(7)
myGuess.guess(3)
myGuess.guess(10)
