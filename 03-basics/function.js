function addition(num1, num2){
    return num1 + num2
}

// const result = addition(2,4)
// console.log(result);

// function loginUserMessage(username = "sam"){
//     if(!username){
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(10, 20, 30, 40));