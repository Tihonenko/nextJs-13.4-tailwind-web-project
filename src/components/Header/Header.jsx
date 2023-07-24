'use client';

import React, { useState } from 'react';
import useSWR from 'swr';

import {
	PhoneIcon,
	Popover,
	PopoverBody,
	PopoverContent,
	PopoverTrigger,
} from '@/components/chakraUI/proxy/proxyChakra';

import { Logo } from '@/UI/Logo/Logo';

import useMediaQuery from '@/hooks/useMediaQuery';

import { Burger } from './BurgerMenu/Burger';
import { navData } from './Data';
import { Nav } from './Nav/Nav';
import styles from './header.module.scss';

const Header = () => {
	const isAboveSmallQuery = useMediaQuery('(min-width: 1024px)');
	const isAboveMediumQuery = useMediaQuery('(min-width: 1280px)');

	return (
		<header className={`container ${styles.header}`}>
			{/* logo */}
			<div>
				<Logo />
			</div>
			{isAboveSmallQuery ? (
				<>
					{/* navigation */}
					<Nav navData={navData} />
					{/* Phone */}
					<div className={styles.header_phone}>
						{isAboveMediumQuery ? (
							<>
								<PhoneIcon as='svg' />
								<p className='hidden xl:block'>+7 495 189-69-67</p>
							</>
						) : (
							<>
								<Popover>
									<PopoverTrigger>
										<button>
											<PhoneIcon as='svg' />
										</button>
									</PopoverTrigger>
									<PopoverContent width={'auto'}>
										<PopoverBody>
											<p className=''>+7 495 189-69-67</p>
										</PopoverBody>
									</PopoverContent>
								</Popover>
							</>
						)}
					</div>
				</>
			) : (
				<>
					<Burger navData={navData} />
				</>
			)}
		</header>
	);
};

export default Header;
