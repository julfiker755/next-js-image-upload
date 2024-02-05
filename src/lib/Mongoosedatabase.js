import mongoose from "mongoose"

const Mongoosedatabase=()=>{
    try{
        mongoose.connect('mongodb+srv://sir:sir@cluster0.4mjyxmf.mongodb.net/mongoosedatabase')
        .then(()=>{
            console.log('Mongoose connect')
        }).catch(err=>console.log(err.toString()))

    }catch(err){
        console.log(err.toString())
    }
}
export default Mongoosedatabase