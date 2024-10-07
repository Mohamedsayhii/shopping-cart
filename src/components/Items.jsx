import { useEffect, useState } from 'react';
import Item from './Item';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
	padding: 1rem;
	text-align: center;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	.items {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		row-gap: 2rem;
		padding: 2rem;
	}

	@media screen and (max-width: 650px) {
		.items {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media screen and (max-width: 450px) {
		.items {
			grid-template-columns: 1fr;
		}
	}
`;

function Items({ title, dataToFetch }) {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/category/${dataToFetch}`)
			.then((res) => res.json())
			.then((json) => {
				setData(json);
			});
	}, [dataToFetch]);

	return (
		<Wrapper>
			<h1>{title}</h1>
			<div className='items'>
				{data.map((item) => (
					<Item
						key={item.id}
						id={item.id}
						imageSource={item.image}
						title={item.title}
						price={item.price}
					/>
				))}
			</div>
		</Wrapper>
	);
}

Items.propTypes = {
	title: PropTypes.string.isRequired,
	dataToFetch: PropTypes.string.isRequired,
};

export default Items;
