let botoNav = document.getElementById("btn_nav");
let menuNav = document.getElementById("menu_nav");
let btnNvCerado = document.getElementById("btn_nav_cerrado");
let navOculto = document.getElementById("barra_nav");
let overlay = document.getElementById("overlay");
let pagContenido = document.getElementById("contenido");

botoNav.addEventListener("click",function(){
    menuNav.classList.add("menu_visible");
    navOculto.classList.add("nav_menu_abierto");
    overlay.classList.add("overlay_visible");
    pagContenido.classList.add("contenido_menu_abierto");

    //bloquea el scroll
    document.body.style.overflow="hidden"
    
})
btnNvCerado.addEventListener("click",function(){
    menuNav.classList.remove("menu_visible");
    navOculto.classList.remove("nav_menu_abierto");
    overlay.classList.remove("overlay_visible");
    pagContenido.classList.remove("contenido_menu_abierto");

    //restaura el scroll
    document.body.style.overflow="auto"
})

let barraNav = document.getElementById("barra_nav");
let ultimoScroll = window.scrollY;

window.addEventListener("scroll", function(){
    let ScrollActual = window.scrollY;

    if(ScrollActual === 0){
        barraNav.classList.remove("nav_visible");
        botoNav.classList.add("btn_color_nav");
    }else if(ScrollActual > ultimoScroll){
        barraNav.classList.add("nav_oculto");
        botoNav.classList.remove("btn_color_nav");
    }else{
        barraNav.classList.remove("nav_oculto");
        barraNav.classList.add("nav_visible");
    }
    ultimoScroll = ScrollActual
});


let observador = new IntersectionObserver(function(entradas){
    entradas.forEach(function(entrada){
        if(entrada.isIntersecting){
            entrada.target.classList.add("visible");
        }
    });
});

let articulos = document.querySelectorAll(".animar");
articulos.forEach(function(articulo, indice){
    articulo.style.transitionDelay = (indice * 0.01)+ "s";
    observador.observe(articulo)
})

let mensaje = document.getElementById("mensaje_re");
let reservaGuardada = localStorage.getItem("reserva")
if(reservaGuardada != null){
    let reserva = JSON.parse(reservaGuardada);
    mensaje.textContent = "hay una reserva guardada a nombre de: " + reserva.nombre;
}

let formulario = document.getElementById("form_reserva");
let nombre_re = document.getElementById("nombre");
let fecha_re = document.getElementById("campo_fecha");
let personas_re = document.getElementById("campo_personas");




formulario.addEventListener("submit", function(evento){
    let reserva = {nombre: nombre_re.value, fecha :fecha_re.value, personas: personas_re.value };
    localStorage.setItem("reserva", JSON.stringify(reserva))
    mensaje.textContent="Reserva exitosa";
    evento.preventDefault();

});

let btn_cancelar = document.getElementById("btn_cancelar");
btn_cancelar.addEventListener("click", function(){
    localStorage.removeItem("reserva");
    mensaje.textContent="Reserva Cancelada"
})
