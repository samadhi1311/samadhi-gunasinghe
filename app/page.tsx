'use client';

import { A, H1, H2, P, Page, Section } from '@/components/ui/base-styles';

export default function Home() {
	return (
		<Page>
			<Section variant='main' className='flex min-h-[60vh] max-w-screen-md flex-col items-start justify-center'>
				<H2>Hello there!</H2>
				<H1 variant='hero'>
					I&apos;m{' '}
					<span className='bg-gradient-to-r from-sky-500 via-violet-600 to-rose-500 bg-clip-text text-transparent dark:from-sky-400 dark:via-violet-500 dark:to-rose-400'>Samadhi</span>,
				</H1>
				<H2>A fullstack web developer and UI/UX designer</H2>
			</Section>

			<Section>
				<div className='mx-auto max-w-screen-md'>
					<section id='about' className='my-16 scroll-my-24'>
						<H2 className='font-mono font-medium'>_about</H2>

						<div className='mt-8'>
							<P>
								I&apos;m Samadhi Gunasinghe, a self-employed as a web developer. I make things for the web like websites, webapps, microservices, APIs and everthing inbetween. I Also
								have a Bsc in Information and Communication Technology from University of Jaffna, Sri Lanka.
							</P>
						</div>

						<div className='mt-8'>
							<P>My Favorite stack includes,</P>
							<div className='ml-4 mt-2 grid grid-cols-2 gap-4 md:ml-8'>
								<div>
									<P>Languages</P>
									<ul className='mt-2 list-inside list-disc'>
										<li>HTML5</li>
										<li>CSS3</li>
										<li>Typescript</li>
									</ul>
								</div>
								<div>
									<P>Frontend</P>
									<ul className='mt-2 list-inside list-disc'>
										<li>TailwindCSS</li>
										<li>React.JS</li>
										<li>Motion</li>
										<li>Next.JS</li>
									</ul>
								</div>
								<div>
									<P>Backend</P>
									<ul className='mt-2 list-inside list-disc'>
										<li>Firebase</li>
										<li>Drizzle</li>
										<li>SQLite</li>
										<li>MongoDB</li>
										<li>PostgreSQL</li>
									</ul>
								</div>
								<div>
									<P>Cloud Infrastructure</P>
									<ul className='mt-2 list-inside list-disc'>
										<li>Cloudflare</li>
										<li>GCP</li>
										<li>AWS</li>
										<li>Docker</li>
										<li>REST APIs</li>
									</ul>
								</div>
								<div>
									<P>Software and Tools</P>
									<ul className='mt-2 list-inside list-disc'>
										<li>VS Code</li>
										<li>Figma</li>
										<li>Insomnia</li>
										<li>GitHub</li>
										<li>Affinity Publisher</li>
									</ul>
								</div>
							</div>
						</div>

						<div className='mt-8'>
							<P>You can reach out to me in anyway you want (including socials),</P>
							<ul className='mt-2 list-inside list-disc'>
								<li>
									Phone: <A href='tel:+94719113637'>+94 71 911 36 37</A>
								</li>
								<li>
									Email: <A href='mailto:hello@samadhi-gunasinghe.com'>hello@samadhi-gunasinghe.com</A>
								</li>
							</ul>
						</div>
					</section>

					<section id='work' className='my-32 scroll-my-24'>
						<H2 className='font-mono font-medium'>_work</H2>
						<P>Here are some of the projects i have previously worked on,</P>
						<dl className='relative mx-auto max-w-screen-sm space-y-8 py-8 before:absolute before:bottom-0 before:left-0 before:top-2 before:w-0.5 before:-translate-x-1/2 before:bg-neutral-200 before:dark:bg-neutral-800'>
							<div className='relative before:absolute before:left-0 before:top-2 before:z-[1] before:size-3 before:-translate-x-1/2 before:rounded-full before:bg-violet-400 before:dark:bg-violet-700'>
								<dt className='pl-6 text-lg font-medium'>
									<A href='https://haribuilders.lk'>Hari Builders (Pvt) Ltd.</A>
								</dt>
								<dd className='pl-6'>Designed, developed and deployed a portfolio website for a leading construction company based in Sri Lanka for over 14 years.</dd>
							</div>

							<div className='relative before:absolute before:left-0 before:top-2 before:z-[1] before:size-3 before:-translate-x-1/2 before:rounded-full before:bg-violet-400 before:dark:bg-violet-700'>
								<dt className='pl-6 text-lg font-medium'>
									<A href='https://colorspeck.lk'>COLORSPECK</A>
								</dt>
								<dd className='pl-6'>A fully-fledged online marketplace to sell Handicrafts globally.</dd>
							</div>

							<div className='relative before:absolute before:left-0 before:top-2 before:z-[1] before:size-3 before:-translate-x-1/2 before:rounded-full before:bg-violet-400 before:dark:bg-violet-700'>
								<dt className='pl-6 text-lg font-medium'>
									<A href='https://hyperreal.cloud'>hyperreal.</A>
								</dt>
								<dd className='pl-6'>Website for hyperreal web development agency where I&apos;m currently self-employed.</dd>
							</div>

							<div className='relative before:absolute before:left-0 before:top-2 before:z-[1] before:size-3 before:-translate-x-1/2 before:rounded-full before:bg-violet-400 before:dark:bg-violet-700'>
								<dt className='pl-6 text-lg font-medium'>
									<A href='https://hyperbooks.hyperreal.cloud'>hyperbooks. (Early Access)</A>
								</dt>
								<dd className='pl-6'>An invoice generator with pre-made templates with ability to customization.</dd>
							</div>

							<div className='relative before:absolute before:left-0 before:top-2 before:z-[1] before:size-3 before:-translate-x-1/2 before:rounded-full before:bg-violet-400 before:dark:bg-violet-700'>
								<dt className='pl-6 text-lg font-medium'>
									<A href='https://samadhi1311.github.io/petpals/'>PetPals</A>
								</dt>
								<dd className='pl-6'>A platform to connect homeless animals with potential adopters.</dd>
							</div>
						</dl>
						<P variant='sm'>
							Checkout my <A href='https://github.com/samadhi1311'>GitHub</A> for more info.
						</P>
					</section>

					<section id='socials' className='my-32 scroll-my-24'>
						<H2 className='font-mono font-medium'>_socials</H2>
						<P>All my personal stuff, work, humor is there. So, please don&apos;t judge me.</P>
						<ul className='mt-2 list-inside list-disc'>
							<li>
								GitHub: <A href='https://github.com/samadhi1311'>@samadhi1311</A>
							</li>
							<li>
								Facebook: <A href='https://www.facebook.com/samadhi.slg/'>@samadhi.slg</A>
							</li>
							<li>
								Instagram: <A href='https://www.instagram.com/samadhi_gunasinghe/'>@samadhi_gunasinghe</A>
							</li>
						</ul>
					</section>
				</div>
			</Section>
		</Page>
	);
}
