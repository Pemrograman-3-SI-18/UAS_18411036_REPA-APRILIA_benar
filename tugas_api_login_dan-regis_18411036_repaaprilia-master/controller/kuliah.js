const kuliah = require('../model/kuliah.js')
const  response = require('../config/response')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

exports.inputdatakuliah = (data, foto) =>
    new Promise(async (resolve, reject)=> {

        const kuliahbaru = new kuliah({
            userName: data.userName,
            namaLengkap: data.namaLengkap,
            TTL: data.TTL,
            Email: data.Email,
            jenisKelamin: data.jenisKelamin,
            NIK: data.NIK,
            Prodi: data.Prodi,
            namaAyah: data.namaAyah,
            pekerjaanAyah: data.pekerjaanAyah,
            namaIbu: data.namaIbu,
            pekerjaanIbu: data.pekerjaanIbu,
            jumlahSaudara: data.jumlahSaudara,
            Tanggungan: data.Tanggungan,
            namaSMA: data.namaSMA,
            AlamatSMA: data.AlamatSMA,
            Jurusan: data.Jurusan,
            foto: foto
        })
       await kuliah.findOne({userName: data.userName})
            .then(kuliah =>{
                if(kuliah){
                    reject(response.commonErrorMsg(' uername sudah digunakan'))
                }else {
                    kuliahbaru.save()
                        .then(r =>{
                            resolve(response.commonSuccessrMsg('berhasil input data'))
                        }).catch(err =>{
                        reject(response.commonErrorMsg(' gagal'))
                    })
                }
            }).catch(err => {
                reject(response.commonErrorMsg(' terjadi kesalahan'))
        })

        })
exports.LihatData = () =>
    new Promise(async (resolve, reject) =>{
       await kuliah.find({})
            .then(result =>{
                resolve(response.commonResult(result))
            })
            .catch(() => reject(response.commonErrorMsg(' terjadi kesalahan')))
    })

exports.LihatDetailData = (userName) =>
    new Promise(async (resolve, reject) =>{
        await kuliah.findOne({userName: userName})
            .then(result =>{
                resolve(response.commonResult(result))
            })
            .catch(() => reject(response.commonErrorMsg(' terjadi kesalahan')))
    })

exports.updatekuliah = (id, data, foto) =>
    new Promise(async (resolve, reject)=>{
       await kuliah.updateOne(
            {_id : ObjectId(id)},
            {
                $set: {
                    userName: data.userName,
                    namaLengkap: data.namaLengkap,
                    TTL: data.TTL,
                    Email: data.Email,
                    jenisKelamin: data.jenisKelamin,
                    NIK: data.NIK,
                    Prodi: data.Prodi,
                    namaAyah: data.namaAyah,
                    pekerjaanAyah: data.pekerjaanAyah,
                    namaIbu: data.namaIbu,
                    pekerjaanIbu: data.pekerjaanIbu,
                    jumlahSaudara: data.jumlahSaudara,
                    Tanggungan: data.Tanggungan,
                    namaSMA: data.namaSMA,
                    AlamatSMA: data.AlamatSMA,
                    Jurusan: data.Jurusan,
                    foto: foto
                }
            }
        ).then(kuliah => {
            resolve(response.commonSuccessrMsg('berhasil mengubah data'))
        }).catch(err => {
            reject(response.commonErrorMsg(' terjadi kesalahan'))
        })
    })

// exports.hapusdata = (_id) =>
//     new Promise(async (resolve, reject) => {
//         await kuliah.remove({_id: ObjectId(_id)})
//             .then(() =>{
//                 resolve(response.commonSuccessrMsg('berhasil menghapus data'))
//             }).catch(() => {
//                 reject(response.commonErrorMsg(' terjadi kesalahan'))
//             })
//     })

exports.hapusdata = (_id) =>
    new Promise(async (resolve, reject) => {
        await kuliah.remove({_id: ObjectId(_id)})
            .then(() => {
                resolve(response.commonSuccessrMsg('berhasil menghapus data'))
            }).catch(() => {
                reject(response.commonErrorMsg(' terjadi kesalahan'))
            })
    })

