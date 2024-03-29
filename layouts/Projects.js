import Image from "next/image";
import demo from "@/public/demo.webp";
import Link from "next/link";

export default function Projects() {
  return (
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
            <h3 className="text-3xl font-bold pb-4">Dev Support</h3>
            <ul className="flex gap-2">
              <li className="bg-white border-[1px] border-[#eaeaea] rounded-md px-2 py-1 text-sm">
                Next.js
              </li>
              <li className="bg-white border-[1px] border-[#eaeaea] rounded-md px-2 py-1 text-sm">
                Tailwind CSS
              </li>
              <li className="bg-white border-[1px] border-[#eaeaea] rounded-md px-2 py-1 text-sm">
                Firebase
              </li>
            </ul>
            <p className="pt-4">
              A full-stack blog application inspired by dev.to. Users can view
              others' blog posts as well as create their own. They can log in
              with their Google account and create a unique username. After
              logging in, they can create new blog posts and publish them for
              everyone to read. There's markdown support by default so
              formatting is really easy.
            </p>
            <div className="flex gap-2 pt-6">
              <Link
                href="https://github.com/thisisamish/dev-support"
                target="_blank"
                className="py-2 px-4 bg-black text-white shadow-gray-400 shadow-2xl rounded-lg border-[1px] border-black hover:bg-white hover:text-black transition-all flex gap-2 items-center justify-center"
              >
                View on GitHub
              </Link>
              <Link
                href="https://dev-support.vercel.app/"
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
              alt="journeys blog project decorative image"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="p-6">
            <h3 className="text-3xl font-bold pb-4">Renter</h3>
            <ul className="flex gap-2">
              <li className="bg-white border-[1px] border-[#eaeaea] rounded-md px-2 py-1 text-sm">
                Node.js
              </li>
              <li className="bg-white border-[1px] border-[#eaeaea] rounded-md px-2 py-1 text-sm">
                express.js
              </li>
              <li className="bg-white border-[1px] border-[#eaeaea] rounded-md px-2 py-1 text-sm">
                MongoDB
              </li>
            </ul>
            <p className="pt-4">
              A back-end server for a video renting store with full
              authentication support using JWT.
              <br />
              Four RESTful APIs - some of them open for all, some of them
              protected. All the routes have proper request validation and
              relevant middlewares. Visit the GitHub repository to know more
              about all the routes.
            </p>
            <div className="flex gap-2 pt-6">
              <Link
                href="https://github.com/thisisamish/renter"
                target="_blank"
                className="py-2 px-4 bg-black text-white shadow-gray-400 shadow-2xl rounded-lg border-[1px] border-black hover:bg-white hover:text-black transition-all flex gap-2 items-center justify-center"
              >
                View on GitHub
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="border-[1px] border-gray-300 hover:border-black rounded-xl max-w-[350px] transition-all">
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
        </div> */}

        {/* <div className="border-[1px] border-gray-300 hover:border-black rounded-xl max-w-[350px] transition-all">
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
              The classic Hangman game, built with React.js and TypeScript. Try
              to guess the correct word with as few mistakes as possible because
              each incorrect guess leads the poor man closer to getting hanged!
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
        </div> */}
      </div>
    </section>
  );
}
