import type { Metadata } from 'next';
import { IBM_Plex_Mono, Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

const sans = Inter({
	variable: '--font-sans',
	subsets: ['latin'],
	weight: ['400', '500', '700'],
	preload: true,
});

const mono = IBM_Plex_Mono({
	variable: '--font-mono',
	subsets: ['latin'],
	weight: '500',
	preload: true,
});

export const metadata: Metadata = {
	title: 'Samadhi Gunasinghe | Portfolio',
	description: "I'm Samadhi Gunasinghe, A fullstack web developer and UI/UX designer based in Sri Lanka.",
	authors: [{ name: 'Samadhi Gunasinghe', url: 'https://samadhi-gunasinghe.com' }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en'>
			<body className={`${sans.className} ${mono.variable} antialiased`}>
				<ThemeProvider attribute='class' defaultTheme='dark'>
					<Navigation />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
