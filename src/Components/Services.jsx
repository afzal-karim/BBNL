import Central from '../assets/Central.jpg';
import NIC from '../assets/NIC.jpg';
import swach from '../assets/swach.jpg';
import Telecom from '../assets/Telecom.jpg';
import tender from '../assets/tender.jpg';
import Bharat from '../assets/Bharat.jpg';
import Cdot from '../assets/Cdot.jpeg';





export default function Services() {
    return (
        <div className="bg-slate-400 h-20 flex gap-2 pt-4 pl-4">
            <div className=""><img src={Central} alt="" />

            </div>

            <div className=" "><img src={NIC} alt="" />

            </div>

            <div className=""><img src={swach} alt="" />

            </div>

            <div className=""><img src={Telecom} alt="" />

            </div>

            <div className=""><img src={tender} alt="" />

            </div>

            <div className=""><img src={Bharat} alt="" />

            </div>

            <div className=""><img src={Cdot} alt="" />

            </div>

            
        </div>
    )
}