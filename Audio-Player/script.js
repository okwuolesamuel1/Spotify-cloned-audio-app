var playme = document.querySelector(".pause");
var myaudio = document.querySelector("#my_audio")
var isplaying = false;
var mpause = document.querySelector('.pause');
// document.querySelector('.pause').innerHTML = '<i class="fa-solid fa-play"></i>'


myaudio.addEventListener("timeupdate",()=>{

})

playme.addEventListener("click",function(){
     if(isplaying){
        // alert("It is paused");
        mpause.classList.remove("fa-pause");
        mpause.classList.add("fa-play");
        // document.querySelector('.pause').innerHTML = '<i class="fa-solid fa-play"></i>'
        myaudio.pause();
        isplaying = false;
     }
     else{
        // alert("It is playing");
        mpause.classList.remove("fa-play");
        mpause.classList.add("fa-pause");
        // playme.innerHTML = '<i class="fa-solid fa-pause"></i>'
        myaudio.play();
        isplaying = true;
     } 
// alert("It is clicked")
})



