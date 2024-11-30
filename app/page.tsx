'use client';

import RetroGrid from '@/components/ui/retro-grid';
import { motion } from 'motion/react';

export default function Home() {
	return (
		<main className='mx-auto flex h-svh max-w-screen-2xl flex-col items-center justify-center'>
			<motion.h1
				className='font-dirtyline flex flex-col text-2xl lowercase tracking-wide text-white/60 md:text-4xl xl:text-6xl'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 3, delay: 0.5, ease: [0.645, 0.045, 0.355, 1] }}>
				<span className='self-start'>Hello, I&apos;m </span>
				<span className='self-center text-4xl text-white md:text-7xl xl:text-9xl'>Samadhi Gunasinghe</span>
				<span className='self-end'>a creative web developer</span>
				<span className='self-end'>and designer</span>
			</motion.h1>
			<RetroGrid />
		</main>
	);
}
