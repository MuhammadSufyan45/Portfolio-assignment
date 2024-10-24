import Button from "./button";

export default function Contact(){
    return(
        <div id="contact" className="p-6 bg-black mx-auto py-10 sm:px-[40px]">
            <h3 className="font-medium text-2xl ml-[] text-white sm:text-4xl mt-[80px] sm:mt-[200px]">Contact Me</h3>
            <div className="bg-white w-[100px] h-[2px] sm:mt-[10px] sm:w-[150px]"></div>
           
           <form className="flex flex-col gap-8 mt-[60px] text-white sm:px-[30px] sm:mt-[100px]">

            <div className="grid grid-cols-1 gap-8 sm:flex sm:gap-x-[20px]">
                <input type="text" placeholder="Name" className="bg-transparent border-2 border-gray-400 rounded-[6px] px-[10px] py-[6px] sm:w-full sm:text-lg" required/>
                <input type="text" placeholder="Email" className="bg-transparent border-2 border-gray-400 rounded-[6px] px-[10px] py-[6px] sm:w-full sm:text-lg" required/>
            </div>

            <input type="text" placeholder="Subject" className="bg-transparent border-2 border-gray-400 rounded-[6px] px-[10px] py-[6px] sm:text-lg" required/>
           
           <textarea rows={4} placeholder="Message" className="bg-transparent border-2 border-gray-400 rounded-[6px] px-[10px] py-[6px] sm:text-lg" required></textarea>

           <div>
            <button className="bg-white text-black font-medium px-4 py-1 rounded-[5px] sm:text-xl sm:font-normal hover:bg-transparent hover:border-[1px] hover:text-white">Submit</button>
            {/* <Button item="Submit"/> */}
           </div>
           
           </form>
        </div>
    )
};