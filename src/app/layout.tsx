// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Orifkhon Kilichev | Backend-Focused Full-Stack Engineer",
    description:
        "Orifkhon Kilichev is a backend-focused full-stack engineer building production automation systems, Telegram bots, and AI-powered media pipelines.",
    keywords: [
        "Orifkhon Kilichev",
        "Backend Engineer",
        "Full Stack Developer",
        "Python Developer",
        "Telegram Bot Developer",
        "AI Media Processing",
    ],
    authors: [{ name: "Orifkhon Kilichev" }],
    creator: "Orifkhon Kilichev",
    openGraph: {
        title: "Orifkhon Kilichev | Backend Engineer",
        description:
            "Backend-focused engineer building production automation and AI systems.",
        type: "website",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <meta name="google-site-verification" content="I7DS3iSzK_zMimWy_2VHb8IoNz4g4Khs4SlU_pfcjSI"/>
        <body>{children}</body>
        </html>
    );
}