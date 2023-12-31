import {
	Box,
	Center,
	Flex,
	Heading,
	Text,
} from '@/components/chakraUI/proxy/proxyChakra';

const Description = () => {
	return (
		<Box as='section' className='mt-32'>
			<Center className='flex-col gap-4'>
				<Heading fontSize='38px' className='text-left'>
					За 17 лет это уже <br /> 6 версия нашего шоурума
				</Heading>
				<Flex className='max-w-[550px] flex-col gap-3'>
					<Text>
						Мы побывали, наверное, в каждом российском и во многих
						европейских шоурумах.Каждый раз дополняли функционал самыми
						технологичными и интересными и решениями по управлению
						освещением, климатом, системами безопасности, мультимедия и
						многим другим.
					</Text>
					<Text>
						Создали решения, которых нет ни у одного производителя умных
						домов в мире. Продумали каждую деталь приложения, оборудования
						и сценариев работы. А наши программисты довели программную
						часть до идеального состояния. Работает как швейцарские часы.
					</Text>
					<Text>
						Ремонт делается всего несколько раз в жизни, мы поможем
						сделать его правильным с технической стороны. (это можно
						выделить)
					</Text>
					<Text>
						Приходите и испытайте как работает система умного дома в
						действии и узнайте зачем она вообще нужна.
					</Text>
				</Flex>
			</Center>
		</Box>
	);
};

export default Description;
