var botaoCriptografar = document.querySelector (".btn_cript");
var botaoDescriptografar = document.querySelector(".btn_descript");
var imgProcurando = document.querySelector (".img_procurando");
var textoAviso = document.querySelector (".paragrafo_subtitulo");
var resultado = document.querySelector (".texto-resultado");

botaoCriptografar.onclick = btnCript;
botaoDescriptografar.onclick = btnDescript;

function btnCript(){
    oculto();
    var campoTexto = recuperarTexto() 
    resultado.textContent = criptografar(campoTexto);
}

function btnDescript(){
    oculto();
    var campoTexto = recuperarTexto() 
    resultado.textContent = descriptografar(campoTexto);
}

function recuperarTexto(){
    var campoTexto = document.querySelector(".campoTexto") 
    return campoTexto.value
}

function oculto(){
    imgProcurando.classList.add("ocultar");
    textoAviso.classList.add("ocultar");
}

function criptografar(string) {
    var campoTexto = string;
    var textoFinal = "";

    for(var i = 0; i < campoTexto.length; i++){
        if(campoTexto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(campoTexto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(campoTexto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(campoTexto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(campoTexto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + campoTexto[i]
        }
    }
    return textoFinal;
}

function descriptografar (string) {
    var campoTexto = string;
    var textoFinal = "";

    for(var i = 0; i < campoTexto.length; i++){
        if(campoTexto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(campoTexto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(campoTexto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(campoTexto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(campoTexto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + campoTexto[i];
        }
    }
    return textoFinal;
}

const btnCopiar = document.querySelector(".btn_copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var conteudo = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(conteudo);
    console.log("Olá"); 
});















