let data = [10,14,15,18,2,60,80,90,101];
document.write(`Given Array1 [${data}] <br>`);
let temp;

function reverseArray() {
   function customReverse(data,start,end){
    // if you want to see how its happend then uncomment this console and see result in console 
    // console.warn(data)
    if(start <= end ){
        temp = data[start];
        data[start] = data[end];
        data[end] = temp;
        customReverse(data,start+1,end-1)
    }
}

customReverse(data,0,data.length-1)
alert(`Your Reversed array ${data}`)

}
