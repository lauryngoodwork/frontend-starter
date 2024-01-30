import type { Metadata } from "next";
import "ui/styles/globals.css";
import "ui/styles/tailwind.css";

export const metadata: Metadata = {
  title: "Project Title",
  description: "Project Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative flex h-full min-h-screen w-screen flex-col">
        <main className="flex h-full w-full flex-grow flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
