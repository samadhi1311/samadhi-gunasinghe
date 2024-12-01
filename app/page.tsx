'use client';

import RetroGrid from '@/components/ui/retro-grid';
import { motion } from 'motion/react';

export default function Home() {
	return (
		<main className='mx-auto flex h-svh max-w-screen-2xl flex-col items-center justify-center'>
			<motion.div
				className='font-funnel-display flex flex-col text-2xl font-medium leading-none tracking-tighter text-white/60 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 3, delay: 0.5, ease: [0.645, 0.045, 0.355, 1] }}>
				<span className='self-start'>Hello, I&apos;m </span>
				<span className='w-[75cqw] self-center'>
					<img src='/samadhi.svg' alt='Logo text saying Samadhi' className='w-full' />
				</span>
				<span className='self-end'>a creative web developer</span>
				<span className='self-end'>and designer</span>
			</motion.div>
			<RetroGrid />
		</main>
	);
}
