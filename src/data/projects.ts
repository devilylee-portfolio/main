export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  tech: string[];
  image?: string;
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
    link: "https://www.joopi.app/",
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    shortDescription:
      "Full-stack Next.js application with payments and multi-provider authentication, built and deployed on AWS.",
    description:
      "Launched a full-stack e-commerce platform for travel gear with PortOne payments and Google, Kakao, and Apple authentication. Built with Next.js and deployed on AWS with cloud-hosted infrastructure. Covers product catalog, cart, checkout, and admin flows.",
    tech: ["Next.js", "AWS", "PortOne", "Google Auth", "Kakao", "Apple Sign-In"],
    link: "https://github.com/mannazo/mannazo-nextjs",
    repo: "https://github.com/mannazo/mannazo-nextjs",
  },
  {
    id: "sublease-web",
    title: "Sublease Web App",
    shortDescription:
      "PHP-based sublease marketplace: post and manage listings, authenticated access, verified contact info revealed only to logged-in users.",
    description:
      "Built a PHP-based sublease marketplace allowing users to post and manage listings. Includes authenticated access with verified contact information revealed only to logged-in users, supporting students and renters in finding and listing subleases safely.",
    tech: ["PHP", "SQL", "Authentication", "Full-stack"],
    repo: "https://github.com/lilyhyojeonglee/Sublease-Web",
  },
  {
    id: "real-estate-proxy-app",
    title: "Real Estate Proxy Contract Mobile App",
    shortDescription:
      "Secure mobile app for virtual contract signing with trusted agents; user research, onboarding, and trust-building for non-native users.",
    description:
      "Conducted primary user research (19 survey responses from international students) to identify pain points in traditional real estate leasing. Contributed to product design and frontend development for a secure mobile app enabling virtual contract signing with trusted real estate agents. Refined onboarding flows, authentication, and trust-building features for non-native users.",
    tech: ["React Native", "User Research", "Authentication", "Product Design"],
  },
];
