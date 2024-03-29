'use client'
import PrimaryBtn from "../PrimaryBtn";
import Cube from "./Cube";
import Typewriter from 'typewriter-effect';

export default function Intro() {
  return (
    <div className="w-full mt-10 relative">
        <div className="flex gap-5">
            {/* Divider */}
            <div className="w-fit ml-1">
                <div className="w-8 h-8 rounded-full bg-white"></div>
                <div className="w-2 h-[50vh] bg-white -translate-y-2 down-line mx-auto"></div>
            </div>
            {/* Name */}
            <div className="flex flex-col gap-5">
                <div className="flex flex-col md:flex-row gap-3 text-2xl md:text-6xl font-medium flex-wrap">
                    <p>Hi, I&apos;m</p>
                    <Typewriter
                        options={{
                            strings: ['Kah How', 'a Backend Developer'],
                            autoStart: true,
                            loop: true,
                            wrapperClassName: "name"
                        }}
                    />
                </div>
                <p className="text-2xl md:text-3xl name font-semibold hidden md:block">
                    Software Developer
                </p>
                {/* Download CV */}
                <PrimaryBtn href="/Liong_Kah_How_Resume.pdf" classes="py-4">Download CV</PrimaryBtn>
            </div>
        </div>
        {/* Cube */}
        <div className="absolute right-24 top-60 md:right-72 md:top-60 scale-[1.6] md:scale-[3]">
            <Cube />
        </div>
    </div>
  )
}
