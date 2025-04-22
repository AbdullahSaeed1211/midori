export interface ProjectProps {
  title: string;
  description: string;
  results: string[];
  image: string;
  liveSiteUrl?: string;
  industry: "ecommerce" | "saas" | "education" | "technology";
} 