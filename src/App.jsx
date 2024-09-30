import styled from 'styled-components';

const Nav = styled.nav`
	color: white;
	background-color: green;
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;

	.categories {
		display: flex;
		align-items: center;
		gap: 1rem;

		.cart {
			padding-top: 0.7rem;
			img {
				color: white;
				height: 1.7rem;
			}
		}
	}
`;

function App() {
	return (
		<Nav data-testid='navbar'>
			<h1 className='title'>GSRN</h1>
			<div className='categories'>
				<h2>Men</h2>
				<h2>Women</h2>
				<h2>Jewelry</h2>
				<div className='cart'>
					<img src='/cart.svg' alt='' />
				</div>
			</div>
		</Nav>
	);
}

export default App;
