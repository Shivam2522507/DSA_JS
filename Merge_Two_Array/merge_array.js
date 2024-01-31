let data = [2,10,14,15,18,60,80,78];
let data2 = [20,75,110,141,25,150];
let data3 = [];
document.write(`Given Array1 [${data}] <br>`);
document.write(`Given Array2 [${data2}] <br>`);

// function mergeArray() {
//     for(let i = 0 ; i<data.length ; i++){
//         data3[i]=data[i]
//         // you can also use .push() function also here
//     }
//     for(let i = 0 ; i<data2.length ; i++){
//         data3[data.length+i]=data2[i]
//     }
//     alert(`Your new array ${data3}`)
// }

// shortcut way to do that 

function mergeArray() {
    data3 = [...data,...data2]
    alert(`Your new array ${data3}`)
}