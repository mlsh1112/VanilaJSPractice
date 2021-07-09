const images = ["0.jepg","1.jpeg"]

const chosenImage = images[Math.floor(Math.random()*images.length)]

const bgimg=document.createElement("Img")

bgimg.src='img/'+chosenImage

document.body.appendChild(bgimg)