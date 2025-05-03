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

    if(clickedClass == "letra usada")return false;
    if(clickedClass == ("letra")){
        letraAtual.className = "letra";
        clicked.className = "letra letra-atual";
    } else if(arr.includes(clicked.textContent)){     
        clicarLetra(letraAtual, letraClicada)
    } else if(clicked.id == "del"){
        apagarLetra(letraAtual);
    } else if(clicked.id == "enter"){
        enviarPalavra(letraAtual);
    }
});

function apagarLetra(letraAtual){
    let idAtual = letraAtual.id;
    let antId = Number(idAtual) - 1;
    let letraAnterior = document.getElementById(antId);

    letraAtual.textContent = '';

    if(!letraAnterior || letraAnterior.className=="letra usada")return false;
    if(idAtual != 1)  {
        letraAtual.className = "letra";
    }
    if(idAtual > 1 && idAtual <= 30){
        if(letraAnterior){
            letraAnterior.className = "letra letra-atual";
        }
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

    // Libera a próxima linha
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
    }

    // Verifica se ta certo ou errado
    for(cont = primeiroDaLinhaId, cont2 = 1; cont <= ultimoDaLinhaId; cont++, cont2++){
        letraJogo = document.getElementById(String(cont));
        if(letraJogo.textContent == palavra[cont2-1]){
            letraJogo.style.backgroundColor = "#3AA394";
        } else if(palavra.includes(letraJogo.textContent)){
            letraJogo.style.backgroundColor = "#D3AD69";
        } else {
            letraJogo.style.backgroundColor = "#312A2C";
        }
        letraJogo.className = "letra usada";
    }
}