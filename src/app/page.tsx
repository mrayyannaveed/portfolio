import Hero from "./components/hero";
import Projects from "./projects/page";
import Skill from "./skills/page";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Skill/>
      <Projects/>
    </div>
  );
}