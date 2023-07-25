'use client';

import Image from 'next/image';
import { Suspense } from 'react';

import { CardChecker } from '@/components/CardChecker/CardChecker';
import { PriceButton } from '@/components/UI/PriceButton/PriceButton';

import HeroSwiper from './_components/HeroSwiper';
import Loading from '@/app/loading';
import { getAllCard } from '@/service/getAllCard';

export const card = [
	{
		title: 'Освещение',
		description:
			'Основное освещение меняет цвет (от холодного к теплому) и яркость свечения» в зависимости от времени суток.',
		className: 'left-16 top-[55%]',
	},
	{
		title: 'Шторы',
		description:
			'Система самостоятельно откроет шторы или группы штор по времени суток или с вашей команды.',
		className: 'left-[35%] top-[45%]',
	},
	{
		title: 'Камеры',
		description:
			'Вы можете в online режиме наблюдать за тем, что происходит пока вас нет дома.',
		className: 'left-16 top-2/3',
	},
	{
		title: 'Ворота',
		description:
			'Удобное открытие и закрытие любых электроворот и электрозамков по вашей команде.',
		className: 'left-96 top-[77%]',
	},
	{
		title: 'Протечка',
		description:
			'Датчик врезается в плитку и выглядит эстетично. При протечке система самостоятельно перекроет воду.',
		className: 'left-[42rem] xl:left-[54rem] top-1/3',
	},
	{
		title: 'Климат',
		description:
			'Умный дом знает, какая температура воздуха вам комфортна. Знает, как ее поддерживать. Когда включить отопление, а когда кондиционер или вентиляцию.',
		className: 'left-[36rem] xl:left-[48rem]  top-2/3',
	},
	{
		title: 'Музыка',
		description:
			'Музыка в доме будет следовать за вами. Вы сможете отправлять голосовые сообщения в любую комнату.  А система домашнего кинотеатра по одной команде подготовит комнату к просмотру кино (плавно выключит свет и закроет шторы), включит TV с аудиосистемой.',
		className: 'left-[49rem] xl:left-[62rem]  top-[58%]',
	},
];

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
			{card.map((card, idx) => (
				<CardChecker
					key={idx}
					className={`absolute hidden lg:block  ${card.className}`}
					card={card}
				/>
			))}
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
