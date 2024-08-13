let tabLinks = document.getElementsByClassName("tab-links")
let tabContent = document.getElementsByClassName("tab-content")
let nav = document.getElementById("nav");
let btn  = document.querySelectorAll("button");
let hr = document.querySelectorAll("hr")

function changeDisplay(name){

    let changeTag = document.getElementById(name);

    for(x of tabLinks){

        x.classList.remove("active");
        event.currentTarget.classList.add('active')
        
    }
    for(x of tabContent){

        x.classList.remove("active-content");
        x.classList.add("passive-content");

    }
    changeTag.classList.remove("passive-content")
    changeTag.classList.add("active-content")
    nav.style.display = "none"
    // have facing a bug while in zIndex
    
    for(x of btn){

        x.style.zIndex = "0"
    }
    for(x of hr){
        x.style.visibility = "visible"
    }   


    
}

let bars = document.getElementById("bar");
let closeNav = document.getElementById("close");

bars.addEventListener("click", ()=>{
    
    nav.style.animation = "slideEffect 1s ease"
    nav.style.display = "flex"

    for(x of hr){
        x.style.visibility = "hidden"
    }   
    for(x of btn){

        x.style.zIndex = "-4"
    }
})
console.log(closeNav)
closeNav.addEventListener("click",()=>{
    for(x of hr){
        x.style.visibility = "visible"
    }   
    for(x of btn){

        x.style.zIndex = "0"
    }
    nav.style.display = "none"
    
})


function lToFAnimation(item){

    console.log("ltoF")
    item.classList.add("animation")
    setTimeout(()=>{
        item.classList.remove("animation")
    },2000)
    
}