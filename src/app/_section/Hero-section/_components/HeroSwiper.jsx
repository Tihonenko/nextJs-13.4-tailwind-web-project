'use client';

import { Suspense } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';
import useSWR from 'swr';

import CardSwiper from './CardSwiper';
import Loading from '@/app/loading';
import { getAllCard } from '@/service/getAllCard';

const HeroSwiper = () => {
	const { data: card, isLoading } = useSWR('card', getAllCard);

	if (isLoading) return <Loading />;

	return (
		<Swiper
			spaceBetween={20}
			modules={[Pagination]}
			slidesPerView={1.2}
			pagination={{
				clickable: true,
			}}
			className='m-5'
			breakpoints={{
				768: {
					slidesPerView: 1.8,
				},
			}}
		>
			{card.map((card, idx) => (
				<SwiperSlide key={idx}>
					<CardSwiper card={card} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default HeroSwiper;
