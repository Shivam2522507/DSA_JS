let data = [];
let currentSize = data.length;
let max = 5;
function push(newVal){
    if(currentSize >= max){
        alert("Stack is full You can not add" +newVal)
    }
    data[currentSize]= newVal;
    currentSize++;
}
function pop(){
    if(currentSize > 0){
        currentSize--
        data.length=currentSize;
    }else{
        alert("Stack is already empty")
    }
}
// you can change the push and pop value to see result 
push(20)
push(14)
push(10)
push(19)
pop()
push(20)
pop()
console.warn(data)