'use client';

import Image from 'next/image';
import { Suspense } from 'react';

import { CardChecker } from '@/components/CardChecker/CardChecker';
import { PriceButton } from '@/components/UI/PriceButton/PriceButton';

import HeroSwiper from './_components/HeroSwiper';
import Loading from '@/app/loading';
import { getAllCard } from '@/service/getAllCard';

const HeroSection = () => {
	return (
		<section
			id='functionality'
			className='relative  mt-3 flex flex-col items-center overflow-hidden pt-16'
		>
			<div className='flex flex-col items-center gap-8'>
				<div className='flex flex-col items-center gap-3'>
					<h1 className='w-auto text-center text-5xl font-bold lg:text-[68px] lg:leading-[66px]'>
						Умный дом
						<br /> под ключ
					</h1>
					<p className='text-center text-base'>
						российский производитель
						<br /> современной электрики
					</p>
				</div>
				<PriceButton>Расчитать стоймость</PriceButton>
			</div>
			<div className='-z-10 hidden w-1/2  lg:flex lg:h-[700px] xl:h-[1000px]'>
				<Image
					src='/home/home.png'
					className='-z-10  lg:translate-y-8 xl:-translate-y-6'
					alt='home'
					fill
				/>
			</div>
			<div className='absolute top-0 -z-20  h-[75%] w-full rounded-3xl bg-[#EBE7E6] md:h-[85%]  lg:block lg:h-[95%]' />

			<Image
				src='/home/home.png'
				className='md:h-3/4 md:w-3/4 lg:hidden'
				alt='home'
				width={400}
				height={445}
			/>
			<div className='w-full lg:hidden'>
				<HeroSwiper />
			</div>
		</section>
	);
};

export default HeroSection;
