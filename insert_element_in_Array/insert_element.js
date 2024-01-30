let data = [10,14,15,18,2,60]
document.write(`Given Array [${data}] <br>`)


// simple way to do that 
// function insertElement(){
//     let new_num = document.getElementById('new_num').value;
//     let index = document.getElementById('index').value;

//     if(index < data.length && index>= 0){
//         for(let i = data.length-1 ; i >= 0 ; i--){
//             if(i>=index){
//                 data[i+1] = data[i];
//                 if(i == index){
//                     data[i] = new_num;
//                 }
//             }
//         }
//         alert(`Your New Array is ${data}`)
//     }else{
//         alert(`Please enter valid input`)
//     }

// }


// easy way to do that
function insertElement(){
    let new_num = document.getElementById('new_num').value;
    let index = document.getElementById('index').value;

    // use splice js funcuntion to do the same things
    // in splice we give 3 things 1st 'index' , 2nd 'number of items to remove' and 3rd 'New Value' 
    data.splice(index,0,new_num);
    alert(`Your New Array is ${data}`)

}


