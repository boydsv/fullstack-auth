import Link from "next/link";

const OutlinedLink = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link
      href={href}
      className={`h-12 mt-4 w-full hover:bg-white hover:text-black rounded-md border-2 text-white text-sm font-medium flex items-center justify-center cursor-pointer transition-none!`}
    >
      {text}
    </Link>
  );
};

export default OutlinedLink;
