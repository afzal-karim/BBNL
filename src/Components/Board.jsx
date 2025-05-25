

export default function Board() {
  return (
     <div className=" pl-72 pr-72">
        <div className="flex items-center justify-evenly p-4 bg-white w-full ">
          <div>
            <p className="ring-2 px-4 py-2 text-black font-semibold ">LOGO</p>
          </div>
          <div>
            <p className="text-5xl text-blue-500 font-semibold text-shadow-lg ">Bharti Broadband Network Limited</p>
            <p className="text-2xl font-bold">A government of India undertaking</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-blue-600">Access of India</p>
          </div>
        </div>
      </div>
  )
}