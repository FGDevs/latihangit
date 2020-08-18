var obj={               // JSON --> javascript object notation
    nama: 'Andi',       // contained with x:.... --> (property):(value)
    umur: 23 ,           
    namaUmur(){
        return this.nama+this.umur
    }
}

// console.log(obj.nama)
// console.log(obj['nama'])

// var objUmur = 'umur'
// console.log(obj.umur)
// console.log(obj[objUmur])
// console.log(obj.namaUmur())
// obj.job='guru'
// console.log(obj)


class Human{
    constructor(a, b, /*c*/){      // template
        this.nama=a
        this.age=b
        //this.job=c
    }
    
    buatkalimat=()=>{
        return 'nama saya '+this.nama+' umur '+this.age
    }
}

class Student extends Human{
    constructor(a,b,_nilai){
        super(a,b)
        this.nilai=_nilai
    }
}

class Guru extends Human{
    constructor(a,b,_gaji){
        super(a,b)
        this.gaji=_gaji
    }
}
var dino=new Guru('dino',23,10000000)
var robin=new Student('robin',19,60)
console.log(dino)
console.log(robin)

// var dino=new Human('dino',23,'guru')
// var robin=new Human('robin',19,'else')

// dino.nama='hahaha'
// console.log(dino)
// console.log(robin)
// var arrmanusia=[]
// arrmanusia.push(new Human('dino',23,'guru'))
// arrmanusia.push(new Human('robin',19,'else'))
// console.log(arrmanusia)
// console.log(arrmanusia[1].buatkalimat())
