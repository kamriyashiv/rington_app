//START R-TONE APP

//CREATE OBJECT movies  
var ringtonsData =[{
   rName :"Kabir Singh Theme",
   rImg:"images/kabirsingh01.jpg",
   rAudio:"tones/kabir01.mp3",
   id:"kabir01",
   evt:"playMusic(event,'kabir01')"
},{
   rName :"Kabir Singh flute",
   rImg:"images/kabir_flute.jpg",
   rAudio:"tones/kabir_singh_flute.mp3",
    id:"kabir02",
   evt:"playMusic(event,'kabir02')"
},{
   rName :"Tujhe kitna Chahne",
   rImg:"images/tujheKitna.jpg",
   rAudio:"tones/tujhe_kitna_chahne.mp3",
    id:"kabir03",
   evt:"playMusic(event,'kabir03')"
},{
   rName :"Tera Ban Jaunga",
   rImg:"images/terabanjaunga.jpg",
   rAudio:"tones/tera_ban_jauga.mp3",
    id:"kabir04",
   evt:"playMusic(event,'kabir04')"
},{
   rName :"Kaise Hua",
   rImg:"images/kaisehua.jpg",
   rAudio:"tones/kaise_hua_ringtone.mp3",
    id:"kabir05",
   evt:"playMusic(event,'kabir05')"
},{
   rName :"Tere Bin Ab Na..",
   rImg:"images/terebinabna.jpg",
   rAudio:"tones/terebin.mp3",
    id:"kabir06",
   evt:"playMusic(event,'kabir06')"
},]

document.querySelector('.total01').innerHTML+=`
   ${ringtonsData.length}
`;

for(var i in ringtonsData){
	document.querySelector('.movies>.container>.row').innerHTML+=`
	        
			    <div class="col-md-3">
				    <div class="main">
					      <div class="toneData text-center">
					   <img src="${ringtonsData[i].rImg}" class="rinImg">   
						<h4>${ringtonsData[i].rName}</h4>
						
					</div>
					<div class="data">
					    <audio src="${ringtonsData[i].rAudio}" class="audio" id="${ringtonsData[i].id}" controls></audio>
					</div> 
					<div class="cntrls text-center">
						<a class="play" onclick="${ringtonsData[i].evt}"><i class="fas fa-play"></i></a>
						<a class="pause" onclick="pauseSong()"><i class="fas fa-pause"></i></a>
						<a href="${ringtonsData[i].rAudio}" class="download" download><i class="far fa-arrow-alt-circle-down"></i></a>
					</div>
					</div>
				</div>
		
	`;
}

playMusic=(evt,playrRigtone)=>{
	var audio  = document.querySelector('audio');
    var play = document.querySelector('.play');
	for(var i in play){		
	}
	document.getElementById(playrRigtone).play();
}
pauseSong = () => {
    var audio = document.getElementsByClassName('audio');
    for (var i in audio) {
        audio[i].pause();
    }
}


//CREATE OBJECT movies  
var ringtonsAlbum =[{
   rName :"Vaaste (male)",
   rImg:"images/vaaste.png",
   rAudio:"tones/vaaste_love_song.mp3",
   id:"album01",
   evt:"playMusic(event,'album01')"
},{
   rName :"Romantic Ringtone",
   rImg:"images/romantic.jpg",
   rAudio:"tones/romantic__ringtone.mp3",
    id:"album02",
   evt:"playMusic(event,'album02')"
},{
   rName :"Pal Pal Dil K Pass",
   rImg:"images/palpal.jpg",
   rAudio:"tones/pal_pal_dil_k_pass.mp3",
    id:"album03",
   evt:"playMusic(event,'album03')"
},{
   rName :"Meri Aashiqui",
   rImg:"images/meri_ashiqui.jpg",
   rAudio:"tones/meri_aashiqui.mp3",
    id:"album04",
   evt:"playMusic(event,'album04')"
},{
   rName :"Taaron ke Shehar",
   rImg:"images/tarokashahar.jpg",
   rAudio:"tones/taaron_ke_shehar.mp3",
    id:"album05",
   evt:"playMusic(event,'album05')"
},{
   rName :"lut_gaye",
   rImg:"images/lut_gaye.jpg",
   rAudio:"tones/lut_gaye.mp3",
    id:"album06",
   evt:"playMusic(event,'album06')"
},]
document.querySelector('.total02').innerHTML+=`
   ${ringtonsAlbum.length}
`;
for(var i in ringtonsAlbum){
	document.querySelector('.albums>.container>.row').innerHTML+=`
	        
			    <div class="col-md-3">
				    <div class="main">
					      <div class="toneData text-center">
					   <img src="${ringtonsAlbum[i].rImg}" class="rinImg">   
						<h4>${ringtonsAlbum[i].rName}</h4>
						
					</div>
					<div class="data">
					    <audio src="${ringtonsAlbum[i].rAudio}" class="audio" id="${ringtonsAlbum[i].id}" controls></audio>
					</div> 
					<div class="cntrls text-center">
						<a class="play" onclick="${ringtonsAlbum[i].evt}"><i class="fas fa-play"></i></a>
						<a class="pause" onclick="pauseSong()"><i class="fas fa-pause"></i></a>
						<a href="${ringtonsAlbum[i].rAudio}" class="download" download><i class="far fa-arrow-alt-circle-down"></i></a>
					</div>
					</div>
				</div>
		
	`;
}


