import { AiFillTwitterCircle, AiFillDiscord } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <div id="about" className="text-center p-4">
        <h2 className="text-5xl py-2 text-red-500 font-medium ">0x73T</h2>
        <h3 className="text-2xl py-2 dark:text-teal-50 text-black md:text-3xl">
          Degenerate & Ambassador
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-500 md:text-xl max-w-xl mx-auto ">
          Community-oriented ambassador bridging the gap between technology and
          the user. I advocate for responsible and ethical adoption of
          blockchain.
        </p>
        <p className="text-xl md:text-2xl py-2 text-black dark:text-gray-400 max-w-xl mx-auto ">
          Memes will rule the world.
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-12 py-1 text-gray-600">
        <a href="https://x.com/0x73T">
          <AiFillTwitterCircle />
        </a>
        <a href="https://discord.com/channels/@me/1166682140801511475/">
          <AiFillDiscord />
        </a>
        <a href="https://t.me/tarixx0">
          <BsTelegram />
        </a>
      </div>
      <div className="relative mx-auto rounded-full w-80 h-80 mt-10 mb-5 overflow-hidden md:h-96 md:w-96 ">
        <Image
          src="/images/image.png"
          alt={"0x73tari.eth"}
          fill
          className="h-[10px] w-[10px]"
        />
      </div>
    </div>
  );
}
