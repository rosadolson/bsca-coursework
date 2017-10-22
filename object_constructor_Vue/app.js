function Cupcake(flavor, ingredients, img){
    this.flavor = flavor
    this.ingredients = ingredients
    this.img = img
}

const cupcakes = [];

const vanilla = new Cupcake('Vanilla', ['Vanilla','Flour', 'Butter', 'Sugar', 'Eggs'], 'https://www.cookingclassy.com/wp-content/uploads/2013/04/angel-food-cupcakes13..jpg');
const chocolate = new Cupcake('Chocolate', ['Cocoa Powder','Flour', 'Butter', 'Sugar', 'Eggs'], 'https://sallysbakingaddiction.com/wp-content/uploads/2014/06/best-chocolate-cupcakes.jpg');
const redVelvet = new Cupcake('Red Velvet', ['Cocoa Powder', 'Red Food Dye','Flour', 'Butter', 'Sugar', 'Eggs'], 'http://www.royalcaribbean.com/connect/wp-content/uploads/2014/10/red-velvet-cupcakes.jpg');
const lemon = new Cupcake('Lemon', ['Lemon Zest','Flour', 'Butter', 'Sugar', 'Eggs'], 'https://sallysbakingaddiction.com/wp-content/uploads/2013/04/the-best-lemon-cupcakes-5.jpg');
const coconut = new Cupcake('Coconut', ['Coconut Flakes','Flour', 'Butter', 'Sugar', 'Eggs'], 'http://www.completelydelicious.com/wp-content/uploads/2011/08/IMG_3940.jpg');


cupcakes.push(vanilla, chocolate, redVelvet, lemon, coconut);

const cupcakeVue = {
    el: "#cupcake-app",
    data: {
        title: "cupcakes",
        cupcakes: cupcakes, 
    }
}

new Vue(cupcakeVue);