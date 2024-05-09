let rangoEdad= /^(1[0-9]|1[89]|8|9)$/; 
let messError= "valor invalido, intente de nuevo";
let mjs = "¿edad de la personas?"; 

let edad = numberValidar(mjs,messError,rangoEdad); 





function validationNumber(input,rango){
    if (rango.test(input)) { // /^\d+$/ expresion regular que verifica que sean numeros
        result = parseFloat(input);
    } else {
        result = false; 
    }
    return result;
}
function numberValidar(mensaje,msjError,rangox = /^[1-9]\d*$/){
    let pase = true;
    let info;
    do{
        info = pase === true ? mensaje : `${mensaje}\n\n${msjError}`;
        let input = prompt(info);
        resultado = validationNumber(input,rangox);
        pase = resultado == false ? false : true;
    }while(resultado == false);

    return resultado;
}