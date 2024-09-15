import Link from "next/link";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";

export default function MemBox({ name, role, img, baImg, linkedin, insta, github }) {
    return (
        <div
            className="bg-gray-100 h-72 w-56 rounded-xl text-black relative overflow-hidden hover:scale-110 shadow-lg shadow-orange-100 hover:shadow-2xl hover:shadow-lime-300 transition-all hover:text-lime-700"
            style={{backgroundImage: `url(${baImg})`, backgroundSize: 'cover',backgroundPosition: 'center',margin: '0 auto', boxSizing: 'border-box'}}>
            <div className="bg-black flex items-center justify-center h-44 w-44 backdrop-blur-lg rounded-full absolute top-4 left-1/2 transform -translate-x-1/2">
                <img src={img} alt='photo' className="h-40 w-40 object-cover rounded-full hover:rotate-[360deg] transition-all duration-[2100ms]" />
            </div>
            <div className="absolute bottom-0 w-full h-20 bg-white bg-opacity-75 backdrop-blur-sm text-center p-1">
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="text-md">{role}</p>
                <div className="grid grid-cols-3 gap-2"> 
                    <Link href={linkedin} className="flex justify-center items-center">
                        <RxLinkedinLogo />
                    </Link>
                    <Link href={insta} className="flex justify-center items-center">
                        <FaInstagram />
                    </Link>
                    <Link href={insta} className="flex justify-center items-center">
                        <FaGithub />
                    </Link>
                </div>
            </div>
        </div>
    );
}
