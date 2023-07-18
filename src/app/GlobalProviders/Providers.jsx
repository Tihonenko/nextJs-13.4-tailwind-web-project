'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
// import { theme } from '@/app/GlobalProviders/ChakraTheme/ChakraTheme';
import { extendTheme } from '@chakra-ui/react';

import { switchTheme } from '@/components/UI/Checker/CheckerTheme';

const colors = {
	main: {
		Gray: {
			900: '#444444',
		},
		Orange: '#FC891C',
		White: '#F6FCFF',
		Green: '#34C759',
	},
	text: {
		main: '#2A2A2A',
		second: '#A4A4A4',
	},
};

const sizes = {
	containerSize: {
		'2xl': '1440px',
	},
};

export const theme = extendTheme({
	colors,
	sizes,
	components: { Switch: switchTheme },
});

export const Providers = ({ children }) => {
	return (
		<CacheProvider>
			<ChakraProvider theme={theme}>{children}</ChakraProvider>
		</CacheProvider>
	);
};

// export default Providers;
