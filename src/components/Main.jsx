import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.main`
	background-image: url('/background-image.jpg');
	background-position: top center;
	background-size: cover;
	height: 92vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;

	h1 {
		color: white;
		text-align: center;
		font-style: italic;
		font-size: 4rem;
	}

	button {
		font-size: 1.5rem;
		font-weight: 700;
		padding: 1rem 2rem;
	}

	button:hover {
		color: green;
	}
`;

const Main = () => {
	return (
		<Wrapper data-testid='main'>
			<h1>The Impossible Possibilities</h1>
			<Link to='shop'>
				<button>SHOP NOW</button>
			</Link>
		</Wrapper>
	);
};

export default Main;
