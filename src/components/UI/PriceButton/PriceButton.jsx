import Image from 'next/image';

import styles from './priceButton.module.scss';

export const PriceButton = ({ children }) => {
	return (
		<button className={styles.price_button}>
			<Image
				src='/SVG/button-arrow-svg.svg'
				alt='button'
				width={59}
				height={59}
			/>
			<p className='text-left text-base font-semibold text-white'>
				{children}
			</p>
		</button>
	);
};
