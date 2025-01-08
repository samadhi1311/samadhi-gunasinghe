'use client';

import { MenuIcon } from 'lucide-react';
import { ModeToggle } from './theme-toggle';
import { A } from './ui/base-styles';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

export default function Navigation() {
	const [open, setOpen] = useState(false);
	return (
		<header className='fixed top-0 z-50 w-full bg-foreground/5 px-8 py-4 backdrop-blur-md'>
			<nav className='mx-auto flex max-w-screen-md items-center justify-between gap-4 font-mono'>
				<span className='hidden space-x-12 md:inline'>
					<A href='/#about'>_about</A>
					<A href='/#work'>_work</A>
					<A href='/#socials'>_socials</A>
				</span>

				<span className='hidden items-center gap-4 md:flex'>
					<ModeToggle />
				</span>

				<span className='inline md:hidden'>
					<Sheet open={open} onOpenChange={() => setOpen(!open)}>
						<SheetTrigger asChild>
							<Button variant='outline' size='icon'>
								<MenuIcon className='size-5' />
							</Button>
						</SheetTrigger>
						<SheetContent side='left' className='flex flex-col items-center justify-around'>
							<SheetHeader>
								<SheetTitle className='flex flex-col items-center gap-2'>Samadhi Gunasinghe</SheetTitle>
								<SheetDescription>Welcome to my Portfolio</SheetDescription>
							</SheetHeader>

							<div className='flex flex-col items-center gap-8'>
								<A href='/#about' onClick={() => setOpen(false)}>
									_about
								</A>
								<A href='/#work' onClick={() => setOpen(false)}>
									_work
								</A>
								<A href='/#socials' onClick={() => setOpen(false)}>
									_socials
								</A>
							</div>

							<div className='flex flex-col gap-8'></div>

							<SheetFooter>
								<div className='flex w-full flex-col gap-8' onClick={() => setOpen(false)}>
									<ModeToggle />
								</div>
							</SheetFooter>
						</SheetContent>
					</Sheet>
				</span>
			</nav>
		</header>
	);
}