//CREATE OBJECT THEME  
var ringtonstheme =[{
   rName :"Music Box Tone",
   rImg:"images/music_box.jpg",
   rAudio:"tones/music_box_tone.mp3",
   id:"theme01",
   evt:"playMusic(event,'theme01')"
},{
   rName :"Soft Theme",
   rImg:"images/music_theme.jpg",
   rAudio:"tones/theme.mp3",
    id:"theme02",
   evt:"playMusic(event,'theme02')"
},{
   rName :"wkuk theme",
   rImg:"images/crop.jpg",
   rAudio:"tones/wkuk_theme_song.mp3",
    id:"theme03",
   evt:"playMusic(event,'theme03')"
},{
   rName :"Super Mario Theme",
   rImg:"images/super_mario_theme.jpg",
   rAudio:"tones/super_mario_theme.mp3",
    id:"theme04",
   evt:"playMusic(event,'theme04')"
},{
   rName :"Theme F Flm Ordinary",
   rImg:"images/romantic-theme-fz11.jpg",
   rAudio:"tones/theme_f_flm_ordinary.mp3",
    id:"theme05",
   evt:"playMusic(event,'theme05')"
},{
   rName :"Run Theme",
   rImg:"images/run.jpg",
   rAudio:"tones/run_theme.mp3",
    id:"theme06",
   evt:"playMusic(event,'theme06')"
},]
document.querySelector('.total03').innerHTML+=`
   ${ringtonsAlbum.length}
`;
for(var i in ringtonstheme){
	document.querySelector('.music>.container>.row').innerHTML+=`
	        
		<div class="col-md-3">
			<div class="main">
				  <div class="toneData text-center">
			   <img src="${ringtonstheme[i].rImg}" class="rinImg">   
				<h4>${ringtonstheme[i].rName}</h4>
				
			</div>
			<div class="data">
				<audio src="${ringtonstheme[i].rAudio}" class="audio" id="${ringtonstheme[i].id}" controls></audio>
			</div> 
			<div class="cntrls text-center">
				<a class="play" onclick="${ringtonstheme[i].evt}"><i class="fas fa-play"></i></a>
				<a class="pause" onclick="pauseSong()"><i class="fas fa-pause"></i></a>
				<a href="${ringtonstheme[i].rAudio}" class="download" download><i class="far fa-arrow-alt-circle-down"></i></a>
			</div>
			</div>
		</div>
		
	`;
}

// function mySearch() {
    // var input, e, view, txtValue, p, filter;
    // input = document.getElementById('myInput');
    // filter = input.value.toUpperCase();
    // view = document.querySelectorAll('.col-md-3');
    // for (e = 0; e < view.length; e++) {
        // if (view[e]) {
            // txtValue = view[e].textContent;
            // if (txtValue.toUpperCase().indexOf(filter) > -1) {
                // view[e].style.display = "";
            // } else {
                // view[e].style.display = "none";
            // }
        // }
    // }
// }
var input = document.getElementById('myInput').onkeyup = function(){
	var i,input,filter,section,txtValue;
	input =  document.getElementById('myInput');
     filter = input.value.toUpperCase();
	 section = document.querySelectorAll('section');
	 for(var i in section){
		 if(section[i]){
			 txtValue =  section[i].textContent;
             if(txtValue.toUpperCase().indexOf(filter) > -1){
				 section[i].style.display = ""; 
				 document.querySelector('.default').innerHTML=`Nothing Items founds`;
			 }
			else{
				section[i].style.display = "none";
				document.querySelector('.default').innerHTML=`Nothing Items founds`;
			}			 
		}
	 }
}