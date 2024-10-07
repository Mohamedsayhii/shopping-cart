import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';
import { useCart } from '../contexts/CartContext';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;

	img {
		height: 300px;
		width: 200px;
	}

	button {
		font-weight: bold;
		font-size: 1.6rem;
		padding: 1.5rem;
	}

	.count {
		display: flex;
		align-items: center;
		gap: 1rem;

		button {
			padding: 0.5rem 1rem;
		}
	}
`;

function Item({ id, imageSource, title, price }) {
	const [count, setCount] = useState(1);
	const { addToCart } = useCart();

	const incrementCount = () => {
		setCount((prevCount) => prevCount + 1);
	};

	const decrementCount = () => {
		if (count > 1) setCount((prevCount) => prevCount - 1);
	};

	return (
		<Wrapper>
			<img src={imageSource} alt='' />
			<h2>{title}</h2>
			<h2>{price}$</h2>
			<div className='count'>
				<button onClick={decrementCount}>-</button>
				<h2 data-testid='itemCount'>{count}</h2>
				<button onClick={incrementCount}>+</button>
			</div>
			<button
				onClick={() => addToCart(id, imageSource, title, price, count)}
			>
				Add to Cart
			</button>
		</Wrapper>
	);
}

Item.propTypes = {
	id: PropTypes.number.isRequired,
	imageSource: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
};

export default Item;
