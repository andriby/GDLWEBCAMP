
(function(){

	'use strict';
	document.addEventListener('DOMContentLoaded', function(){


//getElementById

	/*var logo = document.getElementById('logo');
	var navegacion = document.getElementById('navegacion');
	console.log('navegacion');
	navegacion.style.display = "none";
	*/

//getElementsByClassName

	/*var navegacion = document.getElementsByClassName('navegacion');
	console.log(navegacion[0]);

	var contenido = document.getElementsByClassName('contenido');
	console.log(contenido[0]);

	contenido[0].style.display = "none";
	*/

//getElementsByTagName

	/*var enlaces = document.getElementsByTagName('a');
	console.log(enlaces.length);

	for(var i = 0; i < enlaces.length;i++){
		enlaces[i].setAttribute('target', '_blank');
	} 

	var enlacesSidebar = document.getElementById('sidebar').getElementsByTagName('a');
	console.log(enlacesSidebar);

	for(var i = 0; i < enlacesSidebar.length;i++){
		enlacesSidebar[i].setAttribute('href', 'http://www.google.com');
	}
	*/

//querySelector

/*
	var logo = document.querySelector('#logo');
	console.log(logo);

	var encabezado = document.querySelectorAll('h2, footer p');
	console.log(encabezado);

	var enlaces = document.querySelectorAll('a');
	console.log(enlaces);*/

//querySelectorAll

/*
	var enlace = document.querySelectorAll('a');
	for(var i = 0; i < enlace.length;i++){
		console.log(enlace[i].innerText);
	}
*/

//nodos
/*
	var enlaces = document.querySelectorAll('#menu ul li a')[0];
	console.log(enlaces.nodeType);
	console.log(enlaces.nodeName);
	console.log(enlaces.attributes[0]);
	console.log(enlaces.firstChild);
	console.log(enlaces.firstChild.nodeValue);

	enlaces.firstChild.nodeValue = "Home";
*/

//Crear Elementos
/*
	var sidebar = document.querySelectorAll('#sidebar');
	var nuevoelemento = document.createElement("H1");
	var nuevotexto = document.createTextNode("Hola mundo");
	nuevoelemento.appendChild(nuevotexto);
	sidebar[0].appendChild(nuevoelemento);

	//Agregar entrada 6

	var enlacesSidebar = document.querySelectorAll('#sidebar ul');

	//Creando el enlace

	var nuevoenlace = document.createElement('A');
	nuevoenlace.setAttribute('href', '#');
	var textoEnlace = document.createTextNode('Entrada 6');
	nuevoenlace.appendChild(textoEnlace);

	//Creando la lista

	var nuevalista = document.createElement('LI');
	nuevalista.appendChild(nuevoenlace);

	//Lo agregamos al menu

	enlacesSidebar[0].appendChild(nuevalista);
*/

//Clonar nodo
/*
	 var contenido = document.querySelectorAll('main');
	 var nuevocontenido = contenido[0].cloneNode(true);

	 var sidebar = document.querySelector('aside');

	 sidebar.insertBefore(nuevocontenido, sidebar.childNodes[6]);
	 */

//Creando Lista de posts populares

/*
	 var sidebar = document.querySelector('aside');

	 var masvisitados = document.createElement('H2');
	 var textovisitados = document.createTextNode('Posts mas Visitados');
	 masvisitados.appendChild(textovisitados);
	 sidebar.insertBefore(masvisitados, sidebar.childNodes[0]);

	 var contenido = document.querySelectorAll('main h2');

	 for(var i = 0; i < contenido.length; i++) {
	 	var nuevoelemento = document.createElement('LI');
	 	var nuevotexto = document.createTextNode(contenido[i].firstChild.nodeValue);
	 	nuevoelemento.appendChild(nuevotexto);
	 	sidebar.insertBefore(nuevoelemento, sidebar.childNodes[1])
	 }*/

//Eliminar nodos

	/*var primerpost = document.querySelector('main article');

	var enlaces = document.querySelector('#navegacion nav ul li a');
	console.log(enlaces)
	enlaces.parentNode.removeChild(enlaces);*/

//Reemplazar nodos

/*
	var viejonodo = document.querySelector('main h2');
	var nuevonodo = document.querySelector('footer h2');
	viejonodo.parentNode.replaceChild(nuevonodo, viejonodo)
*/



});


})();





