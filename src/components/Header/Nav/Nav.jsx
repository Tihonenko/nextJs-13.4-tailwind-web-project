'use client';

import Link from 'next/link';
import React from 'react';

import { NavLink } from '../NavLink';
import styles from '../header.module.scss';

export const Nav = ({ navData }) => {
	return (
		<nav>
			<ul className={styles.header_list}>
				{navData.map((item) => (
					<li key={item.id}>
						<NavLink item={item} />
					</li>
				))}
			</ul>
		</nav>
	);
};
