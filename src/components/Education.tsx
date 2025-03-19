import { motion } from 'framer-motion';
import { GraduationCap, Award, School } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Education & Achievements
          </h2>
          
          <div className="space-y-8">
            {/* College Education */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    SRM Institute of Science and Technology
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    B.Tech in Computer Science and Engineering
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">2025 - Present</p>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Award className="text-blue-600 dark:text-blue-400" size={16} />
                      <span className="text-gray-700 dark:text-gray-300">
                        100% Scholarship Holder
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="text-blue-600 dark:text-blue-400" size={16} />
                      <span className="text-gray-700 dark:text-gray-300">
                        SRMJEE Rank 58
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* School Education */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <School className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Nand Vidya Niketan
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    CBSE Board
                  </p>
                  
                  <div className="mt-4 space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-gray-200">
                        Class XII (2022)
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Award className="text-blue-600 dark:text-blue-400" size={16} />
                        <span className="text-gray-700 dark:text-gray-300">
                          Percentage: 87.4%
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-gray-200">
                        Class X (2020)
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Award className="text-blue-600 dark:text-blue-400" size={16} />
                        <span className="text-gray-700 dark:text-gray-300">
                          Percentage: 90.2%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}