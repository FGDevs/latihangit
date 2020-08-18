// Kekuatan Password

const kekuatan=(input)=>{
    var huruf='abcdefghijklmnopqrstuvwxyz'.split('')
    var output=0
    var hurufBesar=false
    var hurufKecil=false
    var angka=false
    for(let i=0;i<input.length;i++){
        for (let j = 0; j < huruf.length; j++){
            const element = huruf[j]
            if(input[i]===element && !hurufKecil){
                output++
                hurufKecil=true
            }else if(input[i]===element.toUpperCase() && !hurufBesar){
                output++
                hurufBesar=true
            }
        }
        if(Number(input[i]) && !angka){
            output++
            angka=true
        }
    }
    return output === 3? 'Kuat' : output === 2? 'Sedang' : 'Lemah'
}

console.log(kekuatan('Ab1a0'))
console.log(kekuatan('AbaA'))