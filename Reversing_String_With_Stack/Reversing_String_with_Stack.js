let data = [];
let currentSize = data.length;
function push(newVal){
    data[currentSize]= newVal;
    currentSize++;
}
function pop(){
    lastRemovedItem = data[currentSize-1];
    currentSize--;
    data.length=currentSize;
    return lastRemovedItem;
}
function reverseStr(item){
    for(let i = 0; i < item.length; i++){
        push(item[i]);
    }
    for(let i = 0; i < item.length; i++){
        item[i] = pop();
    }
}
let str = "hello";
console.warn("given str "+str)
str= str.split("")
reverseStr(str)
console.warn(str)
// now convert this array into string 
console.warn(str.join(""));
