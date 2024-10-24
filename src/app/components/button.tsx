import react from "react";

interface texttype {
    item:string
}

export default function Button(text:texttype){
    return(
        <>
        
        <button className=" text-black bg-white w-[80px] h-[30px] py-[2px] px-[6px] border-[2px] hover:bg-transparent hover:text-white text-sm rounded-[10px] sm:text-xl sm:w-auto sm:h-[40px]">{text.item}</button>
        
        </>
        )
};