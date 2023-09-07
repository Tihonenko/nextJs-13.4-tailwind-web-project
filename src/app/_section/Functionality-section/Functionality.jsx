import SubTitle from '@/components/SubTitle/SubTitle';
import {
	Box,
	Center,
	Flex,
	Heading,
	Text,
} from '@/components/chakraUI/proxy/proxyChakra';

import useMediaQuery from '@/hooks/useMediaQuery';

import ClimateCard from './_components/ClimateCard/ClimateCard';
import CurtainsCard from './_components/CurtainsCard/CurtainsCard';
import ElectrCard from './_components/ElectrCard/ElectrCard';
import LightingCard from './_components/LightingCard/LightingCard';
import SecurityCard from './_components/SecurityCard/SecurityCard';
import styles from './functionality.module.scss';

const Functionality = () => {
	return (
		<Center display={'block'} as='section' id='functionality' mt={'90px'}>
			<Flex flexDirection={'column'} alignItems={'center'} gap={'20px'}>
				<SubTitle>функционал</SubTitle>
				<Flex flexDirection={'column'} gap={'10px'}>
					<Heading
						as='h2'
						textAlign={'center'}
						fontWeight={'bold'}
						className='text-3xl lg:text-5xl'
					>
						Что может
						<br /> умный дом?
					</Heading>
					<Text as='p' textAlign={'center'} className='text-[17px]'>
						возможности, доступные при <br /> установке системы MimiSmart
					</Text>
				</Flex>
			</Flex>
			<ElectrCard />
			<Flex as='div' mt='6' className='flex-col gap-6 md:flex-row'>
				<LightingCard />
				<SecurityCard />
			</Flex>
			<Flex as='div' mt='6' className='flex-col gap-6 md:flex-row'>
				<ClimateCard />
				<CurtainsCard />
			</Flex>
		</Center>
	);
};

export default Functionality;
