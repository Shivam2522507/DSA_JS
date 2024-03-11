class Stack{
    item=[];
    currentSize;
    maxSize;
    constructor(size){
        this.maxSize = size
        this.currentSize = this.item.length
        
    }
    push(newVal){
        if(this.currentSize >= this.maxSize){
            alert("Stack is full")
        }else{
            this.item[this.currentSize] = newVal;
            this.currentSize++
        }
    }
    pop(){
        if(this.currentSize > 0){
            this.currentSize--;
            this.item.length = this.currentSize;
        }else{
            alert("Stack is already Empty")
        }
    }
    display(){
        console.warn(this.item)
    }
}
st1 = new Stack(5);
// st1.push(20)
// st1.push(30)
// st1.display()
// st1.pop()
// st1.display()