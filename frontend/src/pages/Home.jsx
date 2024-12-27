import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Banner from "/banner_1.jpg"
import JobImg1 from "/courses_provide_1.jpg"
import JobImg2 from "/features_2_1.jpg"
import JobImg3 from "/courses_provide_2.jpg"
import "../styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavBarItem } from "../components/navigaton/NavBar";
import { SmallCard } from "../components/Card";

const Home = () => {

  return (
    <>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="This is the home page of our application." />
        </Helmet>

        <section className="container text-black">
        
            <section className="w-screen h-screen pt-[100px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Banner})` }}>

                <div className="w-full h-full flex flex-col flex-wrap gap-4 justify-center items-center text-honeydew">

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
                    
                </div>
            </section>

            <section id="about" className="container py-8 ">
                <h2 className="text-4xl text-center font-bold">Unlimited Possibilities</h2>
                <p>
                    We are a platform dedicated to helping individuals reskill and find opportunities 
                    in a technology-driven world. Our mission is to bridge the gap between your skills and the 
                    ever-evolving job market.
                </p>
                <div className="grid grid-rows-3 place-items-center md:grid-rows-1 md:grid-cols-2 lg:grid-flow-col lg:overflow-auto w-screen p-4 gap-5 md:gap-0">

                    <SmallCard title="Next Scheduled" icon={<FontAwesomeIcon className="h-[60px]" icon="fa-solid fa-computer" />} 
                        className="min-w-[345px] max-w-sm"
                        content="Lorem ipsum dolor consectetur sed do tempor incididunt ut laboris ut aliquip 
                        ex commodo nt ut laboris ut aliquip ex commodo conquat." />

                    <SmallCard title="Online Courees" icon={<FontAwesomeIcon className="h-[60px]" icon="fa-solid fa-computer" />} 
                        className="min-w-[345px] max-w-sm"
                        content="Lorem ipsum dolor consectetur sed do tempor incididunt ut laboris ut aliquip 
                        ex commodo nt ut laboris ut aliquip ex commodo conquat." />

                    <SmallCard title="Next Scheduled" icon={<FontAwesomeIcon className="h-[60px]" icon="fa-solid fa-computer" />} 
                        className="min-w-[345px] max-w-sm"
                        content="Lorem ipsum dolor consectetur sed do tempor incididunt ut laboris ut aliquip 
                        ex commodo nt ut laboris ut aliquip ex commodo conquat." />
                </div>
            </section>

            <section id="jobs" className="grid w-screen grid-rows-2 md:grid-rows-1 py-8 md:grid-cols-2">
                <div className="flex flex-col flex-wrap justify-center items-start px-8 ">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        Take The First Step Towards Your Dream Job
                    </h2>

                    <p className="text-base font-thin mb-6">
                        Discover your perfect career path with our AI-powered job matching tool. 
                        Our advanced algorithms connect you with opportunities tailored to your 
                        unique skills and experiences. Let us help you navigate the job market 
                        and find positions that truly fit your professional profile.
                    </p>

                    <Link to="/sign-up" className="btn bg-blue-500 text-white py-2 px-4 rounded">
                        Find Jobs
                    </Link>
                </div>

                <div className="flex flex-row flex-nowrap justify-center items-center">
                    <div className="min-w-20 max-w-sm space-y-6">
                        <img src={JobImg1} width={"90%"} alt="JobImg1" />
                        <img src={JobImg2} width={"90%"} alt="JobImg2" />
                    </div>
                    <div className="min-w-20 max-w-md">
                        <img src={JobImg3} width={"90%"} alt="JobImg3" />
                    </div>
                </div>

            </section>

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

        </section>
    </>
  );
};

export default Home;
