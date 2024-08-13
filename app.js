let cajaEncriptadora = document.querySelector(".cuadroIngresoTexto");
 cajaEncriptadora.value = "Ingresa Texto aqui...";

cajaEncriptadora.addEventListener('focus', function() {
    if (this.value === "Ingresa Texto aqui...") {
        this.value = "";
        }
    } );

 cajaEncriptadora.addEventListener('blur', function() {
        if (this.value === "") {
            this.value = "Ingresa Texto aqui...";
        }
    });

    function validarMinusculas(input) {
      
        let valorOriginal = input.value;
        let valorMinusculas = valorOriginal.toLowerCase();
    
     
        if (valorOriginal !== valorMinusculas) {
            document.getElementById('errorMsg').textContent = "Las mayúsculas se convierten automáticamente a minúsculas.";
        } else {
            document.getElementById('errorMsg').textContent = "";
        }
        input.value = valorMinusculas;
    }
    

function encriptaTexto() {
            let textoIngresado = document.getElementById('cuadroIngresoTexto').value;
           
            
            let textoEncriptado = textoIngresado
                .replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
            
            document.getElementById('contenedorDeResultado').value = textoEncriptado;
           
            document.getElementById('mensajeDeAviso').textContent = '';
             
           

           document.getElementById('imagenBusqueda').style.display = 'none';
           document.getElementById('mensajeDeAviso').style.display = 'none';
           document.getElementById('contenedorDeResultado').style.textAlign ="justify";
          
         
        }

function desEncriptaTexto()  {
    let textoIngresado = document.getElementById('cuadroIngresoTexto').value;
           
            
    let textoEncriptado = textoIngresado
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
    document.getElementById('contenedorDeResultado').value = textoEncriptado;
   
    document.getElementById('mensajeDeAviso').textContent = '';
     
   

   document.getElementById('imagenBusqueda').style.display = 'none';
   document.getElementById('mensajeDeAviso').style.display = 'none';
   document.getElementById('contenedorDeResultado').style.textAlign ="justify";
   
   

}

//async function copiarTexto() {
  //  let contenedorDeResultado = document.getElementById('contenedorDeResultado');
    //try {
      //  await navigator.clipboard.writeText(contenedorDeResultado.value);
        //alert('Texto copiado al portapapeles');
   // } catch (err) {
     //   console.error('Error al copiar el texto: ', err);
    //}
//}

async function copiarTexto() {
    let contenedorDeResultado = document.getElementById('contenedorDeResultado');
    let mensajeCopiado = document.getElementById('mensajeCopiado');
    
    try {
        await navigator.clipboard.writeText(contenedorDeResultado.value);
        
        // Mostrar el mensaje de que el texto fue copiado
        mensajeCopiado.style.display = 'block';

        // Ocultar el mensaje después de 3 segundos
        setTimeout(() => {
            mensajeCopiado.style.display = 'none';
        }, 1000);
    } catch (err) {
        console.error('Error al copiar el texto: ', err);
    }
}
