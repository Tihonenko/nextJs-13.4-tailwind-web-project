import {
	Box,
	Flex,
	Heading,
	ListItem,
	UnorderedList,
} from '@/components/chakraUI/proxy/proxyChakra';

import styles from '../../functionality.module.scss';

const SecurityCard = () => {
	return (
		<Flex
			as='div'
			flexDirection={'column'}
			className='w-full md:w-3/5 lg:mr-20'
		>
			<Box className={styles.card_secondary}>
				<Heading as='h4' className={styles.main_title}>
					Безопастность
				</Heading>
				<UnorderedList mt='4' spacing={1}>
					<ListItem>Электрозамок</ListItem>
					<ListItem>Защита от протечек</ListItem>
					<ListItem>Охранная сигнализация</ListItem>
					<ListItem>Видеонаблюдение</ListItem>
					<ListItem>Домофония</ListItem>
				</UnorderedList>
			</Box>
		</Flex>
	);
};

export default SecurityCard;
