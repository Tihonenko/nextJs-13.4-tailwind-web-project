'use client';

import { Switches } from '..';
import Image from 'next/image';
import { useSelector } from 'react-redux';

import {
	Box,
	Button,
	Center,
	Flex,
	Heading,
	Text,
} from '@/components/chakraUI/proxy/proxyChakra';

import IfMove from './IfMove/IfMove';

const Automatical = () => {
	const data = useSelector((state) => state.ifMove.data);
	return (
		<>
			<Flex
				as='section'
				id='control'
				textColor='#fff'
				className='relative mx-auto mt-120 flex-col overflow-hidden rounded-t-[20px] sm:w-3/5 lg:w-full'
			>
				<Flex
					flexDirection='column'
					alignItems='start'
					className='mx-[10px] mt-10 w-5/6'
				>
					<Heading
						as='h3'
						fontWeight='bold'
						className='text-3xl md:text-5xl md:leading-[46px] '
					>
						Положитесь <br />
						на автоматизации
					</Heading>
					<Text className='mt-2 text-base font-medium'>
						для запуска автоматизаций используются датчики,
						<br className='hidden lg:block' /> которые размещаются там,
						где вам они необходимы
					</Text>
				</Flex>
				<Box className='mx-[10px] mt-12'>
					<Flex>
						<Flex className='flex-col pb-10 lg:flex-row'>
							<IfMove data={data.slice(0, 1)} lable='Если' />
							<IfMove data={data.slice(1, 3)} lable='Действие' />
							<IfMove data={data.slice(3, 4)} lable='Если' />
							<IfMove data={data.slice(4, 6)} lable='Действие' />
						</Flex>
					</Flex>
				</Box>
				<Box className='absolute top-40 -z-30 scale-150 bg-gradient-to-t from-black lg:hidden'>
					<Image
						src='/home/AutomMobile.png'
						width={1000}
						height={2075}
						alt='background'
					/>
				</Box>
				<Box className='gradient_dark absolute top-0 -z-30 hidden scale-150 lg:block'>
					<Image
						src='/home/AutomDesktop.png'
						width={4000}
						height={2000}
						alt='background'
					/>
				</Box>
				<Switches />
			</Flex>
		</>
	);
};

export default Automatical;
