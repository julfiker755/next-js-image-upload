import mongoose from "mongoose";

const Taskchema = new mongoose.Schema({
    name:{type:String,require:true},
    discripation:{type:String,require:true},
    image:{type:String,require: true},
  }
  );

  const Taskmodel =mongoose.models.taks || mongoose.model('taks',Taskchema);

  export default Taskmodel;
