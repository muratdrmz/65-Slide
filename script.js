const slides=document.querySelectorAll('.slide');
const nextBtn=document.querySelector('.nextBtn');
const prevBtn=document.querySelector('.prevBtn');


slides.forEach((slide,index)=>{
 
 slide.style.left=`${index*100}%`
 console.log(slide, index, slides.length);
});

let counter=0;

nextBtn.addEventListener('click',()=>{
 counter++;
 console.log(counter);
 carousel();
})

prevBtn.addEventListener('click',()=>{
 counter--;
 console.log(counter);
 carousel();
})

function carousel(){

 // ya birinci slide ile oyna yada ikinci bir arada olmuyor

 // 1=working wit slides
 if(counter===slides.length){
  counter=0;
 }else if(counter<0){
  counter=slides.length-1
 }
 slides.forEach((slide)=>{
  slide.style.transform=`translateX(-${counter*100}%)`
 })

 // 2=buttons
 if(counter<slides.length-1){
  nextBtn.style.display='block'
 }else{
  nextBtn.style.display='none'
 }

 if(counter>0){
  prevBtn.style.display='block'
 }else{
  prevBtn.style.display='none'
 }
}
prevBtn.style.display='none'

