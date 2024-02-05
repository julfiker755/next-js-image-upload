import Taskmodel from "@/lib/Model/Taskmodel"
import Mongoosedatabase from "@/lib/Mongoosedatabase"
import { NextResponse } from "next/server"

// get
export const GET=async(req)=>{
    try{
        Mongoosedatabase()
        const result=await Taskmodel.find()
        return NextResponse.json({status:'success',data:result})

    }catch(err){
        return NextResponse.json({status:'fail',data:err.toString()})
    }
}

// post
export const POST=async(req)=>{
    try{
        Mongoosedatabase()
        const data=await req.json()
        const result=await Taskmodel.create(data)
        return NextResponse.json({status:'success',data:result})

    }catch(err){
        return NextResponse.json({status:'fail',data:err.toString()})
    }
}
