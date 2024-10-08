import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';
import { MemoryRouter } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

vi.mock('../contexts/CartContext', () => ({
	useCart: vi.fn(),
}));

describe('testing the navbar', () => {
	it('should use the value provided by the context', () => {
		useCart.mockReturnValue({
			cartItems: [1, 2, 3, 4],
			addToCart: vi.fn(),
			removeFromCart: vi.fn(),
		});

		render(
			<MemoryRouter>
				<Navbar />
			</MemoryRouter>
		);

		expect(screen.getByTestId('items-count').textContent).toMatch('4');
	});
});
