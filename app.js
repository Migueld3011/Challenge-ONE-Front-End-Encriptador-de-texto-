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
//function ajustarAlturaTextarea(textarea) {
           // textarea.style.height = 'auto';
            //textarea.style.height = (textarea.scrollHeight) + 'px';
            
        //}


function mostrarResultado() {
            document.getElementById('contenedorResultado').style.display = 'flex';
            document.getElementById('imagenBusqueda').style.display= 'flex'
        }

function ocultarResultado() {
            document.getElementById('contenedorResultado').style.display = 'none';
             document.getElementById('imagenBusqueda').style.display= 'none'
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
           ajustarAlturaTextarea(contenedorDeResultado);
          
           //revisar esta parte de codigo para lograr que la altura del textarea se ajuste al principio
         //  contenedorDeResultado.style.flexGrow = '1';
           //contenedorDeResultado.style.height = '200%';
           
           
           document.getElementById('contenedorDeResultado').style.alignItems= "flex-start";
           
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
   //ajustarAlturaTextarea(contenedorDeResultado);
  
   //revisar esta parte de codigo para lograr que la altura del textarea se ajuste al principio
 //  contenedorDeResultado.style.flexGrow = '1';
   //contenedorDeResultado.style.height = '200%';
   
   
   document.getElementById('contenedorDeResultado').style.alignItems= "flex-start";       


}

async function copiarTexto() {
    let contenedorDeResultado = document.getElementById('contenedorDeResultado');
    try {
        await navigator.clipboard.writeText(contenedorDeResultado.value);
        alert('Texto copiado al portapapeles');
    } catch (err) {
        console.error('Error al copiar el texto: ', err);
    }
}