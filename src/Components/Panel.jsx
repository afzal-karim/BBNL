import Dig from '../assets/Dig.jpg';
import Machine from '../assets/Machine.jpg';
import Modi from '../assets/Modi.jpg';

export default function Panel() {
    return (
        <div className=" h-80 bg-slate-200 flex w-full gap-5 text-black font-bold text-xl text-center justify-center ">

            <div className=" pt-5 w-1/4 ">Video Gallery
                <hr className="border-2 border-green-600 " />
                <p className=" h-60">
                     <img className='w-full h-full' src={Modi} alt="" />
                </p>
            </div>
            <div className=" pt-5 w-1/4">News and Highlights
                <hr className="border-2 border-green-600" />
                <p className=" h-60">
                     <img className='w-full h-full' src={Dig} alt="" />
                </p>
            </div>
            <div className=" pt-5 w-1/4">Photo Gallery
                <hr className="border-2 border-green-600" />
                <p className=" h-60">
                    <img className='w-full h-full' src={Machine} alt="" />
                </p>
            </div>
        </div>
    )
}