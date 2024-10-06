import styled from 'styled-components';
import Icon from '@mdi/react';
import { mdiCart } from '@mdi/js';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
			position: relative;

			.count {
				height: 17px;
				width: 17px;
				text-align: center;
				top: 0%;
				left: 50%;
				position: absolute;
				color: green;
				background-color: white;
				border-radius: 50%;
			}
		}
	}

	@media screen and (max-width: 450px) {
		padding: 1rem;

		.categories {
			gap: 0.7rem;
		}
	}
`;

const Navbar = ({ cartCount }) => {
	return (
		<Nav data-testid='navbar'>
			<Link to='/'>
				<h1 className='title'>GSRN</h1>
			</Link>
			<div className='categories'>
				<Link to='/shop/men'>
					<h2>Men</h2>
				</Link>
				<Link to='/shop/women'>
					<h2>Women</h2>
				</Link>
				<Link to='/shop/jewelry'>
					<h2>Jewelry</h2>
				</Link>
				<div className='cart'>
					<Link to='/cart'>
						<Icon path={mdiCart} size={1.5} />
						<h3 className='count'>{cartCount ? cartCount : 0}</h3>
					</Link>
				</div>
			</div>
		</Nav>
	);
};

Navbar.propTypes = {
	cartCount: PropTypes.number,
};

export default Navbar;
