function func(a) {

    let result = [0, 1];
    for (let i = 2; i <a; i++) {
        result[i] =result[i-1] + result[i-2];

    }return result;
}
function prime(a){
    let result = [];
    nextPrime:
    for (let i = 2; i <a; i++) { // Для всех i...

        for (let j = 2; j < i; j++) { // проверить, делится ли число..
          if (i % j == 0) continue nextPrime;
          // не подходит, берём следующее
          
        }
        result.push(i); // простое число
      }
       return result;
}

function fibonacci(){
    let answer = +prompt('Введите количество чисел');
    if (Number.isInteger(answer)){
        alert(func(answer)); 

    }
    else{
        alert('Введите число!');
    }
    
}
function primeNumber(){
    let answer = +prompt('Введите количество чисел');
    if (Number.isInteger(answer)){
        alert(prime(answer)); 

    }
    else{
        alert('Введите число!');
    }
}

   