let data = [2,10,14,15,18,60,80,90];
let data2 = [20,75,110,141,150];
let data3 = [];
let d1=0;
let d2=0;
let d3=0;
document.write(`Given Array1 [${data}] <br>`);
document.write(`Given Array2 [${data2}] <br>`);

// use this only if we have sorted array 
//best solution when we have 2 sorted array
function mergeArray() {
   while(d1<data.length && d2<data2.length){
    if(data[d1]<data2[d2]){
        data3[d3]=data[d1];
        d1++;
    }else{
        data3[d3]=data2[d2];
        d2++;
    }
    d3++;
   }
   while(d1<data.length){
    data3[d3]=data[d1];
    d1++;
    d3++;
   }
   while(d2<data2.length){
    data3[d3]=data2[d2];
    d2++;
    d3++;
   }
   alert(`Your new array ${data3}`)
}