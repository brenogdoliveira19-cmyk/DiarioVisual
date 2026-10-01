const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", function(){

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});








const elementos = document.querySelectorAll(
    ".foto-capa, .hero-content, .foto-diario, .album"
);



const observer = new IntersectionObserver((entradas)=>{


    entradas.forEach((entrada)=>{


        if(entrada.isIntersecting){


            entrada.target.classList.add("mostrar");


        }


    });



},
{

    threshold:0.2

});







elementos.forEach((elemento)=>{


    elemento.classList.add("animar");


    observer.observe(elemento);



});