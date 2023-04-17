/* TODO: inserite il codice JavaScript necessario a completare il MHW! */

const p_img = 'images/checked.png';

function check(event)
{ 
  
  uncheck(event);
  const container = event.currentTarget;
  const oldimg=container.querySelector("img.checkbox");
  const image = document.createElement('img');
  image.src = p_img;
  image.classList.add("checkbox");
  if(container instanceof HTMLElement){
    container.removeChild(oldimg);
    
  }
  container.appendChild(image);
  container.style.backgroundColor="#cfe3ff";
  container.style.opacity=1;
  
  save(event);
  nomodifiche();
}

const boxes = document.querySelectorAll('.choice-grid div ');
for (const box of boxes)
{
  box.addEventListener('click', check);
}


const i_img = 'images/unchecked.png';
function uncheck(event)
{
  const b=event.currentTarget;

  for (const box of boxes){
    if(box.dataset.questionId==b.dataset.questionId){
    const img=document.createElement('img');
    img.src=i_img;
    const oldimg=box.querySelector("img.checkbox");
    img.classList.add("checkbox");
    box.removeChild(oldimg);
    box.appendChild(img);
    box.style.backgroundColor='#f4f4f4';
    box.style.opacity=0.6;
  }

  }
 
}

let v=[];
function save(event)
{
  const e=event.currentTarget;
  
  switch (e.dataset.questionId) {
    case 'one': 
      v[0]=e.dataset.choiceId;
      break;
      case 'two': 
      v[1]=e.dataset.choiceId;
      break;
      case 'three': 
      v[2]=e.dataset.choiceId;
      break;
    default:
      break;
  }

}

function nomodifiche(){ 
  if(v.length>2 && AllChecked()){
    for (const box of boxes)
{
    box.removeEventListener('click', check) ;
  }
  Risultato();
}
 
}

function AllChecked(){
  for(const e of v){
    if(e==undefined){
      return false;
    }
  }
  return true;
}


const button = document.querySelector("button");
button.addEventListener('click', Reset);
const r= document.querySelector(".Risultato");
function Reset(){
  UncheckAll();
  v=[];
  for (const box of boxes)
{
  box.addEventListener('click', check);
}

r.style.display="none";
}
function UncheckAll(){
  for(const e of boxes){
    const img=document.createElement('img');
    img.src=i_img;
    const oldimg=e.querySelector("img.checkbox");
    img.classList.add("checkbox");
    e.removeChild(oldimg);
    e.appendChild(img);
    e.style.backgroundColor='#f4f4f4';
    e.style.opacity=1;
}
}
function Risultato(){
    let p;
   
  for(let i=0; i<v.length; i++){
    for(let j=i+1; j<v.length; j++){
      if(v[i]==v[j]){
        p=v[i];
        
      }
    }
  }
   const par=document.querySelector(".Risultato h2");
   const f=document.querySelector(".Risultato p1");

  if(p==undefined){
   p=v[0];
}
   

  f.innerHTML=RESULTS_MAP[p].title;
  par.innerHTML=RESULTS_MAP[p].contents;
  
  r.style.display="flex";
}
