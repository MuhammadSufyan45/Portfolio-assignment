import Image from "next/image";
import Aboutimg from "../../../public/aboutimg.png";
import Button2 from "../components/button2";



export default function About(){
    return(
        <div id="about" className="bg-black w-full h-auto py-[40px] sm:flex sm:flex-col sm:gap-x-[600px]">
            <div className="pl-6 sm:pl-[40px] sm:mt-[80px]">
               <h3 className="text-white font-medium text-2xl sm:text-4xl sm:mt-[40px]">About Me</h3>
               <div className="bg-white w-[90px] sm:w-[130px] h-[2px] mt-[4px]"></div>
            </div>
            <div className="p-3 flex flex-col gap-y-[4px] sm:p-4 sm:flex sm:flex-row-reverse">
                <div>
                <Image src={Aboutimg} alt="About" className="border-b-2 rounded-[40px] sm:w-[600px] sm:h-[600px] sm:mt-[100px] sm:mr-[80px]"/>
                </div>

                <div className="sm:p-4">
             <p className="text-white mt-[10px] ml-[20px] sm:w-[800px] sm:h-auto sm:text-2xl sm:mt-[250px] sm:mr-[360px]">&quot;Myself <b>Muhammad Sufyan</b> a pakistani Intermediate student 
            living in karachi.I have interest in tech world currently i am enrolled in <b>GIAIC</b> a great initiative took by governor of sindh porvince.I am always eager to learn and contribute to my society and country Thanks&quot;</p>
            <div className="sm:flex sm:grid-cols-2 sm:gap-x-[100px] sm:items-center sm:mt-[150px]">  
            <div className="p-7">
                <h4 className="text-white font-medium text-xl sm:text-4xl">Skills:</h4>
                <div className="border-2 rounded-[20px] grid grid-cols-3 gap-y-[20px] p-4 mt-[10px] sm:p-8 sm:h-[180px] sm:gap-x-[30px]">
                <Button2 item="Next.js"/>
                <Button2 item="Tailwind"/>
                <Button2 item="Html"/>
                <Button2 item="Css"/>
                <Button2 item="Typescript"/>
                </div>
            </div>

            <div className="p-7 mt-[8px]">
                <h4 className="text-white font-medium text-xl sm:text-4xl">Hobbies:</h4>
                <div className="border-2 rounded-[20px] grid grid-cols-3 gap-y-[20px] p-4 mt-[10px] sm:p-8 sm:h-[180px] sm:gap-x-[30px]">
                <Button2 item="Reading"/>
                <Button2 item="Learning"/>
                <Button2 item="Fitness"/>
                <Button2 item="Gaming"/>
                <Button2 item="Adventure"/>
                
                 </div>
            </div>
            </div>
            </div>
            </div>

       
        </div>
    )
};