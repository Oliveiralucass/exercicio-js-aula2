const opcoes = ["pedra", "papel", "tesoura"]

let escolhaMaquina = null
let escolhaUsuario = null;

let scoreUsuario = 0;
let scoreMaquina = 0;

const pedraBtn = document.querySelector("#pedra");
const papelBtn = document.querySelector("#papel");
const tesouraBtn = document.querySelector("#tesoura");

const imgMaquina = document.querySelector("#imgMaquina");
const imgUsuario = document.querySelector("#imgUsuario");

const usuarioScoreId = document.querySelector("#usuarioScore");
const maquinaScoreId = document.querySelector("#maquinaScore");
const startBtn = document.querySelector("#startBtn");

// FUNÇÕES

function escolherOpcaoMaquina(){
    return escolhaMaquina =  opcoes[Math.floor(Math.random() * 3)];
};

function definirImagemUsuario(img){
    if (escolhaUsuario === "pedra") {
        imgUsuario.setAttribute("src", `./assets/${img}.png`)
        imgUsuario.setAttribute("alt", `pedra`)
    } else if (escolhaUsuario === "papel") {
        imgUsuario.setAttribute("src", `./assets/${img}.png`)
        imgUsuario.setAttribute("alt", `papel`)
    } else if (escolhaUsuario === "tesoura") {
        imgUsuario.setAttribute("src", `./assets/${img}.png`)
        imgUsuario.setAttribute("alt", `tesoura`)
    }
}

function definirImagemMaquina(){
    if (escolhaMaquina === "pedra") {
        imgMaquina.setAttribute("src", `./assets/pedra.png`)
    } else if (escolhaMaquina === "papel") {
        imgMaquina.setAttribute("src", "./assets/papel.png")
    } else if (escolhaMaquina === "tesoura") {
        imgMaquina.setAttribute("src", "./assets/tesoura.png")
    }
}

// FUNÇÃO DE RESULTADO

function checkResult(escolhaUsuario, escolhaMaquina){
   if (escolhaUsuario == escolhaMaquina){
      return "Empate";
   } else if (escolhaUsuario == "pedra") {
      if (escolhaMaquina == 'tesoura'){
         scoreUsuario++
         return 'Vitoria' ;
      }  else {
         scoreMaquina++
         return 'Derrota';
      }

   } else if (escolhaUsuario == 'papel') {
      if (escolhaMaquina == 'pedra'){
         scoreUsuario++
         return 'Vitoria';
      } else {
         scoreMaquina++
         return 'Derrota';
      }
      
   } else {
      if (escolhaMaquina == 'papel'){
         scoreUsuario++
         return 'Vitoria';
      } else {
         scoreMaquina++
         return 'Derrota';
      }
   }
}

// BOTÕES DO USUÁRIO

pedraBtn.addEventListener("click", () =>{
    escolhaUsuario = opcoes[0];
    escolherOpcaoMaquina();
    definirImagemUsuario(escolhaUsuario);
    definirImagemMaquina();
    checkResult(escolhaUsuario, escolhaMaquina);

    usuarioScoreId.innerText = scoreUsuario
    maquinaScoreId.innerText = scoreMaquina
})

papelBtn.addEventListener("click", () =>{
    escolhaUsuario = opcoes[1]
    escolherOpcaoMaquina();
    definirImagemUsuario(escolhaUsuario);
    definirImagemMaquina();
    checkResult(escolhaUsuario, escolhaMaquina);

    usuarioScoreId.innerText = scoreUsuario
    maquinaScoreId.innerText = scoreMaquina
})

tesouraBtn.addEventListener("click", () =>{
    escolhaUsuario = opcoes[2];
    escolherOpcaoMaquina();
    definirImagemUsuario(escolhaUsuario);
    definirImagemMaquina();
    checkResult(escolhaUsuario, escolhaMaquina);

    usuarioScoreId.innerText = scoreUsuario
    maquinaScoreId.innerText = scoreMaquina
});




startBtn.addEventListener("click", () => {
    window.location.reload()
    escolherOpcaoMaquina();
    definirImagemMaquina();
})