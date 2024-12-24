import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "../styles/App.css";
import "../styles/Dashboard.css"

const Home = () => {

  return (
    <>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="This is the home page of our application." />
        </Helmet>
        <header>
            <h1>AI Job Reskilling Platform</h1>
            <nav>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#courses">Courses</a>
                <a href="#jobs">Job Matching</a>
            </nav>
        </header>

        <div id="home" className="container">
            <section className="hero">
                <h2>Empowering Careers in the Age of AI</h2>
                <p>Learn new skills and find jobs that match your talents.</p>
                <a href="#courses" className="btn">Explore Courses</a>
            </section>
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

        <footer>
            <p>&copy; 2024 AI Job Platform. All rights reserved.</p>
        </footer>
    </>
  );
};

export default Home;
