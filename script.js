console.log('cópia do site term.ooo, feito por Guilherme Soares');
console.log('* projeto feito para fins educacionais, não comercializado!');

const palavra = ["B", "A", "R", "T", "O"];
var arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

document.addEventListener("keydown", function(event){
    var letraAtual = document.querySelector(".letra-atual");
    var letraUppercase = event.key.toUpperCase();
    var idAtual = letraAtual.id;
    var antId;
    var elemento2;
    if(letraAtual){
        if(event.key == "Backspace"){
            letraAtual.textContent = '';
            if((document.getElementById(Number(letraAtual.id)-1)).className=="letra usada")return false;
            if(idAtual != 1)  {
                letraAtual.className = "letra";
            }
            if(idAtual > 1 && idAtual <= 30){
                antId = Number(idAtual) - 1;
                elemento2 = document.getElementById(String(antId));
                if(elemento2){
                    elemento2.className = "letra letra-atual";
                }
            }
        } else if(event.key == "Enter"){
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
                idLetra = cont;
                letraJogo = document.getElementById(String(idLetra));
                if(letraJogo.textContent.trim() === ""){
                    return false;
                }
            }
    
            // Libera a próxima linha
            primeiroDaProxLinhaId = primeiroDaLinhaId+5;
            ultimoDaProxLinhaId = ultimoDaLinhaId+5;
            if(ultimoDaLinhaId != 30){
                for(cont = primeiroDaProxLinhaId, cont2 = 0; cont <= ultimoDaProxLinhaId; cont++, cont2++){
                    element = document.getElementById(String(cont));
                    if(cont2 == 0){
                        element.className = "letra letra-atual";
                        element.focus();
                    } else {
                        element.className = "letra";
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
        } else if(arr.includes(letraUppercase)){
            letraAtual.textContent = letraUppercase;      
            if(idAtual >= 1 && idAtual < 30){
                proxId = Number(idAtual) + 1;
                elemento2 = document.getElementById(String(proxId));
            }
            if(elemento2){
                if(elemento2.className != "letra-esc"){
                    letraAtual.className = "letra";
                    elemento2.className = "letra letra-atual";
                }
            }
        }
    }
});

document.addEventListener("click", function(event){
    var letraAtual = document.querySelector(".letra-atual");
    var elemento = event.target;
    var elementoClass = elemento.className;
    var idAtual = letraAtual.id;
    var antId;
    var elemento2;
    var letra = elemento.textContent;

    if(elementoClass == "letra usada")return false;
    if(elementoClass == ("letra")){
        letraAtual.className = "letra";
        elemento.className = "letra letra-atual";
    } else if(arr.includes(elemento.textContent)){
        letraAtual.textContent = letra;      
        if(idAtual >= 1 && idAtual < 30){
            proxId = Number(idAtual) + 1;
            elemento2 = document.getElementById(String(proxId));
        }
        if(elemento2){
            if(elemento2.className != "letra-esc"){
                letraAtual.className = "letra";
                elemento2.className = "letra letra-atual";
            }
        }
    } else if(elemento.id == "del"){
        letraAtual.textContent = '';
        if(idAtual > 1){
            if((document.getElementById(Number(idAtual)-1)).className=="letra usada")return false;
            letraAtual.className = "letra";
            if(idAtual <= 30){
                antId = Number(idAtual) - 1;
                elemento2 = document.getElementById(String(antId));
                if(elemento2){
                    elemento2.className = "letra letra-atual";
                }
            }
        }
    } else if(elemento.id == "enter"){
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
        console.log(letraAtual.id);

        for(cont = primeiroDaLinhaId; cont <= ultimoDaLinhaId; cont++){
            idLetra = cont;
            letraJogo = document.getElementById(String(idLetra));
            if(letraJogo.textContent.trim() === ""){
                return false;
            }
        }

        // Libera a próxima linha
        primeiroDaProxLinhaId = primeiroDaLinhaId+5;
        ultimoDaProxLinhaId = ultimoDaLinhaId+5;
        if(ultimoDaLinhaId != 30){
            for(cont = primeiroDaProxLinhaId, cont2 = 0; cont <= ultimoDaProxLinhaId; cont++, cont2++){
                element = document.getElementById(String(cont));
                if(cont2 == 0){
                    element.className = "letra letra-atual";
                    element.focus();
                } else {
                    element.className = "letra";
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
});