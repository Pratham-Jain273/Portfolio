import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileBadge, GraduationCap, Trophy, X } from 'lucide-react';

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<{ title: string; provider: string; image: string } | null>(null);

  const professionalCertificates = [
    { title: "Microsoft Certified: Azure Fundamentals", provider: "Microsoft", image: "/certificates/azure.png" },
    { title: "Oracle Certified Foundations Associate", provider: "Oracle", image: "/certificates/oracle.png" }
  ];

  const nptelCertificates = [
    { title: "Introduction to Machine Learning", provider: "NPTEL", image: "C:\Users\pratham jain\Downloads\new+port\project\public\Intro to ML.png"}
  ];

  const courseraCertificates = [
    { title: "Machine Learning", provider: "Stanford University (Coursera)", image: "C:\Users\pratham jain\Downloads\new+port\project\public\Machine Learning cert.png" },
    { title: "Inroduction to Front-End Development", provider: "Meta (Coursera)", image: "C:\Users\pratham jain\Downloads\new+port\project\public\frontend.png" },
    { title: "Database Structures and Management with MySQL", provider: "Coursera", image: "C:\Users\pratham jain\Downloads\new+port\project\public\Database Structures and Management with MySQL.png" },
    { title: "HTML and CSS in Depth", provider: "Coursera", image: "C:\Users\pratham jain\Downloads\new+port\project\public\HTML and CSS in Depth.png" },
    { title: "Programming with JavaScript", provider: "Coursera", image: "C:\Users\pratham jain\Downloads\new+port\project\public\Programming with JavaScript.png" }
  ];

  const renderCertificates = (certificates: { title: string; provider: string; image: string }[], icon: JSX.Element) => (
    <motion.div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, scale: 0.8 }} 
      whileInView={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.5 }}
    >
      {certificates.map((cert, index) => (
        <div key={index} className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            {icon}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{cert.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{cert.provider}</p>
            </div>
          </div>
          <button 
            onClick={() => setSelectedCertificate(cert)}
            className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600 transition"
          >
            Preview
          </button>
        </div>
      ))}
    </motion.div>
  );

  return (
    <>
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

      {/* Preview Modal */}
      {selectedCertificate && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg relative"
            initial={{ scale: 0.8 }} 
            animate={{ scale: 1 }} 
            transition={{ duration: 0.3 }}
          >
            <button 
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition"
              onClick={() => setSelectedCertificate(null)}
            >
              <X size={20} />
            </button>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{selectedCertificate.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{selectedCertificate.provider}</p>
            <img src={selectedCertificate.image} alt={selectedCertificate.title} className="w-full rounded-lg" />
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
