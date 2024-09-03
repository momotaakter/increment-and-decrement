const firstbtn=document.getElementById('firstbutton');
const secondbtn=document.getElementById('secondbutton');
const mainbtn=document.getElementById('main');


let num=0;
firstbtn.addEventListener('click',()=>{
 mainbtn.innerHTML=num++;
});

secondbtn.addEventListener('click',()=>{
    mainbtn.innerHTML=num--;
});





