import PropTypes from 'prop-types';
import { createContext, useState, useContext } from 'react';

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);

	function addToCart(id, imageSrc, title, price, count) {
		const item = {
			id: id,
			image: imageSrc,
			title: title,
			count: count,
			total: price * count,
		};
		setCartItems((prevItems) => [...prevItems, item]);
	}

	function removeFromCart(key) {
		setCartItems((prevItems) =>
			prevItems.filter((item) => item.id !== key)
		);
	}

	return (
		<CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
			{children}
		</CartContext.Provider>
	);
};

CartProvider.propTypes = {
	children: PropTypes.element,
};

export const useCart = () => useContext(CartContext);
