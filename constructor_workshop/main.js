const tvCharacterOne = {
                     name: 'Spongebob',
                     show: 'Spongebob Squarepants',
                     rating: 3,
                     };

const tvCharacterTwo = {
                    name: 'Barbie',
                    show: 'Barbie',
                    rating: 5,
                    };

const tvCharacterThree = {
                    name: 'Dora',
                    show: 'Dora the Explorer',
                    rating: 2,
                    };


function tvCharacter(name, show, rating){
    this.name = name
    this.show = show
    this.rating = rating
} 

const Spongebob = new tvCharacter('Spongebob', 'Spongebob Squarepants', 7)
//console.log(Spongebob); 


//Create a constructor function called car. 
//It should have three attributes, make, model, and year.
//Make and model should be strings, year should be a number.
//Call your new constructor function, create a new car data-type,
// and store it a variable with a good name.
//Console.log the new variable.

function car(make, model, year){
    this.make = make
    this.model = model
    this.year = year
}

const goodName = new car("Chevrolet", "Corvette",  2017)
const goodName2 = new car("BMW", "M5", 2005)
const goodName3 = new car("VW", "Bug", 1985)

//console.log(goodName, goodName2, goodName3);


const createCar = () => {
    let result = []
    for(let i = 0; i < 10; i ++){
        const carObj = {
            make: "VW",
            model: "Rabbit",
            year: 2008
        }
        result.push(carObj)
    }
    return result
}
//console.log(createCar()); 


const createCar2 = () => {
    let result = []
    for(let i = 0; i < 10; i++){
        result.push(new car("Ford", "Mustang", 1966))
    }
    return result
}
//console.log(createCar2());


function Recipe(ingredients, instructions, time){
    this.ingredients = ingredients
    this.instructions = instructions
    this.time = time
}

const createRecipe = (numRecipes) => {
    let result = []
    for(let i = 0; i < numRecipes; i++){
        result.push(new Recipe({}, [], 0))
    }
    return result
}

console.log(createRecipe(7)); 