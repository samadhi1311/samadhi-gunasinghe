'use client';

export default function Home() {
	return (
		<main className='mx-auto flex h-svh max-w-screen-2xl flex-col items-center justify-center'>
			<h1 className='font-dirtyline flex flex-col text-2xl lowercase tracking-wide text-white/60 lg:text-6xl'>
				<span className='self-start font-thin'>Hello, I&apos;m </span>
				<span className='self-center text-4xl text-white lg:text-9xl'>Samadhi Gunasinghe</span>
				<span className='self-end font-thin'>a creative web developer</span>
				<span className='self-end font-thin'>and designer</span>
			</h1>
		</main>
	);
}
