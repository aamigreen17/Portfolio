import { motion } from "motion/react";
import { Mail, Github, Linkedin, FileText, Send, Briefcase } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert("Thanks for reaching out! This is a demo - no message was actually sent.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactLinks = [
    {
      icon: Github,
      name: "GitHub",
      handle: "github.com/yourusername",
      url: "#",
      color: "slate-600",
      description: "View my code and projects"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      handle: "linkedin.com/in/yourprofile",
      url: "#",
      color: "blue-600",
      description: "Let's connect professionally"
    },
    {
      icon: Mail,
      name: "Email",
      handle: "your.email@example.com",
      url: "mailto:your.email@example.com",
      color: "green-600",
      description: "Send me a message"
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
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm actively seeking internship and entry-level opportunities. 
            Let's connect and discuss how I can contribute to your team!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2 font-semibold">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-semibold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell me about the opportunity or what you'd like to discuss..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold flex items-center justify-center gap-2 shadow-lg transition-colors"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Professional Links */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="group block p-6 bg-slate-900 border border-slate-700 rounded-xl hover:border-slate-600 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 bg-${link.color}/10 rounded-lg group-hover:bg-${link.color}/20 transition-colors`}>
                        <link.icon className={`w-6 h-6 text-${link.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-white mb-1">{link.name}</div>
                        <div className="text-sm text-gray-400 mb-2">{link.description}</div>
                        <div className="text-sm text-blue-400 font-mono">{link.handle}</div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Resume Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="p-6 bg-gradient-to-br from-blue-600/10 to-green-600/10 border border-blue-600/20 rounded-xl"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600/20 rounded-lg">
                  <FileText className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-2">Resume</h4>
                  <p className="text-gray-300 text-sm mb-4">
                    Download my resume to learn more about my experience and qualifications
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-sm transition-colors inline-flex items-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    Download Resume
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="p-6 bg-slate-900 border border-slate-700 rounded-xl"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-600/20 rounded-lg">
                  <Briefcase className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <h4 className="text-white font-semibold">Open to Opportunities</h4>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Actively seeking summer 2026 internships and entry-level positions 
                    in software development and game development. Available for full-time 
                    roles starting May 2027.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900 border border-slate-700 rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're looking for an intern, considering me for a role, or just want to 
            chat about tech and games, I'd love to hear from you!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="mailto:your.email@example.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold shadow-lg transition-colors inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-slate-800 border border-slate-700 rounded-lg text-white font-semibold hover:bg-slate-700 transition-colors inline-flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}