"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Simple Icons CDN: slug and brand color (hex without #)
const skills = [
	{
		name: "TypeScript",
		iconSlug: "typescript",
		color: "3178C6",
		highlighted: true,
	},
	{ name: "React", iconSlug: "react", color: "61DAFB" },
	{ name: "Next.js", iconSlug: "nextdotjs", color: "000000" },
	{ name: "Node.js", iconSlug: "nodedotjs", color: "339933" },
	{ name: "React Native", iconSlug: "react", color: "61DAFB" },
	// { name: "AWS", iconSlug: "amazonaws", color: "FF9900" },
	{ name: "Python", iconSlug: "python", color: "3776AB" },
	{ name: "PostgreSQL", iconSlug: "postgresql", color: "4169E1" },
];

function SkillCard({
	name,
	iconSlug,
	color,
	highlighted,
	index,
}: {
	name: string;
	iconSlug: string;
	color: string;
	highlighted: boolean;
	index: number;
}) {
	const { ref, isVisible } = useScrollAnimation();
	const iconUrl = `https://cdn.simpleicons.org/${iconSlug}/${highlighted ? "FFFFFF" : color}`;

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
			<div className="relative w-12 h-12 md:w-14 md:h-14 mb-3 transition-transform duration-300 hover:scale-110 flex-shrink-0">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src={iconUrl}
					alt=""
					width={56}
					height={56}
					className="w-full h-full object-contain"
				/>
			</div>
			<span className="text-sm md:text-base font-semibold text-center">
				{name}
			</span>
		</div>
	);
}

export default function Skills() {
	const { ref, isVisible } = useScrollAnimation();

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
					{skills.map(({ name, iconSlug, color, highlighted }, index) => (
						<SkillCard
							key={name}
							name={name}
							iconSlug={iconSlug}
							color={color}
							highlighted={highlighted ?? false}
							index={index}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
