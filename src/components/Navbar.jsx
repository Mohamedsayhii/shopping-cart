import styled from 'styled-components';
import Icon from '@mdi/react';
import { mdiCart } from '@mdi/js';

const Nav = styled.nav`
	color: white;
	background-color: green;
	padding: 1rem 3rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 8vh;

	a {
		color: white;
		text-decoration: none;
	}

	.categories {
		display: flex;
		align-items: center;
		gap: 4rem;

		.cart {
			padding-top: 0.7rem;
		}
	}

	@media screen and (max-width: 450px) {
		padding: 1rem;

		.categories {
			gap: 1rem;
		}
	}
`;

const Navbar = () => {
	return (
		<Nav data-testid='navbar'>
			<a href=''>
				<h1 className='title'>GSRN</h1>
			</a>
			<div className='categories'>
				<a href=''>
					<h2>Men</h2>
				</a>
				<a href=''>
					<h2>Women</h2>
				</a>
				<a href=''>
					<h2>Jewelry</h2>
				</a>
				<div className='cart'>
					<a href=''>
						<Icon path={mdiCart} size={1.5} />
					</a>
				</div>
			</div>
		</Nav>
	);
};

export default Navbar;
