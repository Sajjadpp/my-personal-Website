
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
