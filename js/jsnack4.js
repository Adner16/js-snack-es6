console.log('js ok');

students = [
    { nome: 'Giovanni', id: '284', grade: 76},
    { nome: 'Pietro', id: '352', grade: 56},
    { nome: 'Antonio', id: '161', grade: 84},
    { nome: 'Francesca', id: '724', grade: 91},
    { nome: 'Giovanna', id: '847', grade: 66},
];

const bestStudents = students.filter((students) => {
    if(students.grade > 70){
        return true;
    } else {
        return false;
    }
});

console.log(bestStudents);