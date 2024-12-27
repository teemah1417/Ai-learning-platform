import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Banner from "/banner_1.jpg"
import "../styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavBarItem } from "../components/navigaton/NavBar";

const Home = () => {

  return (
    <>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="This is the home page of our application." />
        </Helmet>

        <section className="container text-black">
        
            <div className="w-screen h-screen pt-[100px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Banner})` }}>
               {/*  <img className="absolute -z-20" src={Banner} alt="AI Job Platform" /> */}

                <section className="w-full h-full flex flex-col flex-wrap gap-4 justify-center items-center">
                    <div className="text-lg font-semibold">Empowering Careers in the Age of AI </div>
                    <div className="text-4xl flex flex-col flex-wrap justify-center items-center font-bold">
                        <span className="inline-block">Learn new skills and</span> <span>Find jobs that match your talents</span>
                    </div>
                    <ul className="list-none flex gap-4">
                        <div className='bg-berkeley_blue text-base font-semibold rounded-md p-5'>
							<NavBarItem to='/sign-up' 
								icon={<FontAwesomeIcon icon="fa-solid fa-user-plus" />} 
								name='Apply Now' linkClass={"hover:text-honeydew"} />
						</div>
                        <div className='bg-honeydew text-base font-semibold rounded-md p-5'>
                            <NavBarItem href='#courses'  
									name='Explore Courses' linkClass={"text-berkeley_blue"} />
                        </div>
                    </ul>
                    
                </section>
            </div>

            <div id="home" className="container">
                
            </div>

            <div id="about" className="container">
                <section>
                    <h2>About Us</h2>
                    <p>We are a platform dedicated to helping individuals reskill and find opportunities in a technology-driven world. Our mission is to bridge the gap between your skills and the ever-evolving job market.</p>
                </section>
            </div>

            <div id="courses" className="container">
                <section>
                    <h2>Courses</h2>
                    <div className="grid">
                        <div className="card">
                            <h3>Introduction to AI</h3>
                            <p>Learn the basics of Artificial Intelligence and its applications.</p>
                        </div>
                        <div className="card">
                            <h3>Data Analysis</h3>
                            <p>Master data visualization and analysis techniques.</p>
                        </div>
                        <div className="card">
                            <h3>Web Development</h3>
                            <p>Build modern websites with HTML, CSS, and JavaScript.</p>
                        </div>
                        <div className="card">
                            <h3>Cloud Computing</h3>
                            <p>Understand cloud services and how to leverage them for scalability.</p>
                        </div>
                    </div>
                </section>
            </div>

            <div id="jobs" className="container">
                <section>
                    <h2>Job Matching</h2>
                    <p>Let our AI-powered tool connect you with jobs that suit your skills.</p>
                    <Link to="/sign-up" className="btn">Find Jobs</Link>
                </section>
            </div>

        </section>
    </>
  );
};

export default Home;
