import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Item from '../components/Item';

describe('Testing item component', () => {
	it('should increment the item count', async () => {
		render(<Item />);
		const user = userEvent.setup();
		const button = screen.getByRole('button', { name: '+' });
		const itemCount = screen.getByTestId('itemCount');

		await user.click(button);
		await user.click(button);
		await user.click(button);

		expect(itemCount.textContent).toBe('4');
	});

	it('should decrement the item count', async () => {
		render(<Item />);
		const user = userEvent.setup();
		const plusButton = screen.getByRole('button', { name: '+' });
		const minusButton = screen.getByRole('button', { name: '-' });
		const itemCount = screen.getByTestId('itemCount');

		await user.click(plusButton);
		await user.click(plusButton);
		await user.click(minusButton);

		expect(itemCount.textContent).toBe('2');
	});

	it('should decrement the item count', async () => {
		render(<Item />);
		const user = userEvent.setup();
		const plusButton = screen.getByRole('button', { name: '+' });
		const minusButton = screen.getByRole('button', { name: '-' });
		const itemCount = screen.getByTestId('itemCount');

		await user.click(plusButton);
		await user.click(plusButton);
		await user.click(minusButton);

		expect(itemCount.textContent).toBe('2');
	});

	it('should call addToCart when clicked', async () => {
		render(<Item />);
		const user = userEvent.setup();
		const onClick = vi.fn();
		const addToCartButton = screen.getByRole('button', {
			name: 'Add to Cart',
		});
		addToCartButton.onclick = onClick;

		await user.click(addToCartButton);

		expect(onClick).toHaveBeenCalled();
	});
});
