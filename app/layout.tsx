import type { Metadata, Viewport } from "next";
import { Bitter, Open_Sans, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { publicProfile } from "@/lib/public-profile";

const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.marcmansour.dev"),
  title: {
    default: "Marc Mansour — Financial tools, software & writing",
    template: "%s · Marc Mansour",
  },
  description:
    "Marc Mansour is a developer focused on financial tools, software development, and public writing about technology and finance.",
  authors: [{ name: "Marc Mansour", url: "https://www.marcmansour.dev" }],
  creator: "Marc Mansour",
  keywords: [
    "Marc Mansour",
    "financial tools",
    "software development",
    "finance",
    "developer portfolio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Marc Mansour",
    title: "Marc Mansour — Financial tools, software & writing",
    description:
      "Developer focused on financial tools, software development, and public writing about technology and finance.",
  },
  twitter: {
    card: "summary_large_image",
    creator: publicProfile.x.handle,
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f7f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0b111b" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={cn(
        "h-full antialiased",
        bitter.variable,
        openSans.variable,
        sourceCodePro.variable,
      )}
    >
      <body className="min-h-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          enableColorScheme
          disableTransitionOnChange
          storageKey="marcm-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
