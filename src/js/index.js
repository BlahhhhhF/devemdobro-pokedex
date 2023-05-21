const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")




botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroAtivo = body.classList.contains("modo-escuro");
    if (modoEscuroAtivo) {
        body.classList.remove("modo-escuro");
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
        console.log("modo claro ativado");
    } else {
        body.classList.add("modo-escuro")
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
        console.log("modo escuro ativado");
    }
});

const venossaur = document.querySelector(".Venosaur")
const li = document.querySelector(".MegaOff")
const MegaVeno = document.getElementById("megaBotao1")

MegaVeno.addEventListener("click", () => {

    const MegaOff = li.classList.contains("MegaOff")
    if (MegaOff) {
        venossaur.setAttribute("src", "./src/imagens/003_1.gif")
        console.log("on");
        li.classList.remove("MegaOff")
        li.classList.add("MegaOn")
    } else {
        venossaur.setAttribute("src", "./src/imagens/venusaur.gif")
        console.log("off");
        li.classList.remove("MegaOn")
        li.classList.add("MegaOff")
    }

});

const blastoise = document.querySelector(".Blastoise")
const MegaBlas = document.getElementById("megaBotao2")

MegaBlas.addEventListener("click", () => {

    const MegaOff = li.classList.contains("MegaOff")
    if (MegaOff) {
        blastoise.setAttribute("src", "./src/imagens/009_1.gif")
        console.log("on");
        li.classList.remove("MegaOff")
        li.classList.add("MegaOn")
    } else {
        blastoise.setAttribute("src", "./src/imagens/blastoise.gif")
        console.log("off");
        li.classList.remove("MegaOn")
        li.classList.add("MegaOff")

    }

});

const charizard = document.querySelector(".Charizard")
const MegaChar = document.getElementById("megaBotao3")

MegaChar.addEventListener("click", () => {

    const MegaOff = li.classList.contains("MegaOff")

    if (MegaOff) {
        charizard.setAttribute("src", "./src/imagens/006_1.gif")
        console.log("on");
        li.classList.remove("MegaOff")
        li.classList.add("MegaOn")
    } else {
        charizard.setAttribute("src", "./src/imagens/charizard.gif")
        console.log("off");
        li.classList.remove("MegaOn")
        li.classList.add("MegaOff")

    }

});

  /*const imagem = document.getElementById("megaBotao3");
  const imgX = document.querySelector(".imagemX");

  imagem.addEventListener("click", function() {
    const MegaOn = li.classList.contains("MegaOn")

    if (MegaOn) {
    imgX.style.width = "120px";
    } else {
        imgX.style.width = "0px";
    }

    estava tentando colocar a imagem pra ficar atraz do charizard quando ativar o mega
  });*/


