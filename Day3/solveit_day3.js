/*------- Solve It! 12 ---------------------------------------------------------*/
console.log('Solve It! #12')
var Tanggal = new Date()
var Hari = Tanggal.getUTCDay()
var Bulan= Tanggal.getUTCMonth()+1

// Convert day's number into day's string
if      (Hari==0) {Hari='Minggu'}
else if (Hari==1) {Hari='Senin' }
else if (Hari==2) {Hari='Selasa'}
else if (Hari==3) {Hari='Rabu'  }
else if (Hari==4) {Hari='Kamis' }
else if (Hari==5) {Hari='Jumat' }
else              {Hari='Sabtu' }

// Convert month's number into month's string
if      (Bulan==1) {Bulan='Januari'  }
else if (Bulan==2) {Bulan='Februari' }
else if (Bulan==3) {Bulan='Maret'    }
else if (Bulan==4) {Bulan='April'    }
else if (Bulan==5) {Bulan='Mei'      }
else if (Bulan==6) {Bulan='Juni'     }
else if (Bulan==7) {Bulan='Juli'     }
else if (Bulan==8) {Bulan='Agustus'  }
else if (Bulan==9) {Bulan='September'}
else if (Bulan==10){Bulan='Oktober'  }
else if (Bulan==11){Bulan='November' }
else               {Bulan='Desember' }

console.log(`
Hari ini ${Hari}, ${Tanggal.getUTCDate()} ${Bulan} ${Tanggal.getUTCFullYear()}
Pukul ${Tanggal.getHours()}:${Tanggal.getMinutes()}:${Tanggal.getSeconds()}`)

/*------------------------------------------------------------------------------*/

console.log('')

/*------- Solve It! 13 ---------------------------------------------------------*/
console.log('Solve It! #13')
var berat= 67
var tinggi= 1.78
var IMT=berat/tinggi**2
var IMF=IMT.toFixed(1)

if(IMT<18.5){
    console.log(`IMT anda ${IMF}, Berat badan anda kurang`)
}else if(IMT>=18.5&&IMT<=24.9){
    console.log(`IMT anda ${IMF}, Berat badan anda ideal`)
}else if(IMT>=25.0&&IMT<=29.9){
    console.log(`IMT anda ${IMF}, Berat badan anda berlebih`)
}else if(IMT>=30.0&&IMT<=39.9){
    console.log(`IMT anda ${IMF}, Berat badan anda sangat berlebih`)
}else{
    console.log(`IMT anda ${IMF}, Berat badan anda obesitas`)}
/*------------------------------------------------------------------------------*/