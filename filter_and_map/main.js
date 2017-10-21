
let names = ['David Bowie', 'The Artist Formerly Known as Prince', 'John Lennon', 'Jimmi Hendrix', 'Robert Plant', 'Paul McCartney', 'Gene Simmons', 'Stevie Nicks', 'Florence Welch', 'Sonny and Cher']


//Map the names to objects
//ex: {name: 'David Bowie'}
// return result to mappedNames array
const mappedNames = names.map( name => {
   let rockstar = {Name: name}
   return rockstar
})
//console.log(mappedNames);


//map through just the first names, 
//and return an array of the first names of the artists
const firstNameOnly = names.map( name => name.split(' ')[0]);
//console.log(firstNameOnly);


// call filter on names array
//only return first names beginning with J. 
//store this result in a new array
const namesWithJ = names.filter( name => name[0] === 'J')
//console.log(namesWithJ);


//return on the first name of the artists whose first names begin with J.
//a.methodone().methodTwo()
const firstNameJ = names.filter( name => name[0] === 'J').map(name => name.split(' ')[0])
//console.log(firstNameJ);


// SHAPES:
let shapes = [
    { name: 'Square', color: 'Green', sides: 4 },
    { name: 'Triangle', color: 'Green', sides: 3 },
    { name: 'Rectangle', color: 'Red', sides: 4 },
    { name: 'Pentagon', color: 'Green', sides: 5 },
    { name: 'Hexagon', color: 'Red', sides: 6 }
];


//Call map on shapes array,
//return a new array of shpe names (array of names of each shape)
const shapeNames = shapes.map( shape => shape.name);
//console.log(shapeNames);


//call filter on shapes array,
//return a new array of only green shapes
const greenShapes = shapes.filter( shape => shape.color === 'Green');
//console.log(greenShapes);


//call filter on shapes array,
//return shapes with less than 4
const lessThanFour = shapes.filter( shape => shape.sides < 4);
//console.log(lessThanFour);