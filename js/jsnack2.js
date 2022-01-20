console.log('js ok');

const squadre = [
{nome:'napoli', punti: 0 , falli: 0},
{nome:'inter', punti: 0 , falli: 0},
{nome:'milan', punti: 0 , falli: 0},
{nome: 'benevento', punti: 0, falli: 0},
{nome: 'vigor', punti: 0, falli: 0},
{nome:'juve', punti: 0 , falli: 0},
{nome:'empoli', punti: 0 , falli: 0},
{nome:'lamezia', punti: 0 , falli: 0},
{nome:'catanzaro', punti: 0 , falli: 0},
{nome:'vibo', punti: 0 , falli: 0},
];

const updatedSquadre = [];

// first version

for(i = 0; i < squadre.length; i++){
    let currentName = squadre[i].nome;
    let currentPunti = squadre[i].punti;
    let currentFalli = squadre[i].falli;
    currentPunti = Math.floor(Math.random() * 50 + 1 );
    currentFalli = Math.floor(Math.random() * 50 + 1 );
    const updatedTeam = {currentName, currentPunti, currentFalli};
    updatedSquadre.push(updatedTeam);
}
console.table(updatedSquadre);


// version destructuring


for(i = 0; i < squadre.length; i++){
   let {nome, punti, falli} = squadre[i];  
    punti = Math.floor(Math.random() * 50 + 1 );
    falli = Math.floor(Math.random() * 50 + 1 );
    const updatedTeam = {nome, punti, falli};
    updatedSquadre.push(updatedTeam);

}
console.table(updatedSquadre);