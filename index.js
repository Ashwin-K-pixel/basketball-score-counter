let scoreLeft = document.getElementById("score-left") 
let scoreRight = document.getElementById("score-right")
 

function lAdd1() { 
    scoreLeft.innerText = parseInt(scoreLeft.innerText) + 1 
}

function lAdd2() { 
    scoreLeft.innerText = parseInt(scoreLeft.innerText) + 2 
}

function lAdd3() { 
    scoreLeft.innerText = parseInt(scoreLeft.innerText) + 3
}

function rAdd1() { 
    scoreRight.innerText = parseInt(scoreRight.innerText) + 1
}

function rAdd2() { 
    scoreRight.innerText = parseInt(scoreRight.innerText) + 2
}

function rAdd3() { 
    scoreRight.innerText = parseInt(scoreRight.innerText) + 3
}

function reset() { 
      scoreLeft.innerHTML = 0
      scoreRight.innerHTML = 0
}