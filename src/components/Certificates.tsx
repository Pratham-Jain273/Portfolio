import { motion } from 'framer-motion';
import { FileBadge, GraduationCap, Trophy } from 'lucide-react';

export default function Certificates() {
  const professionalCertificates = [
    { title: "Microsoft Certified: Azure Fundamentals", provider: "Microsoft" },
    { title: "Oracle Certified Foundations Associate", provider: "Oracle" }
  ];

  const nptelCertificates = [
    { title: "Introduction to Machine Learning", provider: "NPTEL" }
  ];

  const courseraCertificates = [
    { title: "Machine Learning", provider: "Stanford University (Coursera)" },
    { title: "Deep Learning Specialization", provider: "DeepLearning.AI (Coursera)" },
    { title: "Database Structures and Management with MySQL", provider: "Coursera" },
    { title: "HTML and CSS in Depth", provider: "Coursera" },
    { title: "Programming with JavaScript", provider: "Coursera" }
  ];

  const renderCertificates = (certificates: { title: string; provider: string }[], icon: JSX.Element) => (
    <motion.div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, scale: 0.8 }} 
      whileInView={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.5 }}
    >
      {certificates.map((cert, index) => (
        <div key={index} className="flex items-center gap-3 mb-4">
          {icon}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{cert.title}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{cert.provider}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );

  return (
    <motion.section id="certificates" className="py-20 bg-gray-100 dark:bg-gray-900"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Certifications & Achievements
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Professional Certificates */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Trophy size={24} className="text-yellow-500" /> Professional Certificates
            </h3>
            {renderCertificates(professionalCertificates, <Trophy className="text-yellow-500" size={24} />)}
          </div>

          {/* NPTEL Certificates */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <GraduationCap size={24} className="text-blue-500" /> NPTEL Certificates
            </h3>
            {renderCertificates(nptelCertificates, <GraduationCap className="text-blue-500" size={24} />)}
          </div>

          {/* Coursera Certificates */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <FileBadge size={24} className="text-green-500" /> Coursera Certificates
            </h3>
            {renderCertificates(courseraCertificates, <FileBadge className="text-green-500" size={24} />)}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
