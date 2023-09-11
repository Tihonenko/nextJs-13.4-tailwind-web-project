import Functionality from './_section/Functionality-section/Functionality';
import Guarantee from './_section/Guarantee-section/Guarantee';
import HeroSection from './_section/Hero-section/HeroSection';

export default async function Home() {
	return (
		<>
			<HeroSection />
			<Functionality />
			<Guarantee />
		</>
	);
}
