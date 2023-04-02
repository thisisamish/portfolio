import Link from "next/link";

export default function Footer() {
  return (
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
  );
}
