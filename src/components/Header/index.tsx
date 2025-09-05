import { Link, useLocation } from 'react-router-dom';
import * as S from './styles';

export const Header = () => {
	const { pathname } = useLocation();

	return (
		<S.Container>
			<h1>LoL Challenge</h1>
			<p>A minigame based on league of legends champions.</p>
			<S.Nav>
				<Link className={pathname === '/' ? 'active' : ''} to={'/'}>
					🏆 Classic Mode
				</Link>
				<span>◆</span>
				<Link className={pathname === '/ability' ? 'active' : ''} to={'/ability'}>
					⚡ Ability Mode
				</Link>
			</S.Nav>
		</S.Container>
	);
};
