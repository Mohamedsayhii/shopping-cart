import App from './App';
import Men from './components/Men';
import Shop from './components/Shop';
import Categories from './components/Categories';
import Women from './components/Women';
import Jewelry from './components/Jewelry';
import Cart from './components/Cart';

const routes = [
	{
		path: '/',
		element: <App />,
	},
	{
		path: 'shop',
		element: <Shop />,
		children: [
			{ index: true, element: <Categories /> },
			{ path: 'men', element: <Men /> },
			{ path: 'women', element: <Women /> },
			{ path: 'jewelry', element: <Jewelry /> },
		],
	},
	{
		path: 'cart',
		element: <Cart />,
	},
];

export default routes;
