function test(x){
    // this is our Head recursion
    // when we do any operation above the recursion function that type of recursion is called head recursion
    console.warn(x)
    // if we use console above the this function it give no in descending order 
    if(x>0){
        test(x-1)
    }
    // console.warn(x)
    // if we use console here means below the recursion function then it called tail recursion and it give output in Ascending Order 
}
let data = 5;
test(data);