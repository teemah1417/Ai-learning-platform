import viteLogo from '/vite.svg';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavBarItem } from './NavBar';

export const Footer = (props) => {
    return (
        <section className='grid grid-cols-1 text-honeydew md:grid-flow-col-dense p-4 rounded-md m-2 bg-berkeley_blue'>


            <aside className='flex flex-col flex-wrap gap-4 justify-center items-center'>
                <img src={viteLogo} alt="vite logo" />
                <p className='flex flex-col flex-wrap justify-center items-center'>
                    <span className='inline-block'> &copy; 2024 AI Job Platform</span> 
                    <span className='inline-block'>All rights reserved</span>
                </p>
            </aside>


            <aside className='space-y-4 md:space-x-0'>
                <h3 className='text-center text-lg font-semibold p-2'>Navigation</h3>
                <ul className='flex flex-row md:flex-row gap-4 justify-around items-center md:items-start'>
                    <ul className='space-y-3'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/courses">Courses</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                    <ul className='space-y-3'>
                    {props.user ? (
                        <>
                            <li><a href="/profile">Profile</a></li>
                            <li><a href="/logout">Logout</a></li>
                        </>
                    ) : (
                        <>
                            <li><a href="/sign-in">Sign In</a></li>
                            <div className='bg-honeydew text-base font-semibold rounded-md p-2'>
                                <NavBarItem to='/sign-up'  
									name='Apply Now' linkClass={"text-berkeley_blue"} />
                            </div>
                        </>
                    )}

                    </ul>
                </ul>
            </aside>


            <aside className='text-center space-y-4'>
                <h3 className='text-center text-lg font-semibold p-2'>Contact Us</h3>

                <div className='flex gap-3 text-center justify-center items-center'> 
                    <FontAwesomeIcon icon="fa-solid fa-location-dot" /> 
                    <span className='inline-block'>945 Somerset Street Spartanburg</span>
                </div>

                <p><FontAwesomeIcon icon="fa-solid fa-phone" /> +123-456-7890</p>

                <ul className='flex flex-row justify-around'>
                    <li><FontAwesomeIcon icon="fa-brands fa-facebook" /></li>
                    <li><FontAwesomeIcon icon="fa-brands fa-x-twitter" /></li>
                    <li><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></li>
                    <li><FontAwesomeIcon icon="fa-brands fa-instagram" /></li>
                </ul>

            </aside>
            
        </section>
    )
}


Footer.propTypes = {
    user: PropTypes.object
}