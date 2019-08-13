function func(a) {

    var result = [0, 1];
    for (var i = 2; i <a; i++) {
        result[i] =result[i-1] + result[i-2];

    }return result;
}
function prime(a){
    var result = [];
    nextPrime:
    for (var i = 2; i <a; i++) { // Для всех i...

        for (var j = 2; j < i; j++) { // проверить, делится ли число..
          if (i % j == 0) continue nextPrime;
          // не подходит, берём следующее
          
        }
        result.push(i); // простое число
      }
       return result;
}

function fibonacci(){
    var answer = +prompt('Введите количество чисел');
    if (Number.isInteger(answer)){
        alert(func(answer)); 

    }
    else{
        alert('Введите число!');
    }
    
}
function primeNumber(){
    var answer = +prompt('Введите количество чисел');
    if (Number.isInteger(answer)){
        alert(prime(answer)); 

    }
    else{
        alert('Введите число!');
    }
}

   