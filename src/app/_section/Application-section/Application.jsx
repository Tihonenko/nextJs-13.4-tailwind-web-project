import {
	Box,
	Button,
	Center,
	Flex,
	Heading,
	Text,
} from '@/components/chakraUI/proxy/proxyChakra';

const Application = () => {
	return (
		<Box className='bg-[#212121] pt-5'>
			<Heading as='h2' className='heading' textAlign='center'>
				Приложение
			</Heading>
			<Flex>
				<Box>
					<Heading as='h4' className='text-2xl font-'>
						Управляй светом
					</Heading>
				</Box>
			</Flex>
		</Box>
	);
};

export default Application;
