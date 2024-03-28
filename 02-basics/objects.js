const mySymbol = Symbol("symbol1")

const jsUser = {
    name: "Gautam DHodi",
    [mySymbol]: "mySymbol",
    age: 18,
    email: "gautamdhodi02@gmail.com",
    location: "Indore",
    isLoggedIn: true,
    lastWorkingDays: ["Saturday", "Sunday"]
}

// console.log(jsUser.email);
// console.log(jsUser["age"]);
// console.log(jsUser.mySymbol);
// console.log(typeof jsUser[mySymbol]);
// console.log(jsUser);

jsUser.email = "gautam@gmail.com"
// console.log(jsUser);

jsUser.geetings = function(){
    console.log("Hola Amigo");
}
console.log(jsUser.geetings());
console.log(jsUser);

