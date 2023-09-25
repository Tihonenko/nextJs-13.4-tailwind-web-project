import {
	AboutUs,
	Automatical,
	DistShowroom,
	Functionality,
	Guarantee,
	HeroSection,
	ShowroomForm,
	ShowroomInvite,
} from './_section';

export default async function Home() {
	return (
		<>
			<HeroSection />
			<Functionality />
			<Guarantee />
			<Automatical />
			<AboutUs />
			<ShowroomInvite />
			<ShowroomForm />
			<DistShowroom />
			{/* TODO Add form */}
		</>
	);
}
