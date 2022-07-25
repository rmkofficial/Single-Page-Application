var users = [
  { email: "kmert0@outlook.com", password: "123" },
  { email: "kramazan0@outlook.com", password: "1234" },
];

var twits = [
  { email: "kmert0@outlook.com", twit: "The weather is nice" },
  { email: "kramazan0@outlook.com", twit: "The weather is bad" },
];

var email = prompt("email?");
var password = prompt("password?");

function kullaniciVarMi(email, password) {
  for (i = 0; i < users.length; i++) {
    if (users[i].email == email && users[i].password == password) {
      return true;
    }
  }
  return false;
}

function login() {
  if (kullaniciVarMi(email, password)) {
    console.log(twits[i].twit);
  } else {
    console.log("Incorrect entry");
  }
}

login(email, password);
