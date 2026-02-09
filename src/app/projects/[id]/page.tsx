import Link from "next/link";
import Image from "next/image";
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
          <p className="text-xl text-gray-600 mb-6">
            {project.shortDescription}
          </p>
          {project.image && (
            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 bg-gray-100">
              <Image
                src={project.image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
                priority
              />
            </div>
          )}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mb-8 space-y-6">
              <h3 className="text-lg font-semibold text-black">
                Research &amp; data
              </h3>
              <div className="space-y-4">
                {project.gallery.map((src, i) => (
                  <div
                    key={i}
                    className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-100 border border-gray-200"
                  >
                    <Image
                      src={src}
                      alt={`Research screenshot ${i + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 672px"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="text-gray-700 leading-relaxed mb-8 space-y-4 [&_strong]:font-semibold [&_strong]:text-black [&_a]:text-dark [&_a]:underline [&_a]:break-all [&_a]:hover:opacity-80">
            {project.description.split("\n\n").map((paragraph, i) => {
              const parts = paragraph.split(/(\*\*.*?\*\*)/g);
              const linkRegex = /(https?:\/\/[^\s]+)/g;
              return (
                <p key={i} className="whitespace-pre-line">
                  {parts.map((part, j) =>
                    /^\*\*.*\*\*$/.test(part) ? (
                      <strong key={j}>{part.slice(2, -2)}</strong>
                    ) : (
                      part.split(linkRegex).map((bit, k) =>
                        /^https?:\/\//.test(bit) ? (
                          <a
                            key={k}
                            href={bit}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {bit}
                          </a>
                        ) : (
                          bit
                        )
                      )
                    )
                  )}
                </p>
              );
            })}
          </div>
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
