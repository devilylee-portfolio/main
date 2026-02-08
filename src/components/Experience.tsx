"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
	{
		company: "GoMAXPAIN",
		title: "Software Engineer (Founding team) | GoMAXPAIN",
		period: "July 2025 - Present",
		description:
			"Architected the frontend platform using Domain-Driven Design (DDD), defining clear domain boundaries and feature-based modules across SSR, React, and TypeScript. Led engineering execution as a founding engineer: MVP planning, sprint schedules, hiring, daily demos, QA/testing, and MSW-based mocking. Optimized performance by migrating from CSR to SSR, lazy loading, and authenticated user state handling — 60% faster load times. Built a full-stack analytics dashboard aggregating 3+ external APIs with RESTful APIs, SQL data models, and hourly/daily/regional metrics. Integrated Google Maps (Places API, markers, weather overlays), secure payments, OTP & email verification, and map-based visualizations; deployed production infrastructure on AWS.",
		logo: "/gomaxpain-logo.svg",
	},
	{
		company: "Atom Tech Solutions",
		title: "Software Developer Intern | Atom Tech Solutions",
		period: "December 2024 - January 2025",
		description:
			"Collaborated with senior developers on client project management and system architecture in a fast-paced MERN consulting environment. Designed and implemented RESTful APIs for an internal client management dashboard with secure admin access and full CRUD for client data. Built and maintained React frontends connected to MongoDB, with responsive performance and clean data flow. Assisted in optimizing API request handling and database queries for better response time and scalability.",
		logo: "https://atomtechsolutions.com/wp-content/uploads/2021/06/cropped-atom-tech-solutions2-1.jpg",
	},
	{
		company: "A-Round Entertainment",
		title:
			"Technical Product Manager Intern (Part-time) | A-Round Entertainment",
		period: "December 2023 - May 2024",
		description:
			"Spearheaded a real-time chat feature using Firebase for a cross-platform mobile dating app (React Native), improving engagement for 100+ early testers. Coordinated across software development, UI/UX, business, and executive stakeholders on priorities, timelines, and MVP launch preparation.",
		logo: "https://media.licdn.com/dms/image/v2/C560BAQFFNiZ6xLDKiw/company-logo_200_200/company-logo_200_200/0/1659109017465?e=1772064000&v=beta&t=mXENjKGs84ySC4Y22AkAApE90Nl5MvTA5oy1EsoJdF8",
	},
];

function ExperienceCard({
	exp,
	index,
}: {
	exp: (typeof experiences)[0];
	index: number;
}) {
	const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

	return (
		<div
			ref={ref}
			className={`bg-dark-card rounded-2xl p-6 md:p-8 flex gap-6 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl ${
				isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
			}`}
			style={{ transitionDelay: `${index * 150}ms` }}>
			<div className="flex-shrink-0 w-12 h-12 rounded overflow-hidden bg-white/10 transition-transform duration-300 hover:scale-110 flex items-center justify-center">
				<img
					src={exp.logo}
					alt={`${exp.company} logo`}
					className="w-full h-full object-contain"
				/>
			</div>
			<div className="min-w-0">
				<div className="flex flex-wrap items-start justify-between gap-2 mb-2">
					<h3 className="text-xl font-bold">{exp.title}</h3>
					<span className="text-white/80 text-sm whitespace-nowrap">
						{exp.period}
					</span>
				</div>
				<p className="text-white/80 text-sm leading-relaxed">
					{exp.description}
				</p>
			</div>
		</div>
	);
}

export default function Experience() {
	const { ref, isVisible } = useScrollAnimation<HTMLHeadingElement>();

	return (
		<section id="experience" className="bg-dark text-white py-20">
			<div className="max-w-7xl mx-auto px-6">
				<h2
					ref={ref}
					className={`text-4xl md:text-5xl font-bold text-center mb-14 transition-all duration-700 ${
						isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
					}`}>
					My Experience
				</h2>
				<div className="space-y-6 max-w-4xl mx-auto">
					{experiences.map((exp, index) => (
						<ExperienceCard key={exp.company} exp={exp} index={index} />
					))}
				</div>
			</div>
		</section>
	);
}
