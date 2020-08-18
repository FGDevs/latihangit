var angka=0
var y=setInterval(itung,1000)

function itung(){
    angka++
    if(angka>5){
        console.log('udahan')
        clearInterval(y)
    }else{
        console.log(angka)
    }
}


