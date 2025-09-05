import { LinkedinLogo } from 'phosphor-react';
import * as S from './styles';

export const Footer = () => {
	return (
		<S.Container>
			<p>
				Inspired by LoLdle • Developed by Frederick Rost
				<a
					href='https://www.linkedin.com/in/frederick-rost/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<LinkedinLogo size={24} color='#958250' weight='fill' />
				</a>
			</p>
		</S.Container>
	);
};
