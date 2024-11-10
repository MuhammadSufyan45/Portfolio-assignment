export default function Footer(){
    return(
        <div className="bg-white w-full h-[100px] p-2 flex flex-col items-center gap-y-[10px] sm:px-[24px] sm:py-[60px] sm:flex-row">
            
            <h3 className="text-black font-medium font-serif text-2xl sm:mb-[50px] sm:text-4xl">Portfolio</h3>
            <div className="flex flex-col items-center sm:ml-[650px]">
            <p className="text-black">Made with ♥ By Muhammad Sufyan</p>
            <p className="text-black ">© all rights reserved</p>
            </div>
        </div>
    )
};