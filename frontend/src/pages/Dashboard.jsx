import React from 'react'
import { Helmet } from 'react-helmet'
import "../styles/Dashboard.css"

const Dashboard = () => {

  /* if (response.content) {
    return <Navigate to='/' />
  } */

  return (
    <>
        <Helmet>
          <title>Dashboard Page</title>
          <meta name="description" content="This is the dashboard page of our application." />
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

        <div id="home" class="container">
            <section class="hero">
                <h2>Empowering Careers in the Age of AI</h2>
                <p>Learn new skills and find jobs that match your talents.</p>
                <a href="#courses" class="btn">Explore Courses</a>
            </section>
        </div>

        <div id="about" class="container">
            <section>
                <h2>About Us</h2>
                <p>We are a platform dedicated to helping individuals reskill and find opportunities in a technology-driven world. Our mission is to bridge the gap between your skills and the ever-evolving job market.</p>
            </section>
        </div>

        <div id="courses" class="container">
            <section>
                <h2>Courses</h2>
                <div class="grid">
                    <div class="card">
                        <h3>Introduction to AI</h3>
                        <p>Learn the basics of Artificial Intelligence and its applications.</p>
                    </div>
                    <div class="card">
                        <h3>Data Analysis</h3>
                        <p>Master data visualization and analysis techniques.</p>
                    </div>
                    <div class="card">
                        <h3>Web Development</h3>
                        <p>Build modern websites with HTML, CSS, and JavaScript.</p>
                    </div>
                    <div class="card">
                        <h3>Cloud Computing</h3>
                        <p>Understand cloud services and how to leverage them for scalability.</p>
                    </div>
                </div>
            </section>
        </div>

        <div id="jobs" class="container">
            <section>
                <h2>Job Matching</h2>
                <p>Let our AI-powered tool connect you with jobs that suit your skills.</p>
                <a href="#" class="btn">Find Jobs</a>
            </section>
        </div>

        <footer>
            <p>&copy; 2024 AI Job Platform. All rights reserved.</p>
        </footer>
    </>
  )
}

export default Dashboard
