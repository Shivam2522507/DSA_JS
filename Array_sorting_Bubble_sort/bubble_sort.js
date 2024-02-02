let data = [101,1,45,18,2,80,60];
document.write(`Given Array [${data}] <br>`);


function sortArray() {
    for(i = 0; i<data.length ; i++){
        for(j=0; j<data.length; j++){
            if(data[j]>data[j+1]){
                let temp = data[j];
                data[j] = data[j+1];
                data[j+1] = temp;
            }
        }
    }
    alert(`Your sorted array ${data}`)
}
