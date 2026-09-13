

import Logo from "../assets/logo-text.png"
const Nav = () => {
    return (
        <div className = "border-b border-gray-300">
        <nav className= "flex justify-between gap-4 container mx-auto py-4 ">
    <img src={Logo} alt="" />

      <ul className= "flex gap-4 items-center ">
        <li><span className="text-[#DB2777]">Home</span></li>
        <li>Technologies</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="flex gap-6 items-center">
        <button>Sign In</button>
        <button className="bg-[#DB2777] rounded-3xl px-4 py-2 text-white">Sign Up</button>
      </div>
    </nav>
    </div>
    );
};

export default Nav;