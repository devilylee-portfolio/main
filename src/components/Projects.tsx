"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div ref={ref} style={{ transitionDelay: `${index * 100}ms` }}>
      <Link
        href={`/projects/${project.id}`}
        className={`group block rounded-xl border-2 border-black p-6 hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
      <h3 className="text-xl font-bold mb-2 group-hover:underline transition-all">
        {project.title}
      </h3>
      <p className="text-gray-600 group-hover:text-white/80 text-sm transition-colors">
        {project.shortDescription}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.slice(0, 3).map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded bg-gray-100 group-hover:bg-white/20 transition-colors"
          >
            {t}
          </span>
        ))}
      </div>
    </Link>
    </div>
  );
}

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation<HTMLHeadingElement>();

  return (
    <section id="projects" className="bg-white text-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          ref={ref}
          className={`text-4xl md:text-5xl font-bold text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
