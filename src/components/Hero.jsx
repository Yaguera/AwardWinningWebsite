import { useRef } from "react";
import { useState } from "react"

const Hero = () => {

    const [currentVideoIndex, setCurrentVideoIndex] = useState(1)
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);

    const totalVideos = 3;
    const nextVideoRef = useRef(null);

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);

    }

    const upcomingVideoIndex = (currentVideoIndex % totalVideos) + 1;

    const handleMiniVideoClick = () => {
        setHasClicked(true)
        setCurrentVideoIndex(upcomingVideoIndex);
    }

    const getVideoSrc = (index) => `videos/hero-${index}.mp4`

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div id="video-frame" className="relatice z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"> 
        <div>
            <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                <div onClick={handleMiniVideoClick} className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
                   <video 
                    ref={nextVideoRef} 
                    src={getVideoSrc(upcomingVideoIndex)}
                    loop
                    muted
                    id="current-video"
                    className="size-64 origin-center scale-150 object-cover object-center"
                    onLoadedData={handleVideoLoad}
                   />
                </div>
            </div>

            <video
                ref={nextVideoRef}
                src={getVideoSrc(currentVideoIndex)}
                loop
                muted
                id="next-video"
                className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            />

            <video
                src={getVideoSrc(currentVideoIndex === totalVideos + 1 ? 1 : currentVideoIndex)}
                autoPlay
                loop
                muted
                className="absolute left-0 top-0 size-full object-cover object-center"
                onLoadedData={handleVideoLoad}
            />

        </div>
      </div>
    </div>
  )
}

export default Hero
