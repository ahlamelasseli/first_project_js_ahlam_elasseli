const { Alert } = require("bootstrap")

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
        console.log("congratulation ur name > 5🎉")
    } else {
        console.log(" too short❌")
    }
}
