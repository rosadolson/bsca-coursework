const storeInventory = [
    {name: "Catcher in the Rye", author: "J.D. Salinger", price: 10.00, genre: "Adult Fiction"},
    {name: "The Wind-Up Bird Chronicles", author: "Haruki Murakami", price: 15.00, genre: "Adult Fiction"},
    {name: "The Unbearable Lightness of Being", author: "Milan Kundera", price: 14.00, genre: "Adult Fiction"},
    {name: "Harry Potter: The Sorcerers Stone", author: "J.K. Rowling", price: 22.00, genre: "Youth Fiction"},
    {name: "In Cold Blood", author: "Truman Capote", price: 14.00, genre: "Non-Fiction"},
    {name: "A Brief History of Time", author: "Stephen Hawking", price: 18.00, genre: "Non-Fiction"},
    {name: "The Emperor of All Maladies", author: "Siddhartha Mukherjee", price: 20.00, genre: "Non-Fiction"},
    {name: "The Structure of Scientific Revolutions", author: "Thomas S. Khun", price: 16.00, genre: "Non-Fiction"},
    {name: "A Wrinkle in Time", author: "Madeleine L Engle", price: 14.00, genre: "Youth Fiction"},
    {name: "The House of the Scorpion", author: "Nancy Farmer", price: 16.00, genre: "Youth Fiction"},
    {name: "Mastering the Art of French Cooking", author: "Julia Child", price: 24.00, genre: "Food/Cooking"},
    {name: "Antifragile", author: "Nassim Nicholas Taleb", price: 20.00, genre: "Philosophy"}
  ];

//Challenge One - use map or filter to print out al of the book info
//ex - 'Catche in the Rye is by J.D. Salinger and is $10.00'
  const bookInfo = storeInventory.map((book) => {
      return `${book.name} is by ${book.author} and is $${book.price}.`
  })
//console.log(bookInfo);

const newFunction = (arr) => {
    let bookInfo = arr.map((book) => {
        return `${book.name} is by ${book.author} and is $${book.price}.`        
    })
    return bookInfo
}
//console.log(newFunction(storeInventory));


//Challenge Two = Create a function using filter to only return nonfiction books
const  nonFictionOnly = storeInventory.filter( book => {
    return book.genre === 'Non-Fiction'
})
//console.log(nonFictionOnly);

//Now create a function to pass in an array
const nonFictionFunction = (arr) => {
    let bookInfo = arr.filter( book => {
        return book.genre === "Non-Fiction"
    })
    return bookInfo
}
//console.log(nonFictionFunction(storeInventory)); 


//Challenge Three = Filter the books with a price greater than $15
const expensiveBooks = storeInventory.filter( book => {
    return book.price > 15.00
})
//console.log(expensiveBooks);

//*BONUS* pass the price we want to filter by as a parameter into the function. 
//*BONUS* Use map to only print the name of the books
const booksByPrice = (arr, cost) => {
    let bookInfo = arr.filter( book => {
        return book.price > cost
    }).map(bookName => {
        return bookName.name
    })
    return bookInfo
}
//console.log(booksByPrice(storeInventory, 14.00));

// create shopping cart you can add books to
const shoppingCart = []

const addBookToCart = (bookName) => {
    let book = storeInventory.filter( book => {
        return book.name === bookName
    })
    shoppingCart.push(book[0])
}
addBookToCart("A Wrinkle in Time");
addBookToCart("Harry Potter: The Sorcerers Stone");
addBookToCart("The House of the Scorpion");
addBookToCart("Mastering the Art of French Cooking");
addBookToCart("Antifragile");
//console.log(shoppingCart);

// create a function to find the total price of items in our cart
const totalPrice = (arr) => {
    let totalOfBooks = 0;

    for(let i = 0; i < arr.length; i++){
        totalOfBooks += arr[i].price
    }
    return `TOTAL: $${totalOfBooks}.00.`
}

//make a function to print all of the books in your shopping cart using map or filter to make it look nice.
const shoppingCartInfo = shoppingCart.map((book) => {
    return `${book.name} is by ${book.author} and costs: $${book.price}.`
})
//console.log(shoppingCartInfo);

const printPretty = (arr) => {
    let price = totalPrice(shoppingCart);

    console.log('**************** SHOPPING CART ****************')
    for(let i = 0; i < arr.length; i++){
        console.log(`${arr[i].name} is by ${arr[i].author} and costs: $${arr[i].price}.`);
    }
    console.log(`**************** ${price} ****************`)
}
printPretty(shoppingCart);

