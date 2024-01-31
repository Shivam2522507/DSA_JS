let data = [10,14,15,18,2,60,80];
let data2 = [110,141,115,1,70,90];
let data3 = [];
document.write(`Given Array1 [${data}] <br>`);
document.write(`Given Array2 [${data2}] <br>`);

// this is not good for longer value because of more time Complexity
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