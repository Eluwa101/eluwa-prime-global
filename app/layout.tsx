import type { Metadata } from "next";
import { bodyFont, headingFont } from "@/app/fonts";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Eluwa Prime Global | Software Excellence & Digital Strategy",
  description:
    "Eluwa Prime Global delivers software development, IT consulting, infrastructure support, and strategic marketing solutions for ambitious organizations."
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
