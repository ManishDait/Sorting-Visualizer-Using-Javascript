import { disable, enable, wait } from "./sort.js";

async function conqure(array, si, mid, ei){
    const n1 = mid - si + 1;
    const n2 = ei - mid;
    let left = new Array(n1);
    let right = new Array(n2);

    for(let i = 0; i < n1; i++){
        await wait(2);
        left[i] = document.getElementById(si+ i).style.backgroundColor="orange"
        left[i] = document.getElementById(si+ i).style.height;
    }
    for(let i = 0; i < n2; i++){
        await wait(2);
        document.getElementById(mid + 1 + i).style.backgroundColor="#ccccff"
        right[i] = document.getElementById(mid + 1 + i).style.height;
    }
    await wait(2);
    let i = 0, j = 0, k = si;
    while(i < n1 && j < n2){
        await wait(2);
        
        if(parseInt(left[i]) <= parseInt(right[j])){
            if((n1 + n2) === array.length){
                document.getElementById(k).style.background="#00cc00";
            }
            else{
                document.getElementById(k).style.background="lightgreen";
            }
            
            document.getElementById(k).style.height = left[i];
            document.getElementById(k).innerHTML = parseInt(left[i]);
            i++;
            k++;
        }
        else{
            if((n1 + n2) === array.length){
                document.getElementById(k).style.background="#00cc00";
            }
            else{
                document.getElementById(k).style.background="lightgreen";
            } 
            document.getElementById(k).style.height = right[j];
            document.getElementById(k).innerHTML = parseInt(right[j]);
            j++;
            k++;
        }
    }
    while(i < n1){
        await wait(2);
        if((n1 + n2) === array.length){
            document.getElementById(k).style.background="#00cc00";
        }
        else{
            document.getElementById(k).style.background="lightgreen";
        }
        document.getElementById(k).style.height = left[i];
        document.getElementById(k).innerHTML = parseInt(left[i]);
        i++;
        k++;
    }
    while(j < n2){
        await wait(2);
        if((n1 + n2) === array.length){
            document.getElementById(k).style.background="#00cc00";
        }
        else{
            document.getElementById(k).style.background="lightgreen";
        }
        document.getElementById(k).style.height = right[j];
        document.getElementById(k).innerHTML = parseInt(right[j]);
        j++;
        k++;
    }
}

async function divide(array, si, ei){
    
    if(si >= ei){
        return;
    }
    const mid = si+ Math.floor((ei - si) / 2);
    await divide(array, si, mid);
    await divide(array, mid + 1, ei);
    await conqure(array, si, mid, ei);
    enable()
    
}

async function mergeSort(array, si, ei){
    disable()
    await divide(array, si, ei);
    enable()
}

export{mergeSort}