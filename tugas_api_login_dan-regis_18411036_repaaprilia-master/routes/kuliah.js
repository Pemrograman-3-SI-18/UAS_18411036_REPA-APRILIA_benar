const multer = require('multer')
const fs = require('fs')
const router = require('express').Router()
const  kuliah = require('../controller/kuliah')
var storage =multer.diskStorage( {
    filename: function (req, file,cb) {
        let ext = file.originalname.substring(
            file.originalname.lastIndexOf("."),
            file.originalname.length
        )
    cb(null, Date.now() + ext);
    },
    destination: function (req, file, cb) {
        cb(null, './foto')
    }
})

var upload = multer({storage: storage}).single("foto")

router.post("/input", upload, (req, res) => {

    kuliah.inputdatakuliah(req.body, req.file.filename)
        .then((result) => res.json (result))
        .catch((err) => res.json(err))

})
router.get("/datakuliah",(req, res) =>{
    kuliah.LihatData()
        .then((result) => res.json (result))
        .catch((err) => res.json(err))
})

router.get("/datakuliah/:id",(req, res) =>{
    kuliah.LihatDetailData(req.params.id)
        .then((result) => res.json (result))
        .catch((err) => res.json(err))
})

router.delete("/hapus/:id",(req, res) =>{
    console.log(req.params.id)
    kuliah.hapusdata(req.params.id)
        .then((result) => res.json (result))
        .catch((err) => res.json(err))
})

router.put("/ubah/:id", upload, (req, res) =>{
    let fileName;
    if (req.body.foto) {
        fileName = req.body.foto;
    }else {
        fileName =req.file.filename
    }
    kuliah.updatekuliah(req.params.id, req.body, fileName)
        .then((result) => res.json (result))
        .catch((err) => res.json(err))
})

module.exports = router