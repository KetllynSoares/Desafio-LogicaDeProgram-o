// Lista de heróis para testar repetição
let herois = [
    {nome: "Harry Potter" , xp : 8000},
    {nome: "Hermione Granger" , xp: 2700},
    {nome: "Ron Weasley", xp: 1600},
    {nome: "Draco Malfoy", xp: 9500}
];

// Loop para percorrer todos os heróis
for (let i = 0; i < herois.length; i++) {

  let nome = herois[i].nome;
  let xp = herois[i].xp;
  let nivel = ""; // variável que receberá o resultado

  // Estrutura condicional para determinar o nível com base no XP
if (herois[i].xp <1000) {
    nivel = "Ferro"
} else if (herois[i].xp >= 1001 && herois[i].xp <=2000) {
    nivel = "Bronze"
} else if (herois[i].xp >= 2001 && herois[i].xp <=5000) {
    nivel = "Prata"
} else if (herois[i].xp >= 5001 && herois[i].xp <=7000) {
    nivel = "Ouro"
} else if (herois[i].xp >= 7001 && herois[i].xp <=8000) {
    nivel = "Platina"
} else if (herois[i].xp >= 8001 && herois[i].xp <=9000) {
    nivel = "Ascendente"
} else if (herois[i].xp >= 9001 && herois[i].xp <=10000) {
    nivel = "Imortal"
} else {
    nivel = "Radiante"
}

 console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}