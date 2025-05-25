

export default function Card() {
    return (

        <div className=" flex justify-center items-center p-4 gap-2 w-full  ">
            <div className=" w-1/5 ring-2   "> 
                <p style={{ backgroundColor: '#666633' }} className="px-10 text-center py-2  font-bold text-white  ">Lenght of LCD</p>
                <p style={{ backgroundColor: '#CFAF98' }} className="px-10 text-center py-2 font-bold text-xl ">6,83,175 km</p>
            </div>
            <div className="w-1/5 ring-2 ring-slate-500">
                <p style={{ backgroundColor: '#999966' }} className="  text-center py-2 font-bold text-white">Number of GPs where OFC Laid</p>
                <p style={{ backgroundColor: '#FAFACA' }} className=" text-center   py-2 font-bold text-xl">2,10,552</p>   
            </div>
            <div className="w-1/5 ring-2 ring-slate-500">
                <p style={{ backgroundColor: '#1B7F47' }} className=" text-center  py-2   font-bold text-white">Number of GPs Connected on OFC </p>
                <p style={{ backgroundColor: '#DAF7A6' }} className=" text-center  py-2  font-bold text-xl">2,11661</p>
            </div>
        </div>
    )
}