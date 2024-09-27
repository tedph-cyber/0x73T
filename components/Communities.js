"use client";
import Image from "next/image";
import quintess from "../public/images/quintess.jpg";
import possum from "../public/images/possum.jpg";
import doug from "../public/images/doug.jpg";

const projects = [
  {
    id: 1,
    image: quintess,
    title: "QuintessDAO",
    link: "https://x.com/QuintessDAO",
    description: "Bridging the gap between DeFi enthusiasts and Web3.",
    description2: "Join our telegram community: ",
    link2: "https://t.me/+YLKTJ00d2MpjODY0",
  },
  {
    id: 2,
    image: possum,
    title: "Possum Labs",
    link: "https://x.com/possum_labs",
    description:
      "Possum Portals | Lock tokens. Get Yield. Instantly & upfront.",
    description2:
      "We build the PossumFi ecosystem. Aligned incentives for DeFi.",
    link2: "http://portals.possumlabs.io",
  },
  {
    id: 3,
    image: doug,
    title: "DougThePugMemecoin",
    link: "https://x.com/DougThePugMeme",
    description:
      "$DOUG the Pug - The OG celebrity dog memecoin with strong backers - Outlived Kabosu (Doge) & Cheems (Shib) - CA: Coming soon - The dog lives on.",
    description2: "Currently a community moderator for this project.",
    link2: "https://www.dougthepugcoin.xyz/",
  },
];

export default function Projects() {
  return (
    <section>
      <div id="project">
        <h3 className="text-3xl bg-white dark:bg-black flex justify-center text-black dark:text-white mx-auto py-4">
          Projects I Ambassador
        </h3>
        <div className="lg:flex gap-10 lg:justify-center py-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="text-center lg:w-1/4 bg-white dark:bg-neutral-950 shadow-lg p-10 rounded-xl my-10"
            >
              <Image
                src={project.image}
                width={100}
                height={100}
                className="mx-auto rounded-full"
                alt={project.title}
              />
              <a href={project.link}>
                <h3 className="text-lg hover:text-blue-600 dark:text-white text-black font-medium pt-8 pb-2">
                  {project.title}
                </h3>
              </a>
              <p className="py-2 text-balance text-black dark:text-gray-500">
                {project.description}
              </p>
              <p className="py-1 text-balance text-black dark:text-gray-500">
                {project.description2}
              </p>
              <a className="text-blue-500" href={project.link2}>{project.link2}</a>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:flex gap-10"></div>
    </section>
  );
}
