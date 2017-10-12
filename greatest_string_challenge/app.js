const fallArray = [
    'pumpkin',
    'spice',
    'is',
    'very',
    'nice',
    'happy',
    'fall'
]

//find and print the greatest length string in array

const greatestLength = (arr) => {

    let greatestLengthSoFar = 0
    let indexOfWord = 0

    for(let i = 0; i < arr.length; i+=1){
      let currentLengthOfWord = arr[i].length

      if(currentLengthOfWord > greatestLengthSoFar){
        greatestLengthSoFar = currentLengthOfWord
        indexOfWord = i
      }
    }
    return `${arr[indexOfWord]} has length ${greatestLengthSoFar}.`
}
console.log(greatestLength(fallArray));