let row = 5;
let column = 5;

let currtile;
let othertile;

let turn = 0;



window.onload = function(){
    for(let r=0;r<row;r++){
        for(let c=0;c<column;c++){
            let tile = document.createElement("img");
            tile.src = "blank.jpg";

            tile.addEventListener("dragstart",dragStart);
            tile.addEventListener("dragover", dragOver); 
            tile.addEventListener("dragenter",dragEnter);
            tile.addEventListener("dragleave",dragLeave);
            tile.addEventListener("drop",dragDrop);
            tile.addEventListener("dragend",dragEnd);

            document.getElementById("board").append(tile);
        }
    }
    let pices = [];
    for(let i=1;i<=row*column;i++){
        pices.push(i.toString());
    }

    pices.reverse();
    for(let i=0;i<row*column;i++){
        let j = Math.floor(Math.random()*pices.length);

        let temp = pices[i];
        pices[i] = pices[j];
        pices[j] = temp;
    }

    for(let i=0;i<pices.length;i++){
        let tile = document.createElement("img");
        tile.src = pices[i] + ".jpg";

        tile.addEventListener("dragstart",dragStart);
        tile.addEventListener("dragover", dragOver); 
        tile.addEventListener("dragenter",dragEnter);
        tile.addEventListener("dragleave",dragLeave);
        tile.addEventListener("drop",dragDrop);
        tile.addEventListener("dragend",dragEnd);

        document.getElementById("pices").append(tile);
    }

}

function dragStart(){
    currtile = this;
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
}

function dragLeave(){

}

function dragDrop(){
    othertile = this;
}

function dragEnd(){
    if (currtile.src.includes("blank")) {
        return;
    }

    let currimg = currtile.src;
    let otherimg = othertile.src;
    currtile.src = otherimg;
    othertile.src = currimg;

    turn += 1;
    document.getElementById("turns").innerText = turn;
}