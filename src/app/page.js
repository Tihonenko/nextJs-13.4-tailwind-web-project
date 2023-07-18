import Image from 'next/image';

import { CardChecker } from '@/components/CardChecker/CardChecker';

import { PriceButton } from '@/UI/PriceButton/PriceButton';

export default function Home() {
	return (
		<section id='functionality' className='relative mt-3 pt-16'>
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
					{/* <CardChecker /> */}
				</div>
				<PriceButton>Расчитать стоймость</PriceButton>
			</div>
			<div className='-z-10 w-full sm:h-[500px] lg:h-[800px] xl:h-[1000px]'>
				<Image
					src='/home/home.png'
					className='-z-10 sm:translate-y-8 lg:translate-y-4 xl:-translate-y-6'
					alt='home'
					fill
				/>
			</div>
			<div className='absolute top-0 -z-20 h-[95%] w-full bg-[#EBE7E6]' />
		</section>
	);
}
