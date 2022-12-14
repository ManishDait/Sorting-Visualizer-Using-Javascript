import { disable, enable, wait } from "./sort.js";

async function insertionSort(array){
   
    disable()
    for(var i=1; i<array.length; i++){
        let current = parseInt(document.getElementById(i).style.height)
        var j = i-1;
        document.getElementById(j).style.backgroundColor="#00cc00";
        document.getElementById(i).style.backgroundColor="#0099ff";
        await wait(2);
        while(j>=0 && current<parseInt(document.getElementById(j).style.height)){
            
            document.getElementById(i).style.backgroundColor="#00cc00";
            document.getElementById(j+1).style.height = document.getElementById(j).style.height;
            document.getElementById(j+1).style.backgroundColor="#0099ff"
            
            await wait(4)

            document.getElementById(j+1).style.backgroundColor="#00cc00"
            j--;
            document.getElementById(j+1).style.backgroundColor="#0099ff"
            await wait(4)
        }
        document.getElementById(j+1).style.backgroundColor="#00cc00"
    
        document.getElementById(j+1).style.height = current+"px";
    }

   document.getElementById(array.length-1).style.backgroundColor="#00cc00"
    enable();
}

export{insertionSort};