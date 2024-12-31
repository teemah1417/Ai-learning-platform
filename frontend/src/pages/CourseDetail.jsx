import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { Star, Clock, Award, Users, PlayCircle, ChevronRight } from 'lucide-react';

const CourseDetails = () => {
  const { courseId } = useParams();

  // Mock course data - replace with actual data fetching
  const course = {
    id: courseId,
    title: "Make Better Decisions",
    description: "Learn the fundamentals of decision-making in business and life. This comprehensive course covers various frameworks and practical techniques to improve your decision-making skills.",
    tutor: "Jhonthan Smith",
    tutorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    price: "$150",
    duration: "50 Days",
    rating: 4.5,
    ratingCount: 100,
    enrolled: 1234,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Business",
    level: "Intermediate",
    curriculum: [
      {
        title: "Introduction to Decision Making",
        lessons: ["Basic Concepts", "Types of Decisions", "Decision-Making Process"],
        duration: "2 hours"
      },
      {
        title: "Decision-Making Frameworks",
        lessons: ["SWOT Analysis", "Decision Matrix", "Cost-Benefit Analysis"],
        duration: "3 hours"
      },
      // Add more sections
    ],
    relatedCourses: [
      {
        id: 2,
        title: "Strategic Thinking",
        tutor: "Sarah Johnson",
        price: "$180",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
      },
      // Add more related courses
    ]
  };

  return (
    <>
      <Helmet>
        <title>{course.title} - AI Learning Platform</title>
        <meta name="description" content={course.description} />
      </Helmet>

      <div className="min-h-screen bg-honeydew">
        {/* Course Header */}
        <section className="bg-berkeley_blue text-honeydew py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <span className="bg-cerulean/20 text-honeydew px-4 py-1 rounded-full text-sm">
                    {course.category}
                  </span>
                  <h1 className="text-4xl font-bold mt-4 mb-6">{course.title}</h1>
                  <p className="text-lg mb-6">{course.description}</p>
                  <div className="flex items-center gap-6 flex-wrap">
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(course.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span>({course.ratingCount} reviews)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      <span>{course.enrolled} students</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      <span>{course.level}</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <div className="bg-white p-6 rounded-lg shadow-lg text-berkeley_blue">
                    <div className="text-3xl font-bold mb-6">{course.price}</div>
                    <button className="w-full bg-berkeley_blue text-honeydew py-3 rounded-md hover:bg-berkeley_blue/90 transition-colors mb-4">
                      Enroll Now
                    </button>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center gap-2">
                        <PlayCircle className="w-5 h-5 text-cerulean" />
                        Full lifetime access
                      </li>
                      <li className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-cerulean" />
                        Certificate of completion
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  {/* Curriculum */}
                  <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-bold text-berkeley_blue mb-6">Course Curriculum</h2>
                    <div className="space-y-4">
                      {course.curriculum.map((section, index) => (
                        <div key={index} className="border rounded-lg">
                          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-t-lg">
                            <h3 className="font-semibold">{section.title}</h3>
                            <span className="text-sm text-gray-600">{section.duration}</span>
                          </div>
                          <ul className="p-4 space-y-2">
                            {section.lessons.map((lesson, i) => (
                              <li key={i} className="flex items-center gap-2 text-gray-700">
                                <PlayCircle className="w-4 h-4 text-cerulean" />
                                {lesson}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Instructor */}
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-berkeley_blue mb-6">Your Instructor</h2>
                    <div className="flex items-center gap-4">
                      <img
                        src={course.tutorImage}
                        alt={course.tutor}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-lg">{course.tutor}</h3>
                        <p className="text-gray-600">Expert in Business Decision Making</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Related Courses */}
                <div>
                  <h2 className="text-2xl font-bold text-berkeley_blue mb-6">Related Courses</h2>
                  <div className="space-y-4">
                    {course.relatedCourses.map((relatedCourse) => (
                      <div
                        key={relatedCourse.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                      >
                        <img
                          src={relatedCourse.image}
                          alt={relatedCourse.title}
                          className="w-full h-32 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="font-semibold mb-2">{relatedCourse.title}</h3>
                          <p className="text-gray-600 text-sm mb-2">{relatedCourse.tutor}</p>
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-berkeley_blue">
                              {relatedCourse.price}
                            </span>
                            <button className="text-cerulean hover:text-cerulean/80 flex items-center gap-1">
                              Learn More
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
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

export default CourseDetails;