
// THIS IS MY FIRST TIME USING THIS PLZ DONT JUDGE
// COMO QUE NO HAY CLASES DE OBJETOS WOW

const contenido_dias = {

    "dia-1":{
        titulo : "6 DAYS LEFT!",
        text:   "Hello Avrio!! As you might have guessed, the gifts are mostly going to be drawings :3. I decided to draw mini avrio in his oc version with a few things that (i think) he likes like novels, seaweed snackies, gaming, football, animals and your electric guitar! I still remember when you told me you had a dream that someone stoled. Even if it happened a long time ago. I hope you like your mini self.",
        ruta_img : "../imgs/dia1.jpg"  
    },

    "dia-2":{
        titulo : "5 DAYS LEFT!",
        text:   "No lo hice aun",
        ruta_img : "../imgs/dia2.webp" 
    },
    "dia-3":{
        titulo : "4 DAYS LEFT!",
        text:   "No lo hice aun",
        ruta_img : "../imgs/fondogatines.jpg" 
    },
    "dia-4":{
        titulo : "3 DAYS LEFT!",
        text:   "No lo hice aun",
        ruta_img : "../imgs/fondogatines.jpg" 
    },
    "dia-5":{
        titulo : "2 DAYS LEFT!",
        text:   "No lo hice aun",
        ruta_img : "../imgs/dia5.webp" 

    },
    "dia-6":{
        titulo : "1 DAYS LEFT!",
        text:   "No lo hice aun",
        ruta_img : "../imgs/fondogatines.jpg" 

    },
    "dia-7":{
        titulo : "HAPPY BIRTHDAY!",
        text:   "No lo hice aun",
        ruta_img : "../imgs/fondogatines.jpg" 

    }

};

const btn_cerrar = document.getElementById("btn-cerrar");
const fondo_negro = document.getElementById("fondo-negro");
const dob = document.getElementById("dibujo"); 
const btns = document.querySelectorAll('.dia-btn');
const contador = document.getElementById("contador");
const cumple = new Date(2026, 9, 19, 0, 0, 0);
const temporizador = setInterval(cuentaAtras, 1000);
cuentaAtras();


btns.forEach((boton) =>{
    boton.addEventListener('click',() =>{
        // click
        let ahora = new Date();
        let fechaDesb = new Date(boton.dataset.fecha);

        fondo_negro.classList.remove('fondo-negro2');
        if(ahora < fechaDesb){
            dob.innerHTML = `<h2>NOT YET!!</h2><p>This button is still locked! <br> Please wait until the specified day so you can unlock it. :p </p>`;
        }else{
            let id = boton.id;
            let reg = contenido_dias[id];
            dob.innerHTML = `<h2>${reg.titulo}</h2> <img src="${reg.ruta_img}"><p>${reg.text}</p>`;
        }
       


    });
});

btn_cerrar.addEventListener('click', () =>{
        fondo_negro.classList.add('fondo-negro2');
});


function cuentaAtras(){
    let ahora = new Date();
    let falta = cumple-ahora;

    if(falta <= 0){
        contador.textContent = "HAPPY BIRTHDAY!";
        clearInterval(timer);
    }

    let days = Math.floor(falta / (1000 * 60 * 60 * 24));
    let hours = Math.floor((falta / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((falta / (1000 * 60)) % 60);
    let seconds = Math.floor((falta / 1000) % 60);

    const format = num => String(num).padStart(2, '0');
    contador.textContent =`${days}d ${format(hours)}h ${format(minutes)}m ${format(seconds)}s`;

   
}





