import {
	Box,
	Button,
	Center,
	Flex,
	Heading,
	Text,
} from '@/components/chakraUI/proxy/proxyChakra';

import {
	AboutUs,
	Automatical,
	Functionality,
	Guarantee,
	HeroSection,
	Switches,
} from './_section';

export default async function Home() {
	return (
		<>
			<HeroSection />
			<Functionality />
			<Guarantee />
			<Automatical />
			<AboutUs />
		</>
	);
}
