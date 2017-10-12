// 1 a: Loop through the list nested in movieData,
// to print the title of each movie in the list.
// 1 b: Only print movies worth seeing, ie scores abouve 70.
// 1 c: Continuing on with 'b', do NOT print the movie if it begins with The
const movieData = {
    all: {
        list: [ 
            { title: 'Blade Runner 2049', score: 91 },
            { title: 'The Mountain Between Us', score: 54},
            { title: 'Victoria & Abdul', score: 67 },
            { title: 'My Little Pony', score: 71 },
            { title: 'The Florida Project', score: 96 }
        ]
    }
}

const printMovies = (arr) => {
    for(let i = 0; i < arr.length; i +=1){
        if(arr[i].score > 70 && arr[i].title.split(' ')[0] !== 'The'){
            console.log(arr[i].title)
        }
    }
}
//printMovies(movieData.all.list);

// 2 a: Create a function that returns 'Kelly Blue Book', make sure to access it via the autoMobiles
// 2 b: Create a function that loops through the sports cars array, and print each item.
// 2 c: Create a function that can will return a new array of only Chevrolet sports cars.
const autoMobiles = [
    { info: 'Kelly Blue Book' },
    {
        sportsCars: [ 'ford mustang', 'chevrolet corvette', 'chevrolet camero', 'porsche 911' ],
        luxuryCars: [ 'mercedes benz', 'lexus es', 'cadillac cts', 'bmw3 series' ]
    }    
]

const printKelly = () => {
    return autoMobiles[0].info
}
//console.log(printKelly());

const printSportsCars = () => {
    const cars = autoMobiles[1].sportsCars;
    for(let i = 0; i < cars.length; i +=1){
        console.log(cars[i]);
    }
}
//printSportsCars();

const printChevrolet = (arr) => {
    const chevroletCars = [];
    for(let i = 0; i < arr.length; i +=1){
        if(arr[i].split(' ')[0] === 'chevrolet'){
            chevroletCars.push(arr[i]);
        }
    }
    return chevroletCars;
}
//console.log(printChevrolet(autoMobiles[1].sportsCars));


//3 a: Given the citiesJSON data, access the cities, and print each item in the array,
// using string interperloation. IE the reponse should look like "Boston is in MA"
//3 b: - Create a function that takes a state abbreviation as a parameter, and returns
// the statement from 3 A if there is a corresponding city, otherwise it returns a statement
// that says no data found.
// ex: getCity('MA') returns "Boston is in MA"
// ex: getCity('MT) returns "No Data Found"

const citiesJSON = {
    meta_data: [23432, 4234, 234, 232, 43242 , 3231],
    payload: {
        url: '/api/cities',
        cities: [
            { city: 'Austin', state: 'TX' },
            { city: 'Denver', state: 'CO' },
            { city: 'San Jose', state: 'CA' },
            { city: 'Washington D.C.', state: 'DC' },
            { city: 'Seattle', state: 'WA' },
            { city: 'Boston', state: 'MA' }
        ]
    }
}

const printCities = (arr, state) => {
    let cityInfo = '';
    for(let i = 0; i < arr.length; i++){
       //cityInfo.push(`${arr[i].city} is in ${arr[i].state}.`)
       if(arr[i].state === state){
            cityInfo = (`${arr[i].city} is in ${arr[i].state}.`)
       } else { 
           cityInfo = `${state} was not found.`;
       }
    }
    return cityInfo
}
console.log(printCities(citiesJSON.payload.cities, 'MT'));

// 4 Create a Bootstrap vue for atleast one of the previous 3 data objects.
// At minimum, pass an array to your HTML, and render a list of items.
// Feel free to practice your creativity.
// tip: Don't forget to add Vue as an external javascript  &  Bootstrap as an external CSS
