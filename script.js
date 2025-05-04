console.log('cópia do site term.ooo, feito por Guilherme Soares');
console.log('* projeto feito para fins educacionais, não comercializado!');

const palavra = ["B", "A", "R", "T", "O"];
const arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

document.addEventListener("keydown", function(event){
    var letraAtual = document.querySelector(".letra-atual");
    var letraAtualUppercase = event.key.toUpperCase();

    if(letraAtual){
        if(event.key == "Backspace"){
            apagarLetra(letraAtual);
        } else if(event.key == "Enter"){
            enviarPalavra(letraAtual);
        } else if(arr.includes(letraAtualUppercase)){
            digitarLetra(letraAtual, letraAtualUppercase);
        }
    }
});

document.addEventListener("click", function(event){
    let clicked = event.target;
    let clickedClass = clicked.className;
    let letraAtual = document.querySelector(".letra-atual");
    let letraClicada = clicked.textContent;

    if(clickedClass == "letra-esc")return false;
    if (clickedClass.includes("letra")) {
        if(letraAtual==null)return false;
        if (clickedClass == "letra usada") return false;
        letraAtual.className = "letra";
        clicked.className = "letra letra-atual";
    } else if (arr.includes(clicked.textContent)) {
        if(clicked.id == "closeWinner") {
            document.getElementById("winner").style.display = "none";
            document.getElementById("winner-bg").style.display = "none";
        } else if(clicked.id=="closeLooser"){
            document.getElementById("looser").style.display = "none";
            document.getElementById("looser-bg").style.display = "none";
        } else {
            if(letraAtual==null)return false;
            clicarLetra(letraAtual, letraClicada);
        }
    } else if (clicked.id == "del") {
        if(letraAtual==null)return false;
        apagarLetra(letraAtual);
    } else if (clicked.id == "enter") {
        if(letraAtual==null)return false;
        enviarPalavra(letraAtual);
    }
    
});

function apagarLetra(letraAtual){
    let idAtual = letraAtual.id;
    let antId = Number(idAtual) - 1;
    let letraAnterior = document.getElementById(antId);

    if(letraAtual.textContent.trim() === ""){
        if(!letraAnterior || letraAnterior.className=="letra usada")return false;
        if(idAtual != 1)  {
            letraAtual.className = "letra";
        }
        if(idAtual > 1 && idAtual <= 30){
            if(letraAnterior){
                letraAnterior.className = "letra letra-atual";
            }
        }
    } else {
        letraAtual.textContent = '';
    }
}

function digitarLetra(letraAtual, letraAtualUppercase){
    let idAtual = letraAtual.id, proxId, proxLetra;
    letraAtual.textContent = letraAtualUppercase;
    if(idAtual >= 1 && idAtual < 30){
        proxId = Number(idAtual) + 1;
        proxLetra = document.getElementById(String(proxId));
    }
    if(proxLetra){
        if(proxLetra.className != "letra-esc"){
            letraAtual.className = "letra";
            proxLetra.className = "letra letra-atual";
        }
    }
}

function clicarLetra(letraAtual, letraClicada){
    let idAtual = letraAtual.id, proxId, proxLetra;
    letraAtual.textContent = letraClicada;
    if(idAtual >= 1 && idAtual < 30){
        proxId = Number(idAtual) + 1;
        proxLetra = document.getElementById(String(proxId));
    }
    if(proxLetra){
        if(proxLetra.className != "letra-esc"){
            letraAtual.className = "letra";
            proxLetra.className = "letra letra-atual";
        }
    }
}

function enviarPalavra(letraAtual){
    let primeiroDaLinhaId, ultimoDaLinhaId, primeiroDaProxLinhaId, ultimoDaProxLinhaId, letraDaProxLinha, letraJogo, idLetraJogo, cont, cont2;

    if(letraAtual.id <= 5){
        primeiroDaLinhaId = 1;
        ultimoDaLinhaId = 5;
    } else if(letraAtual.id <= 10){
        primeiroDaLinhaId = 6;
        ultimoDaLinhaId = 10;
    } else if(letraAtual.id <= 15){
        primeiroDaLinhaId = 11;
        ultimoDaLinhaId = 15;
    } else if(letraAtual.id <= 20){
        primeiroDaLinhaId = 16;
        ultimoDaLinhaId = 20;
    } else if(letraAtual.id <= 25){
        primeiroDaLinhaId = 21;
        ultimoDaLinhaId = 25;
    } else if(letraAtual.id <= 30){
        primeiroDaLinhaId = 26;
        ultimoDaLinhaId = 30;         
    }

    for(cont = primeiroDaLinhaId; cont <= ultimoDaLinhaId; cont++){
        idLetraJogo = cont;
        letraJogo = document.getElementById(String(idLetraJogo));
        if(letraJogo.textContent.trim() === ""){
            return false;
        }
    }

    let posicoesErradas = [];
    let letrasCorretas = {};
    
    for (let cont = primeiroDaLinhaId, cont2 = 0; cont <= ultimoDaLinhaId; cont++, cont2++) {
        let letraJogo = document.getElementById(String(cont));
        let letra = letraJogo.textContent;
        if (letra === palavra[cont2]) {
            letraJogo.style.backgroundColor = "#3AA394";
            posicoesErradas.push("0");
            letrasCorretas[letra] = (letrasCorretas[letra] || 0) + 1;
        } else {
            posicoesErradas.push(letra);
        }
        letraJogo.className = "letra usada";
    }
    
    let letrasPalavra = {};
    for (let letra of palavra) {
        letrasPalavra[letra] = (letrasPalavra[letra] || 0) + 1;
    }
    
    for (let i = 0; i < posicoesErradas.length; i++) {
        let letra = posicoesErradas[i];
        let letraJogo = document.getElementById(Number(primeiroDaLinhaId) + i);
        if (letra !== "0") {
            if (palavra.includes(letra)) {
                let usadas = letrasCorretas[letra] || 0;
                let permitidas = letrasPalavra[letra];
                if (usadas < permitidas) {
                    letraJogo.style.backgroundColor = "#D3AD69";
                    letrasCorretas[letra] = usadas + 1;
                } else {
                    letraJogo.style.backgroundColor = "#312A2C";
                }
            } else {
                letraJogo.style.backgroundColor = "#312A2C";
            }
        }
    }

    let letrasCertas = 0;
    for(let cont = primeiroDaLinhaId, cont2 = 0; cont <= ultimoDaLinhaId; cont++, cont2++){
        let letraJogo = document.getElementById(String(cont));
        if(letraJogo.textContent == palavra[cont2]){
            letrasCertas=letrasCertas+1;
        }
    }

    if(letrasCertas == 5){
        document.getElementById("winner-bg").style.display = "flex";
        document.getElementById("winner").style.display = "flex";
        return false;
    }

    primeiroDaProxLinhaId = primeiroDaLinhaId+5;
    ultimoDaProxLinhaId = ultimoDaLinhaId+5;
    if(ultimoDaLinhaId != 30){
        for(cont = primeiroDaProxLinhaId, cont2 = 0; cont <= ultimoDaProxLinhaId; cont++, cont2++){
            letraDaProxLinha = document.getElementById(String(cont));
            if(cont2 == 0){
                letraDaProxLinha.className = "letra letra-atual";
                letraDaProxLinha.focus();
            } else {
                letraDaProxLinha.className = "letra";
            }
        }
    } else {
        document.getElementById("looser-bg").style.display = "flex";
        document.getElementById("looser").style.display = "flex";
        return false;
    }
}