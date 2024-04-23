import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});
export const metadata: Metadata = {
	title: "Shadcn Linear",
	description: "Copy of the Linear Priority component",
	openGraph: {
		title: "Shadcn Linear",
		description: "Copy of the Linear Priority component",
		url: "https://shadcn-linear-combobox.vercel.app/",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable,
				)}
			>
				<Analytics />
				<SpeedInsights />
				<ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
					<TooltipProvider>
						<Toaster richColors />
						{children}
					</TooltipProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
