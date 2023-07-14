'use client';

import { NavbarContext } from '@context/NavbarContext';
import { useContext, useEffect } from 'react';

const useSmoothScrollTo = (targetHash = null) => {
	const { navRect } = useContext(NavbarContext);

	useEffect(() => {
		if (typeof window === 'undefined') return;
		const hash = targetHash || window.location.hash;

		if (!hash) return;

		const headerOffset = navRect?.height || '70';

		// Only proceed if target is a single hash tag
		const startWithHashRegex = /^#\w+/g;
		if (!startWithHashRegex.test(hash)) return;

		let target = document.querySelectorAll(`${hash}`)[0];

		if (!target) return;

		const elementPosition = target.getBoundingClientRect().top;
		const offsetPosition =
			elementPosition + window.pageYOffset - headerOffset;

		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth',
		});
	}, [navRect.height, targetHash]);
};

export default useSmoothScrollTo;
