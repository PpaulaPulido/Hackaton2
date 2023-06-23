//funcionalidad para el despliegue de Nosotros en el footer
const accordion = document.getElementsByClassName('container2'); //en esta instrucicon llamamos a la clase container2 del html
    for (i=0; i<accordion.length; i++) { 
        accordion[i].addEventListener('click', function () { //con esta funcion se logra que al dar clic se desplegue el contenido
            this.classList.toggle('active') //con la funcion classList.toggle() se agrega y se quita la clase active al elemento del CSS
        })
    }