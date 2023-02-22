import Head from "next/head";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import amish from "@/public/amish.jpg";
import demo from "@/public/demo.webp";
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
  SiTailwindcss,
  SiVisualstudiocode,
  SiNextdotjs,
  SiGithub,
} from "react-icons/si";
import { useState } from "react";

export default function Home() {
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
      setMenuBar1Style("border-t-2 border-white w-[30px] transition-all");
      setMenuBar2Style("border-t-2 border-white w-[30px] transition-all");
      setMenuBar3Style("border-t-2 border-white w-[30px] transition-all");

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
    <>
      <Head>
        <title>Amish Verma | Portfolio</title>
        <meta name="description" content="Amish Verma's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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

      <main>
        {/* Landing */}
        {/* <section
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
          }}
        > */}
        <section className="flex items-center flex-col md:flex-row justify-center md:justify-between py-36 mx-auto md:max-w-2xl lg:max-w-4xl px-10 md:px-0">
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

          <div className="rounded-full w-80 h-80 aspect-[1/1] overflow-hidden">
            <Image
              src={amish}
              alt="amish's photo, smiling"
              style={{ objectFit: "cover" }}
            />
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
              engineering at JSS Academy of Technical Education, Noida.
              <br />
              Creating beautiful, scalable and flexible frontend for websites is
              my passion. I am experienced in using Next.js with Firebase and
              Tailwind to create full-stack web applications. I'm also
              framework-agnostic so I can easily shift to any new technology in
              a couple weeks.
            </p>
            <p className="text-[#767676] font-medium mb-4">
              I believe that hard work, consistency and collaboration are the
              key to success. I love meeting new people and talking about all
              things tech, so if you have a project to collaborate on, need a
              hackathon partner or just want to have a good chat, hit me up on
              any social media. I would really like that.
            </p>
            <p className="text-[#767676] font-medium mb-6">
              I am also actively looking for internships so if you have an
              opportunity for me, please contact me on the below links. I'd be
              highly indebted.
            </p>
            <ul className="flex flex-wrap gap-4 text-lg">
              <li>
                <Link
                  href="mailto:amishhverma@gmail.com"
                  target="_blank"
                  className="border-r-2 border-black pr-4 hover:text-[#767676]"
                >
                  Email
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/amishverma/"
                  target="_blank"
                  className="border-r-2 border-black pr-4 hover:text-[#767676]"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/thisisamish"
                  target="_blank"
                  className="border-r-2 border-black pr-4 hover:text-[#767676]"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/thisisamish"
                  target="_blank"
                  className="border-r-2 border-black pr-4 hover:text-[#767676]"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/thisisamish/"
                  target="_blank"
                  className="hover:text-[#767676]"
                >
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
          <div className="ml-10 sm:ml-20 md:ml-0 flex flex-col md:flex-row gap-12 justify-center items-stretch mx-auto">
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
                  <SiTailwindcss />
                  Tailwind
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
                  <SiGithub />
                  GitHub
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
        <section
          id="projects"
          className="bg-[#fafafa] border-t-[1px] border-t-[#eaeaea] py-16 px-10"
        >
          <h2 className="text-[2rem] tracking-[-1px] mb-12 font-bold text-center">
            Projects I've Made
          </h2>
          <div className=" max-w-6xl flex gap-6 flex-wrap items-center justify-center mx-auto">
            <div className="border-[1px] border-gray-300 hover:border-black rounded-xl max-w-[350px] transition-all">
              <div className="h-[150px] overflow-hidden rounded-t-xl">
                <Image
                  src={demo}
                  alt="journeys blog project decorative image"
                  style={{ objectFit: "cover" }}
                />
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
                  A blog app for developers to share their programming journey.
                  Built using Next.js and Firebase. Supports authorization with
                  Google. Once logged in, users can create new posts, read and
                  like others' posts.
                </p>
                <div className="flex gap-2 pt-6">
                  <Link
                    href="https://github.com/thisisamish/journeys-blog"
                    target="_blank"
                    className="py-2 px-4 bg-black text-white shadow-gray-400 shadow-2xl rounded-lg border-[1px] border-black hover:bg-white hover:text-black transition-all flex gap-2 items-center justify-center"
                  >
                    View on GitHub
                  </Link>
                  <Link
                    href="https://journeys-blog.vercel.app/"
                    target="_blank"
                    className="py-2 px-4 bg-black text-white shadow-gray-400 shadow-2xl rounded-lg border-[1px] border-black hover:bg-white hover:text-black transition-all flex gap-2 items-center justify-center"
                  >
                    Open Website
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-[1px] border-gray-300 hover:border-black rounded-xl max-w-[350px] transition-all">
              <div className="h-[150px] overflow-hidden rounded-t-xl">
                <Image
                  src={demo}
                  alt="wordle clone project decorative image"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-3xl font-bold pb-4">Wordle Clone</h3>
                <ul className="flex gap-2">
                  <li className="bg-white border-[1px] border-[#eaeaea] rounded-md px-2 py-1 text-sm">
                    React.js
                  </li>
                </ul>
                <p className="pt-4">
                  Clone of the smash-hit game Wordle. Guess a 5-letter word in 6
                  tries. Extremely addictive. Developed using React.js.
                  <br />
                  <br />
                  <br />
                </p>
                <div className="flex gap-2 pt-6">
                  <Link
                    href="https://github.com/thisisamish/wordle"
                    target="_blank"
                    className="py-2 px-4 bg-black text-white shadow-gray-400 shadow-2xl rounded-lg border-[1px] border-black hover:bg-white hover:text-black transition-all flex gap-2 items-center justify-center"
                  >
                    View on GitHub
                  </Link>
                  <Link
                    href="https://wordle-thisisamish.netlify.app/"
                    target="_blank"
                    className="py-2 px-4 bg-black text-white shadow-gray-400 shadow-2xl rounded-lg border-[1px] border-black hover:bg-white hover:text-black transition-all flex gap-2 items-center justify-center"
                  >
                    Open Website
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-[1px] border-gray-300 hover:border-black rounded-xl max-w-[350px] transition-all">
              <div className="h-[150px] overflow-hidden rounded-t-xl">
                <Image
                  src={demo}
                  alt="notes app project decorative image"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-3xl font-bold pb-4">Hangman</h3>
                <ul className="flex gap-2">
                  <li className="bg-white border-[1px] border-[#eaeaea] rounded-md px-2 py-1 text-sm">
                    React.js
                  </li>
                  <li className="bg-white border-[1px] border-[#eaeaea] rounded-md px-2 py-1 text-sm">
                    TypeScript
                  </li>
                </ul>
                <p className="pt-4">
                  The classic Hangman game, built with React.js and TypeScript.
                  Try to guess the correct word with as few mistakes as possible
                  because each incorrect guess leads the poor man closer to
                  getting hanged!
                </p>
                <div className="flex gap-2 pt-6">
                  <Link
                    href="https://github.com/thisisamish/hangman"
                    target="_blank"
                    className="py-2 px-4 bg-black text-white shadow-gray-400 shadow-2xl rounded-lg border-[1px] border-black hover:bg-white hover:text-black transition-all flex gap-2 items-center justify-center"
                  >
                    View on GitHub
                  </Link>
                  <Link
                    href="https://hangman-thisisamish.netlify.app/"
                    target="_blank"
                    className="py-2 px-4 bg-black text-white shadow-gray-400 shadow-2xl rounded-lg border-[1px] border-black hover:bg-white hover:text-black transition-all flex gap-2 items-center justify-center"
                  >
                    Open Website
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="py-32 px-10 border-t-[1px] border-t-[#eaeaea] text-5xl font-medium tracking-tighter xl:pl-44 md:pl-28"
        >
          <h2 className="mb-2">Let's get to know each other.</h2>
          <Link
            href="mailto:amishhverma@gmail.com"
            className="hover:text-[#b3b3b3] text-[#969696]"
          >
            Get in touch.
          </Link>
        </section>
      </main>

      <footer className="px-6 py-8 bg-black flex items-end justify-between text-[#E6E6E6] text-sm">
        <h3>© Amish Verma 2023</h3>
        <ul className="sm:flex grid grid-cols-2 sm:flex-row gap-2 sm:gap-4">
          <li>
            <Link
              href="https://www.linkedin.com/in/amishverma/"
              target="_blank"
              className="hover:text-[#bfbfbf]"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/thisisamish"
              target="_blank"
              className="hover:text-[#bfbfbf]"
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/thisisamish"
              target="_blank"
              className="hover:text-[#bfbfbf]"
            >
              Twitter
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/thisisamish/"
              target="_blank"
              className="hover:text-[#bfbfbf]"
            >
              Instagram
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
}
