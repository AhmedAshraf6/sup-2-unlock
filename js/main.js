// Function To Scroll Any Section 
let allLinks = document.querySelectorAll('.links li a'),
    ScrollDown =document.querySelector('.landing-page .container-social .scroll-down');

function scrollSmooth(elements,element){
    
    elements.forEach(ele=>{
        
        ele.addEventListener('click',(e)=>{
            
           if(e.target.className=="special-l"){
               e.preventDefault();
               document.querySelector(e.target.dataset.section).scrollIntoView({

                  behavior:'smooth'
               });   
           }  
        });
    });
    element.addEventListener('click',(b)=>{
        
       b.preventDefault();
       document.querySelector(b.target.dataset.section).scrollIntoView({
               
              behavior:'smooth'
      });  
        
    });
}
scrollSmooth(allLinks,ScrollDown);

/* change img with text 
let changP = document.querySelector('.reviews .info-about-ser .special-reviews'),
    changImg = document.querySelector('.reviews .info-about-ser img'),
    changHead = document.querySelector('.reviews .info-about-ser h4'),
    smallSpan = document.querySelector('.reviews .info-about-ser .circ .smallSpan'),
    bigSpan = document.querySelector('.reviews .info-about-ser .circ .bigSpan');


smallSpan.onclick = function(){
    
    changP.textContent="s simple interface has made my life way easierand now i can generate links that help me grow with a click of button.";
    changImg.src='user-03.jpg';
    changHead.textContent='Elia';  
}
*/