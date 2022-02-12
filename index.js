const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/tutorial', //membuat database tutorial
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

const db = mongoose.connection
db.on('error', ()=> {
    console.log('connection error')
})
db.once('open', ()=> {
    console.log('Successfully connected')
})

const kelasSchema = new mongoose.Schema({ // 
    judul: String,
    deskripsi: String,
    tglPosting: {
        type:Date,
        default: Date.now
    }
})

const Kelas= mongoose.model('Kelas', kelasSchema) //model digunakan untuk membuat collection dengan aturan schema didalam mongodb

//Jika model telah berhasil dibuat maka siap untuk melakukan operasi CRUD pada mongoDB
// otomatis akan ditambahkan (s/es) dibelakang nama collection didalam mongodb


//melakukan save didalam mongodb, dan sekaligus mendifiniskan data sesuai schemanya
//************************** */
//          Metode 1         */
//************************** */

// const nodejs = new Kelas({
//     judul: 'nodejs',
//     deskripsi: 'belajar nodejs'
// })
// nodejs.save((err, result)=>{
//     if(err){
//         console.log(err)
//     } else{
//         console.log(result)
//     }
// })

//*******************************//
//              Metode 2         //
//*******************************//
// Kelas.create({
//     judul:'vuejs',
//     deskripsi: 'Instansiasi vuejs'
// }, (error, data)=> {
//     if(error) return console.log(error)

//     console.log(data)
//     console.log('success created data')
// })


//mencari data (find) didalam collection, mencari semua data
// Kelas.find((err, data)=>{
//     if(err) return console.log(err)

//     console.log(data)
// })

//digunakan untuk mencari data dengan key tertentu
// Kelas.findOne({judul:'nodejs'},(err, data)=>{
//     if(err) return console.log(err)

//     console.log(data)
// })


//mencari didalam judul yang memiliki huruf js pencarian spesifik
Kelas.find({judul:/js/},(err, data)=>{
    if(err) return console.log(err)

    console.log(data)
})