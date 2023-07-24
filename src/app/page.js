'use client';

import Image from 'next/image';

import { CardChecker } from '@/components/CardChecker/CardChecker';

import { PriceButton } from '@/UI/PriceButton/PriceButton';

import HeroSection from './_section/Hero-section/HeroSection';
import Loading from './loading';

export default async function Home() {
	return (
		<>
			<HeroSection />
		</>
	);
}
