import mongoose from "mongoose";

const Taskchema = new mongoose.Schema({
    name:{type:String,require:true},
    discripation:{type:String,require:true},
    image:{type:String,require: true},
  }
  );

  const Multermodel =mongoose.models.multertaks || mongoose.model('multertaks',Taskchema);

  export default Multermodel;
