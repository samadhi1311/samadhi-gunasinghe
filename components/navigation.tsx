'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export default function Navigation({ closeMenu }: { closeMenu: () => void }) {
	return (
		<motion.div
			className='fixed left-0 top-0 z-50 flex w-full flex-col items-center justify-center backdrop-brightness-50 backdrop-blur-xl h-svh'
			initial={{ y: '-100%' }}
			animate={{ y: 0 }}
			exit={{ y: '-100%' }}
			transition={{ duration: 0.5, ease: [0.645, 0.045, 0.355, 1] }}>
			<div className='flex h-full flex-col items-center justify-evenly'>
				<Link href='#' className='text-5xl' onClick={closeMenu}>
					Home
				</Link>
				<Link href='#' className='text-5xl' onClick={closeMenu}>
					Work
				</Link>
				<Link href='#' className='text-5xl' onClick={closeMenu}>
					About
				</Link>
			</div>
		</motion.div>
	);
}
