//1. Render print interface
//2. hanler click on a music btn element be able to run song 
let $= document.querySelector.bind(document)
let $$= document.querySelectorAll.bind(document)
let musicBtn
let app ={
    isPlaying:false,
    songs:[
        {
            name:"Rain",
            path:"../Moodly/assets/audio/rain.mp3",
            icon:"fas fa-cloud-rain",
            

        },
        {
            name:"Campfire",
            path:"../Moodly/assets/audio/fire.mp3",
            icon:"fas fa-fire",
           
        }
        ,
        {
            name:"Waterfall",
            path:"../Moodly/assets/audio/waterfall.wav",
            icon:"fas fa-tint",
           
        },
        {
            name:"Piano Music",
            path:"../Moodly/assets/audio/Piano.mp3",
            icon:"fab fa-gitter",
            
        },
        {
            name:"Forest",
            path:"../Moodly/assets/audio/forest.wav",
            icon:"fab fa-pagelines",
            
        },
        {
            name:"Cafe",
            path:"../Moodly/assets/audio/in-cafe.wav",
            icon:"fas fa-mug-hot",
            
        },
        {
            name:"Snow",
            path:"../Moodly/assets/audio/snow.mp3",
            icon:"far fa-snowflake",
            
        },
        {
            name:"Library",
            path:"../Moodly/assets/audio/library.mp3",
            icon:"fas fa-book-open",
            
        },
        {
            name:"Leaves",
            path:"../Moodly/assets/audio/leaves.mp3",
            icon:"fas fa-leaf",
            
        },
        {
            name:"Steps",
            path:"../Moodly/assets/audio/steps.wav",
            icon:"fas fa-walking",
        },
        {
            name:"Wind",
            path:"../Moodly/assets/audio/wind.mp3",
            icon:"fas fa-wind",
        },
        {
            name:"Rowing",
            path:"../Moodly/assets/audio/rowing.mp3",
            icon:"fas fa-ship",
        },
        {
            name:"Night",
            path:"../Moodly/assets/audio/night.mp3",
            icon:"fas fa-moon",
        },
        {
            name:"Ocean",
            path:"../Moodly/assets/audio/ocean.mp3",
            icon:"fas fa-water",
        },
        {
            name:"Windchime",
            path:"../Moodly/assets/audio/windchime.mp3",
            icon:"far fa-bell",
        },
        
        

    ],
    configEle:function(){
        console.log("hello succgesst");

    },
    render:function(){
        const htmls= this.songs.map((song)=>{
                return `<div class="backlinear"><div class="music-btn">
                <audio class="music-player" control loop preload="none">
                    <source src="${song.path}" type="audio/mpeg" />
                </audio>
                <h2>${song.name}</h2>
                <div class="music-icon">
                  <i class="${song.icon}"></i>
                </div>
                <div class="music-process">
                  <input
                    id="progress"
                    class="progress"
                    type="range"
                    value="0"
                    step="1"
                    min="0"
                    max="100"
                  />
                </div>
              </div></div>`
        })
        const musicElement= document.createElement("div")
        musicElement.classList.add("flex")
        musicElement.id= "musics"
        musicElement.innerHTML=htmls.join("")
        $(".app").appendChild(musicElement)
        let result = $(".app").appendChild(musicElement)
        return result

    },
    handelEvent:function(){
        musicBtn= $$(".music-btn")
       
        // Handel effect when music run 
        let effectPause= function(element){
            element.classList.remove("shadow")
            element.parentElement.style.backgroundImage=""
        }
        let effectPlay= function(element){
            element.classList.add("shadow")
            element.parentElement.style.backgroundImage=`linear-gradient(
                115deg,
                #4fcf70,
                #fad648,
                #a767e5,
                #12bcfe,
                #44ce7b
              )`
        }


         // Handling music player
        let openMusic=function(element,audio)
        {
            element.addEventListener("click",function(){
                
                // radiateAnimation(element)
                if(this.isPlaying){
                    audio.pause()
                    audio.currentTime=0
                    this.isPlaying=false
                    effectPause(element)
                    
                }
                else{ 
                    audio.play()
                    this.isPlaying=true
                    effectPlay(element)
                }
                
                   
            })
           
        }
       
        musicBtn.forEach(element => {
            let audio = element.querySelector(".music-player")
            openMusic(element,audio)
        });

    
    },
    start:function(){
            const myPromise = new Promise((myResolve,myReject)=>{
                let renderPromise= this.render()
                if( renderPromise)
                {
                    myResolve(renderPromise)
                }
                else{
                    myReject("fail")
                }
            })
            myPromise.then(()=>{
                console.log("Successful Rendering!!!");
            }).then(()=>{
                this.handelEvent()
            })
            .catch((value)=>{
                console.log("Reject"+value);
            })      
    }
}
app.start()
