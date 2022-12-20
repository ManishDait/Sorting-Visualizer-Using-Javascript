import { bubbleSort } from "./bubble.js";
import { insertionSort } from "./insertion.js";
import { selectionSort } from "./selection.js";
import { quickSort } from "./quick.js";
import { mergeSort } from "./merge.js";

const timer = ms => new Promise(res=>setTimeout(res,ms));
let sizeSlider = document.getElementById("array-size");
let speedSlider = document.getElementById("sort-speed");
let arrayHolder = document.getElementById("array-holder");
let newArray = document.getElementById("new-array");
let bubble = document.getElementById("bubble");
let selection = document.getElementById("selection");
let insertion = document.getElementById("insertion");
let quick = document.getElementById("quick");
let merge= document.getElementById("merge");
let dropdown = document.getElementById("dropdown");
let visualize = document.getElementById("visualize");
var w = window.innerWidth;
let speed = speedSlider.value;

//console.log("///"+w)

if(w>1130){
    sizeSlider.max=100;
}

if(w<450){
    sizeSlider.max=65;
}

if(w<381){
    sizeSlider.max=45;
}

let array = [];

function createArray(){
    array = [];
    let size;
    let font;
    let root = document.querySelector(':root')
    if(sizeSlider.value <= 14){
        size = "5vw";
        font = "1vw";
    }
    if(sizeSlider.value > 14){
        size = "2vw";
        font = "0.5vw";
    }
    if(sizeSlider.value > 25){
        size = "1vw";
        font = "0vw";
    }
    if(sizeSlider.value > 35){
        size = "0.5vw";
        font = "0vw";
    }

    root.style.setProperty("--width",size)
    root.style.setProperty("--font",font)

    var child = arrayHolder.lastElementChild;
    while(child){
        arrayHolder.removeChild(child);
        child = arrayHolder.lastElementChild;
    }
    let arraySize = sizeSlider.value;
    //console.log(arraySize)
    //console.log(font + " " +size)

    for(let i=0; i<arraySize; i++){
        let length = Math.floor((Math.random()*450)+25);
        let bar = document.createElement("div");
        bar.innerHTML=length;
        bar.id = i
        bar.className = "array";
        array.push(length);
        bar.style.height = length+"px";
        document.getElementById("array-holder").appendChild(bar);
    }
}


sizeSlider.onchange = function(){
    let size;
    let font;
    createArray();
    let root = document.querySelector(':root')
    if(sizeSlider.value <= 14){
        size = "5vw";
        font = "1vw";
    }
    if(sizeSlider.value > 14){
        size = "2vw";
        font = "0.5vw";
    }
    if(sizeSlider.value > 25){
        size = "1vw";
        font = "0vw";
    }
    if(sizeSlider.value > 35){
        size = "0.5vw";
        font = "0vw";
    }

    root.style.setProperty("--width",size)
    root.style.setProperty("--font",font)
}

newArray.onclick = function(){
    createArray();
}

bubble.onclick = function(){
    visualizeBubble();
}

selection.onclick = function(){
    visualizeSelection();
}

insertion.onclick = function(){
    console.log("call")
    visualizeInsertion();
}

quick.onclick = function(){
    visualizeQuick();
}

merge.onclick = function(){
    visualizeMerge();
}


visualize.onclick = function(){
    visualizeMin();
}

function visualizeBubble(){
    bubbleSort(array);
}

function visualizeSelection(){
    selectionSort(array);
}

function visualizeInsertion(){
    insertionSort(array);
}

function visualizeQuick(){
    quickSort(array, 0, array.length-1)
}

function visualizeMerge(){
    mergeSort(array,0,array.length-1)
}

function visualizeMin(){
    let val = dropdown.value;
    switch(val){
        case "bubble":
            visualizeBubble();
            break;
        case "selection":
            visualizeSelection();
            break;
        case "insertion":
            visualizeInsertion();
            break;
        case "quick":
            visualizeQuick();
            break;
        case "merge":
            visualizeMerge();
            break;
        default:
            console.log("invalid");
            break;
    }
}

function disable(){
    newArray.disabled = true;
    sizeSlider.disabled = true;
    bubble.disabled = true;
    selection.disabled = true;
    insertion.disabled = true;
    quick.disabled = true;
    merge.disabled = true;
    dropdown.disabled = true;
    visualize.disabled = true;
}

function enable(){
    newArray.disabled = false;
    sizeSlider.disabled = false;
    bubble.disabled = false;
    selection.disabled = false;
    insertion.disabled = false;
    quick.disabled = false;
    merge.disabled = false;
    dropdown.disabled = false;
    visualize.disabled = false;
}


speedSlider.onchange = function(){
    speed = speedSlider.value;
}

async function wait(i){
    await timer(speed*i);
}

createArray();

export{disable, enable, wait};





