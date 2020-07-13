const mongoose = require('mongoose');

const  userSchema = mongoose.Schema({

    userName: {
        type: String
    },
    namaLengkap : {
        type: String
    },
    TTL : {
        type: String
    },
    Email : {
        type: String
    },
    jenisKelamin : {
        type: String
    },
    NIK : {
        type: String
    },
    Prodi : {
        type: String
    },
    namaAyah : {
        type: String
    },
    pekerjaanAyah : {
        type: String
    },
    namaIbu : {
        type: String
    },
    pekerjaanIbu : {
        type: String
    },
    jumlahSaudara : {
        type: String
    },
    Tanggungan : {
        type: String
    },
    namaSMA : {
        type: String
    },
    AlamatSMA : {
        type: String
    },
    Jurusan : {
        type: String
    },
    foto : {
        type: String
    }
})
module.exports = mongoose.model('kuliah', userSchema)