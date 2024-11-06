import Link from "next/link";

export default function Contact(){
    return(
        <div id="contact" className="p-6 bg-black mx-auto py-10 sm:px-[40px]">
            <h3 className="font-medium text-2xl ml-[] text-white sm:text-4xl mt-[80px] sm:mt-[200px]">Contact Me</h3>
            <div className="bg-white w-[100px] h-[2px] sm:mt-[10px] sm:w-[150px]"></div>
           
            <div className="flex flex-col gap-8 sm:flex-row-reverse">
  <form className="flex flex-col gap-8 mt-[60px] text-white sm:px-[30px] sm:mt-[100px] sm:w-[700px] sm:ml-0 sm:max-w-full sm:mr-[20px]">
    <div className="grid grid-cols-1 gap-8 sm:flex sm:gap-x-[20px]">
      <input
        type="text"
        placeholder="Name"
        className="bg-transparent border-2 border-gray-400 rounded-[6px] px-[10px] py-[6px] sm:w-full sm:text-lg"
        required
      />
      <input
        type="text"
        placeholder="Email"
        className="bg-transparent border-2 border-gray-400 rounded-[6px] px-[10px] py-[6px] sm:w-full sm:text-lg"
        required
      />
    </div>

    <input
      type="text"
      placeholder="Subject"
      className="bg-transparent border-2 border-gray-400 rounded-[6px] px-[10px] py-[6px] sm:text-lg"
      required
    />

    <textarea
      rows={4}
      placeholder="Message"
      className="bg-transparent border-2 border-gray-400 rounded-[6px] px-[10px] py-[6px] sm:text-lg"
      required
    ></textarea>

    <div>
      <button className="bg-white text-black font-medium px-4 py-1 rounded-[5px] sm:text-xl sm:font-normal hover:bg-transparent hover:border-[1px] hover:text-white">
        Submit
      </button>
    </div>
  </form>

  {/* Social Icons Section */}
  <div className="flex gap-16 sm:flex-col sm:gap-12 ml-[22px] sm:ml-0 sm:mt-[100px] sm:mr-[750px] sm:text-6xl">
    <Link href="/" target="blank" className="sm:flex flex-row gap-4 hidden">
    <i className="fas fa-phone text-2xl text-white"></i>
    <span className="text-white hidden text-xl sm:block ">000-333-666</span>
    </Link>
    <Link href="https://instagram.com" target="blank" className="flex flex-row gap-4 sm:hidden">
    <i className="fab fa-instagram text-2xl text-white"></i>
    <span className="text-white hidden text-xl sm:block "></span>
    </Link>
    <Link href="https://pk.linkedin.com" target="blank" className="flex flex-row gap-4">
    <i className="fab fa-linkedin text-2xl text-white"></i>
    <span className="text-white hidden text-xl sm:block ">M.Sufyan/linkedin</span>
    </Link>
    <Link href="https://www.facebook.com" target="blank" className="flex flex-row gap-4">
    <i className="fab fa-facebook text-2xl text-white"></i>
    <span className="text-white hidden text-xl sm:block ">M.Sufyan/facebook</span>
    </Link>
    <Link href="https://www.x.com" target="blank" className="flex flex-row gap-4">
    <i className="fab fa-twitter text-2xl text-white"></i>
    <span className="text-white hidden text-xl sm:block ">M.Sufyan/twitter</span>
    </Link>
  </div>
</div>

        </div>
    )
};