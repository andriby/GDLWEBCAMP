(function(){

    var regalo = document.getElementById('regalo')

    "use strict";
    document.addEventListener('DOMContentLoaded', function(){

        console.log("LISTO")

    //Campos datos usuario
        var nombre = document.getElementById('nombre')
        var apellido = document.getElementById('apellido')
        var email = document.getElementById('email')

    //Campos pases
        var pase_por_dia = document.getElementById('pase_por_dia')
        var pase_por_dos_dias = document.getElementById('pase_por_dos_dias')
        var pase_completo = document.getElementById('pase_completo')

    //Botones
        var calcular = document.getElementById('calcular')
        var errorDiv = document.getElementById('error')
        var botonRegistro = document.getElementById('btnRegistro')
        var resultado = document.getElementById('lista_productos')
        var suma = document.getElementById('suma-total')

    //Extras
        var camisas = document.getElementById('camisa_evento')
        var etiquetas = document.getElementById('etiquetas')

    //Calcular

    calcular.addEventListener('click', calcularMontos);

    pase_por_dia.addEventListener('blur', mostrarDias)
    pase_por_dos_dias.addEventListener('blur', mostrarDias);
    pase_completo.addEventListener('blur', mostrarDias);;

    function mostrarDias(){

        var boletosDia = parseInt(pase_por_dia.value, 10) || 0, 
            boletos2Dias = parseInt(pase_por_dos_dias.value, 10)|| 0,
            boletosTodos = parseInt(pase_completo.value, 10)|| 0;

            var diasElegidos = [];

            if (boletosDia > 0){
                diasElegidos.push('viernes');
            }

            if (boletos2Dias > 0) {
                diasElegidos.push('viernes', 'sabado');
            }

            if (boletosTodos > 0){
                diasElegidos.push('viernes', 'sabado', 'domingo');
            }

            for(var i = 0; i < diasElegidos.length; i++){
                document.getElementById(diasElegidos[i]).style.display = 'block'
            }

            console.log(diasElegidos);

    }

    nombre.addEventListener('blur', validartexto);
    apellido.addEventListener('blur', validartexto);
    email.addEventListener('blur', validartexto);
    email.addEventListener('blur', validarmail);

    function validartexto(){
        if(this.value == ''){
            errorDiv.style.display='block';
            errorDiv.innerHTML="Este campo es obligatorio";
            this.style.border='1px solid red';
            errorDiv.style.border='1px solid red'
        }
        else{
            errorDiv.style.display='none';
            this.style.border='1px solid #cccccc';
        }
    }

    function validarmail(){
        if(this.value.indexOf("@") >-1){
            errorDiv.style.display='none';
            this.style.border='1px solid #cccccc';
        }

        else{
            errorDiv.style.display='block';
            errorDiv.innerHTML="Debe tener al menos una @";
            this.style.border='1px solid red';
            errorDiv.style.border='1px solid red'
        }
    }

    function calcularMontos(event){
        event.preventDefault();
        
        if (regalo.value === '') {
            alert("Debes elegir un regalo")
            regalo.focus(); 
        } 
        
        else {

            var boletosDia = parseInt(pase_por_dia.value, 10) || 0, 
                boletos2Dias = parseInt(pase_por_dos_dias.value, 10)|| 0,
                boletosTodos = parseInt(pase_completo.value, 10)|| 0;
                cantCamisas = parseInt(camisa_evento.value, 10)|| 0;
                cantEtiqueta = parseInt(etiquetas.value, 10)|| 0;

                console.log("Boletos dia: " + boletosDia);
                console.log("Boletos 2 dias: " + boletos2Dias);
                console.log("Boletos completos: " + boletosTodos);

                var totalPagar = (boletosDia * 30) + (boletos2Dias * 45) + (boletosTodos * 50) + ((cantCamisas * 10) * 0.93) + (cantEtiqueta * 2);

                var listadoProductos = [];

                if (boletosDia >= 1) {
                    listadoProductos.push(boletosDia + ' Pases por dia');
                }

                if (boletos2Dias >= 1) {
                    listadoProductos.push(boletos2Dias + ' Pases por 2 dias');
                }
                
                if (boletosTodos >= 1){
                    listadoProductos.push(boletosTodos + ' Pases por todos los dias');
                }

                if (cantCamisas >= 1){
                    listadoProductos.push(cantCamisas + ' Camisas');
                }

                if (cantEtiqueta >= 1){
                    listadoProductos.push(cantEtiqueta + ' Etiquetas');
                }
                    lista_productos.style.display="block";
                    lista_productos.innerHTML = '';
                    for (var i = 0; i < listadoProductos.length; ++i){
                        lista_productos.innerHTML += listadoProductos[i] + '</br>';
                    }

                    suma.innerHTML = "$ " + totalPagar.toFixed(2);

        

                console.log(lista_productos);
                console.log(totalPagar);

             }
        
    }
        
    }); //DOM CONTENT LOADED
})();

$(function(){
    alert(funcional);
    console.log("hola")
});




















