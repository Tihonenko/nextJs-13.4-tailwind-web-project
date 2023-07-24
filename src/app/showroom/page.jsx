import React, { Suspense } from 'react';

import Loading from './loading';

export const revalidate = 60;

const page = () => {
	return (
		<Suspense fallback={<Loading />}>
			<h1>showroom</h1>
		</Suspense>
	);
};

export default page;
