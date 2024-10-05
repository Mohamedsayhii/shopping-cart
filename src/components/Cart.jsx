import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
	const [items, setItems] = useState([]);

	return (
		<>
			<Navbar />
			<Wrapper>
				<h1>YOUR CART IS EMPTY</h1>
				<Link to='/shop'>
					<button>SHOP NOW</button>
				</Link>
			</Wrapper>
			<Footer />
		</>
	);
}

export default Cart;
