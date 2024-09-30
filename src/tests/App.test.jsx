import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
	it('should render the app component', () => {
		const app = render(<App />);

		expect(screen.getByTestId('navbar')).toBeInTheDocument();
		expect(app).toMatchSnapshot();
	});
});
