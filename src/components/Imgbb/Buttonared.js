"use client"
import { deleteaction } from "@/app/actions";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Buttonared = ({deleteid}) => {
    const router=useRouter()
    const handledelete=async(did)=>{
        const {data}=await axios.delete(`/api/task/${did}`)
        if(data.status === "success" && data.data.deletedCount > 0){
            toast.success('Successfully Delete Task')
            deleteaction()
        }
    }
   

    return (
        <div className="flex justify-between">
                <button className="bg-[green] py-1 px-3 text-white" onClick={()=>handledelete(deleteid)}>Delete</button>
                <button className="bg-[#2b90b4] py-1 px-3 text-white" onClick={()=>router.push(`/edit/${deleteid}`)}>Edit</button>
            </div>
    );
};

export default Buttonared;