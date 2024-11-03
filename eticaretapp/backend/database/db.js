const mongoose = require("mongoose");
const uri =
  "mongodb+srv://MongoDb:1@eticaretdb.vqzfo.mongodb.net/?retryWrites=true&w=majority&appName=ETicaretDb";

  const connection = ()=>{
    mongoose.connect(uri,{
      
    }).then(()=>console.log("MongoDb bağllantısı başarılı."))
    .catch((err)=>console.log("Bağlantı hatası! hata "+ err.message));
  }

  module.exports = connection;
