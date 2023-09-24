import {
	Box,
	Center,
	Flex,
	Heading,
	Text,
} from '@/components/chakraUI/proxy/proxyChakra';

import AboutUsCardInfo from './AboutUsCardInfo/AboutUsCardInfo';

const infoData = [
	{
		count: '5000+',
		description: 'реализованных проектов по всему миру на начало 2022 года',
	},
	{
		count: '400+',
		description: 'дизайнеров и дилеров рекомендуют систему MimiSmart',
	},
	{
		count: '250+',
		description: 'специалистов работают над развитием продукта MimiSmart ',
	},
	{
		count: '50+',
		description: 'успешно работающих филиалов по всему миру',
	},
];

const AboutUs = () => {
	return (
		<Box as='section' id='about' mt='80px'>
			<Center className='w-full' flexDirection='column' gap='20px'>
				<Heading as='h2' textAlign='center'>
					О компании MiMiSmart
				</Heading>
				<Text textAlign='center'>
					за 17 лет мы стали самой покупаемой системой умный дом в России
				</Text>
			</Center>
			<Flex className='mt-10 flex-col gap-10 md:flex-row'>
				{infoData.map((item, idx) => (
					<AboutUsCardInfo info={item} />
				))}
			</Flex>
		</Box>
	);
};

export default AboutUs;
