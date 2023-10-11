jQuery(document).ready(function($){
    var tablero = $('.tablero'), //llamamos y guardamos en una varible al selector del tablero
        barra1 = $('.barra1JG'), //llamamos y guardamos en una varible al selector de la barra 1
        barra2 = $('.barra2JG'), //llamamos y guardamos en una varible al selector de la barra 2
        h = tablero.height() - 1.2 *  barra1.height(), //La resta entre el largo del tablero y el largo de la barra da como resultado el espacio que se puede mover (Aumentado un 20% para que coincida)
        d = {}, //Objeto vacio para rastrear las letras
        x = 5; //cantidad de píxeles que barra1 se moverá en cada intervalo.
    
    function newv(v, a, b){ 
        var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0); //ParseInt convierte el valor en Entero segun la base de al lado
        return n < 0 ? 0 : n > h ? h : n; //El "? :" Es una abreviación del If else
        /*Si n es menor que 0, entonces regresa 0.
        Si n es mayor que h, entonces regresa h.
        De lo contrario, simplemente regresa n.*/
    }  
    $(window).keydown(function(e){d[e.which]=true}); //escuchadores de eventos rastrean las teclas 
    $(window).keyup(function(e){d[e.which]=false});  //escuchadores de eventos rastrean las teclas 
    
    setInterval(function(){ //Ejecuta una funcion repetivamente 
        barra1.css({ //llamamos al selector de CSS
            top:function(i,v){ //Se mueve hacia arriba y llama a la función "newv" para que verifique constantemente si esta dentro de los limites del tablero 
                return newv (v,87,83); // Se mueve con 🡱 y 🡳
            }
        });
        barra2.css ({
            top:function(i,v){
                return newv(v,38,40); // Se mueve con W y S
            }
        })
    },20);//tiempo en minisegundo en el que se va a repetir
    });