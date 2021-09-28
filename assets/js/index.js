//1. Render print interface
//2. hanler click on a music btn element be able to run song 
let $= document.querySelector.bind(document)
let $$= document.querySelectorAll.bind(document)
let musicBtn
let volume
let app ={
    isPlaying:false,
    songs:[
        {
            name:"Rain",
            path:"assets/audio/rain.mp3",
            icon:"fas fa-cloud-rain",
            

        },
        {
            name:"Campfire",
            path:"assets/audio/fire.mp3",
            icon:"fas fa-fire",
           
        }
        ,
        {
            name:"Waterfall",
            path:"assets/audio/waterfall.wav",
            icon:"fas fa-tint",
           
        },
        {
            name:"Piano Music",
            path:"assets/audio/Piano.mp3",
            icon:"fab fa-gitter",
            
        },
        {
            name:"Forest",
            path:"assets/audio/forest.wav",
            icon:"fab fa-pagelines",
            
        },
        {
            name:"Cafe",
            path:"assets/audio/in-cafe.wav",
            icon:"fas fa-mug-hot",
            
        },
        {
            name:"Snow",
            path:"assets/audio/snow.mp3",
            icon:"fas fa-snowflake",
            
        },
        {
            name:"Library",
            path:"assets/audio/library.mp3",
            icon:"fas fa-book-open",
            
        },
        {
            name:"Leaves",
            path:"assets/audio/leaves.mp3",
            icon:"fas fa-leaf",
            
        },
        {
            name:"Steps",
            path:"assets/audio/steps.wav",
            icon:"fas fa-walking",
        },
        {
            name:"Wind",
            path:"assets/audio/wind.mp3",
            icon:"fas fa-wind",
        },
        {
            name:"Rowing",
            path:"assets/audio/rowing.mp3",
            icon:"fas fa-ship",
        },
        {
            name:"Night",
            path:"assets/audio/night.mp3",
            icon:"fas fa-moon",
        },
        {
            name:"Ocean",
            path:"assets/audio/ocean.mp3",
            icon:"fas fa-water",
        },
        {
            name:"Windchime",
            path:"assets/audio/windchime.mp3",
            icon:"far fa-bell",
        },
        
        

    ],
    
    render:function(){
        const htmls= this.songs.map((song)=>{
                return `<div class="backlinear">
                <div class="music-btn">
                <audio class="music-player" control loop preload="none">
                    <source src="${song.path}" type="audio/mpeg" />
                </audio>
                <h2>${song.name}</h2>
                <div class="music-icon">
                  <i class="${song.icon}"></i>
                </div>
                
              </div>
              <div class="range">
      <div class="sliderValue">
        <span>100</span>
      </div>
      <div class="field">
        
        <input type="range" min="10" max="100" value="100" steps="1" />
        
      </div>
    </div>
                </div>`
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
        let showVolume= function(element){
            let rangeElement= element.parentElement.querySelector(".range")
            rangeElement.style.display = "block";
        }
        let hideVolume= function(element){
            let rangeElement= element.parentElement.querySelector(".range")
            rangeElement.style.display = "none";
        }
        let setUpVolume= function(element) {
            let inputSlider= element.parentElement.querySelector(".range input")
            
            let audioVolume= element.querySelector(".music-player")
            const slideValue = element.parentElement.querySelector(".range span");
            console.log(inputSlider,audioVolume,slideValue);
            let _this= inputSlider
      inputSlider.oninput = (()=>{
        let value = inputSlider.value;
        slideValue.textContent = value;
        slideValue.style.left = value + "%";
        slideValue.classList.add("show");
        audioVolume.volume= _this.value/100
      });
      inputSlider.onblur = (()=>{
        slideValue.classList.remove("show");
      });  
        }
        let openMusic=function(element,audio)
        {
            element.addEventListener("click",function(){
                if(this.isPlaying){
                    audio.pause()
                    audio.currentTime=0
                    this.isPlaying=false
                    effectPause(element)
                    hideVolume(element) 
                }
                else{ 
                    audio.play()
                    this.isPlaying=true
                    effectPlay(element)
                    showVolume( element)
                    setUpVolume(element)
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
