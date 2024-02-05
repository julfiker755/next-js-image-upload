```js
  const [image,setimage]=useState(null)

  const handlefrom=()=>{
      axios.post("https://api.imgbb.com/1/upload?key=d9611b5d2a679610fcd78981e9505335",{image},{
        headers: {
            "content-type": "multipart/form-data",
           }
    })
    .then(result=> {
        console.log(result.data.data);
      })

    }
```
```js
<div>
    <h1>Image</h1>
    <h1 className="border  p-1 rounded-md w-fit" >
    <input onChange={(e)=>setimage(e.target.files[0])} className="focus:outline-none" type="file"/>
    </h1>
 </div>
```