let data = [10,14,15,18,2,60,80];
document.write(`Given Array [${data}] <br>`);
 

function searchElement() {
    let num = document.getElementById('num').value;
    num = parseInt(num);
    let numberFound = false;
   for(let i = 0 ; i < data.length; i++){
        if(data[i]===num){
            alert(`Your No. ${num} is at index ${i}`);
            numberFound = true;
            break;
        }
   }
   if(!numberFound){
    alert(`Your No Do not exist in the array`)
   }
}

// another way using By default function
// function searchElement() {
//     let num = document.getElementById('num').value;
//     num = parseInt(num);
//    alert(`Your No. ${num} is at index ${data.indexOf(num)}`)
// }

