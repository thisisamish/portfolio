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

export default function Skills() {
  return (
    <section className="py-16 px-10 border-t-[1px] border-t-[#eaeaea]">
      <h2 className="text-[2rem] tracking-[-1px] mb-12 font-bold text-center">
        Skills
      </h2>
      <div className="ml-10 sm:ml-20 md:ml-0 flex flex-col md:flex-row gap-12 justify-center items-stretch mx-auto">
        {/* Languages */}
        <div className="md:border-r-2 md:border-gray-300 md:pr-24">
          <h3 className="text-2xl font-medium mb-6">Programming Languages</h3>
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
  );
}
