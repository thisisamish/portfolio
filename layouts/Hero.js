import amish from "@/public/amish.jpg";
import { FaFileDownload } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex items-center flex-col md:flex-row justify-center md:justify-between h-screen mx-auto md:max-w-2xl lg:max-w-4xl px-10 md:px-0">
      <div>
        <div className="md:text-left text-center">
          <h2 className="text-6xl font-bold tracking-tight mb-6">
            Hi! I'm Amish.
          </h2>

          <p className="text-lg font-medium text-gray-500 mb-5">
            Frontend Web Developer
            <br />
            skilled in React.js and Next.js
          </p>

          <Link
            className="mx-auto md:mx-0 text-lg py-4 px-6 sm:px-8 bg-black text-white shadow-gray-400 shadow-2xl rounded-lg mb-10 md:mb-0 border-[1px] border-black hover:bg-white hover:text-black transition-all flex gap-2 items-center justify-center"
            href="https://drive.google.com/file/d/1KFJAPKOJxEdilELGp0Wuig3LHjalccPx/view?usp=sharing"
            target="_blank"
          >
            <FaFileDownload />
            Download My Resume
          </Link>
        </div>

        {/* <div className="text-5xl flex gap-5 mr-48">
        <AiFillTwitterCircle />
        <AiFillLinkedin />
        <AiFillInstagram />
      </div> */}
      </div>

      <div className="rounded-full w-64 h-64 sm:w-80 sm:h-80 aspect-[1/1] overflow-hidden">
        <Image
          src={amish}
          alt="amish's photo, smiling"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
}
