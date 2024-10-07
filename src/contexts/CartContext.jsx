import PropTypes from 'prop-types';
import { createContext, useState, useContext } from 'react';

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);

	function addToCart(item) {
		setCartItems((prevItems) => [...prevItems, item]);
	}

	return (
		<CartContext.Provider value={{ cartItems, addToCart }}>
			{children}
		</CartContext.Provider>
	);
};

CartProvider.propTypes = {
	children: PropTypes.element,
};

export const useCart = () => useContext(CartContext);
