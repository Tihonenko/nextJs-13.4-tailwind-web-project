import Image from 'next/image';

import {
	Box,
	Flex,
	Heading,
	Text,
} from '@/components/chakraUI/proxy/proxyChakra';

export const Application = () => {
	return (
		<Box className='bg-[#212121] pt-5'>
			<Heading as='h2' className='heading' textAlign='center'>
				Приложение
			</Heading>
			<Flex>
				<Box>
					<Box>
						<Heading as='h4' className='text-2xl font-bold leading-9'>
							Управляй светом
						</Heading>
						<Text className='w-2/3 text-sm'>
							Настраивай яркость света и цвета в любой комнате дома
						</Text>
					</Box>
					<Box>
						<Image src='/home/app-card1.png' />
					</Box>
				</Box>
			</Flex>
		</Box>
	);
};
