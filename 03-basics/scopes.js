let a = 10

if(a==10){
    let a = 5
    console.log(a); // local scope
}
console.log(a); // global scope

function one(){
    const username = "Gautam"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()

}
one()
