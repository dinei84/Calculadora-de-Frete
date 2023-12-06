
function calcular() { 
  var fe = parseFloat(document.getElementById('fe').value) || 0;
  var pd = parseFloat(document.getElementById('pd').value) || 0;
  var peso = parseFloat(document.getElementById('peso').value) || 0;

  var pesoArredondado = Math.round(peso);
  var valorPedagioPorQuilo = Number (pd / pesoArredondado);
  var resultado = Number (fe - valorPedagioPorQuilo);

  document.getElementById('res').value = resultado.toFixed(2);
}