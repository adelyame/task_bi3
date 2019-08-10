document.forms[0].reset();
function cl(){
  document.getElementById('square').disabled = true; 
}
function cl1(){
document.getElementById('square').disabled = false;
}
function check(){
  var rad = document.getElementsByName('radio');
    for (var i = 0; i<rad.length; i++){
      if (rad[0].checked){
        linear_equation();
        break;
      }
      if(rad[1].checked){
        square_equation();
        break;
      }
    }
  }
function linear_equation(){
  var a = document.square.square_a.value;
  var b = document.square.square_b.value;
  var sol = document.getElementById("square_sol");
    if ( (a==0) && (b==0)){
      string = 'Решений бесконечно много';
    }
    if ((a==0) && !(b==0)){
      string = 'нет решения';
    }
    if(!(a==0)){
      string = -b/a;
    }
    sol.innerHTML = string;
}
function clearout(){
  document.forms[0].reset()
   document.forms[0].square_a.value=""
   document.forms[0].square_b.value=""
   document.forms[0].square_c.value=""
}
function square_equation() {
  var a = document.square.square_a.value;
  var b = document.square.square_b.value;
  var c = document.square.square_c.value;
  var sol = document.getElementById("square_sol");

  var d = b * b - 4 * a * c;
  if ( d < 0 ) {
    string = "пара комплексно-сопряженных корней<br>x<sub>1</sub> = (";
    string += - b / ( 2 * a );
    string += ", ";
    string += Math.sqrt( -d ) / ( 2 * a );
    string += "), x<sub>2</sub> = (";
    string += - b / ( 2 * a);
    string += ", ";
    string += - Math.sqrt( -d ) / ( 2 * a );
    string += ").";
  } else {
      if ( d == 0 ) {
        string = "два одинаковых вещественных корня:<br>x<sub>1</sub> = x<sub>2</sub> = ";
        string += -b / ( 2 * a );
        string += ".";
      } else {
        string = "два различных вещественных корня:<br>x<sub>1</sub> = ";
        string += -b / ( 2 * a ) - Math.sqrt( d ) / ( 2 * a );
        string += ", x<sub>2</sub> = ";
        string += -b / ( 2 * a ) + Math.sqrt( d ) / ( 2 * a );
        string += ".";
      }
  }
  sol.innerHTML = string;
}