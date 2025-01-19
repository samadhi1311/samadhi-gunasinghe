'use client';

import LetterSwapForward from '@/components/fancy/letter-swap-forward-anim';
import ScrambleHover from '@/components/fancy/scramble-hover';
import ComesInGoesOutUnderline from '@/components/fancy/underline-comes-in-goes-out';
import VerticalCutReveal from '@/components/fancy/vertical-cut-reveal';
import { A, H1, H2, P, Page, Section } from '@/components/ui/base-styles';

export default function Home() {
	return (
		<Page>
			<Section variant='main' className='flex min-h-[60vh] max-w-screen-md flex-col items-start justify-center'>
				<H2>
					<VerticalCutReveal
						splitBy='words'
						staggerDuration={0.025}
						staggerFrom='first'
						transition={{
							type: 'spring',
							stiffness: 150,
							damping: 25,
						}}>
						Hello there!
					</VerticalCutReveal>
				</H2>
				<H1 variant='hero'>
					<VerticalCutReveal
						splitBy='characters'
						staggerDuration={0.025}
						staggerFrom='last'
						reverse={true}
						transition={{
							type: 'spring',
							stiffness: 150,
							damping: 25,
						}}>
						I&apos;m Samadhi,
					</VerticalCutReveal>
				</H1>
				<H2>
					<VerticalCutReveal
						splitBy='words'
						staggerDuration={0.025}
						staggerFrom='center'
						transition={{
							type: 'spring',
							stiffness: 150,
							damping: 25,
						}}>
						A fullstack web developer and UI/UX designer
					</VerticalCutReveal>
				</H2>
			</Section>

			<Section>
				<div className='mx-auto max-w-screen-md'>
					<section id='about' className='my-16 scroll-my-24'>
						<H2 className='font-mono font-medium'>
							<LetterSwapForward label='_about' reverse={false} />
						</H2>

						<div className='mt-8'>
							<P>
								I&apos;m Samadhi Gunasinghe, a self-employed full stack web developer and UI/UX designer. I make things for the web like websites, webapps, microservices, APIs and
								everthing inbetween. I also have a Bsc in Information and Communication Technology from University of Jaffna, Sri Lanka.
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
									Phone:{' '}
									<A href='tel:+94719113637'>
										<ComesInGoesOutUnderline
											label='
                                        +94 71 911 36 37'
										/>
									</A>
								</li>
								<li>
									Email:{' '}
									<A href='mailto:hello@samadhi-gunasinghe.com'>
										<ComesInGoesOutUnderline label='hello@samadhi-gunasinghe.com' />
									</A>
								</li>
							</ul>
						</div>
					</section>

					<section id='work' className='my-32 scroll-my-24'>
						<H2 className='font-mono font-medium'>
							<LetterSwapForward label='_work' reverse={false} />
						</H2>
						<P>Here are some of the projects i have previously worked on,</P>
						<dl className='relative mx-auto max-w-screen-sm space-y-8 py-8 before:absolute before:bottom-0 before:left-0 before:top-2 before:w-0.5 before:-translate-x-1/2 before:bg-neutral-200 before:dark:bg-neutral-800'>
							<div className='relative before:absolute before:left-0 before:top-2 before:z-[1] before:size-3 before:-translate-x-1/2 before:rounded-full before:bg-violet-400 before:dark:bg-violet-700'>
								<dt className='pl-6 text-lg font-medium'>
									<A href='https://haribuilders.lk'>
										<ScrambleHover text={'Hari Builders (Pvt) Ltd.'} scrambleSpeed={50} maxIterations={8} useOriginalCharsOnly={true} className='cursor-pointer' />
									</A>
								</dt>
								<dd className='pl-6'>Designed, developed and deployed a portfolio website for a leading construction company based in Sri Lanka for over 14 years.</dd>
							</div>

							<div className='relative before:absolute before:left-0 before:top-2 before:z-[1] before:size-3 before:-translate-x-1/2 before:rounded-full before:bg-violet-400 before:dark:bg-violet-700'>
								<dt className='pl-6 text-lg font-medium'>
									<A href='https://colorspeck.lk'>
										<ScrambleHover text={'COLORSPECK'} scrambleSpeed={50} maxIterations={8} useOriginalCharsOnly={true} className='cursor-pointer' />
									</A>
								</dt>
								<dd className='pl-6'>A fully-fledged online marketplace to sell Handicrafts globally.</dd>
							</div>

							<div className='relative before:absolute before:left-0 before:top-2 before:z-[1] before:size-3 before:-translate-x-1/2 before:rounded-full before:bg-violet-400 before:dark:bg-violet-700'>
								<dt className='pl-6 text-lg font-medium'>
									<A href='https://hyperreal.cloud'>
										<ScrambleHover text={'hyperreal.'} scrambleSpeed={50} maxIterations={8} useOriginalCharsOnly={true} className='cursor-pointer' />
									</A>
								</dt>
								<dd className='pl-6'>Website for hyperreal web development agency where I&apos;m currently self-employed.</dd>
							</div>

							<div className='relative before:absolute before:left-0 before:top-2 before:z-[1] before:size-3 before:-translate-x-1/2 before:rounded-full before:bg-violet-400 before:dark:bg-violet-700'>
								<dt className='pl-6 text-lg font-medium'>
									<A href='https://hyperbooks.hyperreal.cloud'>
										<ScrambleHover text={'hyperbooks. (Early Access)'} scrambleSpeed={50} maxIterations={8} useOriginalCharsOnly={true} className='cursor-pointer' />
									</A>
								</dt>
								<dd className='pl-6'>An invoice generator with pre-made templates with ability to customization.</dd>
							</div>

							<div className='relative before:absolute before:left-0 before:top-2 before:z-[1] before:size-3 before:-translate-x-1/2 before:rounded-full before:bg-violet-400 before:dark:bg-violet-700'>
								<dt className='pl-6 text-lg font-medium'>
									<A href='https://samadhi1311.github.io/petpals/'>
										<ScrambleHover text={'PetPals'} scrambleSpeed={50} maxIterations={8} useOriginalCharsOnly={true} className='cursor-pointer' />
									</A>
								</dt>
								<dd className='pl-6'>A platform to connect homeless animals with potential adopters.</dd>
							</div>
						</dl>
						<P variant='sm'>
							Checkout my{' '}
							<A href='https://github.com/samadhi1311'>
								<ComesInGoesOutUnderline label='GitHub' />
							</A>{' '}
							for more info.
						</P>
					</section>

					<section id='socials' className='my-32 scroll-my-24'>
						<H2 className='font-mono font-medium'>
							<LetterSwapForward label='_socials' reverse={false} />
						</H2>
						<P>All my personal stuff, work, humor is there. So, please don&apos;t judge me.</P>
						<ul className='mt-2 list-inside list-disc'>
							<li>
								GitHub:{' '}
								<A href='https://github.com/samadhi1311'>
									<ComesInGoesOutUnderline label='@samadhi1311' />
								</A>
							</li>
							<li>
								Facebook:{' '}
								<A href='https://www.facebook.com/samadhi.slg/'>
									<ComesInGoesOutUnderline label='@samadhi.slg' />
								</A>
							</li>
							<li>
								Instagram:{' '}
								<A href='https://www.instagram.com/samadhi_gunasinghe/'>
									<ComesInGoesOutUnderline label='@samadhi_gunasinghe' />
								</A>
							</li>
						</ul>
					</section>
				</div>
			</Section>
		</Page>
	);
}
