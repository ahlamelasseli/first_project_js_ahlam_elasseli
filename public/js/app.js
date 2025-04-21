
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
        Users.email = user

    }

    let age = prompt("enter ur age").trim()
    if (age.length >= 3 || age.length <= 0) {
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
    let email = prompt("Enter your email:").trim().toLowerCase();

    if (!user.find(e => e.email === email)) {
            alert("This email does not exist, you need to sign up!");
    }

    let passWord = prompt("Enter your password to log in:").trim();

    while (!user.fin(e => e.email === email && e.password === passWord)) {
        alert('That password didn’t match')
        passWord = prompt("Enter your password to log in:").trim();
       }
    alert("you logged successfully ");
}

const i = (e) =>{

    while (true) {
        let l = prompt("\n 1.logout,\n 2.withdraw money, \n 3.deposit money,\n 4.take a loan, \n 5.invest)").toLowerCase();
        if (l == 1) {
            alert("You are logged out.");
            return;
        } else if (l == 2) {
        
        }else if (l == 3) {
            
        }
}
}
