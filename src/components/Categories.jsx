import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
	background-image: url('/Casa.jpg');
	display: grid;
	width: 100%;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 1rem;
	height: 92vh;
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
		height: auto;
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

function Categories() {
	return (
		<Wrapper>
			<Link to='men'>
				<div className='category'>
					<img src='/Men.jpg' alt='' />
					<h1>Men</h1>
				</div>
			</Link>
			<Link to='women'>
				<div className='category'>
					<img src='/Women.jpg' alt='' />
					<h1>Women</h1>
				</div>
			</Link>
			<Link to='jewelry'>
				<div className='category'>
					<img src='/Jewelry.jpg' alt='' />
					<h1>Jewelry</h1>
				</div>
			</Link>
		</Wrapper>
	);
}

export default Categories;
