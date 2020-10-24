let cube = [
    "xxxWWWxxxxxx",
    "xxxWWWxxxxxx",
    "xxxWWWxxxxxx",
    "OOOGGGRRRBBB",
    "OOOGGGRRRBBB",
    "OOOGGGRRRBBB",
    "xxxYYYxxxxxx",
    "xxxYYYxxxxxx",
    "xxxYYYxxxxxx",
];

displayCube();

function displayCube(){
    for(let i=0;i<=9;i++){
        for(let rubikCell=0;rubikCell<=11;rubikCell++){
            if(cube[i][rubikCell] === "x"){
                document.getElementById("cube").innerHTML += `<div class="empty" id="space${i}${rubikCell}${i}"></div>`
            } else if(cube[i][rubikCell] === "W"){
                document.getElementById("cube").innerHTML += `<div class="white" id="space${i}${rubikCell}${i}"></div>`
            } else if(cube[i][rubikCell] === "O"){
                document.getElementById("cube").innerHTML += `<div class="orange" id="space${i}${rubikCell}${i}"></div>`
            } else if(cube[i][rubikCell] === "G"){
                document.getElementById("cube").innerHTML += `<div class="green" id="space${i}${rubikCell}${i}"></div>`
            } else if(cube[i][rubikCell] === "R"){
                document.getElementById("cube").innerHTML += `<div class="red" id="space${i}${rubikCell}${i}"></div>`
            } else if(cube[i][rubikCell] === "Y"){
                document.getElementById("cube").innerHTML += `<div class="yellow" id="space${i}${rubikCell}${i}"></div>`
            } else if(cube[i][rubikCell] === "B"){
                document.getElementById("cube").innerHTML += `<div class="blue" id="space${i}${rubikCell}${i}"></div>`
            }
        }
    }
}