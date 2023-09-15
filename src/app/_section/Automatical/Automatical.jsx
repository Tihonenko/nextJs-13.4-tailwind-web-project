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
		<Flex
			as='section'
			id='control'
			textColor='#fff'
			className='relative mt-120 flex-col overflow-hidden rounded-t-[20px]'
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
					для запуска автоматизаций используются датчики, которые
					размещаются там, где вам они необходимы
				</Text>
			</Flex>
			<Box className='mx-[10px] mt-12'>
				<Flex>
					<Flex className='flex-col'>
						<Flex gap='12px'>
							<Box className='border-l-2 border-t-2 pr-10'></Box>
							<Box>
								<Text>Если</Text>
								<Flex
									flexDirection='column'
									className='automaticall_card p-5'
								>
									<Flex className='items-center'>
										<Box className='automaticall_card_little w-2/5'>
											Датчик движения
										</Box>
										<Text className=' mx-1'> = </Text>
										<Box className='automaticall_card_little w-2/5'>
											уловил движение
										</Box>
									</Flex>
									<Text className='mt-2 text-sm '>
										с 10:00 до 20:00
									</Text>
								</Flex>
							</Box>
						</Flex>
					</Flex>
				</Flex>
			</Box>
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
