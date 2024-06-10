let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");

function cargar(item){
    quitarBordes();
    mostrador.style.width = "60%";
    seleccion.style.width = "40%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid red";

    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

    modeloSeleccionado.innerHTML =  item.getElementsByTagName("p")[0].innerHTML;

    descripSeleccionada.innerHTML = "Descripción del modelo ";

    precioSeleccionado.innerHTML =  item.getElementsByTagName("span")[0].innerHTML;


}
function cerrar(){
    mostrador.style.width = "100%";
    seleccion.style.width = "0%";
    seleccion.style.opacity = "0";
    quitarBordes();
}
function quitarBordes(){
    var items = document.getElementsByClassName("item");
    for(i=0;i <items.length; i++){
        items[i].style.border = "none";
    }
}
/* scrip para deslizante de imagenes*/
const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slider-section");


btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

setInterval(() => {
    moveToRight()
}, 10000); // Cambiado a 15 segundos (15000 milisegundos)


let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length;

function moveToRight() {
    if (counter >= sliderSection.length-1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    counter++;
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
    
}  

function moveToLeft() {
    counter--;
    if (counter < 0 ) {
        counter = sliderSection.length-1;
        operacion = widthImg * (sliderSection.length-1)
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
    
    
}  
/*FAG*/
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.faq').addEventListener('click', function(event) {
        if (event.target.classList.contains('faq-question') || event.target.closest('.faq-question')) {
            var question = event.target.closest('.faq-question');
            var answer = question.nextElementSibling;
            var indicator = question.querySelector('.indicator');

            if (answer.classList.contains('show')) {
                answer.style.maxHeight = null;
                answer.classList.remove('show');
                question.classList.remove('open');
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
                answer.classList.add('show');
                question.classList.add('open');
            }
        }
    });
});

/*HEADER*/ 
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-links");
    const dropdowns = document.querySelectorAll(".dropdown");

    hamburger.addEventListener("click", function() {
        navLinks.classList.toggle("nav-active");
        hamburger.classList.toggle("toggle");
    });

    navLinks.addEventListener("click", function(event) {
        if (event.target.tagName === 'A' && event.target.nextElementSibling) {
            event.preventDefault();
            const submenu = event.target.nextElementSibling;
            submenu.classList.toggle("dropdown-active");
        }
    });
});

/*User name */
document.addEventListener("DOMContentLoaded", function() {
    var userIcon = document.getElementById("user-icon");
    var userMenu = document.getElementById("user-menu");

    userIcon.addEventListener("click", function(event) {
        console.log("Clic en el icono de usuario");
        event.stopPropagation(); // Evita que el evento de clic se propague a otros elementos
        // Si el menú está oculto, lo mostramos; de lo contrario, lo ocultamos
        if (userMenu.style.display === "none" || userMenu.style.display === "") {
            userMenu.style.display = "block";
        } else {
            userMenu.style.display = "none";
        }
    });

    // Evento de clic para cerrar el menú si se hace clic fuera de él
    document.addEventListener("click", function(event) {
        if (!userMenu.contains(event.target) && event.target !== userIcon) {
            userMenu.style.display = "none";
        }
    });
});