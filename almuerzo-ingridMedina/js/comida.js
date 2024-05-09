let comidaop
let tipo_comidaop
let precio
let cantidad
let total
let comida

let mesa= [1,2,3,4,5,6,7,8,9,10];
let ocupacion = [1,2,0,2,4,1,0,2,1,1];
let cant;
let aux;
let entrada

let contador = 0;



let cantidadP = "Cuantos son señor usuario??";
	let msjError = "valor invalido, intente nuevamente";
	let msp = "señor usuario ingrese su nombre??"
	let input  ;
	let rangoFactu = /^[1-4]$/;
	let sumaPrecio = 0;
	
	alert("Bienvenidos a mi restaurante");  
	do{
		input = prompt(msp)
		nombre = nombreCorrecto(input) ;
	
	}while(nombre == false)
	
		
	valor = numberValidar(cantidadP,msjError,rangoFactu)

	let	msprecio ="";
	let msplato = "";
do{

	
	contador++
	alert("ingrese el plato la persona: "+contador)
	comida = parseInt(prompt(`1-almuerzos completo\n2-bandeja\n3-sopa\n4-Salir`));
	comidaop = respuestaComida(); 
	switch (comidaop) {
		case 1:
			precio = 12.000
			alert("El precio del almuerzo es: "+precio.toFixed(3))
			cantidad = parseInt(prompt("ingrese la cantidad  de este almuerzo"))
			total = precio * cantidad;
			msprecio += `${cantidad} x ${precio.toFixed(3)} = ${total}\n`;
			sumaPrecio = sumaPrecio + total;
			alert("Señor/a:  " + nombre + " El total a pagar es: " + total.toFixed(3))
			break;
	
		case 2:
			precio = 17.000
			alert("El precio del almuerzo es: "+precio.toFixed(3))
			cantidad = parseInt(prompt("ingrese la cantidad "))
			total = precio * cantidad
			msprecio += `${cantidad} x ${precio.toFixed(3)} = ${total}\n`;
			sumaPrecio = sumaPrecio + total;

			alert("Señor/a:  " + nombre + " El total a pagar es: " + total.toFixed(3))
			break;
		
		case 3:
			precio = 19.000
			alert("El precio del almuerzo es: "+precio.toFixed(3))
			cantidad = parseInt(prompt("ingrese la cantidad "))
			total = precio * cantidad
			msprecio += `${cantidad} x ${precio.toFixed(3)} = ${total}\n`;
			sumaPrecio = sumaPrecio + total;

			alert("Señor/a:  " + nombre + " El total a pagar es: " + total.toFixed(3))
			break;

		case 4:
			precio = 8.000
			alert("El precio de la bandeja: "+precio.toFixed(3))
			cantidad = prompt("ingrese la cantidad ")
			total = precio * cantidad
			msprecio += `${cantidad} x ${precio.toFixed(3)} = ${total}\n`;
			sumaPrecio = sumaPrecio + total;

			alert("Señor/a:  " + nombre + " El total a pagar es: " + total.toFixed(3))
			break;
		case 5:
			precio = 12.000
			alert("El precio de la bandeja: "+precio.toFixed(3))
			cantidad = prompt("ingrese la cantidad ")
			total = precio * cantidad
			msprecio += `${cantidad} x ${precio.toFixed(3)} = ${total}\n`;
			sumaPrecio = sumaPrecio + total;

			alert("Señor/a:  " + nombre + " El total a pagar es: " + total.toFixed(3))
			break;
		case 6:
			precio = 19.000
			alert("El precio de la bandeja: "+precio.toFixed(3))
			cantidad = parseInt(prompt("ingrese la cantidad "))
			total = precio * cantidad
			msprecio += `${cantidad} x ${precio.toFixed(3)} = ${total}\n`;
			sumaPrecio = sumaPrecio + total;

			alert("Señor/a:  " + nombre + " El total a pagar es: " + total.toFixed(3))
			break;
		case 7:
			precio = 4.000
			alert("El precio de la sopa es: "+precio.toFixed(3))
			cantidad = prompt("ingrese la cantidad ")
			total = precio * cantidad
			msprecio += `${cantidad} x ${precio.toFixed(3)} = ${total}\n`;
			sumaPrecio = sumaPrecio + total;

			alert("Señor/a:  " + nombre + " El total a pagar es: " + total.toFixed(3))
			break;
		case 8:
			precio = 5.000
			alert("El precio de la sopa es: "+precio.toFixed(3))
			cantidad = prompt("ingrese la cantidad ")
			total = precio * cantidad
			msprecio += `${cantidad} x ${precio.toFixed(3)} = ${total}\n`;
			sumaPrecio = sumaPrecio + total;
			alert("Señor/a:  " + nombre + " El total a pagar es: " + total.toFixed(3))
			break;
		case 9:
			precio = 4.000
			alert("El precio de la sopa es : "+precio.toFixed(3))
			cantidad = prompt("ingrese la cantidad ")
			total = precio * cantidad
			msprecio += `${cantidad} x ${precio.toFixed(3)} = ${total}\n`;
			sumaPrecio = sumaPrecio + total;
			alert("Señor/a:  " + nombre + " El total a pagar es: " + total.toFixed(3))
			break;

		default:
			alert("Gracias por su visita")
			break;
	}
}while(contador < valor)

	alert("Señor/a:  " + nombre + " El precio total de los almuerzo es: " + sumaPrecio.toFixed(3));





	
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
			info = pase === true ? mensaje :` ${mensaje}\n\n${msjError}`;
			let input = prompt(info);
			resultado = validationNumber(input,rangox);
			pase = resultado == false ? false : true;
		}while(resultado == false);
	
		return resultado;
	}

	function nombreCorrecto(input){
		if (/^[a-zA-Z]+\s[a-zA-Z]+$/.test(input)) {
			result = input;
		} else {
			result = false; // entrada no valida
		}
		return result; 
	}



	
