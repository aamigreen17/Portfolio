import { motion } from "motion/react";
import { ArrowRight, Code2, Gamepad2, Terminal, FileCode } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const features = [
    {
      icon: Gamepad2,
      title: "Game Development",
      description: "Building interactive experiences with Unity, Unreal, and custom engines",
      color: "bg-orange-500",
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Creating web and mobile applications with modern frameworks",
      color: "bg-blue-600",
    },
    {
      icon: Terminal,
      title: "Problem Solving",
      description: "Strong foundation in data structures, algorithms, and system design",
      color: "bg-green-500",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-blue-500/10 rounded-lg border border-blue-500/20 mb-6"
              >
                <span className="text-blue-400 text-sm">Computer Science Student • Seeking Opportunities</span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight text-white">
                Software & Game
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-500 to-orange-500">
                  Developer
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Undergraduate developer passionate about building innovative solutions,
                from interactive games to scalable web applications. Ready to contribute
                and grow in a professional environment.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold flex items-center gap-2 shadow-lg transition-colors"
                  >
                    View Projects
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>

                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-slate-800 border border-slate-700 rounded-lg text-white font-semibold hover:bg-slate-700 transition-colors"
                  >
                    Contact Me
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1672385245363-f4e7ed05a63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwbGFwdG9wJTIwY29kZXxlbnwxfHx8fDE3NzA4Njk4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Software Development"
                  className="w-full h-auto"
                />
              </div>

              {/* Floating accent elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600 rounded-2xl blur-xl opacity-30"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-500 rounded-full blur-xl opacity-30"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              What I Bring
            </h2>
            <p className="text-xl text-gray-400">
              A diverse skill set combining technical expertise with creative thinking
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="relative p-8 bg-slate-900 border border-slate-700 rounded-xl overflow-hidden hover:border-slate-600 transition-colors">
                  
                  <div className={`inline-flex p-4 rounded-xl ${feature.color} mb-6`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Highlight */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-400">
              Tools and technologies I work with
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <div className="p-6 bg-slate-900 border border-slate-700 rounded-xl">
              <FileCode className="w-8 h-8 text-blue-500 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Languages</h3>
              <p className="text-gray-400 text-sm">JavaScript, TypeScript, Python, C#, C++, Java</p>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-700 rounded-xl">
              <Code2 className="w-8 h-8 text-green-500 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Web Development</h3>
              <p className="text-gray-400 text-sm">React, Node.js, Express, MongoDB, PostgreSQL</p>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-700 rounded-xl">
              <Gamepad2 className="w-8 h-8 text-orange-500 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Game Engines</h3>
              <p className="text-gray-400 text-sm">Unity, Unreal Engine, Godot</p>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-700 rounded-xl">
              <Terminal className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Tools & Other</h3>
              <p className="text-gray-400 text-sm">Git, Docker, AWS, Figma, Blender</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-12 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500 rounded-full blur-3xl opacity-10"></div>
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Looking for Opportunities
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                I'm actively seeking internships and entry-level positions where I can contribute,
                learn, and grow as a developer. Let's connect!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-xl transition-colors"
                  >
                    Get in Touch
                  </motion.button>
                </Link>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-slate-800 border border-slate-700 text-white rounded-lg font-semibold hover:bg-slate-700 transition-colors"
                >
                  Download Resume
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}