import Taskmodel from "@/lib/Model/Taskmodel"
import Mongoosedatabase from "@/lib/Mongoosedatabase"
import mongoose from "mongoose"
import { NextResponse } from "next/server"


 // get  ----------
 export async function GET(req,{params}){
    try{
       Mongoosedatabase()
      const result=await Taskmodel.findOne({_id:new mongoose.Types.ObjectId(params.taskdid)})
       return NextResponse.json({status:'success',data:result})
     
    }catch(err){
      return NextResponse.json({status:'fail',message:err.toString()})
    }
  }
  // delete  ----------
  export async function DELETE(req,{params}){
    try{
       Mongoosedatabase()
      const result=await Taskmodel.deleteOne({_id:new mongoose.Types.ObjectId(params.taskdid)})
       return NextResponse.json({status:'success',data:result})
     
    }catch(err){
      return NextResponse.json({status:'fail',message:err.toString()})
    }
  }
  //PUT
export const PUT=async(req,{params})=>{
    try{
        Mongoosedatabase()
        const data=await req.json()
        const filter ={_id:new mongoose.Types.ObjectId(params.taskdid)}
        const options = { upsert: true }
        const updateDoc = {
            $set: {
              name:data.name,
              discripation:data.discripation,
              image:data.image,
            },
          };
        const result=await Taskmodel.updateOne(filter,updateDoc,options)

        return NextResponse.json({status:'success',data:result})
    }catch(err){
        return NextResponse.json({status:'fail',data:err.toString()})
    }
}