module.exports = {

    commonError:{
        error: true,
        msg: 'Terjadi Kesalahan Pada server'
    },
    commonErrorMsg: (msg) => {
        return{
            error: true,
            msg: msg
        }
    },
    commonSuccess: {
        error: false,
        msg: 'Berhasil Memuat Permintaan'
    },
    commonSuccessrMsg: (msg) => {
        return {
            error: false,
            msg: msg
        }
    },
    commonResult: (data) => {
        return{
            error: false,
            msg : 'Berhasil Memuat Data',
            data: data
        }
    }

};