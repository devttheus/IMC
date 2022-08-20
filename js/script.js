function start(){
  //console.log("start function");
  var buttonCalculateImc = document.querySelector("#button-calculate-imc");
  buttonCalculateImc.addEventListener("click", handleButtonClick);  

  handleButtonClick();
}

function calculateImc(weight, height){
  return weight / (height * height);
}

function handleButtonClick(){
  //console.log("clicked");
  var inputweight = document.querySelector("#input-weight");
  var inputheight = document.querySelector("#input-height");
  var imcResult = document.querySelector("#imc-result");

  //Number: serve para converter strings
  var weight = Number(inputweight.value);
  var height = Number(inputheight.value);

  var imc = calculateImc(weight,height);
  var formateImc = imc.toFixed(2).replace(".", ",");
  //toFixed é quantas casas decimais eu quero
  //textContent é para receber o conteúdo.
  imcResult.textContent = formateImc;
  //console.log(imc);
}

start();