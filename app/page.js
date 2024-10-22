"use client";
import Image from "next/image";
import Green from "@/public/GreenPixel.svg";
import Cyan from "@/public/CyanPixel.svg";
import Heart from "@/public/heart.png";
import Purple from "@/public/PurplePixel.svg";
import { useEffect, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const handleScrollUp = () => {
  window.scrollBy({
    top: -window.innerHeight, // Scrolls 100vh down
    behavior: "smooth", // Smooth scroll animation
  });
};
const handleScrollDown = () => {
  window.scrollBy({
    top: window.innerHeight, // Scrolls 100vh down
    behavior: "smooth", // Smooth scroll animation
  });
};
export default function Home() {
  const firstElementRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Toggle class for first and third elements (normal snapping)
      if (firstElementRef.current) {
        firstElementRef.current.classList.toggle("active");
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <div className="w-full h-full">
      <Container>
        <div
          className="flex items-center justify-center gap-20 element"
          ref={firstElementRef}
        >
          <Image src={Green} alt="pixel" className="size-20 " />

          <Image src={Purple} alt="pixel" className="size-20" />

          <Image src={Cyan} alt="pixel" className="size-20 " />
        </div>
        <div className="w-full flex items-center justify-center flex-col gap-10">
          <h1 className="text-2xl">
            I wish I could have saved my game
            <br />
            But do I still get a second chance?
          </h1>
          <h2 className="text-5xl">
            I&apos;m Very Sorry Katty. Will you forgive me?
          </h2>
        </div>
        <div></div>
        <div></div>
        <ButtonDown>Why is Dwagon Smelly</ButtonDown>
      </Container>
      <Container>
        <ButtonUp>Will Kat forgive me?</ButtonUp>
        <Image src={Green} alt="pixel" className="size-20 " />
        <TextContainer>
          <p className="text-5xl mb-10">Why is dwagon Smelly?</p>
          <p className="text-2xl">Dwagon did not give kat any explination</p>
          <p className="text-2xl">
            He left her to overthink what she did wrong for too long when she
            hasnt done anything wrong and he stinks
          </p>
          <p className="text-2xl">
            Next time he will not stink so much and will communicate whatever on
            his mind
          </p>
        </TextContainer>
        <div></div>
        <ButtonDown>What Kat means to dwagon</ButtonDown>
      </Container>
      <Container>
        <ButtonUp>Why is dwagon Smelly</ButtonUp>
        <Image src={Purple} alt="pixel" className="size-20 " />
        <TextContainer>
          <p className="text-5xl mb-10">What Kat means to dwagon?</p>
          <p className="text-2xl">
            Kat is something special. aside from being the cutest thing ever
          </p>
          <p className="text-2xl">
            She always shows how much she cares and how kind she is.
          </p>
          <p className="text-2xl">
            She is never out of puns and she&apos;s the reason dwagon is certain
            he will have a laugh everyday
          </p>
          <p className="text-2xl">
            Dwagon is looking forward to most of his days because he knows he
            has a kat where he can share everything with and will always be
            there to liste.
          </p>
          <p className="text-2xl">
            Dwagon is always interested in all funny and serious rambles
            provides him and he loves listening to her speak too much
          </p>
          <p className="text-2xl">
            Dwagon couldnt think of a better friend than Kat.
          </p>
        </TextContainer>
        <div></div>
        <ButtonDown>Dwagon Is Sorry</ButtonDown>
      </Container>
      <Container>
        {" "}
        <ButtonUp>What Kat means to dwagon?</ButtonUp>
        <Image src={Cyan} alt="pixel" className="size-20 " />
        <TextContainer>
          <p className="text-5xl mb-10">Dwagon is sorry</p>
          <p className="text-2xl">
            I&apos;m seriously very sorry Kat. I know how much I&apos;ve hurt
            you and there is no amount of words that could be said to properly
            apologize to you
          </p>
          <p className="text-2xl">
            I&apos;ll take this as a learning experience to do better by you. I
            will not repeat the same mistake again and I will definitely do all
            I can to make up for it.
          </p>
          <p className="text-2xl">all you gotta do is to let me know how.</p>
          <p className="text-2xl">I&apos;m So Sorry.</p>
        </TextContainer>
        <h1 className="text-7xl">Will you let me hit the reset button?</h1>
        <div className="w-full items-center justify-center flex gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <button className="px-8 py-4 hover:bg-white/80 transition-all duration-150 bg-white text-black rounded-2xl text-xl cursor-not-allowed">
                  No You are so Smelly I Won&apos;t Forgive You
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-2xl">
                  You will have to forgive me just tell me what can i do :(
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <button
            className="px-8 py-4 hover:bg-white/80 transition-all duration-150 bg-white text-black rounded-2xl text-xl"
            onClick={handleScrollDown}
          >
            You So Smelly But I have no other choice
          </button>
        </div>
      </Container>
      <Container>
        <div className="flex items-center justify-center">
          <Image src={Heart} alt="heart" className="size-20" />
          <Image src={Heart} alt="heart" className="size-20" />
          <Image src={Heart} alt="heart" className="size-20" />
        </div>
        <p className="text-7xl">
          Thank you so much Kathy. I will not take this forgranted
        </p>
        <TextContainer>
          <p className="text-4xl">Leeg and HxH tonight(NOW)?</p>
          <p className="text-4xl"> tell me in discord x.x</p>
        </TextContainer>
      </Container>
    </div>
  );
}
function ButtonDown({ children }) {
  return (
    <button
      className="px-8 py-4 hover:bg-white/80 transition-all duration-150 bg-white text-black rounded-2xl text-xl flex items-center justify-center flex-col gap-1"
      onClick={handleScrollDown}
    >
      {children}
      <FaChevronDown />
    </button>
  );
}
function ButtonUp({ children }) {
  return (
    <button
      className="px-8 py-4 hover:bg-white/80 transition-all duration-150 bg-white text-black rounded-2xl text-xl flex items-center justify-center flex-col gap-1"
      onClick={handleScrollUp}
    >
      <FaChevronUp />
      {children}
    </button>
  );
}
function Container({ children }) {
  return (
    <div className="w-full h-[100vh] flex items-center justify-around flex-col">
      {children}
    </div>
  );
}
function TextContainer({ children }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {children}
    </div>
  );
}
