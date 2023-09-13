import Image from 'next/image';

import {
	Box,
	Button,
	Center,
	Flex,
	Heading,
	Text,
} from '@/components/chakraUI/proxy/proxyChakra';

const Automatical = () => {
	return (
		<Flex className='relative overflow-hidden rounded-t-[20px]'>
			<Flex
				flexDirection='column'
				alignItems='start'
				className='mt-10 w-5/6'
			>
				<Heading
					as='h3'
					fontWeight='bold'
					className='text-3xl md:text-5xl md:leading-[46px]'
				>
					Положитесь <br />
					на автоматизации
				</Heading>
				<Text className='mt-2 text-base font-medium'>
					для запуска автоматизаций используются датчики, которые
					размещаются там, где вам они необходимы
				</Text>
			</Flex>
			<Box className='absolute -z-30'>
				<Image
					src='/home/AutomMobile.png'
					width={450}
					height={1075}
					alt='background'
				/>
			</Box>
		</Flex>
	);
};

export default Automatical;
