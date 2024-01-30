let data = [10,14,15,18,2,60,80]
document.write(`Given Array [${data}] <br>`)
 

// function deleteElement() {
//     let index = document.getElementById('index').value;
//     index = parseInt(index);
//     if (index < 0 || index >= data.length) {
//         console.log("Invalid index");
//         return;
//     }

//     for (let i = index; i < data.length-1; i++) {
//         data[i] = data[i+1];
//     }

//     data.length = data.length - 1; // Remove the last element

//     alert(`Your New Array is ${data}`)
// }


// another way 
function deleteElement() {
    let index = document.getElementById('index').value;
    data.splice(index, 1); // Remove one element at the specified index
    
    alert(`Your New Array is ${data}`)
}
