'use client';

import { Montserrat } from 'next/font/google';
import { useEffect } from 'react';

import Header from '@/components/Header/Header';

// import SmoothScroll from '@/components/SmoothScroll/SmoothScroll';
import './globals.scss';
import { Providers } from '@/app/GlobalProviders/Providers';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
	title: 'MiMiSmart',
	description: 'Умный дом под ключ',
};

const RootLayout = ({ children }) => {
	return (
		<html lang='ru'>
			<body className={montserrat.className}>
				<Providers>
					<Header />
					<main
						className='container'
						data-scroll-container
						data-scroll-speed
					>
						{/* <SmoothScroll> */}
						{children}
						{/* </SmoothScroll> */}
					</main>
				</Providers>
			</body>
		</html>
	);
};

export default RootLayout;
