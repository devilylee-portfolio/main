"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SKILL_ICONS = "https://cdn.simpleicons.org";
const skills: { name: string; iconUrl: string; highlighted?: boolean }[] = [
	{
		name: "TypeScript",
		iconUrl: `${SKILL_ICONS}/typescript/3178C6`,
		highlighted: true,
	},
	{ name: "React", iconUrl: `${SKILL_ICONS}/react/61DAFB` },
	{ name: "Next.js", iconUrl: `${SKILL_ICONS}/nextdotjs/000000` },
	{ name: "Node.js", iconUrl: `${SKILL_ICONS}/nodedotjs/339933` },
	{ name: "React Native", iconUrl: `${SKILL_ICONS}/react/61DAFB` },
	// { name: "AWS", iconUrl: `${SKILL_ICONS}/amazonaws/232F3E` },
	{ name: "Python", iconUrl: `${SKILL_ICONS}/python/3776AB` },
	{ name: "PostgreSQL", iconUrl: `${SKILL_ICONS}/postgresql/4169E1` },
];

function SkillCard({
	name,
	iconUrl,
	highlighted,
	index,
}: {
	name: string;
	iconUrl: string | null;
	highlighted: boolean;
	index: number;
}) {
	const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

	return (
		<div
			ref={ref}
			className={`rounded-xl border-2 p-6 md:p-8 flex flex-col items-center justify-center min-h-[140px] md:min-h-[160px] transition-all duration-500 ${
				highlighted
					? "bg-dark text-white border-dark shadow-lg scale-105"
					: "bg-white text-black border-black hover:bg-gray-50 hover:shadow-md hover:scale-105"
			} ${
				isVisible
					? "opacity-100 translate-y-0 scale-100"
					: "opacity-0 translate-y-8 scale-95"
			}`}
			style={{ transitionDelay: `${index * 50}ms` }}>
			<div className="w-14 h-14 md:w-16 md:h-16 mb-3 flex items-center justify-center transition-transform duration-300 hover:scale-110">
				{iconUrl ? (
					<img
						src={iconUrl}
						alt=""
						className="w-full h-full object-contain"
						aria-hidden
					/>
				) : (
					<span className="text-4xl md:text-5xl font-bold">
						{name.slice(0, 2).toUpperCase()}
					</span>
				)}
			</div>
			<span className="text-sm md:text-base font-semibold text-center">
				{name}
			</span>
		</div>
	);
}

export default function Skills() {
	const { ref, isVisible } = useScrollAnimation<HTMLHeadingElement>();

	return (
		<section id="skills" className="bg-white text-black py-20">
			<div className="max-w-7xl mx-auto px-6">
				<h2
					ref={ref}
					className={`text-4xl md:text-5xl font-bold text-center mb-14 transition-all duration-700 ${
						isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
					}`}>
					My Skills
				</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
					{skills.map(({ name, iconUrl, highlighted = false }, index) => (
						<SkillCard
							key={name}
							name={name}
							iconUrl={iconUrl}
							highlighted={highlighted}
							index={index}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
