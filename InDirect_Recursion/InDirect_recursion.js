
function buy(){
    let money = parseInt(document.getElementById('money').value);
    let totalApple = 0;
    let PriseOfApple = 10;

    function buyApple(x){
        if(x>PriseOfApple){
            console.warn("I have", x ,"Rs" ,"And Total Apple i have =", totalApple )
            buyMore(x);
        }else{
            console.warn(`You don't have more money, Total Money left ${x} & Total Apple = ${totalApple}`)
        }
    }
    
    function buyMore(x){
        x = x - PriseOfApple;
        totalApple++;
        buyApple(x);
    }
    
    buyApple(money);
}
