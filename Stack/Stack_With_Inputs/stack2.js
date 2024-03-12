let data = [];
let currentSize = data.length;
let max = 5;
function push(){
    let newVal = document.getElementById('newEl').value
    if(currentSize >= max){
        alert("Stack is full You can not add" +newVal)
    }else if(newVal===''){
        alert("Please enter Element")
    } else{
        data[currentSize]= newVal;
        currentSize++;
        document.getElementById('newEl').value="";
        alert("Element Added");
    }
    
}
function pop(){
    if(currentSize > 0){
        currentSize--
        data.length=currentSize;
    }else{
        alert("Stack is already empty")
    }
}

function display(){
   if(currentSize>0){
       alert(data)
}else{

    alert("Stack is empty")
}
}