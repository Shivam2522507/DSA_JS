let queue=[];
let currentSize = queue.length;
let maxSize=5;

function enqueue(newVal){
    if(currentSize >= maxSize){
        alert("queue is already full")
    }else{
        queue[currentSize]=newVal;
        currentSize++
    }
}
function display(){

    console.warn(queue);
}
function dequeue(){
    if(!isEmpty()){
        for(let i = 0; i < queue.length; i++){
            queue[i]= queue[i+1]
    
        }
        currentSize--;
        queue.length = currentSize;
    }else{
        alert("Queue is Empty")
    }
}
function front(){
    if(!isEmpty()){
        console.warn(queue[0]);
    }else{
        alert("Queue is Empty")
    }
}
function rear(){
    if(!isEmpty()){
        console.warn(queue[currentSize-1]);
    }else{
        alert("Queue is Empty")
    }
}
function isEmpty(){
    if(currentSize <= 0){
        return true;
    }else{
        return false
    }
}
// enqueue(10);
// display()