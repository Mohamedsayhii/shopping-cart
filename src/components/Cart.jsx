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
	height: 92vh;
	padding: 3rem;
	gap: 1rem;

	${({ notEmpty }) =>
		notEmpty &&
		`
    	align-items: start;
		height: auto;
  	`}

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

	.cart-item {
		display: flex;
		align-items: center;
		gap: 1rem;

		img {
			width: 100px;
			height: 150px;
		}

		.item-details {
			display: flex;
			flex-direction: column;
			gap: 1rem;

			button {
				width: 18rem;
			}
		}
	}
`;

function Cart() {
	const { cartItems, removeFromCart } = useCart();

	return (
		<>
			<Navbar />
			<Wrapper notEmpty={cartItems.length !== 0}>
				{cartItems.length === 0 ? (
					<>
						<h1>YOUR CART IS EMPTY</h1>
						<Link to='/shop'>
							<button>SHOP NOW</button>
						</Link>
					</>
				) : (
					cartItems.map((item) => (
						<div className='cart-item' key={crypto.randomUUID()}>
							<img src={item.image} alt='' />
							<div className='item-details'>
								<h2>{item.title}</h2>
								<h4>Count: {item.count}</h4>
								<h4>Total: {item.total}$</h4>
								<button onClick={() => removeFromCart(item.id)}>
									Remove from Cart
								</button>
							</div>
						</div>
					))
				)}
			</Wrapper>
			<Footer />
		</>
	);
}

export default Cart;
