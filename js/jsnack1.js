console.log('js ok');

const bici = [
    {nome: 'bianchi', peso: 10},
    {nome: 'merida', peso:15},
    {nome: 'scott', peso:7},
    {nome:'marin', peso:20}
];
console.table(bici);

// first version
const pesoList = [];

for (i = 0; i < bici.length; i++){
    const currentPeso = bici[i].peso;
    console.log(currentPeso);
    pesoList.push(currentPeso);
    
}
console.table(pesoList);
let smallNum = 0;

for (i = 0; i < pesoList.length; i++){
    const currentNum = pesoList[i];
    for(k = 1; k < pesoList; i++){
       const secondNum = pesoList[k];
       if (currentNum < secondNum){
        smallNum = currentNum;
       } else if(currentNum == secondNum){
        smallNum = currentNum;
       } else {
           smallNum = secondNum;
       }
    }
}

console.log(smallNum);

// console.log(Math.min(...pesoList));



// version destructuring

// const pesoList = [];


// for (i = 0; i < bici.length; i++){
//     const {peso} = bici[i];
//     pesoList.push(peso);
// }
//     console.table(pesoList);

//     console.log(Math.min(...pesoList));