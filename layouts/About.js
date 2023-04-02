import Link from "next/link";
import Image from "next/image";
import amish from "@/public/amish.jpg";

export default function About() {
  return (
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
          Creating beautiful, scalable and flexible frontend for websites is my
          passion. I am experienced in using Next.js with Firebase and Tailwind
          to create full-stack web applications. I'm also framework-agnostic so
          I can easily shift to any new technology in a couple weeks.
        </p>
        <p className="text-[#767676] font-medium mb-4">
          I believe that hard work, consistency and collaboration are the key to
          success. I love meeting new people and talking about all things tech,
          so if you have a project to collaborate on, need a hackathon partner
          or just want to have a good chat, hit me up on any social media. I
          would really like that.
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
  );
}
