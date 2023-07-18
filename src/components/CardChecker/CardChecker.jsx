'use client';

import { useState } from 'react';

import {
	Popover,
	PopoverBody,
	PopoverContent,
	PopoverTrigger,
} from '@/components/chakraUI/proxy/proxyChakra';

import { Checker } from '@/UI/Checker/Checker';

export const CardChecker = () => {
	const [isOpen, setIsOpen] = useState(false);

	console.log(isOpen);

	return (
		<>
			<Popover isOpen={isOpen}>
				<PopoverTrigger key={Checker}>
					<button>
						<Checker checked={setIsOpen}>Описание</Checker>
					</button>
				</PopoverTrigger>
				<PopoverContent width={'auto'}>
					<PopoverBody>
						<p className='text-mainGray'>+7 495 189-69-67</p>
					</PopoverBody>
				</PopoverContent>
			</Popover>
		</>
	);
};
