let gamseq=[];
let userseq=[];
 let btns=["yello", "red","purple", "green"];

let start=false;
let level=0;
let h2=document.querySelector("h2");
let final=document.querySelector("h3");
let perfacts=0;

document.addEventListener("keypress",function (){
   
    if(start==false){
        start=true;

        levelup();
    }
});
function gameflash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level= ${level}`;
    let randidx=Math.floor(Math.random()*3);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);

    gamseq.push(randcolor);
    console.log(gamseq);
    gameflash(randbtn);
}
function perfact(){
    if(level>perfacts){
        perfacts=level;
        final.innerHTML=`the final scor till was...<b> ${perfacts}<b/>`;
    }
}
function checkans(idx){
    // let idx=level-1;

    if(userseq[idx]===gamseq[idx]){
        if(userseq.length==gamseq.length){
            setTimeout(levelup,1000);
        }

    }else{
        // document.querySelector("body").style.backgroundImage.remove();
        h2.innerHTML=`game over ! your score was <b>${level}<b/> ..<br> press any key to start game..`;
        document.querySelector("body").style.backgroundColor = "red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"
        },150);
        perfact();
        reset();
        // perfacts=level;
      
    }
}
function btnpress(){
    let btn=this;
    gameflash(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnpress);
}

function reset(){
    start=false;
    gamseq=[];
    userseq=[];
    level=0;
}