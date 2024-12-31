import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { User, Book, Briefcase, Settings, ChevronRight } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('personal');

  // Mock user data - replace with actual user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    enrolledCourses: [
      {
        id: 1,
        title: "Make Better Decisions",
        progress: 60,
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
      },
      // Add more courses
    ],
    applications: [
      {
        id: 1,
        company: "Tech Corp",
        position: "Software Developer",
        status: "Under Review",
        appliedDate: "2024-01-15"
      },
      // Add more applications
    ]
  };

  return (
    <>
      <Helmet>
        <title>Profile - AI Learning Platform</title>
        <meta name="description" content="Manage your profile, track your course progress, and view your job applications." />
      </Helmet>

      <div className="min-h-screen bg-honeydew">
        {/* Profile Header */}
        <section className="bg-berkeley_blue text-honeydew py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto flex items-center gap-6">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-honeydew"
              />
              <div>
                <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
                <p className="text-honeydew/80">{user.email}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Profile Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-lg shadow-md">
                {/* Tabs */}
                <div className="flex border-b">
                  <button
                    className={`flex items-center gap-2 px-6 py-4 font-medium ${
                      activeTab === 'personal'
                        ? 'text-berkeley_blue border-b-2 border-berkeley_blue'
                        : 'text-gray-600 hover:text-berkeley_blue'
                    }`}
                    onClick={() => setActiveTab('personal')}
                  >
                    <User className="w-5 h-5" />
                    Personal Info
                  </button>
                  <button
                    className={`flex items-center gap-2 px-6 py-4 font-medium ${
                      activeTab === 'courses'
                        ? 'text-berkeley_blue border-b-2 border-berkeley_blue'
                        : 'text-gray-600 hover:text-berkeley_blue'
                    }`}
                    onClick={() => setActiveTab('courses')}
                  >
                    <Book className="w-5 h-5" />
                    My Courses
                  </button>
                  <button
                    className={`flex items-center gap-2 px-6 py-4 font-medium ${
                      activeTab === 'applications'
                        ? 'text-berkeley_blue border-b-2 border-berkeley_blue'
                        : 'text-gray-600 hover:text-berkeley_blue'
                    }`}
                    onClick={() => setActiveTab('applications')}
                  >
                    <Briefcase className="w-5 h-5" />
                    Applications
                  </button>
                  <button
                    className={`flex items-center gap-2 px-6 py-4 font-medium ${
                      activeTab === 'settings'
                        ? 'text-berkeley_blue border-b-2 border-berkeley_blue'
                        : 'text-gray-600 hover:text-berkeley_blue'
                    }`}
                    onClick={() => setActiveTab('settings')}
                  >
                    <Settings className="w-5 h-5" />
                    Settings
                  </button>
                </div>

                {/* Tab Content */}
                <div className="p-6">
                  {activeTab === 'personal' && (
                    <div className="max-w-2xl">
                      <h2 className="text-2xl font-bold text-berkeley_blue mb-6">Personal Information</h2>
                      <form className="space-y-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            value={user.name}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-cerulean focus:border-cerulean"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={user.email}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-cerulean focus:border-cerulean"
                          />
                        </div>
                        <button
                          type="submit"
                          className="bg-berkeley_blue text-honeydew px-6 py-2 rounded-md hover:bg-berkeley_blue/90 transition-colors"
                        >
                          Save Changes
                        </button>
                      </form>
                    </div>
                  )}

                  {activeTab === 'courses' && (
                    <div>
                      <h2 className="text-2xl font-bold text-berkeley_blue mb-6">Enrolled Courses</h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        {user.enrolledCourses.map((course) => (
                          <div key={course.id} className="bg-gray-50 rounded-lg p-4">
                            <div className="flex gap-4">
                              <img
                                src={course.image}
                                alt={course.title}
                                className="w-24 h-24 rounded-lg object-cover"
                              />
                              <div className="flex-1">
                                <h3 className="font-semibold mb-2">{course.title}</h3>
                                <div className="mb-2">
                                  <div className="h-2 bg-gray-200 rounded-full">
                                    <div
                                      className="h-2 bg-cerulean rounded-full"
                                      style={{ width: `${course.progress}%` }}
                                    ></div>
                                  </div>
                                  <span className="text-sm text-gray-600">{course.progress}% Complete</span>
                                </div>
                                <button className="text-cerulean hover:text-cerulean/80 flex items-center gap-1">
                                  Continue Learning
                                  <ChevronRight className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'applications' && (
                    <div>                   
                      <h2 className="text-2xl font-bold text-berkeley_blue mb-6">Job Applications</h2>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="bg-gray-50">
                              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Company</th>
                              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Position</th>
                              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Applied Date</th>
                              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {user.applications.map((application) => (
                              <tr key={application.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{application.company}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{application.position}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span className="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">
                                    {application.status}
                                  </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{application.appliedDate}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <button className="text-cerulean hover:text-cerulean/80">View Details</button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {activeTab === 'settings' && (
                    <div className="max-w-2xl">
                      <h2 className="text-2xl font-bold text-berkeley_blue mb-6">Account Settings</h2>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-4">Notifications</h3>
                          <div className="space-y-4">
                            <label className="flex items-center">
                              <input type="checkbox" className="rounded text-cerulean focus:ring-cerulean" />
                              <span className="ml-2">Email notifications for new courses</span>
                            </label>
                            <label className="flex items-center">
                              <input type="checkbox" className="rounded text-cerulean focus:ring-cerulean" />
                              <span className="ml-2">Email notifications for job matches</span>
                            </label>
                            <label className="flex items-center">
                              <input type="checkbox" className="rounded text-cerulean focus:ring-cerulean" />
                              <span className="ml-2">Weekly progress reports</span>
                            </label>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-4">Password</h3>
                          <form className="space-y-4">
                            <div>
                              <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 mb-1">
                                Current Password
                              </label>
                              <input
                                type="password"
                                id="current-password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-cerulean focus:border-cerulean"
                              />
                            </div>
                            <div>
                              <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-1">
                                New Password
                              </label>
                              <input
                                type="password"
                                id="new-password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-cerulean focus:border-cerulean"
                              />
                            </div>
                            <div>
                              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                                Confirm New Password
                              </label>
                              <input
                                type="password"
                                id="confirm-password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-cerulean focus:border-cerulean"
                              />
                            </div>
                            <button
                              type="submit"
                              className="bg-berkeley_blue text-honeydew px-6 py-2 rounded-md hover:bg-berkeley_blue/90 transition-colors"
                            >
                              Update Password
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Profile;