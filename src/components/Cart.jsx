import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	height: 92vh;

	button {
		font-size: 1.5rem;
		font-weight: 700;
		padding: 1rem 2rem;
		background-color: green;
		color: white;
	}

	button:hover {
		color: black;
		border-color: black;
	}
`;

function Cart() {
	const { cartItems } = useCart();

	return (
		<>
			<Navbar />
			<Wrapper>
				{cartItems.length === 0 ? (
					<>
						<h1>YOUR CART IS EMPTY</h1>
						<Link to='/shop'>
							<button>SHOP NOW</button>
						</Link>
					</>
				) : (
					<h1>YOUR CART IS NOT EMPTY</h1>
				)}
			</Wrapper>
			<Footer />
		</>
	);
}

export default Cart;
