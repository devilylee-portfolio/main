import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Header from "@/components/Header";

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-black">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black mb-8"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Projects
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {project.shortDescription}
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full bg-gray-100 text-sm font-medium"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-dark text-white rounded-md hover:opacity-90"
              >
                View live
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border-2 border-dark rounded-md hover:bg-gray-50"
              >
                Repository
              </a>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
