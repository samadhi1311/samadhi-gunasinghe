import { P } from './ui/base-styles';

export default function Footer() {
	return (
		<footer className='pb-16 text-center'>
			<P>
				&copy; 2024{' '}
				<span className='bg-gradient-to-r from-sky-500 via-violet-600 to-rose-500 bg-clip-text font-medium text-transparent dark:from-sky-400 dark:via-violet-500 dark:to-rose-400'>
					Samadhi Gunasinghe
				</span>
				, All rights reserved.
			</P>
		</footer>
	);
}
