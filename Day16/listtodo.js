class Todo{
    constructor(a,b,h){
        this.kegiatan=a
        this.foto=b
        this.hari=h
    }
}

var harihari=['Pilih Hari','Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu']

var datakegiatan=[
    new Todo('lari trail','https://cdn.idntimes.com/content-images/community/2019/12/2019-05-running-03-ff64ce59924960bc5d89cd4f0d70cbee_600x400.jpg',harihari[2]),
    new Todo('lari marathon','https://s3.bukalapak.com/bukalapak-kontenz-production/content_attachments/38768/w-744/endurance_exercise_fitness_2461982.jpg',harihari[4]),
]

var indexedit=-1
var indexdelete=-1

const tampilanAwal=()=>{
    var tampilan=datakegiatan.map((val,index)=>{
        if(index==indexdelete){
            return `<tr>
                        <td>${index+1}</td>
                        <td>${val.kegiatan}</td>
                        <td><img src=${val.foto} alt=${val.kegiatan} height='150'</td>
                        <td>${val.hari}</td>
                        <td><input type='button' value='Yes'/> &nbsp; <input type='button' id='cancel' value='Cancel' onclick='onCanceledDeteleClick(${index})'/></td>
                    </tr>`
        }
        if(index==indexedit){
            return `<tr>
                        <td>${index+1}</td>
                        <td>${val.kegiatan}</td>
                        <td><img src=${val.foto} alt=${val.kegiatan} height='150'</td>
                        <td>${val.hari}</td>
                        <td><input type='button' value='Save'/> &nbsp; <input type='button' value='Cancel'/></td>
                    </tr>`
        }
        return `<tr>
                    <td>${index+1}</td>
                    <td>${val.kegiatan}</td>
                    <td><img src=${val.foto} alt=${val.kegiatan} height='150'</td>
                    <td>${val.hari}</td>
                    <td><input type='button' onclick='onEditClick(${index})' value='edit'/> &nbsp; <input type='button' onclick='onDeleteClick(${index})' value='delete'/></td>
                </tr>`
    })
    console.log(tampilan)
    document.getElementById('isitabel').innerHTML=tampilan.join('')
}

const onEditClick=(indexkiriman)=>{
    indexedit=indexkiriman
    tampilanAwal()
}

const onDeleteClick=(indexkiriman)=>{
    indexdelete=indexkiriman
    tampilanAwal()
}

const onCanceledDeteleClick=()=>{
    indexdelete=-1
    tampilanAwal()
}

// document.getElementById.('cancel').addEventListener(onCanceledDeteleClick)

const onCanceledEditClick=()=>{
    indexedit=-1
    tampilanAwal()
}

const tampilanhari=()=>{
    const hari=harihari.map((val,index)=>{
        if(val=='Pilih Hari'){
            return `<option value=${index} selected hidden>${val}</option>`
        }
        return `<option value=${index}>${val}</option>`
    })
    document.getElementById('Hari').innerHTML=hari.join('')
}

const onAddClik=()=>{
    var kegiatan=document.getElementById('Kegiatan').value
    var hari=document.getElementById('Hari').value
    var gambar=document.getElementById('Gambar').value
    datakegiatan.push(new Todo(kegiatan,gambar,harihari[hari]))
    tampilanAwal()
}

tampilanhari()
tampilanAwal()