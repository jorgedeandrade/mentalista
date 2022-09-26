var numeroAleatorio = parseInt(Math.random() * 100 + 1);
var resultado1 = document.getElementById("resultado");
var tentativa = 0;
function Chutar() {
  var chute = document.getElementById("valor").value;
  if (chute < 1 || chute > 100) {
    resultado1.innerHTML = "Digite números apenas entre 1 e 100";
  } else {
    tentativa++;
    if (chute == numeroAleatorio) {
      resultado1.innerHTML =
        "Parabéns, você acertou na tentativa " +
        tentativa +
        "</br>O número correto é " +
        numeroAleatorio;
    } else {
      if (chute > numeroAleatorio) {
        resultado1.innerHTML =
          "Tentativa " +
          tentativa +
          "</br> O número correto é menor que " +
          chute;
      } else {
        resultado1.innerHTML =
          "Tentativa " +
          tentativa +
          "</br> O número correto é maior que " +
          chute;
      }
    }
  }
}