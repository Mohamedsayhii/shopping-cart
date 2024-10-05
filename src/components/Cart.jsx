import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import { useState } from 'react';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 92vh;
`;

function Cart() {
	const [items, setItems] = useState([]);

	return (
		<>
			<Navbar />
			<Wrapper>
				<h1>YOUR CART IS EMPTY</h1>
			</Wrapper>
			<Footer />
		</>
	);
}

export default Cart;