function respuestaComida(){
	switch (comida) {
		case 1:
			comidaop = parseInt(prompt(`1- sancocho y pollo sudado\n2- crema de verdura y alitas BBQQ\n3- sopa de maiz y pechuga gratinada`))
			if(comidaop =="1"){
				msplato += `sancocho y pollo sudado \n`;
			}else if(comidaop =="2"){
				msplato += `crema de verdura y alitas BBQQ \n`;
			}else if(comidaop == "3"){
				msplato += `sopa de maiz y pechuga gratinada \n`
			}
			return comidaop
		case 2:
			comidaop = parseInt(prompt(`4- pollo sudado\n5- alitas BBQQ\n6- pechuga gratinada`))
			if(comidaop =="4"){
				msplato += `pollo sudado \n`;
			}else if(comidaop =="5"){
				msplato += `alitas BBQQ \n`;
			}else if(comidaop == "6"){
				msplato += `pechuga gratinada \n`
			}
			return comidaop
		case 3:
			comidaop = parseInt(prompt(`7- sancocho\n8- crema de verdura\n9- sopa de maiz`))
			if(comidaop =="7"){
				msplato += `sancocho \n`;
			}else if(comidaop =="8"){
				msplato += `crema de verdura \n`;
			}else if(comidaop == "9"){
				msplato += `sopa de maiz \n`
			}
			return comidaop
		case 4:
		default:
			alert("Seleccion incorrecta");
			return comidaop = 0
	}
}


let info = [{
	nombre: nombre,
	cantidadP: valor,
	mensajePrecio: msprecio,
	platos:msplato,
	sumaPrecio: sumaPrecio.toFixed(3)
    }]
alert("factura de: "+info[0].nombre +"\n"+"las cantidades persona: "+info[0].cantidadP+"\n"+"----------------------------\n"+`platos: ${info[0].platos}\n`+info[0].mensajePrecio+"\n"+"---------------------"+"\n"+"precio total: "+info[0].sumaPrecio)