"use client"
import { action } from "@/app/actions";
import axios from "axios";
import { useParams } from "next/navigation";
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const Edit = () => {
    const {editpage}=useParams()
    const inputref=useRef(null)
    const [image,setimage]=useState('')
    const [task,settask]=useState([])
    const [loading,setloading]=useState(false)
    const router=useRouter()
       //   edit fetch data
     useEffect(()=>{
        (async()=>{
                const {data}=await axios.get(`/api/task/${editpage}`)
                // if(data.status === "success" && data.data){
                //     seteditdata(data.data)
                // }
                settask(data?.data)
        })()
     },[editpage])

   
       
      // handle change
       const Handchange=(e)=>{
          const name=e.target.name
          const value=e.target.value
          settask({
              ...task,
              [name]:value
          })
        }
  
      // handle image 
      const hanldeimage=()=>{
        inputref.current.click()
      }
   
     
     //   hanlde from 
     const handlefrom=(e)=>{
        e.preventDefault()
        setloading(true)
        
        if(!image?.name){
            axios.put(`/api/task/${editpage}`,task)
            .then(result=>{
               if(result.data.status === "success"){
                toast.success('Successfully tast update')
                action()
                setloading(false)
                router.push('/')
               }

            
    
            })
        }else{
         // image host---new
        axios.post("https://api.imgbb.com/1/upload?key=d9611b5d2a679610fcd78981e9505335",{image},{
        headers: {
            "content-type": "multipart/form-data",
           }
    })
    .then(result=> {
        const tastdata={...task,image:result.data.data.display_url}
        axios.put(`/api/task/${editpage}`,tastdata)
        .then(result=>{
           if(result.data.status === "success"){
            toast.success('Successfully tast update')
            action()
            router.push('/')
            setloading(false)
           }
       

        })
      })
        }
    }
  
   
    return (
        <div className="border rounded-md max-w-xl m-auto my-10">
          <h1 className="text-3xl font-semibold text-center">Update Task</h1>
           <form onSubmit={handlefrom}>
           <div className="p-5">
              <div>
                 <h1>Title</h1>
                 <h1 className="border p-1 rounded-md" >
                    <input 
                     className="focus:outline-none w-full" 
                     name="name"
                     value={task?.name}
                     onChange={Handchange}
                     type="text" required/>
                    </h1>
              </div>
              <div>
                 <h1>Discripation</h1>
                 <h1 className="border  p-1 rounded-md" >
                  <textarea 
                  className="focus:outline-none w-full"
                    name="discripation"
                   value={task?.discripation}
                   onChange={Handchange}
                   type="text" required/>
                  </h1>
              </div>
              {/* image start */}
              <div onClick={hanldeimage} className="w-[100px] p-2 border my-2 rounded-md cursor-pointer">
                 {image ?  <img src={URL.createObjectURL(image)} alt="fff" /> :<img   src={task?.image} alt="update image" />}
                <input ref={inputref} onChange={(e)=>setimage(e.target.files[0])} type="file" className='hidden' />  
              </div>
                {/* image ends */}
              <button  className="bg-[green] text-white py-2 mt-2 px-4">{loading ? 'Waiting...':'Update'}</button>
           </div>
           </form>
         </div>
    );
};

export default Edit;