let array = [5,2,12,4,7,23,45,86,35,8]
document.write("Given Array [" + array + "]");
let find_item = false;
function find(val){
    for(let i = 0; i <array.length; i++){
        if(array[i] == val){
            console.warn("True, Number is at index :- " + i)
            find_item = true;
            break;
        }
    }
    if(!find_item){
        console.warn("'" + val + "' is not Present in [" + array + "]")
    }
}
