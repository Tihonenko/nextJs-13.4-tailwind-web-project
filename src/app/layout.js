import { Montserrat } from 'next/font/google';
import { Suspense } from 'react';

import Header from '@/components/Header/Header';

import './globals.scss';
import Loading from './loading';
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
					<main className='container'>
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
