import { Award, Code, Brain, Trophy, GraduationCap, BookOpen, Globe, Briefcase, Folder, Flag } from 'lucide-react';

export default function About() {
  const programmingLanguages = [
    { name: 'C/C++', level: 95 },
    { name: 'Java', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'HTML/CSS', level: 95 },
  ];

  const projects = [
    {
      title: "ASL Gesture Recognition",
      description: "Developed an American Sign Language (ASL) gesture recognition system using MediaPipe and OpenCV, trained with a RandomForestClassifier.",
    },
    {
      title: "Energy Consumption Prediction",
      description: "Built an ML model to predict energy usage trends based on historical data, leveraging Google Colab for training.",
    },
    {
      title: "Document Scanner",
      description: "Created a desktop app for scanning and enhancing documents using OpenCV and Python.",
    },
    {
      title: "Portfolio Website",
      description: "Designed and developed a personal portfolio using React and TailwindCSS.",
    },
  ];

  const workExperience = [
    {
      role: "Intern",
      company: "Reliance Limited",
      duration: "1 Month",
      description: "Worked on 'Telephone Asset Utilization Management' project, improving efficiency in asset tracking and maintenance."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            About Me
          </h2>

          {/* Skills Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Brain className="text-blue-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Programming Skills
              </h3>
            </div>
            <div className="space-y-4">
              {programmingLanguages.map((skill, index) => (
                <div key={index}>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-blue-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Work Experience
              </h3>
            </div>
            <div className="space-y-4">
              {workExperience.map((job, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="text-gray-800 dark:text-gray-200 font-medium mb-1">
                    {job.role} - {job.company}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{job.duration}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{job.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Folder className="text-blue-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Projects
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                  <h4 className="text-gray-800 dark:text-gray-200 font-medium mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{project.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-blue-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Achievements
              </h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-600">
                <h4 className="text-gray-800 dark:text-gray-200 font-medium mb-1">
                  100% Scholarship at SRM (SRMJEE Rank: 58)
                </h4>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-600">
                <h4 className="text-gray-800 dark:text-gray-200 font-medium mb-1">
                  SRM Hackathon 7.0 - Runner-Up
                </h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
