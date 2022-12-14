import { disable, enable, wait} from "./sort.js";

async function selectionSort(array){
    disable();
    for(let i=0; i<array.length-1; i++){
        
        let smallest = i;
        for(let j=i+1; j<array.length; j++){
            document.getElementById(i).style.backgroundColor="#0099ff"
            document.getElementById(j).style.backgroundColor="#0099ffb4"
            await wait(2);
            if(parseInt(document.getElementById(smallest).style.height)>parseInt(document.getElementById(j).style.height)){
                document.getElementById(smallest).style.backgroundColor="#ff339962"
                smallest = j;
            }

            document.getElementById(i).style.backgroundColor="#ff339962"
            document.getElementById(smallest).style.backgroundColor="#ff6600"
            document.getElementById(j).style.backgroundColor="#ff339962"
        }
        let temp = document.getElementById(smallest).style.height;
        document.getElementById(smallest).style.height = document.getElementById(i).style.height;
        
        document.getElementById(i).style.height = temp;

        document.getElementById(smallest).style.backgroundColor="#ff339962"
        document.getElementById(i).style.backgroundColor="#00cc00"
        await wait(12)
       

    }

    document.getElementById(array.length-1).style.backgroundColor="#00cc00";

    enable();
}

export{selectionSort};