var users = [
    {email:"kmert0@outlook.com",password:"123"},
    {email:"kramazan0@outlook.com",password:"1234"}
]

var twits = [
    {email:"kmert0@outlook.com",twit:"The weather is nice"},
    {email:"kramazan0@outlook.com",twit:"The weather is bad"}
]

var email = prompt("email?")
var password = prompt("password?")

function login(){
    if(email == users[0].email && password == users[0].password){
        console.log(twits[0].twit)
    }else if(email == users[1].email && password == users[1].password){
        console.log(twits[1].twit)
    }else{
        console.log("Incorrect entry")
    }
}

login(email,password)