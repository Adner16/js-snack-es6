console.log('js ok');


const userArr = ['giovanni', 'antonio', 'pietro', 'michiele', 'francesca',];

const createArrey = (arr, start, end) => {
    const newArr = arr.filter((item, index) => {
        if(index >= start && index <= end){
            return true;
        } else {
            return false;
        }    
    });
    return newArr;
}

console.log(createArrey(userArr, 2, 4));