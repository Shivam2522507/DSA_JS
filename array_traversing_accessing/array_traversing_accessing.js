// code for traversing array 
let data = [9,45,2,8,45,23,7,78,0,11,41,77];
// for(let i = 0; i < data.length; i++){
//     document.write(`Array ${i} is ${data[i]} <br>`)
// }



// code for accessing data 
document.write(`Given Array  ${data}`);
function getElement(){
    let element = document.getElementById('element').value
    if(element < data.length && element >= 0){

        alert(`Your Element is ${data[element]}`)
    }
    else{
        alert(`please enter valid input`)
    }
}