document.addEventListener('mousemove', event =>{
    Object.assign(document.documentElement,{
        // --move-x: ${(event.clientX - window.innerWidth / 2) * -.05}deg;
        // --move-y: ${(event.clientY - window.innerHeight / 2) * -.1}deg;
        style: `
        --move-x: ${(event.clientX - window.innerWidth / 2) * -.005}deg;
        --move-y: ${(event.clientY - window.innerHeight / 2) * -.01}deg;
        `
    })
})




let text = document.querySelector('span');
let textSrting = text.textContent;
let split = textSrting.split("")

text.textContent = "";
for(let i=0; i<split.length; i++){
    text.innerHTML += "<span>"+split[i]+"</span>";
}

let tl = gsap.timeline();
tl.from("span", {
    y: -400,
    opacity: 0,
    scrollTrigger :{
        pin: true,
        scrub: 2,
        trigger: "section",
    }, 
    stagger: {
        amount: 2
    }
})

