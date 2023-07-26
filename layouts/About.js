import Link from "next/link";
import Image from "next/image";
import about from "@/public/about.webp";

export default function About() {
  return (
    <section className="bg-[#fafafa] border-t-[1px] border-t-[#eaeaea] py-16">
      <div className="grid gap-6 lg:gap-0 place-items-center lg:grid-cols-[1fr,1.6fr] xl:mr-16 mx-6 lg:mx-0">
        <Image
          className="rounded-3xl"
          src={about}
          height={560}
        ></Image>
        <div>
          <p className="text-4xl font-bold mb-4">
            My name is Amish Verma. I’m a final year engineering undergrad. 👨🏻‍🎓
          </p>
          <p className="text-[#767676] text-xl mb-4">
            As far as I can remember, I've always been fascinated with
            technology. I remember I used to read about all the hot new apps on
            the Play Store in the Sunday newspaper. I would keep clippings of
            these "tech columns" in a hope that one day, I would also create
            some really cool apps like that. 🤞🏻
          </p>
          <p className="text-[#767676] text-xl mb-4">
            When I first started learning coding in college, I remember being
            confused and sometimes, even frustrated. But I never stopped. I
            learnt C, then Python, then C++ and then finally when I started
            learning web development, I felt that same enthusiasm that I used to
            get when I was a child reading those tech columns in Sunday
            newspapers. Since then, I learnt the{" "}
            <span className="font-bold text-black">complete MERN stack</span>{" "}
            and now I'm a{" "}
            <span className="font-bold text-black">full-stack developer</span>.
            I think this is the best job in the world and I really enjoy doing
            it! ❣️
          </p>
          <p className="text-[#767676] text-xl mb-6">
            In my spare time, I like to read books and watch movies/series. I
            love dissecting cinema. Also, noodles. 🍜😋
          </p>
          <ul className="flex flex-wrap gap-4 text-xl">
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
      </div>
    </section>
  );
}
