google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function letsCalculate(){
  let a = document.functionGraph.a.value;
  let b = document.functionGraph.b.value;
  let c = document.functionGraph.c.value;
  let d = document.functionGraph.d.value;
  let e = document.functionGraph.e.value;
  let x0 = document.functionGraph.x0.value;
  let x1 = document.functionGraph.x1.value;
  let arr = [];
  arr.push(['x','fx']);
  for (let i = x0;i<=x1; i++){
    fx = a* Math.pow(i,4) + b*Math.pow(i,3) + c*Math.pow(i, 2) + d*i + e;
    arr.push([+i,+fx]);
  }
  return arr;
}
function drawChart() {
  let a = letsCalculate();
  let data = google.visualization.arrayToDataTable(a);

  let options = {
    title: 'График функции',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  let chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}