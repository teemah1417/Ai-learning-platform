import { Helmet } from 'react-helmet';
import { Mail, MapPin, Phone } from 'lucide-react';


const About = () => {
    return (
      <>
        <Helmet>
          <title>About Us - AI Learning Platform</title>
          <meta name="description" content="Learn about our mission to help individuals reskill and find opportunities in a technology-driven world." />
        </Helmet>
  
        <div className="min-h-screen bg-honeydew">
          {/* Hero Section */}
          <section className="bg-berkeley_blue text-honeydew py-20">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">About Us</h1>
              <p className="text-xl text-center max-w-3xl mx-auto">
                Empowering individuals to thrive in the age of AI through education and career opportunities.
              </p>
            </div>
          </section>
  
          {/* Mission Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-berkeley_blue mb-8 text-center">Our Mission</h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-gray-700 mb-6">
                  We are dedicated to bridging the gap between traditional skills and the evolving demands of the tech industry. Our platform provides comprehensive learning solutions and job matching services to help individuals transition into rewarding tech careers.
                </p>
                <p className="text-lg text-gray-700">
                  Through our AI-powered platform, we create personalized learning paths and connect talented individuals with companies at the forefront of technological innovation.
                </p>
              </div>
            </div>
          </section>
  
          {/* What We Offer Section */}
          <section className="py-16 bg-cerulean/10">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-berkeley_blue mb-12 text-center">What We Offer</h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-berkeley_blue mb-4">AI-Powered Learning</h3>
                  <p className="text-gray-700">Personalized course recommendations and learning paths tailored to your career goals.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-berkeley_blue mb-4">Career Matching</h3>
                  <p className="text-gray-700">Intelligent job matching algorithm that connects you with relevant opportunities.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-berkeley_blue mb-4">Expert Support</h3>
                  <p className="text-gray-700">Access to industry mentors and career counselors to guide your journey.</p>
                </div>
              </div>
            </div>
          </section>
  
          {/* Contact Form Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-berkeley_blue mb-12 text-center">Contact Us</h2>
              <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <div>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-cerulean focus:border-cerulean"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-cerulean focus:border-cerulean"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-cerulean focus:border-cerulean"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="bg-berkeley_blue text-honeydew px-6 py-3 rounded-md hover:bg-berkeley_blue/90 transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-cerulean flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-berkeley_blue">Address</h3>
                      <p className="text-gray-600">945 Somerset Street, Spartanburg</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-cerulean flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-berkeley_blue">Phone</h3>
                      <p className="text-gray-600">+123-456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-cerulean flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-berkeley_blue">Email</h3>
                      <p className="text-gray-600">contact@ailearning.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  };
  
  export default About;