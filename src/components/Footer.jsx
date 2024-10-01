import { mdiGithub } from '@mdi/js';
import Icon from '@mdi/react';
import styled from 'styled-components';

const Wrapper = styled.footer`
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.7rem;
	font-size: 1.7rem;
	color: black;
	text-align: center;

	a {
		padding-top: 0.5rem;
	}
`;

const Footer = () => {
	return (
		<Wrapper data-testid='footer'>
			<p>Realized by MohamedSayhii</p>
			<a href='https://github.com/mohamedsayhii'>
				<Icon path={mdiGithub} size={1.2} color={'black'} />
			</a>
		</Wrapper>
	);
};

export default Footer;
