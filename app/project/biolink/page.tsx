import PrimaryBtn from "@/components/PrimaryBtn";
import Feature from "@/components/Project/Feature";
import VideoBtn from "@/components/Project/VideoBtn";
import { biolinkFeatures } from "@/utils/features";
import Image from "next/image";

export default function page() {
  const githubLink = "https://github.com/jiahow99/Reactivities-Net7React";
  const videoLink = "https://www.youtube.com/watch?v=eZ95euAsrPA";

  return (
    <div className="w-11/12 mx-auto pt-10">
      {/* Title */}
      <h1 className="font-medium text-2xl tracking-wider">BIOLINK</h1>
      <h1 className="font-medium text-5xl mt-3">Features</h1>

      {/* Feature */}
      {biolinkFeatures.map((feature, i) => (
        <Feature feature={feature} key={feature.title} right={i % 2 === 1} />
      ))}

      {/* Buttons */}
      <div className="flex justify-center items-center gap-5 my-20">
        {/* Code */}
        <PrimaryBtn classes="px-10 py-4 text-lg" href={githubLink}>
          Code 
          <Image src="/icons/code.png" width={24} height={24} alt="code" />
        </PrimaryBtn>
        {/* Video */}
        <VideoBtn href={videoLink} />
      </div>
    </div>
  )
}