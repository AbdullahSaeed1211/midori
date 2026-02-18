import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | Kiiro - Client Portal",
  description: "Sign in to access your Kiiro client portal. Manage your projects, hosting, and more.",
  robots: "noindex, nofollow",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
