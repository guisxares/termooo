console.log('cópia do site term.ooo, feito por Guilherme Soares');
console.log('* projeto feito para fins educacionais, não comercializado!');

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

    if(elementoClass.includes("letra") && elementoClass == "letra"){
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
    }
});