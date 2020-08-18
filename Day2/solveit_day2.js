// Solve It! No.1
console.log('\n---- Solve It! No.1 ----')
var x = 4
var y = 3
var z = 2
console.log((((x+y*z)/(x*y))**z)+'\n')

// Solve It! No.3
console.log('---- Solve It! No.3 ----')
var x = 8
console.log(Math.cbrt(x)+'\n')

// Solve It! No.4
console.log('---- Solve It! No.4 ----')
var x = 510
var tahun = 360
var bulan = 30
var minggu = 7
sumTahun = x/tahun
sumBulan = ((x%tahun)/bulan)
sumMinggu = (((x%tahun)%bulan)/minggu)
sumHari = (((x%tahun)%bulan)%minggu)
console.log(`${x} hari = ${Math.floor(sumTahun)} tahun, ${Math.floor(sumBulan)} bulan, ${Math.floor(sumMinggu)} minggu, & ${Math.floor(sumHari)} Hari`)

// Solve It! No.5
console.log('---- Solve It! No.5 ----')
console.log(' \n')

// Solve It! No.6
console.log('---- Solve It! No.6 ----')
var Tanggal = new Date()
console.log
(`Hari ini tanggal ${Tanggal.getDate()}-${(Tanggal.getMonth())+1}-${Tanggal.getFullYear()}
Besok tanggal ${(Tanggal.getDate())+1}-${(Tanggal.getMonth())+1}-${Tanggal.getFullYear()}
Kemarin tanggal ${(Tanggal.getDate())-1}-${(Tanggal.getMonth())+1}-${Tanggal.getFullYear()}\n`)

// Solve It! No.7
console.log('---- Solve It! No.7 ----')
var Kata = 'Hello World'
console.log(Kata.match(/o/g).length+'\n')

// Solve It! No.8
console.log('---- Solve It! No.8 ----')
console.log(' \n')