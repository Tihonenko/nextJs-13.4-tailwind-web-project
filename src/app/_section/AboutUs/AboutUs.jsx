import {
	Box,
	Center,
	Flex,
	Heading,
	Text,
} from '@/components/chakraUI/proxy/proxyChakra';

const AboutUs = () => {
	return (
		<Flex as='section' id='about' mt='80px'>
			<Center className='w-full'>
				<Heading textAlign='center'>О компании MiMiSmart</Heading>
			</Center>
		</Flex>
	);
};

export default AboutUs;
