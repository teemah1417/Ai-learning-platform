import PropTypes from 'prop-types';
import { useUser } from '../../auth/hooks/hooks';
import { NavBar } from './NavBar';
import { Footer } from './Footer';


const Navigation = (props) => {

	const user = useUser();
	/* top-0 absolute w-screen md:block z-50 */
	return (
		<>
			<header className='top-0 w-screen absolute z-50'>
				<NavBar user={user} />
			</header>

			<main className=''>
				{ props.children }
			</main>
			
			<footer className='bottom-0 z-50 w-screen'>
				<Footer user={user} />
			</footer>
		</>
	);
};


Navigation.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Navigation;

