// const myNumbers = [1,2,3,4,5,6,7,8,9]

// const newNumbers = myNumbers.map( (num) => num + true )

//  console.log(newNumbers);

const myNumbers = [1,2,3,4,5,6,7,8,9]

const newNumbers = myNumbers
.map( (num) => num + 10 )
.map( (num) => num + true )
.filter( (num) => num >= 40 )

console.log(newNumbers);