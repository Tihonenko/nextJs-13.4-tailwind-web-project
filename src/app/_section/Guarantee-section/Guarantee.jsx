'use client';

import Image from 'next/image';

import {
	Box,
	Button,
	Center,
	Flex,
	Heading,
	Text,
} from '@/components/chakraUI/proxy/proxyChakra';

import useMediaQuery from '@/hooks/useMediaQuery';

import FiveDesktop from './SVG/FiveDesktop';
import Five from './SVG/FiveMobile';
import FiveMobile from './SVG/FiveMobile';

const Guarantee = () => {
	const isAboveSmallQuery = useMediaQuery('(min-width: 640px)');

	return (
		<Flex className='relative mt-20 h-[755px] flex-col  overflow-hidden rounded-[30px] pb-5 pt-6 sm:h-auto sm:flex-row '>
			<Center
				flexDirection='column'
				gap='6'
				className='gap-3 sm:ml-4 sm:w-1/2 sm:items-baseline md:ml-10'
			>
				<Text
					as='p'
					bgColor='blackAlpha.300'
					fontWeight='semibold'
					rounded='40px'
					py='1.5'
					px='3.5'
					className='sm:text-sm'
				>
					на всю нашу продукцию
				</Text>
				<Heading
					as='h2'
					fontSize='5xl'
					lineHeight='45px'
					textAlign='center'
					fontWeight='bold'
					className='sm:text-left sm:text-3xl'
				>
					5 лет <br className='sm:hidden' />
					Гарантии
				</Heading>
				<Text
					as='p'
					textAlign='center'
					fontSize='15px'
					mt='7px'
					className='text-[#1D1D1D] sm:text-left'
				>
					Самая длительная гарантия на рынке <br /> и круглосуточная
					поддержка по любым вопросам
				</Text>
				<Button className='button-price'>Рассчитать стоимость</Button>
			</Center>
			<Box className='-z-10 sm:absolute  sm:-right-20 sm:-top-6 sm:-translate-x-0 sm:rotate-[2deg] sm:scale-[.85] md:rotate-0'>
				{isAboveSmallQuery ? <FiveDesktop /> : <FiveMobile />}
			</Box>
			<Box className='absolute top-0 -z-30 w-full sm:-top-24 sm:rotate-90 md:-top-10 lg:top-0 lg:rotate-0 lg:scale-105 '>
				<Image
					src='/home/GuaranteeMobile.png'
					alt='background'
					width={400}
					height={784}
					className='lg:hidden'
				/>
				<Image
					src='/home/GuarenteeDesktop.png'
					alt='background'
					width={1440}
					height={450}
					className='hidden lg:block'
				/>
			</Box>
		</Flex>
	);
};

export default Guarantee;
