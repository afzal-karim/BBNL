import india from '../assets/india.png';
export default function Foot() {

    return (
        <div className="bg-blue-500 h-20 gap-12  text-black flex px-10">
            <div className="pt-3">
                <img src={india} alt="" />
            </div>
            <div className=" flex font-sembold text-white list-none gap-5">
                <li>Accesebility Option</li>
                <li>Disclaimer</li>
                <li>Privacy Policy</li>
                <li>Whistle Blower Policy</li>
                <li>Website Polices</li>
                <li>Copy wright Policy</li>
                <li>terms and Conditions</li>
                <li>help</li>
                
            </div>
            <div className=" text-white font-semibold">
                <p > Last update on 17/05/2025</p>
                <p> Visitor No:- 120499430</p>
            </div>
            
        </div>
    )
}