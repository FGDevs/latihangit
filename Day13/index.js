// harga awal 10000
// tiap menit naik 20%
// tiap kelipatan 4 naik 10%
// harga diatas 30jt return 'barang sudah dibeli'

const lelang=(menit)=>{
    var awal=10000
    var hitunganmenit=1
    do {
        if(hitunganmenit%4===0){
            awal=+Math.ceil(awal*0.1)
            console.log(awal)
        }else{
            awal+=Math.ceil(awal*0.2)
            console.log(awal)
        }
        hitunganmenit ++
    } while (hitunganmenit<=menit);
    console.log(awal)
    return awal>(30*Math.exp(6))? 'barang sudah dibeli' :awal
}
console.log(lelang(50))