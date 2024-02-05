import Multermodel from "@/lib/Model/Multertask"
import Mongoosedatabase from "@/lib/Mongoosedatabase"
import { NextResponse } from "next/server"

// post 
export const GET=async(req)=>{
    try{
        Mongoosedatabase()
        const result=await Multermodel.find()
        return NextResponse.json({status:'success',data:result})

    }catch(err){
        return NextResponse.json({status:'fail',data:err.toString()})
    }
}
// postdata
export const POST=async(req,res)=>{
    try{
        Mongoosedatabase()
        const postdata=await req.json()
        const result=await Multermodel.create(postdata)
        return NextResponse.json({status:'success',data:result})
          
        
    }catch(err){
        return NextResponse.json({status:'fail',data:err.toString()})
    }
}
