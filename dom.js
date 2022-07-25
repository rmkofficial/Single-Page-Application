// document.getElementById("bio").innerHTML="Mert Kaya : 2000"

// var intro1 = document.getElementById("intro1");

// var mesaj = document.getElementById("mesaj");

// mesaj.innerHTML = intro1.innerHTML;

// var tumListeler = document.getElementsByTagName("ul");
// var sehirler = tumListeler[0];

// var tumElemanlar = sehirler.getElementsByTagName("li");

// for (i = 0; i < tumElemanlar.length; i++) {
//   alert(tumElemanlar[i].innerHTML);
// }

//  var classElemanlari = document.getElementsByClassName("intro1");

//  alert(classElemanlari[1].innerHTML);
//  alert(classElemanlari.length);

//  var queryElemanlari = document.querySelectorAll("p.intro1");
// alert(queryElemanlari.length);

// var isimElemanlari = document.getElementsByName("musteriAdi");
// alert(isimElemanlari[0].value);

var ramazan = document
  .getElementById("ramazan")
  .addEventListener("mouseover", rengiDegistir);

function rengiDegistir() {
  document.getElementById("div1").style.color = "red";
  var isimElemanlari = document.getElementsByName("musteriAdi");
  isimElemanlari[0].value = "Ramazan"
}
