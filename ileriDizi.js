const dizi = [1, 2, 3, 4];

// const kareDİzisi = [];

// dizi.forEach((sayi) => {
//   kareDİzisi.push(sayi * sayi);
// });

// console.log(kareDİzisi);

//map

const mapDizi = dizi.map((sayi) => sayi * 3);

console.log(mapDizi);

//filter

const filtreliDizi = dizi.filter(sayi => sayi > 2);

console.log(filtreliDizi);

//reduce

const toplam = dizi.reduce((acc,sayi) => {
    return acc + sayi;
},10)

console.log(toplam);
