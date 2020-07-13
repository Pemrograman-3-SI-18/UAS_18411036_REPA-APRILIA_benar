const userModel = require('../model/user')

const  response = require('../config/response')

const bcrypt = require('bcrypt')

exports.registrasi = (data) =>
    new Promise((resolve, reject) => {
        userModel.findOne({userName: data.userName})
            .then(user =>{
                if (user){
                    resolve(response.commonErrorMsg('Username sudah digunakan'))
                } else {
                    bcrypt.hash(data.Password, 10,(err, hash)=>{
                        if (err){
                            reject(response.commonErrorMsg)
                        }else {
                            data.Password = hash
                            userModel.create(data)
                                .then(() => resolve(response.commonSuccessrMsg('berhasil registrasi')))
                                .catch(() => reject(response.commonErrorMsg('registrasi gagal')))
                        }
                    })
                }
            }).catch(() => response.commonError)
    })

exports.login =(data) =>
    new Promise((resolve, reject) => {
        userModel.findOne({
            userName: data.userName
        }).then(user => {
            if(user){
                if (bcrypt.compareSync(data.Password, user.Password)) {
                    resolve(response.commonResult(user))
                }else {
                    reject(response.commonErrorMsg('Password Salah'))
                }
            }else {
                reject(response.commonErrorMsg('username tdk ditemukan'))
            }
        })
    })