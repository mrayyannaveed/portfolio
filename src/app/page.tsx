import Hero from "./components/hero";
import ProjectsCom from "./components/projects";
import SkillsCom from "./components/skills";
import Projects from "./projects/page";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <SkillsCom/>
      <Projects/>
    </div>
  );
}