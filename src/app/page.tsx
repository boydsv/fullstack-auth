import ShinyText from "@/components/ShinyText";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <main className="flex flex-col items-start max-w-7xl h-dvh md:h-auto mx-auto w-full gap-6">
      <div className="w-full flex flex-col md:flex-row justify-between">
        <ShinyText
          text={"Full-Stack Auth App"}
          speed={2}
          delay={0}
          color="#b5b5b5"
          shineColor="#ffffff"
          spread={120}
          direction="left"
          yoyo={false}
          pauseOnHover={false}
          disabled={false}
          className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
        />

        <div className="flex justify-center items-center gap-2">
          <Link
            href={"/sign-up"}
            type="submit"
            className={`h-12 mt-4 pl-6 pr-5 text-lg flex justify-center items-center gap-2 rounded-md font-medium text-white hover:text-white/60 cursor-pointer transition-none!`}
          >
            Sign up
            <ArrowUpRight className="size-6" />
          </Link>
          <Link
            href={"/sign-in"}
            type="submit"
            className={`h-12 mt-4 pl-6 pr-5 text-lg flex justify-center items-center gap-2 rounded-md font-medium text-white hover:text-white/60 cursor-pointer transition-none!`}
          >
            Sign in
            <ArrowUpRight className="size-6" />
          </Link>
        </div>
      </div>

      <p className="text-[#888] max-w-4xl">
        A full-stack authentication system with a dark-themed, minimal UI, built
        with Next.js and TypeScript, BetterAuth for auth, Prisma and SQLite for
        the database, and Zod for validation.
      </p>

      <div className="flex items-center justify-center gap-4">
        <Link
          href={"https://github.com/boydsv"}
          className="text-white/50 hover:text-white"
        >
          Github
        </Link>

        <span className="h-1 w-1 rounded-full bg-white/20 inline-block"></span>

        <Link
          href={"https://linkedin.com/in/abolfazl-mahmoudi-68a22a42b"}
          className="text-white/50 hover:text-white"
        >
          Linkedin
        </Link>
      </div>
    </main>
  );
};

export default Home;
