interface texttype {
    item:string
}

export default function Button2(text:texttype){
    return(
        <>
        
        <button className="text-white bg-transparent w-[80px] h-[30px] py-[2px] px-[6px] border-[2px] hover:bg-white hover:text-black text-sm rounded-[10px] sm:text-xl sm:w-auto sm:h-[40px] transition-all duration-300 ease-in-out">{text.item}</button>
        
        </>
        )
};