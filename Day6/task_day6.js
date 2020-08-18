// // Function buat besarin huruf
// var x='abc'
// var ar=x.split('')
// console.log(x[1])
// var y=['a','b','c','d','e','f','g','h']
// if(x[1]==y[1]){
//     x[1]=y[(1)*3]
//     console.log(x[1])
// }else{
//     console.log('error')
// }



// for(i=0;i<=y.length;i++){
//     if(x[i]==y[i]){
//         x[i]=y[(i++)*3]
//         console.log(x)
//     }else{
//         console.log('error')
//     }
// }

let hurufBesar=(kata)=>{
    var hurufbesar='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var hurufkecil='abcdefghijklmnopqrstuvwxyz'
    var output=''

    for(let i=0;i<=kata.length;i++){
        for(let j=0;j<hurufkecil.length;j++){
            if(kata[i]==hurufkecil[j]){
                output+=hurufbesar[j]
                break
            }else if(kata[i]==' '){
                output+=' '
                break
            }else if(kata[i]>=0){
                return 'Enggak boleh ada angka'
            }
        }
    }
    return output
}
console.log(hurufBesar('kecil aja dulu semua'))


let hurufKecil=(kata)=>{
    var hurufbesar='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var hurufkecil='abcdefghijklmnopqrstuvwxyz'
    var output=''

    for(let i=0;i<=kata.length;i++){
        for(let j=0;j<hurufbesar.length;j++){
            if(kata[i]==hurufbesar[j]){
                output+=hurufkecil[j]
                break
            }else if(kata[i]==' '){
                output+=' '
                break
            }else if(kata[i]>=0){
                return 'Enggak boleh ada angka'
            }
        }
    }
    return output
}
console.log(hurufKecil('GEDE SEMUA DAH'))

/// Tugas selanjutnya, jika huruf besar huruf kecil
