import Image from "next/image";
import Hero2 from "../../../public/hero2.png";


export default function Hero(){
    return(
        <div id="home" className="bg-black w-full h-[700px] flex flex-col items-center px-[12px] sm:flex sm:flex-row sm:gap-x-[60px] sm:items-center sm:justify-between sm:p-[80px]">
            <div className="mt-[60px]">
                <Image src={Hero2} alt="Pic" className="w-[350px] h-350px] rounded-full border-b-4 border-white sm:w-[600px] sm:h-[600px] sm:ml-[60px] mb-[60px]"/>
            </div>
            <div className=" flex flex-col gap-y-[20px] items-center sm:mr-[220px]">
                <div className="mb-[18px]">
                <h2 className="text-white font-medium text-center text-[20px] sm:text-[50px]">Hi! I Am Muhammad Sufyan</h2>
                <h3 className="text-white text-center font-light sm:text-[20px]">Front end Developer</h3>
                </div>
                <div className=" flex gap-x-[20px] items-center sm:gap-x-[40px]">
                    <button className="w-[100px] h-[35px] py-[4px] px-[8px] bg-white text-black hover:bg-transparent hover:text-white hover:border-[2px] sm:w-[150px] sm:h-[40px] sm:py-0 sm:px-0 sm:text-xl">Contact</button>
                    <button className="text-white w-[110px] h-[35px] py-[2px] px-[6px] border-[2px] hover:bg-white hover:text-black sm:w-[150px] sm:h-[40px] sm:py-0 sm:px-0 sm:text-xl">Learn More!</button>
                </div>
            </div>
        </div>
    )
};