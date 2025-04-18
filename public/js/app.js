
let user = []

class Users {
    constructor(name, email, age, password, moneybalance, history) {
        this.name = name
        this.email = email
        this.age = age
        this.password = password
        this.moneybalance = 2000
        this.history = []

    }
}
Users.name = user
console.log(user);

let x = prompt("what do you want : \n 1.sign up \n 2.log in \n 3.change your password")
console.log(x);

if (x == 1) {


    let userName = prompt("Enter your Fullname :")
    userName = userName.trim() + userName.charAt(0).toUpperCase()
    if (userName.length >= 5) {
        console.log("congratulation ")
    } else {
        alert("too short")
    }

    let email = prompt("enter ur email").trim().toLowerCase()
    if (email.length <= 10 || email.includes("@")) {
        alert("ur email r confermed")
    } else {
        Users.email = email

    }

    let age = prompt("enter ur age").trim()
    if (age.length >= 2 || age.length <= 0) {
        alert("try again!")
    }
    let password = prompt("enter ur password : should be strong & without spaces")
    if (password.includes(" ")) {
        Alert("u've a space in ur password! ")
    }else if (password.includes("@", "#", "-", "+", "*", "/") || password.length > 7) {
        alert("ur password r strong ")
    }
    let password_confirmed = prompt("enter ur password again")
    if (password_confirmed == password) {
        alert("correct ")
    }else{
        console.log("not correct! ");
        
    }
}else if (x == 2) {

}
