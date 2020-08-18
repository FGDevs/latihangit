// var iniaja=(siapa)=>{               // Note: Di react--> function(){} === ()=>{}
//     console.log('hello aja '+siapa)
//     return siapa                    // === break
// }
// //var simpenfunc=iniaja('dino')
// //iniaja('dino')

// let jumlahkan=(arr=[])=>{
//     var total=0
//     for(let i=0;i<arr.length;i++){
//         total+=arr[i]
//     }
//     return total
// }
// //console.log(jumlahkan([1,2,3]))

// var a=1
// let ubah=()=>{
//     b=a
//     return b
//     // return a
// }
// //console.log(b)
// // ubah()
// // console.log(ubah())
// // console.log(a)


// // function kali(x){
// //     if(x<2){
// //         return 1
// //     }
// //     return x * tiga()
// // }

// // function kali(x){
// //     var a=x<2 ? 1: x*tiga()  // -- jika x<2 maka 1, else x*tiga
// //     return a
// // }

// function kali(x){
//     return x<2 ? 1: x*tiga()
// }

// function tiga(){
//     return 3
// }   
// // console.log(kali(1))

// var b = 4
// var c = b%2==1 ? 'ganjil': 'genap'
// var d=b||'tidak ada'
// // console.log(d)

// // var x=setTimeout(waktu,3*1000)  // dijalankan setelah waktu x
// // clearTimeout(x)                 // closure
// function waktu(){
//     console.log('hello')
// }

// // setInterval(waktu,1000)         // jalan selama waktu x
/* ------------------------------------------------------------ */

var objdino={
    nama:'dino rahman',
    pekerjaan: 'guru',
    umur:23
}
console.log(objdino)
var a='nama'
objdino.nama='robin'
console.log(objdino)
// console.log(objdino['umur'])