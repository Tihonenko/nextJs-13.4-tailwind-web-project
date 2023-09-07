import { Box, Text } from '@/components/chakraUI/proxy/proxyChakra';

import styles from './dialog.module.scss';

const DialogCard = ({ textFirst, textSecond, right, top }) => {
	return (
		<Box
			py='10px'
			position='absolute'
			top={top}
			right={right}
			px='20px'
			maxWidth='190px'
			bg='Menu'
			roundedTop='30px'
			roundedBottomLeft='30px'
			height='50px'
			className={`${styles.dialog_card} `}
		>
			<Text fontSize='sm' wordBreak='keep-all' lineHeight='4'>
				{textFirst} <br /> {textSecond}
			</Text>
		</Box>
	);
};

export default DialogCard;
