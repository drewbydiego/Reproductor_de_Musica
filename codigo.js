const playCancion = document.getElementsByClassName('play');
const stopCancion = document.getElementsByClassName('stop');
const volumen = document.querySelector('.controlV');
let audio;
var estiloPlay,estiloStop;
var stopPresionado = false;
var playPresionado = false;
var reproduciendo = 0;
volumen.addEventListener('change', function(){
    let vol = this.value;
    audio.volume = vol;
});

//Comprobando si se esta reproduciendo una cancion
if(reproduciendo == 1){

}else{

for (elemento of playCancion) {
    elemento.addEventListener('click', function(){
        //REPRODUCIR LA CANCION
        //Recogiendo el el id del div que hemos pulsado para reproducir la cancion
        let cancion = this.getAttribute('id');
        //crear el objeto audio para reproducir la cancion indicada en la url
        if(reproduciendo == 0){
            reproduciendo = 1;
        audio = new Audio(`./audios/${cancion}.mp3`);
        //Comprobando si la cancion ya ha iniciado y si es asi, continuar en su currentTime correspondiente
            audio.play();
            //Pasando el nombre de la cancion como parametro para mostrar la portada
            portadaCancion(cancion);
        }
        playPresionado = true;
        //Añadiendo la clase que le da color al play
        this.classList.add('cancionIniciada');
        estiloPlay = document.querySelector('.cancionIniciada');
        //Quitando la clase que le da color al stop
        if(stopPresionado == true){
            estiloStop.classList.remove('cancionPausa');
        }

    });

}

}

function portadaCancion(nombreCancion){
    console.log(nombreCancion);
}
//PARAR LA CANCION
for (elemento of stopCancion){
    elemento.addEventListener('click',function(){
        //Quitando la clase que le da color al play
        if(playPresionado == true){
            estiloPlay.classList.remove('cancionIniciada');
        }
        //Agregando la clase que le da color al stop
        this.classList.add('cancionPausa');
        stopPresionado = true;
        estiloStop = document.querySelector('.cancionPausa');
        //Guardando el tiempo que la cancion ha estado reproduciondose
            if(reproduciendo == 1){
                audio.pause();
                reproduciendo = 0;
            }
    });
}
