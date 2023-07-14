'use client';

import Link from 'next/link';
import React from 'react';

import styles from '../header.module.scss';

export const Nav = ({ navData }) => {
	return (
		<nav>
			<ul className={styles.header_list}>
				{navData.map((item) => (
					<li className='text-black-500' key={item.link}>
						<Link href={item.link}>{item.label} </Link>
					</li>
				))}
				<div></div>
			</ul>
		</nav>
	);
};
