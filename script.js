const text=[
"Computer Science Student",
"C Programmer",
"Java Learner",
"Web Developer"
];

let i=0;
let j=0;
let current="";
let isDeleting=false;

function type(){

current=text[i];

if(isDeleting){

document.getElementById("typing").innerHTML=current.substring(0,j--);

if(j<0){

isDeleting=false;

i++;

if(i==text.length){

i=0;

}

}

}

else{

document.getElementById("typing").innerHTML=current.substring(0,j++);

if(j>current.length){

isDeleting=true;

}

}

setTimeout(type,120);

}

type();

const btn=document.getElementById("mode");

btn.onclick=()=>{

document.body.classList.toggle("light");

}
