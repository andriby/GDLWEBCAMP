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


if(document.getElementById('calcular')){

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
}
        
    }); //DOM CONTENT LOADED
})();


//AnimateNumber

(function(d){var r=function(b){return b.split("").reverse().join("")},m={numberStep:function(b,a){var e=Math.floor(b);d(a.elem).text(e)}},g=function(b){var a=b.elem;a.nodeType&&a.parentNode&&(a=a._animateNumberSetter,a||(a=m.numberStep),a(b.now,b))};d.Tween&&d.Tween.propHooks?d.Tween.propHooks.number={set:g}:d.fx.step.number=g;d.animateNumber={numberStepFactories:{append:function(b){return function(a,e){var f=Math.floor(a);d(e.elem).prop("number",a).text(f+b)}},separator:function(b,a,e){b=b||" ";
a=a||3;e=e||"";return function(f,k){var u=0>f,c=Math.floor((u?-1:1)*f).toString(),n=d(k.elem);if(c.length>a){for(var h=c,l=a,m=h.split("").reverse(),c=[],p,s,q,t=0,g=Math.ceil(h.length/l);t<g;t++){p="";for(q=0;q<l;q++){s=t*l+q;if(s===h.length)break;p+=m[s]}c.push(p)}h=c.length-1;l=r(c[h]);c[h]=r(parseInt(l,10).toString());c=c.join(b);c=r(c)}n.prop("number",f).text((u?"-":"")+c+e)}}}};d.fn.animateNumber=function(){for(var b=arguments[0],a=d.extend({},m,b),e=d(this),f=[a],k=1,g=arguments.length;k<g;k++)f.push(arguments[k]);
if(b.numberStep){var c=this.each(function(){this._animateNumberSetter=b.numberStep}),n=a.complete;a.complete=function(){c.each(function(){delete this._animateNumberSetter});n&&n.apply(this,arguments)}}return e.animate.apply(e,f)}})(jQuery);

//Fin animate Number

$(function(){

    //LETTERING

    $('.nombre-sitio').lettering()

    //Menu fijo

    var windowHeight = $(window).height();
    var barraAltura = $('.barra').innerHeight();

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        
        if(scroll > windowHeight){
            $('.barra').addClass('fixed');
            $('body').css({'margin-top': barraAltura+'px'});
        

        } else{
            $('.barra').removeClass('fixed');
            $('body').css({'margin-top': '0px'});

        }

    });

    //Menu Movil

    $('.menu-movil').on('click', function(){
        $('.navegacion-principal').slideToggle();
    });

    //Programa de conferencias
    $('.programa-evento .info-curso:first').show();
    $('.menu-programa a:first').addClass('activo');

    $('.menu-programa a').on('click', function(){

        $('.menu-programa a').removeClass('activo');

        $(this).addClass('activo');

        var enlace = $(this).attr('href');
        $('.ocultar').hide();
        
        $(enlace).fadeOut(500);
        $(enlace).fadeIn(1000);

        return false
    });

    //ANIMACIONES PARA LOS NUMEROS//

    $('.resumen-evento li:nth-child(1) p').animateNumber({ number: 6}, 1200);
    $('.resumen-evento li:nth-child(2) p').animateNumber({ number: 15}, 1200);
    $('.resumen-evento li:nth-child(3) p').animateNumber({ number: 3}, 1500);
    $('.resumen-evento li:nth-child(4) p').animateNumber({ number: 9}, 1500);


    //Cuenta Regresiva

    $('.cuenta-regresiva').countdown('2023/12/10 09:00:00', function(event){
        $('#dias').text(event.strftime('%D'));
        $('#horas').text(event.strftime('%H'));
        $('#minutos').text(event.strftime('%M'));
        $('#segundos').text(event.strftime('%S'));
    });


});




















