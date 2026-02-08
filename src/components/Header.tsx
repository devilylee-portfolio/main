"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
	{ href: "#about", label: "About Me" },
	{ href: "#skills", label: "Skills" },
	{ href: "#projects", label: "Project" },
	{ href: "#contact", label: "Contact Me" },
];

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleSmoothScroll = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string,
	) => {
		if (href.startsWith("#")) {
			e.preventDefault();
			const element = document.querySelector(href);
			if (element) {
				element.scrollIntoView({ behavior: "smooth", block: "start" });
			}
		}
	};

	return (
		<header
			className={`bg-dark text-white sticky top-0 z-50 transition-all duration-300 ${
				isScrolled ? "shadow-lg" : ""
			} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
			<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
				<Link
					href="/"
					className="flex items-center gap-2 font-semibold text-lg transition-transform duration-300 hover:scale-105">
					<span className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-lg font-bold transition-transform duration-300 hover:rotate-12">
						LL
					</span>
					Lily Lee
				</Link>
				<nav className="hidden md:flex items-center gap-8">
					{navLinks.map(({ href, label }) => (
						<Link
							key={href}
							href={href}
							onClick={(e) => handleSmoothScroll(e, href)}
							className="text-white/90 hover:text-white transition-all duration-300 relative group">
							{label}
							<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
						</Link>
					))}
				</nav>
				<a
					href="/resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 px-4 py-2 border border-white rounded-md hover:bg-white/10 hover:scale-105 transition-all duration-300">
					Resume
					<svg
						className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
						/>
					</svg>
				</a>
			</div>
		</header>
	);
}
