import Head from "next/head";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import amish from "@/public/amish.jpg";
import demo from "@/public/demo.jpg";
import bg from "@/public/bg.webp";
import { FaFileDownload } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiHtml5,
  SiCss3,
  SiGit,
  SiFirebase,
  SiCplusplus,
  SiFlask,
  SiVisualstudiocode,
  SiNextdotjs,
} from "react-icons/si";

export default function Home() {
  return (
    <>
      <Head>
        <title>Amish Verma | Portfolio</title>
        <meta name="description" content="Amish Verma's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="p-6 bg-black flex flex-wrap justify-between text-white">
        <h1 className="text-2xl font-black tracking-wide">AMISH</h1>
        <ul className="flex items-center gap-6">
          <li>
            <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
          </li>
          <li>
            <Link href="/" className="">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/" className="">
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="py-2.5 px-5 text-white hover:text-black transition-all font-semibold bg-black border-[1px] border-[#FFD700] hover:bg-[#FFD700] rounded-lg"
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>

      <main>
        {/* Landing */}
        {/* <section
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
          }}
        > */}
        <section className="flex items-center flex-col md:flex-row justify-center md:justify-between py-36 mx-auto md:max-w-2xl lg:max-w-4xl">
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

              <button className="text-lg py-4 px-8 bg-black text-white shadow-gray-400 shadow-2xl rounded-lg mb-10 md:mb-0 border-[1px] border-black hover:bg-white hover:text-black transition-all flex gap-2 items-center justify-center">
                <FaFileDownload />
                Download My Resume
              </button>
            </div>

            {/* <div className="text-5xl flex gap-5 mr-48">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillInstagram />
            </div> */}
          </div>

          <div className="rounded-full w-80 h-80 aspect-[1/1] overflow-hidden">
            <Image src={amish} style={{ objectFit: "cover" }} />
          </div>
        </section>
        {/* </section> */}

        {/* About Me */}
        <section className="bg-[#fafafa] border-t-[1px] border-t-[#eaeaea] py-16">
          <div className="md:max-w-4xl mx-auto px-10 md:px-0">
            <p className="text-4xl font-bold mb-4">
              My name is Amish Verma, I’m a third-year engineering undergrad
              student.
            </p>
            <p className="text-[#767676] font-medium mb-4">
              I was born in the holy city of Ayodhya and I'm currently studying
              engineering at JSS Academy of Technical Education, Noida. Creating
              beautiful, scalable and flexible frontend for websites is my
              passion. Although I'm deft in React.js and Next.js, I can just as
              easily migrate to other libraries and frameworks with ease. I also
              have experience in using Firebase.
            </p>
            <p className="text-[#767676] font-medium mb-4">
              I believe that hard work, consistency and collaboration are the
              key to success and I always work with these values.
            </p>
            <p className="text-[#767676] font-medium mb-6">
              I love meeting new people, so if you have a project to collaborate
              on or just want to chat about all things tech, I'm always ready
              for that. I am also actively looking for internships so if you
              have an opportunity for me, please contact me on the below links.
            </p>
            <ul className="flex flex-wrap gap-4 text-lg">
              <li>
                <Link
                  href="/"
                  className="border-r-2 border-black pr-4 hover:text-[#767676]"
                >
                  Email
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="border-r-2 border-black pr-4 hover:text-[#767676]"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="border-r-2 border-black pr-4 hover:text-[#767676]"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="border-r-2 border-black pr-4 hover:text-[#767676]"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#767676]">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section className="py-16 px-10 border-t-[1px] border-t-[#eaeaea]">
          <h2 className="text-[2rem] tracking-[-1px] mb-12 font-bold text-center">
            Skills
          </h2>
          <div className="flex flex-col md:flex-row gap-12 justify-center md:items-stretch items-center mx-auto">
            {/* Languages */}
            <div className="md:border-r-2 md:border-gray-300 md:pr-24">
              <h3 className="text-2xl font-medium mb-6">
                Programming Languages
              </h3>
              <ul>
                <li className="py-1 mb-2 mr-2 px-4 bg-[#fafafa] border-[1px] border-[#eaeaea] rounded-xl max-w-fit flex items-center gap-2 justify-center text-lg">
                  <SiHtml5 />
                  HTML
                </li>
                <li className="py-1 mb-2 mr-2 px-4 bg-[#fafafa] border-[1px] border-[#eaeaea] rounded-xl max-w-fit flex items-center gap-2 justify-center text-lg">
                  <SiCss3 />
                  CSS
                </li>
                <li className="py-1 mb-2 mr-2 px-4 bg-[#fafafa] border-[1px] border-[#eaeaea] rounded-xl max-w-fit flex items-center gap-2 justify-center text-lg">
                  <SiJavascript />
                  JavaScript
                </li>
                <li className="py-1 mb-2 mr-2 px-4 bg-[#fafafa] border-[1px] border-[#eaeaea] rounded-xl max-w-fit flex items-center gap-2 justify-center text-lg">
                  <SiTypescript />
                  TypeScript
                </li>
                <li className="py-1 mb-2 mr-2 px-4 bg-[#fafafa] border-[1px] border-[#eaeaea] rounded-xl max-w-fit flex items-center gap-2 justify-center text-lg">
                  <SiCplusplus />
                  C++
                </li>
                <li className="py-1 mb-2 mr-2 px-4 bg-[#fafafa] border-[1px] border-[#eaeaea] rounded-xl max-w-fit flex items-center gap-2 justify-center text-lg">
                  <SiPython />
                  Python
                </li>
              </ul>
            </div>

            {/* Web Frameworks and Libraries */}
            <div className="md:border-r-2 md:border-gray-300 md:pr-12">
              <h3 className="text-2xl font-medium mb-6">
                Web Frameworks and Libraries
              </h3>
              <ul>
                <li className="py-1 mb-2 mr-2 px-4 bg-[#fafafa] border-[1px] border-[#eaeaea] rounded-xl max-w-fit flex items-center gap-2 justify-center text-lg">
                  <SiReact />
                  React.js
                </li>
                <li className="py-1 mb-2 mr-2 px-4 bg-[#fafafa] border-[1px] border-[#eaeaea] rounded-xl max-w-fit flex items-center gap-2 justify-center text-lg">
                  <SiNextdotjs />
                  Next.js
                </li>
                <li className="py-1 mb-2 mr-2 px-4 bg-[#fafafa] border-[1px] border-[#eaeaea] rounded-xl max-w-fit flex items-center gap-2 justify-center text-lg">
                  <SiFlask />
                  Flask
                </li>
              </ul>
            </div>

            {/* Other Tools */}
            <div>
              <h3 className="text-2xl font-medium mb-6">Other Tools</h3>
              <ul>
                <li className="py-1 mb-2 mr-2 px-4 bg-[#fafafa] border-[1px] border-[#eaeaea] rounded-xl max-w-fit flex items-center gap-2 justify-center text-lg">
                  <SiGit />
                  Git
                </li>
                <li className="py-1 mb-2 mr-2 px-4 bg-[#fafafa] border-[1px] border-[#eaeaea] rounded-xl max-w-fit flex items-center gap-2 justify-center text-lg">
                  <SiFirebase />
                  Firebase
                </li>
                <li className="py-1 mb-2 mr-2 px-4 bg-[#fafafa] border-[1px] border-[#eaeaea] rounded-xl max-w-fit flex items-center gap-2 justify-center text-lg">
                  <SiVisualstudiocode />
                  VS Code
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="bg-[#fafafa] border-t-[1px] border-t-[#eaeaea] py-16 px-10">
          <h2 className="text-[2rem] tracking-[-1px] mb-12 font-bold text-center">
            Projects I've Made
          </h2>
          <div className=" max-w-6xl flex gap-6 flex-wrap items-center justify-center mx-auto">
            <div className="border-[1px] border-gray-300 hover:border-black rounded-xl max-w-[350px] transition-all">
              <div className="h-[150px] overflow-hidden rounded-t-xl">
                <Image src={demo} style={{ objectFit: "cover" }} />
              </div>
              <div className="p-6">
                <h3 className="text-3xl font-bold pb-4">Journeys Blog</h3>
                <ul className="flex gap-2">
                  <li className="bg-white border-[1px] border-[#eaeaea] rounded-md px-2 py-1 text-sm">
                    Next.js
                  </li>
                  <li className="bg-white border-[1px] border-[#eaeaea] rounded-md px-2 py-1 text-sm">
                    Firebase
                  </li>
                </ul>
                <p className="pt-4">
                  A blog app built using Next.js and Firebase. Deployed on
                  Vercel. Supports authorization with Google. Users can create,
                  read and like posts.
                </p>
                <div className="flex gap-2 pt-6">
                  <Link
                    href="/"
                    className="py-2 px-4 bg-black text-white shadow-gray-400 shadow-2xl rounded-lg mb-10 md:mb-0 border-[1px] border-black hover:bg-white hover:text-black transition-all flex gap-2 items-center justify-center"
                  >
                    View on GitHub
                  </Link>
                  <Link
                    href="/"
                    className="py-2 px-4 bg-black text-white shadow-gray-400 shadow-2xl rounded-lg mb-10 md:mb-0 border-[1px] border-black hover:bg-white hover:text-black transition-all flex gap-2 items-center justify-center"
                  >
                    Open Website
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-[1px] border-gray-300 hover:border-black rounded-xl max-w-[350px] transition-all">
              <div className="h-[150px] overflow-hidden rounded-t-xl">
                <Image src={demo} style={{ objectFit: "cover" }} />
              </div>
              <div className="p-6">
                <h3 className="text-3xl font-bold pb-4">Wordle Clone</h3>
                <ul className="flex gap-2">
                  <li className="bg-white border-[1px] border-[#eaeaea] rounded-md px-2 py-1 text-sm">
                    React.js
                  </li>
                </ul>
                <p className="pt-4">
                  A blog app built using Next.js and Firebase. Deployed on
                  Vercel. Supports authorization with Google. Users can create,
                  read and like posts.
                </p>
                <div className="flex gap-2 pt-6">
                  <Link
                    href="/"
                    className="py-2 px-4 bg-black text-white shadow-gray-400 shadow-2xl rounded-lg mb-10 md:mb-0 border-[1px] border-black hover:bg-white hover:text-black transition-all flex gap-2 items-center justify-center"
                  >
                    View on GitHub
                  </Link>
                  <Link
                    href="/"
                    className="py-2 px-4 bg-black text-white shadow-gray-400 shadow-2xl rounded-lg mb-10 md:mb-0 border-[1px] border-black hover:bg-white hover:text-black transition-all flex gap-2 items-center justify-center"
                  >
                    Open Website
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-[1px] border-gray-300 hover:border-black rounded-xl max-w-[350px] transition-all">
              <div className="h-[150px] overflow-hidden rounded-t-xl">
                <Image src={demo} style={{ objectFit: "cover" }} />
              </div>
              <div className="p-6">
                <h3 className="text-3xl font-bold pb-4">Notes App</h3>
                <ul className="flex gap-2">
                  <li className="bg-white border-[1px] border-[#eaeaea] rounded-md px-2 py-1 text-sm">
                    React.js
                  </li>
                  <li className="bg-white border-[1px] border-[#eaeaea] rounded-md px-2 py-1 text-sm">
                    TypeScript
                  </li>
                </ul>
                <p className="pt-4">
                  A blog app built using Next.js and Firebase. Deployed on
                  Vercel. Supports authorization with Google. Users can create,
                  read and like posts.
                </p>
                <div className="flex gap-2 pt-6">
                  <Link
                    href="/"
                    className="py-2 px-4 bg-black text-white shadow-gray-400 shadow-2xl rounded-lg mb-10 md:mb-0 border-[1px] border-black hover:bg-white hover:text-black transition-all flex gap-2 items-center justify-center"
                  >
                    View on GitHub
                  </Link>
                  <Link
                    href="/"
                    className="py-2 px-4 bg-black text-white shadow-gray-400 shadow-2xl rounded-lg mb-10 md:mb-0 border-[1px] border-black hover:bg-white hover:text-black transition-all flex gap-2 items-center justify-center"
                  >
                    Open Website
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-32 px-10 border-t-[1px] border-t-[#eaeaea] text-5xl font-medium tracking-tighter xl:pl-44 md:pl-28">
          <h2 className="mb-2">Let's get to know each other.</h2>
          <Link href="/" className="hover:text-[#b3b3b3] text-[#969696]">
            Get in touch.
          </Link>
        </section>
      </main>

      <footer className="px-6 py-8 bg-black flex items-end justify-between text-[#E6E6E6] text-sm">
        <h3>© Amish Verma 2023</h3>
        <ul className="sm:flex grid grid-cols-2 sm:flex-row gap-2 sm:gap-4">
          <li>
            <Link href="/">LinkedIn</Link>
          </li>
          <li>
            <Link href="/">GitHub</Link>
          </li>
          <li>
            <Link href="/">Twitter</Link>
          </li>
          <li>
            <Link href="/">Instagram</Link>
          </li>
        </ul>
      </footer>
    </>
  );
}
