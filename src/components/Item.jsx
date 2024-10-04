import PropTypes from 'prop-types';
import styled from 'styled-components';

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

function Item({ imageSource, title, price }) {
	return (
		<Wrapper>
			<img src={imageSource} alt='' />
			<h2>{title}</h2>
			<h2>{price}$</h2>
			<div className='count'>
				<button>-</button>
				<h2>0</h2>
				<button>+</button>
			</div>
			<button>Add to Cart</button>
		</Wrapper>
	);
}

Item.propTypes = {
	imageSource: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
};

export default Item;
