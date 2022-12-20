import { disable, enable, wait } from "./sort.js";

async function bubbleSort(array){
    disable();
    for(let i=0 ;i<array.length-1; i++){
        for(let j=0; j<array.length-1-i; j++){

            document.getElementById(j).style.backgroundColor="#0099ff"
            document.getElementById(j+1).style.backgroundColor="#0099ff"
            await wait(10)
            if(parseInt(document.getElementById(j).style.height) > parseInt(document.getElementById(j+1).style.height)){
                let temp = document.getElementById(j).style.height
                console.log(temp)
                document.getElementById(j).style.height = document.getElementById(j+1).style.height;
                document.getElementById(j).innerHTML = parseInt(document.getElementById(j+1).style.height);
                document.getElementById(j+1).style.height = temp;
                document.getElementById(j+1).innerHTML = parseInt(temp);
                await wait(10);
            }
            document.getElementById(j).style.backgroundColor="#ff339962"
            document.getElementById(j+1).style.backgroundColor="#ff339962"
        }
        document.getElementById(array.length-1-i).style.backgroundColor="#00cc00"
    }
    document.getElementById("0").style.backgroundColor="#00cc00"
    enable();
}

export{bubbleSort};