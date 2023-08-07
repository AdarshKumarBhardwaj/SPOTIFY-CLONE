console.log("welcome to spotify");
letsongIndex=0;
 audioElement=new Audio('1.mp3.mpeg');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songitems=Array.from(document.getElementsByClassName('songitem'));

let songs=[
    {songName:"kesarias",filePath:"C:\Users\91887\Desktop\spotify\1.mp3.mpeg",coverPath:"https://www.seoclerk.com/pics/636537-3An6kl1539939590.jpg"},
    {songName:"Joru Ka Ghulam",filePath:"C:\Users\91887\Desktop\spotify\01 Joru Ka Ghulam - www.downloadming.com.mp3",coverPath:"https://i.scdn.co/image/ab67616d0000b2734909949dfa032346af34fb27"},
    {songName:"Main Kaun Hoon",filePath:"C:\Users\91887\Desktop\spotify\01 Main Kaun Hoon - Secret Superstar 320Kbps 1.mp3",coverPath:"https://static.qobuz.com/images/covers/20/06/5060488940620_600.jpg"},
    {songName:"Aafat E Jaan",filePath:"C:\Users\91887\Desktop\spotify\02 Aafat E Jaan (Sonu Nigam) 320Kbps.mp3",coverPath:"https://th.bing.com/th/id/OIP.uJX9S9dMMCr8J_IsY-p8SgAAAA?pid=ImgDet&w=350&h=350&rs=1"},
    {songName:"kesarias",filePath:"C:\Users\91887\Desktop\spotify\1.mp3.mpegs",coverPath:"https://www.seoclerk.com/pics/636537-3An6kl1539939590.jpg"},
    {songName:"kesarias",filePath:"C:\Users\91887\Desktop\spotify\1.mp3.mpegs",coverPath:"https://th.bing.com/th/id/OIP.yBFcCtPDVGNNpTUlc6OlJAHaHa?pid=ImgDet&w=1400&h=1400&rs=1"},
    {songName:"kesarias",filePath:"C:\Users\91887\Desktop\spotify\1.mp3.mpegs",coverPath:"https://www.seoclerk.com/pics/636537-3An6kl1539939590.jpg"},
    {songName:"kesarias",filePath:"C:\Users\91887\Desktop\spotify\1.mp3.mpegs",coverPath:"https://www.seoclerk.com/pics/636537-3An6kl1539939590.jpg"},
    
]
songitems.forEach((element,i)=>{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songName;
    
})
// audioElement.play();
//handle play/pause click
masterplay.addEventListener('click', ()=>{
   if(audioElement.paused || audioElement.currentTime<=0){
   audioElement.play();
   masterplay.classList.remove('fa-circle-play');
   masterplay.classList.add('fa-circle-pause');
   gif.style.opacity=1;
   
}
else{
    audioElement.pause();
   masterplay.classList.remove('fa-circle-pause');
   masterplay.classList.add('fa-circle-play');
   
}
})


//listen to events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)* 100);
    console.log(progress);
    myprogressbar.value=progress;
})
//it is used to increase song
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value *audioElement.duration/100;
})


const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
    
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        // index = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src='1.mp3.mpeg';
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
   
    })
})