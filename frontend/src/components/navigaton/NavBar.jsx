import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import viteLogo from '/vite.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const NavBarItem = (props) => {

	const location = useLocation()

	const isActive = (props.href && location.pathname.startsWith(props.href)) || (props.to && location.pathname.startsWith(props.to))
	const cls = isActive ? 'w-full h-full text-berkeley_blue '+ props.linkClass : 'w-full h-full '+ props.linkClass

	return (
		<li className={props.className}>
			{props.href
				? <a className={cls} href={props.href}>{props.icon} {props.name}</a>
				: <Link className={cls} state={props.state} to={props.to}>{props.icon} {props.name}</Link>}
		</li>
	)
}


NavBarItem.propTypes = {
	href: PropTypes.string,
	to: PropTypes.string | PropTypes.object,
	icon: PropTypes.node,
	name: PropTypes.string,
	className: PropTypes.string,
	linkClass: PropTypes.string,
	state: PropTypes.array,
}

const NavBurger = (props) => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const [hidden, setHidden] = useState(true);

	const location = useLocation();

	useEffect(() => {
		const handleResize = () => {
		  setScreenWidth(window.innerWidth);
		}
	
		window.addEventListener("resize", handleResize);
	  
		return () => {
		  window.removeEventListener("resize", handleResize);
		}
	  }, []);


	const closeMenu = (event) => {
		if (!event.target.closest('.burger-menu') && !event.target.closest('.burger-button')) {
			setHidden(true);
			console.log('event activated');
			window.removeEventListener("click", closeMenu);
		}
	}

	const handleBurgerClick = () => {
		// Implement the burger click functionality here
		console.log('Burger menu clicked');
		setHidden(!hidden);

		if (hidden) {
			window.removeEventListener("click", closeMenu);
		} else {
			window.addEventListener("click", closeMenu);
		}
	}


	if (screenWidth >= 768) {
		return (
			<>
				<ul className='flex flex-row justify-between items-center'>

					<NavBarItem to='/' name='Home' linkClass={"hover:text-berkeley_blue"} />
					<NavBarItem to={{pathname: '/about',state: { background: location, txt: "it works" }}} name='About' linkClass={"hover:text-berkeley_blue"} />
					<NavBarItem to='/courses' name='Courses' linkClass={"hover:text-berkeley_blue"} />
					<NavBarItem to='/jobs' name='Job Matching' linkClass={"hover:text-berkeley_blue"} />
				</ul>

				<ul className='flex flex-row justify-between items-center'>
					{props.user ? (
						<>
							<NavBarItem to='/profile' icon={<FontAwesomeIcon icon="fa-solid fa-user" />} 
								name='Profile' linkClass={"hover:text-berkeley_blue"} />
							<NavBarItem to='/logout' icon={<FontAwesomeIcon icon="fa-sharp fa-solid fa-right-from-bracket" />} 
								name='Logout' linkClass={"hover:text-berkeley_blue"} />
						</>
					) : (
						<>
							<NavBarItem to='/sign-in'
								state= {{ background: location }}
								icon={<FontAwesomeIcon icon="fa-solid fa-lock" />} 
								name='Sign In' linkClass={"hover:text-berkeley_blue"} />
								
							<div className='text-base font-semibold'>
								<NavBarItem to='/sign-up'
									state= {{ background: location }}
									icon={<FontAwesomeIcon icon="fa-solid fa-user-plus" />} 
									name='Apply Now' linkClass={"text-honeydew bg-berkeley_blue rounded-lg p-3"} />
							</div>
						</>
					)}
				</ul>
			</>
		)

	} else {
		return (
			<div className={`${hidden ? "": 
				" grid grid-flow-row"}`}>

				<button className='inline-flex bg-transparent items-center p-2 w-10 h-10 justify-center text-sm text-non_photo_blue rounded-lg hover:bg-honeydew outline outline-2 outline-non_photo_blue hover:border-none'
					onClick={handleBurgerClick}>
					<span className="sr-only">Open main menu</span>
					<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
						<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
					</svg>
				</button>

				<aside className={`${hidden ? "hidden": ""} relative`}>
					<ul className='flex flex-col justify-center items-start text-left gap-4 absolute right-0 w-[75vw] p-4 mt-2 bg-cerulean rounded-lg'>

						<NavBarItem to='/' name='Home' className={"w-full hover:bg-honeydew"}
							linkClass={"hover:text-berkeley_blue"} />
						<NavBarItem to='/about' name='About' className={"w-full hover:bg-honeydew"}
							linkClass={"hover:text-berkeley_blue"} />
						<NavBarItem to='/courses' name='Courses' className={"w-full hover:bg-honeydew"}
							linkClass={"hover:text-berkeley_blue"} />
						<NavBarItem to='/jobs' name='Job Matching' className={"w-full hover:bg-honeydew"}
							linkClass={"hover:text-berkeley_blue"} />

						{props.user ? (
							<>
								<NavBarItem to='/profile' icon={<FontAwesomeIcon icon="fa-solid fa-user" />} 
									name='Profile' className={"w-full hover:bg-honeydew"}
									linkClass={"hover:text-berkeley_blue"} />
								<NavBarItem to='/logout' icon={<FontAwesomeIcon icon="fa-sharp fa-solid fa-right-from-bracket" />} 
									name='Logout' className={"w-full hover:bg-honeydew"}
									linkClass={"hover:text-berkeley_blue"} />
							</>
						) : (
							<>
								<NavBarItem to="/sign-in"
									state= {{ background: location }}
									className={"w-full hover:bg-honeydew"}
									linkClass={"hover:text-berkeley_blue"}
									icon={<FontAwesomeIcon icon="fa-solid fa-lock" />} 
									name='Sign In' />
								<div className='w-full'>
									<NavBarItem to='/sign-up'
										state={{ background: location }}
										className={"w-full hover:bg-honeydew"}
										linkClass={"hover:text-berkeley_blue"}
										icon={<FontAwesomeIcon icon="fa-solid fa-user-plus" />} 
										name='Sign Up' />
								</div>
							</>
						)}

					</ul>
				</aside>
			</div>
		)
	}

	
}
NavBurger.propTypes = {
	user: PropTypes.object,
}

/*  bg-opacity-30 backdrop-blur-md */
export const NavBar = (props) => {
	return (
		<nav className='flex flex-row rounded-lg m-2 justify-between bg-transparent p-3 items-center'>

			<div>
				<img src={viteLogo} alt="vite logo" />
			</div>

			<NavBurger user={props.user} />

		</nav>
	)
}

NavBar.propTypes = {
	user: PropTypes.object
}