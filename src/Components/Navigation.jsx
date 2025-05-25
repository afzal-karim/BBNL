


import fiber from "../assets/fiber.jpg"
import pen from "../assets/pen.png"
import Satelitle from "../assets/Satelitle.png"
export default function Navigation() {
    return (
        <div className="  ">
            <div className="flex w-full  pt-1  gap-2 p-4 justify-center ">


                <div className="w-1/6">

                    <div className="  text-center ring-2  flex">
                        <p className=" bg-stone-600 w-full text-white font-bold text-2xl  py-2">Naviagtion</p>
                    </div>
                    <div className=" p-4  cursor-pointer  text-black font-semibold text-lg bg-gray-100 ring-2">
                        <p className="hover:text-red-500 ">1. Contribute your rendering of the national anthem of india </p>
                        <hr />
                        <p className="hover:text-red-500">2.president Pre-Bid conference </p>
                        <hr />
                        <p className="hover:text-red-500">3.Committee report on NFON</p>
                        <hr />
                        <p className="hover:text-red-500">4.Lat-Long of Gps, FPOI and OLTs for GPs under BharatNet Phase-1</p>
                        <hr />
                        <p className="hover:text-red-500">5.Forms and Downloads </p>
                        <hr />
                        <p className="hover:text-red-500">6.Supporting Organisation</p>
                        <hr />
                        <p className="hover:text-red-500">7.RTI</p>
                        <hr />
                        <p className="hover:text-red-500">8.Grievence Redressel</p>
                        <hr />
                        <p className="hover:text-red-500">9.national Telecom Policy</p>
                        <hr />
                        <p className="hover:text-red-500">10.Media Gallery</p>
                    </div>
                </div>

                <div className=" ring-2 w-1/6 flex h-40  " >
                    <div className="">
                        <img src={fiber} alt="" className="h-40 w-100" />
                    </div>
                    <div className=" bg-green-500 text-center   text-white font-bold text-lg">
                        <p className=" text-white">Know your fiber</p>
                        <hr className=" border-white" />
                        <p className="font-semibold text-white">Detailed optical Fibe  Connectivity Plan pertaining  to various blocks and Gps </p>


                    </div>



                </div>
                <div className=" ring-2 w-1/6 flex h-40  " >
                    <div className="">
                        <img src={pen} alt="" className="h-40 w-100" />
                    </div>
                    <div className=" bg-orange-500 text-center   text-white font-bold text-lg">
                        <p className=" text-white">Know your Panchayat</p>
                        <hr className=" border-white" />
                        <p className="font-bold text-white">List of gram Panchayts across various districts of India </p>

                    </div>



                </div>
                <div className=" ring-2  w-1/6 flex h-40  " >
                    <div className="">
                        <img src={Satelitle} alt="" className="h-40 w-100" />
                    </div>
                    <div className=" bg-blue-500 text-center   text-white font-bold text-lg">
                        <p className=" text-white">Service Ready GPs</p>
                        <hr className=" border-white" />
                        <p className=" text-white">List of Service Ready Gram Pancahayt services on BharatNet. </p>

                    </div>
                </div>



            </div>





        </div>
    )
}