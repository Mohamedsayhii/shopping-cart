import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
	it('should render the home page', () => {
		render(<App />);

		const navbar = screen.getByTestId('navbar');
		const main = screen.getByRole('main');
		const footer = screen.getByTestId('footer');

		expect(navbar).toBeInTheDocument();
		expect(main).toBeInTheDocument();
		expect(footer).toBeInTheDocument();

		expect(main).toHaveStyle(
			`background-image: url('/background-image.jpg')`
		);
		expect(main).toHaveTextContent('The Impossible Possibilities', {
			exact: true,
		});
		expect(main.children).toHaveLength(2);

		expect(footer).toHaveTextContent('Realized by MohamedSayhii', {
			exact: true,
		});
	});
});
