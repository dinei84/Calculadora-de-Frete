$(document).on('ready', function () {
    // initialization of aos
    AOS.init({
      duration: 650,
      once: true
    });
  });

  function calcular(){
    var femp = document.getElementById('fe')
    var pdg = document.getElementById('pd')
    var pso = document.getElementById('peso')
    var res = document.getElementById('res')

    if (fe.value.length == 0 || pdg.value.length == 0){
      window.alert('Digite um número maior que 0 em Frete Empresa e em Peso')
    }else{
      var res = 
    }
  }