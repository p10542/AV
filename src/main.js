
// THIS IS MY FIRST TIME USING THIS PLZ DONT JUDGE
// COMO QUE NO HAY CLASES DE OBJETOS WOW

const contenido_dias = {

    "dia-1":{
        titulo : "6 DAYS LEFT!",
        text:   "Hello Avrio!! As you might have guessed, the gifts are mostly going to be drawings :3. I decided to draw mini avrio in his oc version with a few things that (i think) he likes like novels, seaweed snackies, gaming, football, animals and your electric guitar! I still remember when you told me you had a dream that someone stole it. Even if it happened a long time ago. I hope you like your mini self and give him a lot of love. Lots of love, Puli <3",
        ruta_img : "../imgs/dia1.jpg"  
    },

    "dia-2":{
        titulo : "5 DAYS LEFT!",
        text:   "Hello hello! The special day is starting to come closer. To celebrate, avrio kitty and puli kitty have gathered! They are wearing matching berry hats! Dont they look cute? Can you feel the excitedness in their eyes and smiles? Its such a special day to come, and i bet its the happiest. Lets help them get everything they need to celebrate the birthday party!! I hope today is good and that you eat lots of yummy food, lots of love Puli <3 ",
        ruta_img : "../imgs/dia2.webp" 
    },
    "dia-3":{
        titulo : "4 DAYS LEFT!",
        text:   "Good morning :D. Its good to see you again, todays gift is a bit simple, because theres quite a few that are yet to come. Heres a little avrio taking care of his little car and Solecito (akka : his two kiddies). They seem so happy with avrio because they can tell youre the sweetest soul. I hope you feel as loved as the little kiddies feel in the drawing. Have a good day and lets wait excitedly for the birthday day to come. Lots of love, Puli <3",
        ruta_img : "../imgs/dia3.jpg" 
    },
    "dia-4":{
        titulo : "3 DAYS LEFT!",
        text:   "Hello :). Todays drawing is a bit different and maybe special. Ive just been thinking about us, when we first met eachother and we said that we would dance under the stars. Well in this drawing its what we are doing!! I decided not to use avrio oc because how avrio looks in real life is my favorite of all his possible looks. I hope this drawing can warm your heart and make you remember of our first days together. As always, Lots of love, Puli <3 ",
        ruta_img : "../imgs/dia4.jpg" 
    },
    "dia-5":{
        titulo : "2 DAYS LEFT!",
        text:   "Chan chan chan, the day is getting closer ! Theres only two days left!! Arent you excited? Cuz im so so excited! Even Aira and Robin have gathered together to wait for your birthday. They all know youre wonderful and caring so they want to be together by your side during the special day! I hope you like the drawing, i tried to put my love into it despite them not being exactly how they are in the game. You already know, lots of love from Puli <3",
        ruta_img : "../imgs/dia5.webp" 

    },
    "dia-6":{
        titulo : "1 DAYS LEFT!",
        text:   "Wow..Avrio theres only a day left. You must already feel the excitedness flowing through your veins. On this day you have to look back and think of all the special things you did this year, everything you achieved and every beautiful moment that will leave a memory in your mind forever. Its your last day with 23 and its a day to be grateful of, im sure if we ask little Avrio he would be so proud of the person youre becoming. Theres still a long road ahead of you, full of wishes yet to become true. I will be by your side as much as i can, because as always, Puli loves you lots and lots. Please have a wonderful cozy day today, i love you!!",
        ruta_img : "../imgs/dia6.jpg" 

    },
    "dia-7":{
        titulo : "HAPPY BIRTHDAY!",
        text:   "Happy birthday my dear Avrio! Its finally the goal of the countdown! Were you missing someone on the drawings? I decided to save Saki for last since its the one you love the most, isnt it? Maybe this could be us someday, enjoying avrios birthday all together. Again, happy birthday, theres still one more gift, Its a handwriten letter !! Please ask puli to deliver it by saying: I already opened the last day! And as always..lots and lots of love my darling!! Tell me if you liked the surprise <3",
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





