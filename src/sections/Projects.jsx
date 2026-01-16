import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../data/projects";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </Section>
  );
}
