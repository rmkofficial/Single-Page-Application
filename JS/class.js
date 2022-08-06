class Personel {
  constructor(ad, soyad) {
    this.ad = ad;
    this.soyad = soyad;
  }
  kaydet() {
    console.log(`Personel kaydedildi : ${this.ad}`);
  }
}

const personel = new Personel("Mert", "Kaya");

personel.kaydet();
personel.ad = "Mert"
console.log(personel.ad);
