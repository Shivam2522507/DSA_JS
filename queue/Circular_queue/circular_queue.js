class Queue {
    constructor(size){
        this.max = size;
        this.items = new Array(size);
        this.currentSize = 0;
        this.rear = -1;
        this.front = -1;
    }
    enqueue(val){
        if(this.currentSize!=this.max){
            if(this.rear == this.max-1){
                this.rear = 0;
            }else{
                this.rear++;
            }
            this.items[this.rear]=val;
            this.currentSize++;
            if((this.front == -1)){
                this.front = this.rear;
            }
        }
    }
    dequeue(){
        if(this.currentSize != 0){
            this.items[this.front] = null;
            if(this.rear = this.max-1){
                this.front = 0;
            }else{
                this.front++;
            }
            this.currentSize--;
        }else{
            this.front = -1;
            this.rear = -1;
            alert("Queue is empty")
        }

    }
}

function display(){
    console.warn(queue);
}
let queue = new Queue(5)