var bilgiler = [
  { isim: "mert", sifre: "123" },
  { isim: "kaya", sifre: "1234" },
];

var ciktilar = [
  { isim: "mert", cikti: "22 yasindayim" },
  { isim: "kaya", cikti: "23 yasindayim" },
];

var isim = prompt("isim?");
var sifre = prompt("sifre");

function kullaniciVarMi(isim, sifre) {
  for (i = 0; i < bilgiler.length; i++) {
    if (bilgiler[i].isim == isim && bilgiler[i].sifre == sifre) {
      return true;
    }
  }
  false;
}

function login(isim,sifre){
    if(kullaniciVarMi(isim,sifre)){
        console.log(ciktilar[i].cikti);
    }else{
        console.log("Hata");
    }
}

login(isim,sifre);
