/*function check(){
    let fibonacciNumber = document.getElementById('fibonacciNumber');
    let primeNumber = document.getElementById('primeNumber');

    if (){
        
    }
}*/
function func(a) {

    var result = [0, 1];
    for (var i = 2; i <a; i++) {
        result[i] =result[i-1] + result[i-2];

    }return result;
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


   