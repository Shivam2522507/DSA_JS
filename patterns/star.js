function pattern1(){
    document.write("pattern 1 <br/>")
    let n = 5;
    for(let i = 1; i<=n; i++ ){
        for(let j = 1 ; j <= i; j++){
            document.write("*")
        }
        document.write("<br/>")
    }
}
pattern1()
function pattern2(){
    document.write("pattern 2 <br/>")
    let n = 5;
    for(let i = 1; i<=n; i++ ){
        for(let k=1; k <= n-i; k++){
            document.write("&nbsp;&nbsp;") //we use 2 &nbsp in place of 1&nbsp because the nbsp size is half of star size 
        }
        for(let j = 1 ; j <= i; j++){
            document.write("*")
        }
        document.write("<br/>")
    }
}
pattern2()
function pattern3(){
    document.write("Pattern 3 <br/>")
    let n = 5;
    // for(let i = 1; i <= n ; i++){
    //     for(let j = 1; j <= n-i; j++){
    //         document.write("&nbsp;&nbsp;")
    //     }
    //     for(let j = 1; j <= i; j++){
    //         document.write("*")
    //     }
    //     for(let j =2; j <= i; j++){
    //         document.write("*")
    //     }
    //     document.write("<br/>")
    // }

    // another way to make this 
    let m=1;
    for(let i = 1; i <= n ; i++){
        for(let j = 1; j <= n-i; j++){
            document.write("&nbsp;&nbsp;")
        }
        for(let j = 1; j <= m; j++){
            document.write("*")
        }
        document.write("<br/>")
        m += 2
    }

}
pattern3()
function pattern4(){
    document.write("Pattern 4 <br/>")
    let n = 5;
    for(let i = n; i >=1 ; i--){
        for(let j = 1; j <= n-i; j++){
            document.write("&nbsp;&nbsp;")
        }
        for(let j = 1; j <= i; j++){
            document.write("*")
        }
        for(let j =2; j <= i; j++){
            document.write("*")
        }
        document.write("<br/>")
    }

}
pattern4()