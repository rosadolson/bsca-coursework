const products = ['Apple', 'Avacado', 'Apricot', 'Mango', 'Spicy Ham' , 'Feta Cheese', 'Nutella']
// console.log(products);

const pluralizer = (productsIn) => {
    for(let i = 0; i < productsIn.length; i +=1){
        productsIn[i] += 's'
    }
    return productsIn
}
// console.log(pluralizer(products)); 


const pluralProducts = products.map(product => product + 's')
// console.log(pluralProducts)


const objectProducts  = pluralProducts.map(product => {
    const newProduct = {name: product}
    return newProduct
})
console.log(objectProducts);