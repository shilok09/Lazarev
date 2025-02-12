

function locomotiveJs(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    
      // for tablet smooth
      tablet: { smooth: true },
    
      // for mobile
      smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      }
    
      
    });
 
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    ScrollTrigger.refresh();
    
    
}
function letsTalkButton(){
    let talk = document.getElementById("letsTalk");
    let svg = talk.querySelector("svg");
    talk.addEventListener("mouseover", () => {
        gsap.to(talk, {
            backgroundColor:"#111111",
            left:"-100%",
            onComplete: () => {
                gsap.to(svg, {
                    backgroundColor: "#0da34e",
                    duration: 0.3,
                    borderRadius:"50px",
                })
            }
    
        });
    });
    talk.addEventListener("mouseleave", () => {
        gsap.to(talk, {
            backgroundColor:"#0da34e",
            
        });
    });
}
function navAnimation(){
    let nav = document.querySelector("nav");
nav.addEventListener("mouseenter", () => {
    let timeline = gsap.timeline();
    timeline.to("#bottom", {
        bottom: "-162%",
        backgroundColor: "#111111",
        height: "100%",
    });
    timeline.to("#fields h5 span", {
        y:-20,
        opacity:1,
        autoAlpha: 1, // Use autoAlpha to fade in
        stagger:{
            amount:0.5
        },
        duration:0.59
     });
});
nav.addEventListener("mouseleave", () => {
    let timeline = gsap.timeline();
    timeline.to("#fields h5 span", {
        y: 20, 
        autoAlpha: 0,
        stagger: {
            amount:0.2
        },
    });
    timeline.to("#fields h5", {
        autoAlpha: 0, 
        backgroundColor: "#111111",
    }, "<"); 
    timeline.to("#bottom", {
        bottom: "10%",
        backgroundColor: "#111111",
        duration:0.19
    });
});
}
function cursorAnimation(){
    let elems = document.querySelectorAll("#text");
let elemImgs = document.querySelectorAll("#text img");

elems.forEach((elem, idx) => {
    elem.addEventListener("mouseenter", () => {
        gsap.to(elemImgs[idx],{
                opacity:1,
                scale:1 
        })            
        
    });
    
    elem.addEventListener("mouseleave", () => {    
        gsap.to(elemImgs[idx],{
            opacity:0,
            scale:0 
    }) 
    });
    elem.addEventListener("mousemove", (dets) => {    
        gsap.to(elemImgs[idx],{
            x:dets.x-elem.getBoundingClientRect().x-80,
            y:dets.y-elem.getBoundingClientRect().y-150
    }) 
    });
});
}
function pg3VideoAnimation(){
let pg3 = document.querySelector("#pg3center");
let pg3Video = document.querySelector("#page3 video")
pg3.addEventListener("click",()=>{
    pg3Video.play();
    gsap.to(pg3Video,{
        opacity:1,
        transform:"scaleX(1) scaleY(1)",
        borderRadius:0,
    })
})
pg3Video.addEventListener("click",()=>{
    pg3Video.pause();
    gsap.to(pg3Video,{
        opacity:0,
        transform:"scaleX(0.7) scaleY(0)",
        borderRadius:"30px",
    })
})
}
function pg6videos(){
    let elems = document.querySelectorAll("#elem2-2");

elems.forEach((elem)=>{
    elem.addEventListener("mouseenter",()=>{
        elem.childNodes[3].style.opacity=1;
        elem.childNodes[3].play();
    })
    elem.addEventListener("mouseleave",()=>{
        elem.childNodes[3].style.opacity = 0;
        elem.childNodes[3].load();
    })
})
}
function CircleCursorAnimation(val1,val2){
    
let elems = document.querySelectorAll(val1);
let elemImgs = document.querySelectorAll(val2);
elems.forEach((elem, idx) => {
    elem.addEventListener("mouseenter", () => {
        gsap.to(elemImgs[idx],{
                opacity:1,
                scale:1 
        })            
        
    });
    
    elem.addEventListener("mouseleave", () => {    
        gsap.to(elemImgs[idx],{
            opacity:0,
            scale:0 
    }) 
    });
    elem.addEventListener("mousemove", (dets) => {    
        gsap.to(elemImgs[idx],{
            x:dets.x-elem.getBoundingClientRect().x-80,
            y:dets.y-elem.getBoundingClientRect().y-150
    }) 
})
});
}
function postAnimation(val){
    let elems = document.querySelector(val);
    elems.addEventListener("mouseenter",()=>{
        let video =  elems.childNodes[7];
        video.style.opacity=1;
        video.play();
    })
    elems.addEventListener("mouseleave",()=>{
        let video =  elems.childNodes[7];
        video.style.opacity=0;
        video.load();
    })
}
function arrowAnimations(val){
    
    let h1 = document.querySelector(val);
    let icon = h1.querySelector("span i");

    h1.addEventListener("click", () => {
                if (icon.classList.contains("ri-arrow-up-s-line")) {
                    icon.classList.remove("ri-arrow-up-s-line");
                    icon.classList.add("ri-arrow-down-s-line");
                  }
                  else {
                      icon.classList.remove("ri-arrow-down-s-line");
                      icon.classList.add("ri-arrow-up-s-line");
                }
        });
}
function page8Animation(val){
    gsap.from(val+" h4",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:val,
            scroller:"#main",
            // markers:true,
            start:"top 80%",
            end:"top 10%",
            scrub:true, 
    
        }
    })}

locomotiveJs();
letsTalkButton();
navAnimation();
cursorAnimation();
pg3VideoAnimation();
pg6videos();
CircleCursorAnimation("#elem2-2","#cursor-img");
postAnimation("#post1")
postAnimation("#post2")
arrowAnimations("#UiUx")
arrowAnimations("#productDesign");
page8Animation("#pg8-pt2");
page8Animation("#pg8-pt3");
page8Animation("#pg8-pt4");
CircleCursorAnimation("#pg9-btm-left","#letsTalk2");




