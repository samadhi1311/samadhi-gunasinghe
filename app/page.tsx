'use client';

export default function Home() {
	return (
		<main className='flex min-h-svh flex-col items-center justify-center max-w-screen-2xl'>
			<h1 className='text-2xl lg:text-8xl font-dirtyline tracking-wide lowercase flex flex-col leading-none text-white/60'>
				<span className='self-start font-thin'>Hello, I&apos;m </span>
				<span className='text-4xl lg:text-[10rem] self-center text-white'>Samadhi Gunasinghe</span>
				<span className='self-end font-thin'>a creative web developer</span>
				<span className='self-end font-thin'>and designer</span>
			</h1>
		</main>
	);
}
