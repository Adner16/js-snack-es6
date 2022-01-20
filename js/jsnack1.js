console.log('js ok');

const bici = [
    {nome: 'bianchi', peso: 10},
    {nome: 'merida', peso:15},
    {nome: 'scott', peso:7},
    {nome:'marin', peso:20}
];
console.table(bici);

// template litaral

// const pesoList = [];

// for (i = 0; i < bici.length; i++){
//     const currentPeso = bici[i].peso;
//     console.log(currentPeso);
//     pesoList.push(currentPeso);
// }
// console.table(pesoList);

// console.log(Math.min(...pesoList));

// destructuring

const pesoList = [];


for (i = 0; i < bici.length; i++){
    const [{peso}] = bici;
    pesoList.push(peso);
}
    console.table(pesoList);