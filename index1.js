
const userDatabase = {
    "leaveme123" : {
        firstName: "Haliya",
        lastName: "Aminu",
        email:"haliyaaminu@gmail.com",
        accountActivated: true,
        password: "haliya001"

    },
    "onpoint123" : {
        firstName: "Chike",
        lastName: "Odogwu",
        email:"chikeodogwu@gmail.com",
        accountActivated: false,
        password:"odogwu001"

    },
    "forever123" : {
        firstName: "Mope",
        lastName: "Festus",
        email:"mopefestus@gmail.com",
        accountActivated: true,
        password: "festus001"

    },
    "alias123" : {
        firstName: "Nana",
        lastName: "Pella",
        email:"nanapella@gmail.com",
        accountActivated: true,
        password: "nape111"

    }
}
function displayUserDetails() {
    // Enter username
    let username = prompt("Enter your user name")

while (validateUsername(username) == false) {
    username = prompt("Username not valid. Please a valid username")
}
if (username == null) {
    return
}

// Enter password
let password = prompt("Enter your password")

while (validatePassword(password) == false) {
    password = prompt("password not valid. Please enter a valid password")
}
if (password == null) {
    return
}

// confirm password
let passwordConfirm = prompt("confirm your password")

while (passwordConfirm !== password){
    passwordConfirm = prompt("Password Incorrect. Confirm your password again")
}
if (passwordConfirm == null) {
    return
}

// check if the user database contains the username
const user = userDatabase[username]

if (user == undefined){
    alert("ueser not found! Please try again with a new username")
    return
}

alert(`
    user found with the following details:
    First name: ${user.firstName}
    Last name: ${user.lastName}
    Email: ${user.email}
    Account activated: ${user.accountActivated}
`)
    
}

displayUserDetails() //CANCEL TAKES US BACK
alert("You have come to the end of this program! Goodbye")

function validateUsername(username) {
    if (username == null) {
        return true
    }
    
    if (username.length > 10) {
        return false
    }else {
        return true
    }
}

function validatePassword(password) {
    if (password == null) {
        return true
    }
    if (password.length < 6) { 
        return false
    }else {
        return true
    }
}
