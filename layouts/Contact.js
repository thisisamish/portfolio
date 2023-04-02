import Link from "next/link";

export default function Contact() {
  return (
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
  );
}
