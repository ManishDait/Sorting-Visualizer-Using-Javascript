import {wait,disable,enable} from "./sort.js"


 async function partition(array, low, high){
    let pivot = parseInt(document.getElementById(high).style.height)
    let i = low-1;
    document.getElementById(high).style.backgroundColor = "red"
    await wait(5)
   

    for(var j=low; j<high; j++){
        document.getElementById(j).style.backgroundColor="#f39c12"
        await wait(5)
        if(parseInt(document.getElementById(j).style.height) < pivot){
            i++;
            let temp = document.getElementById(i).style.height;
            
            document.getElementById(i).style.height = document.getElementById(j).style.height
            document.getElementById(i).innerHTML = parseInt(document.getElementById(j).style.height);
            document.getElementById(j).style.height = temp;
            document.getElementById(j).innerHTML = parseInt(temp);
            document.getElementById(i).style.backgroundColor="orange";

            if(j!=i){
                document.getElementById(j).backgroundColor="orange"
            }
            await wait(5);
        }
            document.getElementById(j).style.backgroundColor="#ccccff";
    }
    i++;
    let temp = document.getElementById(i).style.height;
    document.getElementById(i).style.height = pivot+"px";
    document.getElementById(i).innerHTML = pivot;
    document.getElementById(j).style.height = temp;
    document.getElementById(j).innerHTML = parseInt(temp);
    document.getElementById(high).style.backgroundColor="#ccccff";
    document.getElementById(i).style.backgroundColor="#00cc00";
    
    await wait(5)

    for(var k=0; k<array.length; k++){
        console.log(document.getElementById(k).style.backgroundColor);
        if(document.getElementById(k).style.backgroundColor != "rgb(0, 204, 0)"){
            document.getElementById(k).style.backgroundColor = "#ff339962";
        }
    }

    return i;

}


async function quickSort(array, low, high){

    disable()

    
   if(low<high){

    await wait(5)

    let pindx =  await partition(array,low,high);
     await quickSort(array, low, pindx-1);
    await quickSort(array, pindx+1, high);
   }

   else{
    if(low>=0 && high>=0 && low < array.length && high < array.length){
        document.getElementById(low).style.backgroundColor = "#00cc00";
        document.getElementById(high).style.backgroundColor = "#00cc00";
    }
    enable()
   }
   
}

export{quickSort};