import { motion } from "motion/react";
import { GraduationCap, BookOpen, Code2, Trophy, Award, Target } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  const skills = [
    { name: "JavaScript/TypeScript", level: 85, color: "bg-blue-600" },
    { name: "React & Node.js", level: 80, color: "bg-green-500" },
    { name: "Unity & C#", level: 75, color: "bg-orange-500" },
    { name: "Python", level: 78, color: "bg-blue-500" },
    { name: "Git & Agile", level: 82, color: "bg-slate-500" },
    { name: "Problem Solving", level: 88, color: "bg-green-600" },
  ];

  const education = [
    {
      icon: GraduationCap,
      title: "B.S. Computer Science",
      institution: "University Name",
      period: "Expected May 2027",
      description: "Focus on Software Engineering and Game Development",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: BookOpen,
      title: "Relevant Coursework",
      details: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Systems",
        "Computer Graphics",
        "Software Engineering",
        "AI & Machine Learning"
      ],
      color: "from-green-500 to-green-600",
    },
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "Hackathon Winner",
      description: "1st place at University Hackathon for innovative AR application",
    },
    {
      icon: Award,
      title: "Dean's List",
      description: "Maintained 3.8+ GPA throughout college career",
    },
    {
      icon: Target,
      title: "Open Source Contributor",
      description: "Active contributor to game development libraries and tools",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Computer Science student passionate about creating impactful software
          </p>
        </motion.div>

        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 mb-20 items-center"
        >
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759139681761-852dd24340df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGV2ZWxvcG1lbnQlMjBjb2Rpbmd8ZW58MXx8fHwxNzcwODY4OTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Software Development"
                className="w-full h-[400px] object-cover"
              />
            </div>
            
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-8 -right-8 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-20"
            />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-6 h-6 text-blue-500" />
              <span className="text-blue-400 font-semibold">Student Developer</span>
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-6">
              Combining Technical Skills with Creative Problem Solving
            </h2>
            
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              I'm a junior computer science student with a passion for both game development 
              and software engineering. My journey started with modding games in high school, 
              which sparked my interest in programming and led me to pursue a CS degree.
            </p>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Through coursework, personal projects, and hackathons, I've developed a strong 
              foundation in software development while nurturing my creative side through game 
              development. I'm eager to apply my skills in a professional setting and continue 
              learning from experienced developers.
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-slate-900 border border-slate-700 rounded-xl">
                <div className="text-3xl font-bold text-blue-500">3.8</div>
                <div className="text-sm text-gray-400">GPA</div>
              </div>
              <div className="text-center p-4 bg-slate-900 border border-slate-700 rounded-xl">
                <div className="text-3xl font-bold text-green-500">10+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center p-4 bg-slate-900 border border-slate-700 rounded-xl">
                <div className="text-3xl font-bold text-orange-500">2+</div>
                <div className="text-sm text-gray-400">Years Coding</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Education
            </h2>
            <p className="text-gray-400">
              Building a strong foundation in computer science
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-slate-900 border border-slate-700 rounded-xl"
            >
              <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 mb-6">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">
                B.S. Computer Science
              </h3>
              <p className="text-blue-400 font-semibold mb-3">University Name</p>
              <p className="text-gray-400 mb-4">Expected May 2027</p>
              <p className="text-gray-300">
                Focus on Software Engineering and Game Development with emphasis on 
                modern development practices and system design.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-slate-900 border border-slate-700 rounded-xl"
            >
              <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-green-500 to-green-600 mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                Relevant Coursework
              </h3>
              
              <ul className="space-y-2">
                {[
                  "Data Structures & Algorithms",
                  "Object-Oriented Programming",
                  "Database Systems",
                  "Computer Graphics",
                  "Software Engineering",
                  "AI & Machine Learning"
                ].map((course) => (
                  <li key={course} className="flex items-center gap-2 text-gray-300">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    {course}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Code2 className="w-6 h-6 text-blue-500" />
              <span className="text-blue-400 font-semibold">Technical Proficiency</span>
            </div>
            <h2 className="text-4xl font-bold text-white">
              Skills & Technologies
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-full ${skill.color} rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Achievements & Recognition
            </h2>
            <p className="text-gray-400">
              Highlights from my academic and development journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-slate-900 border border-slate-700 rounded-xl text-center hover:border-slate-600 transition-all"
              >
                <div className="inline-flex p-4 rounded-xl bg-slate-800 mb-4">
                  <achievement.icon className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}