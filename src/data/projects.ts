export interface Project {
	id: string;
	title: string;
	shortDescription: string;
	description: string;
	tech: string[];
	image?: string;
	/** Extra images shown on the project detail page (e.g. research screenshots) */
	gallery?: string[];
	link?: string;
	repo?: string;
}

export const projects: Project[] = [
	{
		id: "gomaxpain",
		title: "GoMAXPAIN",
		shortDescription:
			"Founding software engineer on a consumer-facing web platform — frontend architecture, performance optimization, and production deployment.",
		description:
			"As a founding software engineer at GoMAXPAIN, I own the frontend platform end-to-end. I architected the app using Domain-Driven Design (DDD), migrated from CSR to SSR for 60% faster load times, and built a full-stack analytics dashboard aggregating data from 3+ external APIs. The platform integrates Google Maps (Places API, markers, weather overlays), secure payments, OTP & email verification, and map-based data visualizations, deployed on AWS.",
		tech: ["React", "TypeScript", "Next.js", "AWS", "SSR", "Google Maps API"],
		image: "/projects/Gomaxapin.png",
		link: "https://app.gomaxpain.com/professional",
	},
	{
		id: "joopi",
		title: "Joopi",
		shortDescription:
			"Product management intern on a cross-platform dating app — feature definition, user research, and MVP delivery.",
		description:
			"At A-Round Entertainment I worked as a Technical Product Manager intern on Joopi, a cross-platform mobile dating app (React Native). I spearheaded a real-time chat feature using Firebase, improving user engagement for 100+ early testers. I coordinated across software development, UI/UX, business, and executive stakeholders on priorities, timelines, and MVP launch preparation.",
		tech: ["React Native", "Firebase", "Product Management", "MVP"],
		image: "/projects/Joopi.png",
		link: "https://www.joopi.app/",
	},
	{
		id: "ecommerce-platform",
		title: "E-Commerce Platform",
		shortDescription:
			"Full-stack Next.js application with payments and multi-provider authentication, built and deployed on AWS.",
		description:
			"Launched a full-stack e-commerce platform for travel gear with PortOne payments and Google, Kakao, and Apple authentication. Built with Next.js and deployed on AWS with cloud-hosted infrastructure. Covers product catalog, cart, checkout, and admin flows.\n\nProject overview (design & scope): https://www.canva.com/design/DAHA2tI4cJc/iib30Ev7WmPyxBIbt0Lfkg/edit?utm_content=DAHA2tI4cJc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
		tech: [
			"Next.js",
			"AWS",
			"PortOne",
			"Google Auth",
			"Kakao",
			"Apple Sign-In",
		],
		image: "/projects/mannazo.png",
		link: "https://github.com/mannazo/mannazo-nextjs",
		repo: "https://github.com/mannazo/mannazo-nextjs",
	},
	{
		id: "crumbl-reverse-engineering",
		title: "Reverse Engineering Crumbl's Web Architecture",
		shortDescription:
			"Reverse engineered Crumbl's production architecture to understand how a high-traffic consumer brand structures performance, routing, and data delivery at scale.",
		description: `For this project, I reverse engineered the production architecture of Crumbl's website to understand how a high-traffic consumer brand structures performance, routing, and data delivery at scale.

**1. Framework & Hosting Architecture**

Through network inspection and response headers, I identified:
- **Framework:** Next.js (Pages Router)
- **Hosting:** Vercel
- **CDN Layer:** Cloudflare
- **Rendering Strategy:** Static Generation with Incremental Static Regeneration (ISR)

The presence of routes like \`/_next/data/{buildId}/en-US/stores.json\` confirms the use of Next.js' data routing system for statically generated or ISR-backed pages. Response headers such as \`cache-control: public, max-age=14400\`, \`x-vercel-cache: HIT\`, and \`cf-cache-status: REVALIDATED\` indicate that certain pages (e.g., store listings) are cached for 4 hours and revalidated periodically, suggesting ISR rather than fully dynamic server-side rendering.

**2. Route Prefetching Strategy**

The site uses Next.js automatic route prefetching. When hovering over navigation items (e.g., "Order", "Stores"), Next.js prefetches the corresponding \`/_next/data/...\` JSON routes. This improves perceived performance by fetching route data in advance, caching JSON responses in memory, and enabling instant client-side transitions—triggered automatically via \`<Link>\` prefetch behavior in production builds.

**3. SSR + Hydration Model**

On initial page load: the server renders HTML, a large JSON payload is embedded or fetched, and the client hydrates using that data (from \`getStaticProps\` or \`getServerSideProps\`). This allows SEO-friendly server-rendered HTML, fast client-side navigation, and CDN-cached static responses.

**4. Performance Tradeoffs Observed**

Because Next.js embeds or references large JSON payloads for hydration, initial HTML size can grow significantly and large JSON payloads increase transfer size. Excessively large embedded data can negatively impact SEO and page performance—a common SSR tradeoff: faster navigation and hydration vs. heavier initial payload size. In high-content pages (e.g., menus, store lists), careful data shaping is critical.

**5. Data Modeling Insights**

From inspecting menu JSON responses, I identified rich product domain modeling (nutrition, allergens, images, stats, reviews), structured nested objects (GraphQL-style schema), aggregated stats separated from reviews, and composite review IDs suggesting possible NoSQL or event-style key patterns. This suggests a mature domain-driven design with clear separation between product metadata, user-generated content, aggregated statistics, and notification systems.

**6. Architectural Summary**

Crumbl's website demonstrates: static generation for scalability, ISR for time-sensitive updates (e.g., weekly menu), CDN edge caching via Cloudflare, client-side route prefetching, React hydration using JSON data files, and separation between public content and account-based flows. The overall architecture prioritizes fast navigation, global caching, SEO compatibility, and scalable content delivery.`,
		tech: [
			"Next.js",
			"ISR",
			"Vercel",
			"Cloudflare",
			"SSR",
			"React Hydration",
			"CDN",
		],
		image: "/projects/crumb-reverse.png",
	},
	// {
	// 	id: "sublease-web",
	// 	title: "Sublease Web App",
	// 	shortDescription:
	// 		"PHP-based sublease marketplace: post and manage listings, authenticated access, verified contact info revealed only to logged-in users.",
	// 	description:
	// 		"Built a PHP-based sublease marketplace allowing users to post and manage listings. Includes authenticated access with verified contact information revealed only to logged-in users, supporting students and renters in finding and listing subleases safely.",
	// 	tech: ["PHP", "SQL", "Authentication", "Full-stack"],
	// 	image: "/projects/sublease-web.jpg",
	// 	repo: "https://github.com/lilyhyojeonglee/Sublease-Web",
	// },
	{
		id: "real-estate-proxy-app",
		title: "Real Estate Proxy Contract Mobile App",
		shortDescription:
			"Secure mobile app for virtual contract signing with trusted agents; user research, onboarding, and trust-building for non-native users.",
		description:
			"Conducted primary user research (19 survey responses from international students) to identify pain points in traditional real estate leasing. Contributed to product design and frontend development for a secure mobile app enabling virtual contract signing with trusted real estate agents. Refined onboarding flows, authentication, and trust-building features for non-native users.",
		tech: ["React Native", "User Research", "Authentication", "Product Design"],
		image: "/projects/response1.png",
		gallery: ["/projects/response1.png", "/projects/response2.png"],
	},
];
