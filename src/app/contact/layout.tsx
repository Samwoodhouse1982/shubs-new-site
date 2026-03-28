import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | SandiQ",
  description:
    "Start a conversation with SandiQ. Tell us what you're working on and we'll tell you honestly whether and how we can help.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
