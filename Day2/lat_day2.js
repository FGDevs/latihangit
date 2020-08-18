//////////

//// Chap. 0 (Console Log (Print))
//////////console.log("HADIR") // Print HADIR;


//// Chap. 1 (VARIABLE)
/// Primitif types of variable: String, Boolean, Number (Integer & Float), Undefined, Null, etc.
//////////var Nama = `'Lea "Ogawa Mizuki"'`
//////////console.log(Nama) // Print 'Lea "Ogawa Mizuki"';
//////////Nama = 'Park Jin Hee' /// without declaring with syntac 'var', "Nama" already declared as a variable;
//////////console.log(Nama) // Print 'Lea "Ogawa Mizuki"';

//// Subchap 2: Difference between var, let, & const 
//////////var nama ='Lea'
let usia = '24'
//////////const status = true

//////////console.log(typeof(nama))
//////////console.log(typeof(usia))
//////////console.log(typeof(status))

//// About: Let
//////////let namauser = 'Lea' // Syntac "Let" function to prevent sama variabel using multiple declaration
//////////namauser = 'Jinny'
//////////console.log(namauser)

//// About: Const
const namanama = 'Denise Kim' // Syntac "Const" will error if the variable re-declared
//////////console.log(namanama)

//// About: Replace syntaxes
//////////console.log(namanama.replace(/De/i,''))

//// About: String Syntaxes
//////////console.log(namanama.length) // variable.length; to calculate string length
//////////console.log(namanama.indexOf('Kim')) // variable.indexof; to get the index number of variable's part
//////////console.log(namanama.substr(1,5)) // variable.substr; to get tha data of the indexes starting from index n to index m
//////////console.log(namanama.slice(1,5)) // variable.slice; same as syntax slice

//// About: Combining different types of variable
//////////console.log((usia)+' '+22)
//////////console.log(`${namanama} ${namanama}`)

var tanggal = new Date()
console.log((tanggal.getDate())+'/'+(tanggal.getMonth()+1)+'/'+(tanggal.getFullYear()))
console.log((tanggal.getHours())+':'+(tanggal.getMinutes()))