google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function letsCalculate(){
  var a = document.functionGraph.a.value;
  var b = document.functionGraph.b.value;
  var c = document.functionGraph.c.value;
  var d = document.functionGraph.d.value;
  var e = document.functionGraph.e.value;
  var x0 = document.functionGraph.x0.value;
  var x1 = document.functionGraph.x1.value;
  var arr = [];
  arr.push(['x','fx']);
  for (var i = x0;i<=x1; i++){
    fx = a* Math.pow(i,4) + b*Math.pow(i,3) + c*Math.pow(i, 2) + d*i + e;
    arr.push([+i,+fx]);
  }
  return arr;
}
function drawChart() {
  var a = letsCalculate();
  var data = google.visualization.arrayToDataTable(a);

  var options = {
    title: 'График функции',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}