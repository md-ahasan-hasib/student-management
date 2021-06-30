const mongoose = require('mongoose');

const connection = process.env.DATABASE


mongoose.connect(
    connection,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false  
    }

).then(()=>{
    console.log('Database Connect Successfully');
}).catch((error)=>{
    console.log(error);
});