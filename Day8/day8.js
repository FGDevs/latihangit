/*
var obj={
    head:1,
    eyes:2,
    hands:2,
    ears:2,
    Mouth:1
}

var hantu={
    terbang:1,
    eyes:2
}
var obj1={
    kaki:2,
    head:3
}

// console.log(obj)
// obj.kaki=2
// console.log(obj)
// obj={...obj,...obj1}
// console.log(obj)

/* -------------- DESTRUCTURING ------------ */
/* fungsi : mempersingkat kode syntax .get() */
/* Kondisi 1 */
/*
const {head,eyes} = obj // de-structuring

console.log(head)
console.log(eyes)

/* Kondisi 2 */
/*
var newarr=['gg','wp','ff']

var [bebas1,bebas2,bebas3] = newarr
console.log(bebas1)
// console.log(bebas2)
// console.log(bebas3) 

/* Kondisi 3 */
// function newfunc({head,eyes}){
//     return 'Manusia punya '+head+' kepala dan '+eyes+' mata.'
// }
// console.log(newfunc(hantu))


/* ----------- FUNCTION TANPA NAMA ---------- */
/*
var newfunc= input => 'Manusia punya '+head+' kepala dan '+eyes+' mata.'

var angka=(a)=>a*2

var keliling=(cb, p, l)=>{
    return cb(p)+cb(l)          // angka(4)+angka(5)
}
console.log(keliling(angka,4,5))

/* ----------- CALLBACK HELL ---------- */

/* ----------- MAPING ---------- */
// Method yang me looping sepanjang array dan menghasilkan array baru dari array lama yang telah diubah tanpa mengganti isi array lama  //
var newarr=[1,2,3,4,5]

/* Kondisi 1 */
/*
var arrbaru=newarr.map((XX, indexXX) => XX*2 )
console.log(newarr)
console.log(arrbaru)

/* Kondisi 2 */
/*
var arrbaru=newarr.map((XX, indexXX)=>{
    if(indexXX%2){
        return XX*3
    }else{
        return XX*2
    }
})
console.log(newarr)
console.log(arrbaru)

/* Kondisi 3 : foreach */
// for(i=0;i<newarr.length;i++){
//     console.log(`${i}.${newarr[i]}`)
// }
// console.log('=====================')
// newarr.forEach(val,index)=>{
//     console.log
// }

/* Kondisi 4 : foreach */
var filteraar=newarr.filter((val,index)=> val%2===0)


const filteralala=(arr,cb)=>{
    for(i=0;i<=arr.length;i++){
        if(arr[i]===0){
            return 
        }else{

        }
    }
}
console.log(filteraar)
console.log(filteralala(newarr,(val, index) => val%2===0))