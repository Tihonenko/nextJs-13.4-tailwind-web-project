import React from 'react';

import { PhoneIcon } from '@/components/chakraUI/proxy/proxyChakra';

import { Logo } from '@/UI/Logo/Logo';

import { navData } from './Data';
import { Nav } from './Nav/Nav';
import styles from './header.module.scss';

const Header = () => {
	return (
		<header className={`container ${styles.header}`}>
			{/* logo */}
			<div>
				<Logo />
			</div>
			{/* navigation */}
			<Nav navData={navData} />
			{/* phone */}
			<div className={styles.header_phone}>
				<PhoneIcon as='svg' />
				<p>+7 495 189-69-67</p>
			</div>
		</header>
	);
};

export default Header;
