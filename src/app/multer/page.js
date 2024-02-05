import AddImage from '@/components/Multerupload/AddImage';
import Image from 'next/image';
import { Suspense } from 'react';

async function getdata(){
    const res=await fetch('http://localhost:3000/api/taskmulter')
    const result=await res.json()
    return result
  }

const Multerpage = async() => {
    const data=await getdata()
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-2">
           <AddImage></AddImage>
           <div className="border p-2 rounded-md">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <Suspense fallback={<h1 className="font-bold text-3xl">Loading...</h1>}>
          {data?.data?.map(d=> <div className="border p-3" key={d._id}>
            <div className="w-fit h-[160px]"> <Image src={`/images/${d.image}`} width={200} height={100} alt="card image"></Image></div>
             <div>
                 <h1>{d.name}</h1>
                 <p>{d.discripation}</p>
             </div>
            </div>)}
          </Suspense>
          </div>
          </div>
        </div>
    );
};

export default Multerpage;