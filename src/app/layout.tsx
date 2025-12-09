import type { Metadata } from "next";
import { CursorFollower } from "@/components/CursorFollower";
import "./globals.css";

export const metadata: Metadata = {
  title: "UNOMEDIA - Digital Innovation",
  description: "Building the future of web, one pixel at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@700&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <CursorFollower />
        {children}
      </body>
    </html>
  );
}

