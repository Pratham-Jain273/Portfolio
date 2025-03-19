import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function Hero() {
  // Function to handle CV download
  const handleDownloadCV = () => {
    const cvPath = "/pratham_resume.pdf"; // Ensure the file is in the 'public/' folder
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "Pratham_Jain_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm Pratham Jain
            </h1>
            <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-6">
              Full-Stack Developer & AI Enthusiast
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              I build scalable web apps and AI-powered solutions. Passionate
              about creating innovative solutions that make a difference.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start mb-8">
              {/* Hire Me Button (Opens Email Client) */}
              <button
                className="bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition-colors"
                onClick={() =>
                  window.location.href =
                    "mailto:pratham.jain29052004@gmail.com?subject=Hiring%20Inquiry&body=Hi%20Pratham,"
                }
              >
                <Mail size={20} />
                Hire Me
              </button>

              {/* Download CV Button */}
              <button
                onClick={handleDownloadCV}
                className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <Download size={20} />
                Download CV
              </button>
            </div>
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/Pratham-Jain273"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/pratham-jain-930409273/"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2">
            <div className="relative w-72 h-72 mx-auto">
              <img
                src="/pic2.jpg" // Ensure this file is inside the 'public/' folder
                alt="Pratham Jain"
                className="rounded-full w-full h-full object-cover shadow-2xl"
              />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
