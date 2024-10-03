import styled from 'styled-components';
import Navbar from './Navbar';

const Categories = styled.div`
	background-image: url('/Casa.jpg');
	display: grid;
	height: 90vh;
	width: 100%;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 1rem;
	padding: 2rem;
	place-items: center;

	.category {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: green;

		img {
			width: 350px;
			height: 500px;
			object-fit: fill;
		}

		h1 {
			color: white;
			padding: 1rem 0rem;
		}
	}

	@media screen and (max-width: 1100px) {
		.category {
			img {
				width: 260px;
				height: 400px;
			}
		}
	}

	@media screen and (max-width: 800px) {
		.category {
			img {
				width: 190px;
				height: 300px;
			}
		}
	}

	@media screen and (max-width: 600px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 1fr;

		.category {
			img {
				width: 200px;
				height: 300px;
			}
		}
	}
`;

function Shop() {
	return (
		<>
			<Navbar />
			<Categories>
				<div className='category men'>
					<img src='/Men.jpg' alt='' />
					<h1>Men</h1>
				</div>
				<div className='category women'>
					<img src='/Women.jpg' alt='' />
					<h1>Women</h1>
				</div>
				<div className='category jewelry'>
					<img src='/Jewelry.jpg' alt='' />
					<h1>Jewelry</h1>
				</div>
			</Categories>
		</>
	);
}

export default Shop;
