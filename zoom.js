
let zoom = document.getElementById("zoom")
let zoomImg = document.getElementById("zoomedImg")
function zoomEffect(item){
    console.log("working")
    zoom.style.display = "initial";
    zoomImg.src = `images/${item}.png`
}

let closeZoom = document.getElementById("close-zoom")

closeZoom.addEventListener("click",()=>{

    zoom.style.display = "none";
})


//  for custom cursor
let cursorDot = document.querySelector("[data-cursor-dot]")
  let cursorOutline = document.querySelector("[data-cursor-outline]")

  window.addEventListener("mousemove",(e)=>{

    const posX = e.clientX
    const posY = e.clientY

    cursorDot.style.left = `${posX}px`
    cursorDot.style.top = `${posY}px`


    cursorOutline.style.left = `${posX}px`
    cursorOutline.style.top = `${posY}px`


    
    
  })

  