import { Funnel_Sans, Funnel_Display } from 'next/font/google';

export const funnel_Sans = Funnel_Sans({
	weight: ['300', '400', '500', '600', '700', '800'],
	display: 'swap',
	subsets: ['latin'],
	variable: '--font-funnel-sans',
	adjustFontFallback: true,
	preload: true,
});

export const funnel_Display = Funnel_Display({
	weight: ['300', '400', '500', '600', '700', '800'],
	display: 'swap',
	subsets: ['latin'],
	variable: '--font-funnel-display',
	adjustFontFallback: true,
	preload: true,
});
