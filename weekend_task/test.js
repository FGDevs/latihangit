let jenisBuah = ['Apel','Lemon','Kiwi','Anggur','Mangga']
let stockBuah = [10 , 15 , 8 , 10, 13]
let hargaBuahKg = [9000 , 13500 , 9700 , 12000 , 6300]
let cartBuah = [0,1,2,0,3]

let detailCart=''
    for(i=0;i<=jenisBuah.length-1;i++){
        if(cartBuah[i]>0){
        detailCart=detailCart+'\n'+jenisBuah[i]+': '+stockBuah[i]+' Rp. '+hargaBuahKg[i]+',00'}
    } 
console.log(detailCart)
