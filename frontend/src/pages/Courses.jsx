import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Search, Filter, Star } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Make Better Decisions",
    tutor: "Jhonthan Smith",
    price: "$150",
    duration: "50 Days",
    rating: 4.5,
    ratingCount: 100,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Business"
  },
  {
    id: 2,
    title: "How To Be A Speaker",
    tutor: "Denise Wood",
    price: "Free",
    duration: "100 Days",
    rating: 4.8,
    ratingCount: 400,
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Communication"
  },
  // Add more courses as needed
];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <>
      <Helmet>
        <title>Courses - AI Learning Platform</title>
        <meta name="description" content="Browse our wide range of courses to enhance your skills and advance your career." />
      </Helmet>

      <div className="min-h-screen bg-honeydew">
        {/* Hero Section */}
        <section className="bg-berkeley_blue text-honeydew py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Our Courses</h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Discover courses that will help you advance your career and stay ahead in the tech industry.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="relative flex-1 max-w-xl">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-cerulean focus:border-cerulean"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-4">
                <select
                  className="px-4 py-2 border border-gray-300 rounded-md focus:ring-cerulean focus:border-cerulean"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="All">All Categories</option>
                  <option value="Business">Business</option>
                  <option value="Technology">Technology</option>
                  <option value="Design">Design</option>
                  <option value="Communication">Communication</option>
                </select>
                <button className="flex items-center gap-2 px-4 py-2 bg-cerulean text-white rounded-md hover:bg-cerulean/90">
                  <Filter className="w-4 h-4" />
                  Filter
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-berkeley_blue">{course.title}</h3>
                      <span className="bg-cerulean/10 text-cerulean px-3 py-1 rounded-full text-sm">
                        {course.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">Instructor: {course.tutor}</p>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(course.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({course.ratingCount})</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-berkeley_blue">{course.price}</span>
                      <span className="text-sm text-gray-600">{course.duration}</span>
                    </div>
                    <button className="w-full mt-4 bg-berkeley_blue text-honeydew py-2 rounded-md hover:bg-berkeley_blue/90 transition-colors">
                      Enroll Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Courses;