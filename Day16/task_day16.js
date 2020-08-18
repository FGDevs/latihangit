class Manusia {
    constructor(a,b,c,d){
        this.nama=a
        this.umur=b
        this.kelamin=c
        this.pekerjaan=d
    }
}

var jenisKelamin=['Man','Woman']

var daftarManusia=[
    new Manusia('Fitrah',26,jenisKelamin[0],'Developer'),
    new Manusia('Raka',40,jenisKelamin[0],'Spy'),
    new Manusia('Pitri',31,jenisKelamin[1],'Chef'),
    new Manusia('Tria',24,jenisKelamin[1],'Waitress'),
    new Manusia('Ita',52,jenisKelamin[1],'Housewife')
]
    
const tampilkantabel=()=>{
    var listmanusia=daftarManusia.map((val,index)=>{
        return ` <tr>
                    <td id="t01" style="text-align: center;">${index+1}</td>
                    <td id="t01">${val.nama}</td>
                    <td id="t01" style="text-align: center;">${val.umur}</td>
                    <td id="t01" style="text-align: center;">${val.kelamin}</td>
                    <td id="t01">${val.pekerjaan}</td>
                </tr> `
    })
    document.getElementById('isitabel').innerHTML=listmanusia.join('')
}

tampilkantabel()