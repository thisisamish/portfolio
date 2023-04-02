import { useState } from "react";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Navbar() {
  const [menuBar1Style, setMenuBar1Style] = useState(
    "border-t-2 border-white w-[30px] transition-all"
  );
  const [menuBar2Style, setMenuBar2Style] = useState(
    "border-t-2 border-white w-[30px] transition-all"
  );
  const [menuBar3Style, setMenuBar3Style] = useState(
    "border-t-2 border-white w-[30px] transition-all"
  );

  const [menuActive, setMenuActive] = useState(false);

  const [navListStyle, setNavListStyle] = useState("trasition-all hidden");

  const handleOnClick = () => {
    if (menuActive) {
      setMenuActive(false);
      setMenuBar1Style(
        "border-t-2 border-white w-[30px] transition-all duration-300"
      );
      setMenuBar2Style(
        "border-t-2 border-white w-[30px] transition-all duration-300"
      );
      setMenuBar3Style(
        "border-t-2 border-white w-[30px] transition-all duration-300"
      );

      setNavListStyle("transition-all hidden");
    } else {
      setMenuActive(true);
      setMenuBar1Style(
        (prev) => prev + " rotate-[36deg] translate-y-1 w-[37px]"
      );
      setMenuBar2Style((prev) => prev + " hidden");
      setMenuBar3Style(
        (prev) => prev + " -rotate-[36deg] w-[37px] -translate-y-[5px]"
      );

      setNavListStyle(
        "transition-all pt-6 flex items-end flex-col gap-6 visible"
      );
    }
  };
  return (
    <nav className="p-6 bg-black text-white">
      <div className="flex flex-wrap justify-between">
        <h1 className="text-2xl font-black tracking-wide">AMISH</h1>
        <button
          onClick={handleOnClick}
          className="flex flex-col items-center justify-center gap-2 sm:hidden transition-all"
        >
          <div className={menuBar1Style}></div>
          <div className={menuBar2Style}></div>
          <div className={menuBar3Style}></div>
        </button>
        <ul className="sm:flex sm:items-center sm:gap-6 hidden">
          {/* <li>
          <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
        </li> */}
          <li>
            <Link href="#projects" className="hover:text-[#c2c2c2]">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-[#c2c2c2]">
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="https://drive.google.com/file/d/1KFJAPKOJxEdilELGp0Wuig3LHjalccPx/view?usp=sharing"
              target="_blank"
              className="py-2.5 px-5 text-white hover:text-black transition-all font-semibold bg-black border-[1px] border-[#FFD700] hover:bg-[#FFD700] rounded-lg"
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>

      <ul className={navListStyle}>
        {/* <li>
        <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
      </li> */}
        <li>
          <Link href="#projects" className="hover:text-[#c2c2c2]">
            Projects
          </Link>
        </li>
        <li>
          <Link href="#contact" className="hover:text-[#c2c2c2]">
            Contact
          </Link>
        </li>
        {/* <li>
        <Link
          href="/"
          className="py-2.5 px-5 text-white hover:text-black transition-all font-semibold bg-black border-[1px] border-[#FFD700] hover:bg-[#FFD700] rounded-lg"
        >
          Resume
        </Link>
      </li> */}
      </ul>
    </nav>
  );
}
