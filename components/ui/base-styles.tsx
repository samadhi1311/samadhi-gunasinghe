'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';

function Page({ children }: { children?: React.ReactNode }) {
	return <main className='min-h-screen w-full py-16 lg:py-32'>{children}</main>;
}

function Section({ children, variant = 'normal', className }: { children?: React.ReactNode; variant?: 'main' | 'normal'; className?: string }) {
	const variants = {
		main: 'py-8 lg:py-16',
		normal: 'py-4 lg:py-8',
	}[variant];
	return <section className={cn('w-full px-6 sm:px-8 md:px-16 lg:px-0 max-w-screen-2xl mx-auto scroll-my-16', variants, className)}>{children}</section>;
}

function H1({ children, className, variant = 'base' }: Readonly<{ children: React.ReactNode; className?: string; variant?: 'base' | 'hero' }>) {
	const variants = {
		base: 'text-4xl md:text-5xl',
		hero: 'text-5xl md:text-7xl',
	}[variant];
	return <h1 className={cn('font-semibold tracking-tighter leading-none', variants, className)}>{children}</h1>;
}

function H2({ children, className }: Readonly<{ children: React.ReactNode; className?: string }>) {
	return <h2 className={cn('text-2xl md:text-3xl font-semibold tracking-tight leading-none', className)}>{children}</h2>;
}

function H3({ children, className }: Readonly<{ children: React.ReactNode; className?: string }>) {
	return <h3 className={cn('text-lg md:text-xl font-semibold tracking-normal leading-none', className)}>{children}</h3>;
}

function P({ children, variant = 'md' }: { children?: React.ReactNode; variant?: 'sm' | 'md' | 'lg' }) {
	const variants = {
		sm: 'text-sm tracking-wide [&:not(:first-child)]:mt-4',
		md: 'text-base [&:not(:first-child)]:mt-6',
		lg: 'text-lg [&:not(:first-child)]:mt-8',
	}[variant];
	return <p className={cn(variants)}>{children}</p>;
}

function BlockQuote({ children, className }: { children?: React.ReactNode; className?: string }) {
	return <blockquote className={cn('mt-6 border-l-2 pl-6 italic', className)}>{children}</blockquote>;
}

function A({ children, href, onClick }: { children?: React.ReactNode; href?: string; onClick?: () => void }) {
	return (
		<Link href={href ? href : '#'} className='transition-colors duration-300 hover:text-muted-foreground' onClick={onClick}>
			{children}
		</Link>
	);
}

export { Page, Section, H1, H2, H3, P, A, BlockQuote };
