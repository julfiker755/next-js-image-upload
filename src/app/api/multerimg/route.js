import { NextResponse } from "next/server"
import {writeFile} from 'fs/promises'


// image upload 
export const POST=async(req,res)=>{
    try{
        const data=await req.formData()
         const file=data.get('file')

          if(!file) return NextResponse.json({status:'fail',message:'Not Image file'})


          if(file) {
            const bytedata=await file.arrayBuffer()
           const beffer=Buffer.from(bytedata)
           const path=`./public/images/${file?.name}`
           await writeFile(path,beffer)
           return NextResponse.json({status:'success',message:"file upload"})
          }
           
   
    }catch(err){
        return NextResponse.json({status:'fail',data:err.toString()})
    }
}
