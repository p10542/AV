
// THIS IS MY FIRST TIME USING THIS PLZ DONT JUDGE
// COMO QUE NO HAY CLASES DE OBJETOS WOW

const contenido_dias = {

    "dia-1":{
        titulo : "6 DAYS LEFT!",
        text:   "No lo hice aun",
        ruta_img : "./imgs/foquita.jpg"  
    },

    "dia-2":{
        titulo : "5 DAYS LEFT!",
        text:   "No lo hice aun",
        ruta_img : "./imgs/fondogatines.jpg" 
    },
    "dia-3":{
        titulo : "4 DAYS LEFT!",
        text:   "No lo hice aun",
        ruta_img : "./imgs/fondogatines.jpg" 
    },
    "dia-4":{
        titulo : "3 DAYS LEFT!",
        text:   "No lo hice aun",
        ruta_img : "./imgs/fondogatines.jpg" 
    },
    "dia-5":{
        titulo : "2 DAYS LEFT!",
        text:   "No lo hice aun",
        ruta_img : "./imgs/fondogatines.jpg" 

    },
    "dia-6":{
        titulo : "1 DAYS LEFT!",
        text:   "No lo hice aun",
        ruta_img : "./imgs/fondogatines.jpg" 

    },
    "dia-7":{
        titulo : "HAPPY BIRTHDAY!",
        text:   "No lo hice aun",
        ruta_img : "./imgs/fondogatines.jpg" 

    }

};

const btn_cerrar = document.getElementById("btn-cerrar");
const fondo_negro = document.getElementById("fondo-negro");
const dob = document.getElementById("dibujo"); // dudoso
const btns = document.querySelectorAll('.dia-btn');


btns.forEach((boton) =>{
    boton.addEventListener('click',() =>{
        // click
        fondo_negro.classList.remove('fondo-negro2');
        let id = boton.id;
        let reg = contenido_dias[id];
        dob.innerHTML = `<h2>${reg.titulo}</h2> <img src="${reg.ruta_img}"><p>${reg.text}</p>`;


    });
});

btn_cerrar.addEventListener('click', () =>{
        fondo_negro.classList.add('fondo-negro2');
});



