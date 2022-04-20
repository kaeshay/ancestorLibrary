const thing = document.querySelectorAll('.avatar,.wide-avatar,.medium-item');

for (var i = 0; i < thing.length; i++) {
    thing[i].addEventListener('click', function(e) { 
    	if (e.altKey) {
    		console.log(this);
    		this.style.display="none";
    	}
	})	
}

var transformCounter=0;
function transform(makerString,idString){
	element=document.getElementById(idString);
		if(transformCounter==0){
			element.src="../assets/"+makerString+"/"+idString+"2.png";
			transformCounter++;
		} else if(transformCounter==1){
			element.src="../assets/"+makerString+"/"+idString+"1.png";
			transformCounter=0;
		}
}
var showCounter = 0;
function show(idString){
	element = document.getElementById(idString);
	if(showCounter==0){
		element.style.display='block';
		showCounter++;
	} else if (showCounter==1){
		element.style.display='none';
		showCounter=0;
	}
}
var hideCounter = 0;
function hide(idString){
	element = document.getElementById(idString);
	if(hideCounter==0){
		element.style.display='none';
		hideCounter++;
	} else if (hideCounter==1){
		element.style.display='block';
		hideCounter=0;
	}
}
var soundCounter=0;
function playSound(idString){
	var sound=document.getElementById(idString);
	if (soundCounter==0){
		sound.play();
		soundCounter++;
	} else if (soundCounter==1){
		sound.pause();
		soundCounter=0;
	}
}
var eggCounter=0;
function hatchEgg(){
	element=document.getElementById('egg');
		if(eggCounter==0){
			element.src="../assets/rui/egg2.png";
			eggCounter++;
		} else if(eggCounter==1){
			element.src="../assets/rui/egg1.png";
			eggCounter++;
		} else if (eggCounter==2){
			element.src="../assets/rui/egg3.png";
			eggCounter=0
		}
}
// var transformIdCounter=0;
// function transformId(makerString, idString){
// 	element=document.getElementById(idString);
// 	// for (var i=0;i<classString.length;i++){
// 		if(transformIdCounter==0){
// 			element.src="../assets/"+makerString+"/"+idString+"2.png";
// 			transformIdCounter++;
// 		} else if(transformIdCounter==1){
// 			element.src="../assets/"+makerString+"/"+idString+"1.png";
// 			transformIdCounter=0;
// 		}
// 	// }
// }
