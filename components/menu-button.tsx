'use client';

import { useState } from 'react';
import { HiBars3BottomRight, HiMiniXMark } from 'react-icons/hi2';
import { AnimatePresence, motion } from 'motion/react';
import Navigation from '@/components/navigation';

export default function MenuButton() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<motion.button
				className='group fixed right-4 top-4 z-[100] font-medium transition-colors duration-100 md:right-8 md:top-8'
				onClick={() => setIsOpen(!isOpen)}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 1 }}>
				<div className='flex items-center overflow-hidden px-6 py-2 uppercase tracking-widest group-hover:text-white'>
					<span className='rounded-lg hover:bg-white/10 p-2'>
						{isOpen && (
							<motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
								<HiMiniXMark className='size-8' />
							</motion.span>
						)}
						{!isOpen && (
							<motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
								<HiBars3BottomRight className='size-8' />
							</motion.span>
						)}
					</span>
				</div>
			</motion.button>

			<AnimatePresence mode='wait'>{isOpen && <Navigation closeMenu={() => setIsOpen(false)} />}</AnimatePresence>
		</>
	);
}
