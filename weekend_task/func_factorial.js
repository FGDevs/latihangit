const Faktorial=(num)=>{
    var output=num
    for(let i=num;i>1;i-1){
        output*=i    
    }
    return output
}

console.log(Faktorial(5))
console.log(Faktorial(4))
console.log(Faktorial(10))