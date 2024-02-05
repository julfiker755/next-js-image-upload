"use client"
import { action } from "@/app/actions";
import axios from "axios";
import {useRef, useState } from "react";
import toast from "react-hot-toast";

const Add = () => {
  const inputref=useRef(null)
  const [image,setimage]=useState('')
    const [task,settask]=useState({
        name:"",
        discripation:"",
        image:"",
     })
   
     const [loading,setloading]=useState(false)
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
        // image host
      axios.post("https://api.imgbb.com/1/upload?key=d9611b5d2a679610fcd78981e9505335",{image},{
        headers: {
            "content-type": "multipart/form-data",
           }
    })
    .then(result=> {
        const tastdata={...task,image:result.data.data.display_url}
        // task post
        axios.post('/api/task',tastdata)
        .then(result=>{
           if(result.data.status === "success"){
            toast.success('Successfully Task')
             action()
            //  empty from rest
            settask({
              name:"",
              discripation:"",
              image:"",
           })
           setimage("")

           }
        })
        
        setloading(false)
      })

    }
  

    return (
        <div className="border rounded-md">
          <h1 className="text-3xl font-semibold text-center">Add Imgbb</h1>
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
                 {image ?  <img   src={URL.createObjectURL(image)} alt="fff" /> : <img   src="./imgphoto.png" alt="" />}
                <input ref={inputref} name="image" onChange={(e)=>setimage(e.target.files[0])} type="file" className='hidden' required/>  
              </div>
                {/* image ends */}
              <button  className="bg-[green] text-white py-2 mt-2 px-4">{loading ? 'Loading...':'Submit'}</button>
           </div>
           </form>
         </div>
    );
};

export default Add;