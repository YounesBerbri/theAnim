const vidanim=document.querySelector('.vidanim')
const video=vidanim.querySelector('video')
const txt=vidanim.querySelector('h1')


const section=document.querySelector('section')
const end =section.querySelector('h1')



const controller=new ScrollMagic.Controller();


//scene

let scene= new ScrollMagic.Scene({
    duration: 9000,
    triggerElemnt:vidanim,
    triggerhook:0
}).addIndicators().setPin(vidanim).addTo(controller);



 /* let scene2 =new ScrollMagic.Scene({
    duration:3000,
    triggerElemnt:vidanim,
    triggerhook:0
}).setTween(txtAnim).addTo(controller);*/ // when i add this the whole thing gets bugged


//trying txt anime 2



/* const txtAnim = TweenMax.fromTo(txt,3,{opacity:1},{opacity:0}); */  // enable this for txt anime but its auto not on scroll


//animation

let FrameCatchUp=0.1;
let scrollposition=0;
let delay=0;

scene.on('update', e =>{
    scrollposition=e.scrollPos/1000;
});

setInterval(()=>{
    delay += (scrollposition-delay)*FrameCatchUp;
    video.currentTime=delay;
},33.3);
