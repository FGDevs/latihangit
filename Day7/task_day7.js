// convert decimall to hexadecimal & binary
function hexabin(input=0){
    
    var hexnum='0123456789ABCDEF'.split('')
    var output=[]
    var inputawal=input
    do{
        var sisa=inputawal%16
        output.push(hexnumb[sisa])
        inputawal/=16
        inputawal=Math.floor(inputawal)
    }while(inputawal>0)
    for(i=inputawal;inputawal>0;i/=16){

    }
    return output.reverse().join('')
}
console.log(hexabin(7562,true))// decimal to hexa 1D8A