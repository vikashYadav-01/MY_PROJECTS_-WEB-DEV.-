let card = document.querySelector('.modal')
let overlay = document.querySelector('.overlay')

let openCard = ()=>{
     card.classList.add('visible')
     overlay.classList.add('overlayactive')
}

const closeCard = () =>{
     card.classList.remove('visible')
     overlay.classList.remove('overlayactive')
}


let follow = document.querySelector('.follow')
let followoverlay = document.querySelector('.followoverlay')

const followopenCard = ()=>{
     follow.classList.add('active')
     followoverlay.classList.add('followoverlyactive')
}
const followCardClose = ()=>{
     follow.classList.remove('active')
     followoverlay.classList.remove('followoverlyactive')
}