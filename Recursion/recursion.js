//normal ex. of how recursion work
// function printNum(x){
//     document.write(`Printing Num. Using Recursion ${x} <br>`)
//     if(x<20){
//         printNum(++x) // you can also use x +1
//     }
// }
// let data =0;
// printNum(data);

//find Factorial using recursion
document.write(`Recursion <br>`)
document.write(`Find factorial without using loop <br>`)

function findFactorial(){
    let num = document.getElementById('num').value;
    num = parseInt(num)
    
    function factorial(x){
        if(x==0){
            return 1
        }
        return x*factorial(x-1);
    }
    alert(`${num}! = ${factorial(num)}`)
      
}
