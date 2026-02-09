"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { projects } from "@/data/projects";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation();
  const [imageError, setImageError] = useState(false);
  const showImage = project.image && !imageError;

  return (
    <div ref={ref}>
      <Link
        href={`/projects/${project.id}`}
        className={`group block rounded-xl border-2 border-black overflow-hidden hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="relative w-full aspect-video bg-gray-100">
          {showImage ? (
            <Image
              src={project.image!}
              alt=""
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => setImageError(true)}
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 group-hover:from-gray-700 group-hover:to-gray-800 transition-colors"
              aria-hidden
            >
              <span className="text-4xl font-bold text-gray-400 group-hover:text-white/80 transition-colors">
                {project.title.charAt(0)}
              </span>
            </div>
          )}
        </div>
        <div className="p-6">
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
        </div>
      </Link>
    </div>
  );
}

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();

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
