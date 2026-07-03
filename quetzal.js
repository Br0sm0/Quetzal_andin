let botoNav = document.getElementById("btn_nav");
let menuNav = document.getElementById("menu_nav");
let btnNvCerado = document.getElementById("btn_nav_cerrado");
let navOculto = document.getElementById("barra_nav")
let overlay = document.getElementById("overlay")
let pagContenido = document.getElementById("contenido")

botoNav.addEventListener("click",function(){
    menuNav.classList.add("menu_visible")
    navOculto.classList.add("nav_menu_abierto")
    overlay.classList.add("overlay_visible")
    pagContenido.classList.add("contenido_menu_abierto")

    //bloquea el scroll
    document.body.style.overflow="hidden"
    
})
btnNvCerado.addEventListener("click",function(){
    menuNav.classList.remove("menu_visible")
    navOculto.classList.remove("nav_menu_abierto")
    overlay.classList.remove("overlay_visible")
    pagContenido.classList.remove("contenido_menu_abierto")

    //restaura el scroll
    document.body.style.overflow="auto"
})

let barraNav = document.getElementById("barra_nav");
let ultimoScroll = window.scrollY;

window.addEventListener("scroll", function(){
    let ScrollActual = window.scrollY;

    if(ScrollActual === 0){
        barraNav.classList.remove("nav_visible")
        botoNav.classList.add("btn_color_nav")
    }else if(ScrollActual > ultimoScroll){
        barraNav.classList.add("nav_oculto")
        botoNav.classList.remove("btn_color_nav")
    }else{
        barraNav.classList.remove("nav_oculto")
        barraNav.classList.add("nav_visible")
    }
    ultimoScroll = ScrollActual
})


