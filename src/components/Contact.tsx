"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Contact() {
	const { ref, isVisible } = useScrollAnimation<HTMLHeadingElement>();

	return (
		<section id="contact" className="bg-dark text-white py-20">
			<div className="max-w-7xl mx-auto px-6 text-center">
				<h2
					ref={ref}
					className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ${
						isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
					}`}>
					Contact Me
				</h2>
				<p
					className={`text-white/80 max-w-xl mx-auto mb-8 transition-all duration-700 delay-200 ${
						isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
					}`}>
					Open to roles in frontend and fullstack engineering. Let&apos;s
					connect for collaboration or new opportunities.
				</p>
				<div
					className={`flex flex-wrap items-center justify-center gap-4 md:gap-6 transition-all duration-700 delay-300 ${
						isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
					}`}>
					<a
						href="tel:+14344661848"
						className="inline-flex items-center gap-2 px-6 py-3 border border-white rounded-md hover:bg-white/10 hover:scale-105 transition-all duration-300">
						Mobile
					</a>
					<a
						href="mailto:hyojeonglee215@gmail.com"
						className="inline-flex items-center gap-2 px-6 py-3 border border-white rounded-md hover:bg-white/10 hover:scale-105 transition-all duration-300">
						hyojeonglee215@gmail.com
					</a>
					<a
						href="https://linkedin.com/in/lily-lee-803228228"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-6 py-3 border border-white rounded-md hover:bg-white/10 hover:scale-105 transition-all duration-300">
						LinkedIn
					</a>
				</div>
			</div>
		</section>
	);
}
