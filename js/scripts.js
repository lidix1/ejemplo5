//script para el slider
      $( document ).ready(function( $ ) {
        $( '#banner' ).sliderPro({
          width: '100%',
          height: 500,
          arrows: true,
          buttons: false,
          autoHeight: true,
          waitForLayers: true,
          thumbnailWidth: 200,
          thumbnailHeight: 100,
          thumbnailPointer: true,
          autoplay: false,
          autoScaleLayers: false,
          breakpoints: {
            500: {
              thumbnailWidth: 120,
              thumbnailHeight: 50
            }
          }
        });
      });

//scripts para ejemplos

      function Mensaje(){
        alert('Has pinchado con el ratón');
      }

      document.getElementById("pinchable").onclick = Mensaje; 
      
      var numero_1 = 3; 
      var numero_2 = 100; 
      var resultado = numero_1 * numero_2;
      


      var texto1 = "Texto de prueba 1";
      var texto2 = "Texto siguiente";
      var textogeneral = texto1 + texto2;
      
      //Array

      var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
      var diamostrado = dias[0] + " " + dias[1] + " " + dias[2] + " " + dias[3];
      
      var diamostrado = dias[0] + dias[1] + dias[2] + dias[3];

      var numero = 5;
      --numero;

      var visible = false;
      
      //condicional
      var mostrarMensaje = false; 
      
      if(5 < 1) { 
        //alert(" 5 es mayor que 1");
      }else {
        //alert("no")
      }

    for(var i=0; i<7; i++) { 
        //alert(dias[i]); 
    }

    var mensaje = "Texto de ejemplo";
    var mostrarmensaje = mensaje.length;
    var mostrarmensaje2 = mensaje.toLowerCase();

    //Hora
    var fechaHora = new Date(); 

    var horas = fechaHora.getHours(); 
    var minutos = fechaHora.getMinutes(); 
    var segundos = fechaHora.getSeconds();   
    
    document.getElementById("reloj").innerHTML = horas+':'+minutos+':'+segundos;   
