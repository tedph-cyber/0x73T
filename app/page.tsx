import About from "@/components/Header";
import Projects from "@/components/Communities";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black px-10 md:px-20 ">
      <About />
      <Projects />
    </div>
  );
}