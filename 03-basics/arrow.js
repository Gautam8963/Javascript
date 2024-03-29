// const user = {
//     username: "Gautam",
//     price: 9999,
//     welcomeMessage: function(){
//         console.log('${this.username},welcome to company ');
//     }
// }

// // console.log(user);
// user.username = 'Ram'
// // user.welcomeMessage();

// function chai(){
//     username = "Gautam"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     username = "Gautam"
//     console.log(this.username);
// }

//*************Arrow Function***********/

const chai =  ()=> {
    username = "Gautam"
    console.log(this);
}

const addition = (num1, num2)=>{
    return num1 + num2
}

// console.log(addition(3,6));

const multiplication = (num1,num2) => (num1*num2)
console.log(multiplication(3,5));