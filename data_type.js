//  primitive

//7 types :  string ,number ,boolean , nul, undefined, symbol , bigInt  .
const score =100
const score1  =100.3
const login = false
const out =null
let mail ;


const id = Symbol("123")
const anid =Symbol("123")
console.log(id === anid);


const bignumber = 12345678n





//reference (non primitive)
// array , objects ,functions .


// const array = ["ram","hanuman","laxman"]

// let myobj = {
//     age :23,
//     name :"debendra",


// }

// const myfunction =function(){
//     console.log("hello world ");
    
// }

// console.log(typeof myfunction);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




// stack (primitive) , heap (non primitive)


  let youtub ="qrtyuioasdfghcvb"

  let another = youtub
  another = "dash"
console.log(youtub);

  console.log(another);

let user ={
    mail:"user@gmail.com"

}
 let user2= user
 user2.mail ="dash@gmail.com" 
console.log(user.mail);
console.log(user2.mail);

