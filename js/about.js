'use stict'

teamMember=[];
 function Team(url,name,postion,gitemail){
 this.url=url;
this.name=name;
this.postion=postion;
this.gitemail=gitemail;
teamMember.push(this);
 } 

let mem1= new Team ('images/wijdan.jpg','wijdan','Devloper','github.com/wijdankhaled');
let mem2= new Team('images/ibrahem__ibrahem_alomari_.jpg','ibrahem','leader','github.com/ibrahemomari');
let mem3= new Team ('images/crazymahmoud.jpeg','mahmoud','Devloper','github.com/Mahmoud-Barghouthi');
let mem4=new Team('images/suzan.jpg','suzan','Devloper','github.com/Suzan-Amer');
let mem5=new Team('images/suzan.jpg','suzan','Devloper','github.com/Suzan-Amer');

console.log(teamMember);
 function details (){
   let  teamdiv=document.getElementById('team');
   for(let i=0;i<teamMember.length;i++){
       let div=document.createElement('div');
       teamdiv.appendChild(div);
let card =document.createElement('div');
div.appendChild(card);
card.className="card"

let img =document.createElement('img');
img.height=270;
img.width=200;
img.setAttribute("src",teamMember[i].url);
card.appendChild(img);

let contaner=document.createElement('div');
card.appendChild(contaner);

let h3=document.createElement('h3');
contaner.appendChild(h3);
h3.textContent=teamMember[i].name;

let h4 =document.createElement('h4');
contaner.appendChild(h4);
h4.textContent=teamMember[i].postion;

let pra=document.createElement('p');
contaner.appendChild(pra);
pra.textContent=teamMember[i].gitemail;



   }

 }
 details ();