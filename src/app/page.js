import Add from "@/components/Imgbb/Add";
import Buttonared from "@/components/Imgbb/Buttonared";
import Image from "next/image";
import { Suspense} from "react";


async function getdata(){
  const res=await fetch('http://localhost:3000/api/task',{ cache: 'no-store' , next: { tags: ['collection',"deletecollection"] } })
  const result=await res.json()
  return result
}

const Rootpage = async() => {
  const data=await getdata()
  

  return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-2">
           <Add></Add>
            {/* right side */}
            <div className="border p-2 rounded-md">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <Suspense fallback={<h1 className="font-bold text-3xl">Loading...</h1>}>
          {data?.data?.map(d=> <div className="border p-3" key={d._id}>
            <div className="w-fit h-[160px]"> <Image src={d.image} width={200} height={100} alt="card image"></Image></div>
             <div>
                 <h1>{d.name}</h1>
                 <p>{d.discripation}</p>
             </div>
             <Buttonared deleteid={d._id}></Buttonared>
            </div>)}
          </Suspense>
          </div>
          </div>
      </div>
  );
};

export default Rootpage;