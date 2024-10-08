import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import Categories from '../components/Categories';
import { MemoryRouter } from 'react-router-dom';

describe('testing categories components', () => {
	it('should render 3 categories', () => {
		const { container } = render(
			<MemoryRouter>
				<Categories />
			</MemoryRouter>
		);

		expect(container.getElementsByClassName('category').length).toBe(3);
	});
});
