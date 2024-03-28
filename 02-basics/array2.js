const marvelHeros = ["Thor", "Ironman", "Hulk"]
const dcHeros = ["Superman", "Flash", "Batman"]
// console.log(marvelHeros)
marvelHeros.push(dcHeros)
// console.log(marvelHeros)
marvelHeros.pop()
// console.log(marvelHeros);
const allHeros =  [...marvelHeros, ...dcHeros]
console.log(allHeros);