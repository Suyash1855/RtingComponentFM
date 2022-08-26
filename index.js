// // document.getElementById("subBtn").onclick= function clicked(){

    
// // }
   
// let rating = 1;
// document.addEventListener('click',function(e){
//     let target = e.target;
    
//     if(target.classList.contains('rate')){
//         rating = target.id;
//         let ratings = target.parentElement.children 
//         for(i=0;i<ratings.length;i++){
//             ratings[i].classList.remove('selected');
//         }
//         target.classList.add('selected')
//     }
// });

// document.getElementById('.subBtn').addEventListener('click', function(){
//     document.querySelector('.rating-result').innerHTML = `You selected ${rating} out of 5`; 
//     document.querySelector('.container').style.display='none';
//     document.querySelector('.inner').style.display='flex';
// });

const mainContainer= document.querySelector(".container");
const thankU= document.querySelector(".back");
const submit=document.getElementById("subBtn");
const rateBtn=document.getElementById("rate-btn");
const rateSpan=document.getElementById("rating");
const rates=document.querySelectorAll(".btn");

submit.addEventListener('click', ()=>{
    thankU.classList.remove("hidden");
    mainContainer.classList.add("hidden");
})

rateBtn.addEventListener('click', ()=>{
    thankU.classList.add("hidden");
    mainContainer.classList.remove("hidden");
})

rates.forEach((rate)=>{
    rate.addEventListener("click", ()=>{
       rateSpan.innerHTML=rate.innerHTML
    })
})