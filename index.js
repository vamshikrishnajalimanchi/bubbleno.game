var timer=60;
var score=0;
var rn=0;

function increaseScore() {
score+=10; 
document.querySelector('#scoreval').textContent=score;   
}

function getNewHit(){
    rn=Math.floor(Math.random()*10);
    document.querySelector('#hitval').textContent=rn;
}

function makeBubble(){
    let clutter='';
for(var i=1; i<=70;i++){
clutter+=`<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
};
document.querySelector('#pbtm').innerHTML=clutter;
}

function runTimer(){
    var timerint=setInterval(function(){
        if(timer>0){
        timer--;
document.querySelector('#timerval').innerHTML=timer;}
else{clearInterval(timerint);
window.alert(`Time completed! score is ${score}! Click 'OK' to start the Game.`)
location.reload()}
    },1000)
}

if(confirm('Click "OK" to Start the game and timer!? else "Cancel"')){
    runTimer();
    getNewHit();
    makeBubble();
}

document.querySelector('#pbtm').addEventListener('click',function (details) {console.log(details.target.textContent);
    if(details.target.textContent==rn && timer>0){
        increaseScore();
        getNewHit();
        makeBubble();
    }
    });

    
//runTimer();
//getNewHit();
//makeBubble();
//increaseScore();