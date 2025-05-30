
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Neural Connection Established!",
      description: "Message transmitted successfully. Neural response incoming soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail size={28} />,
      title: "Neural Email",
      value: "tishasolanki06@gmail.com",
      href: "mailto:tishasolanki06@gmail.com",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Phone size={28} />,
      title: "Quantum Signal",
      value: "+91 8140878771",
      href: "tel:+918140878771",
      color: "from-pink-500 to-cyan-500"
    },
    {
      icon: <MapPin size={28} />,
      title: "Digital Coordinates",
      value: "Chitrakut, Porbandar - 360575",
      href: "#",
      color: "from-cyan-500 to-purple-500"
    }
  ];

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 bg-purple-500/10 border border-purple-500/30 rounded-full px-8 py-4 mb-8">
            <Zap className="text-purple-400" size={24} />
            <span className="text-purple-400 font-semibold tracking-wider uppercase">Neural Interface</span>
          </div>
          <h2 className="text-6xl lg:text-7xl font-black text-white mb-8">
            ESTABLISH{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              CONNECTION
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            Ready to merge consciousness and explore quantum possibilities? Let's interface and create digital magic together!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h3 className="text-4xl font-bold text-white mb-8">Initiate Protocol</h3>
              <p className="text-gray-400 mb-10 text-xl leading-relaxed">
                Always ready to explore new digital frontiers, quantum innovations, or consciousness-expanding collaborations. 
                Whether you're seeking a neural developer or want to dive into AI realms together, let's connect our networks!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="group flex items-start gap-6 p-8 bg-black/40 border border-gray-800 rounded-3xl hover:border-purple-500/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className={`relative w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                    <div className={`absolute inset-0 bg-gradient-to-r ${info.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-lg">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-8">Neural Networks</h4>
              <div className="flex gap-6">
                {[
                  { icon: Github, href: "#", color: "from-purple-500 to-pink-500" },
                  { icon: Linkedin, href: "#", color: "from-pink-500 to-cyan-500" },
                  { icon: Mail, href: "mailto:tishasolanki06@gmail.com", color: "from-cyan-500 to-purple-500" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="group relative w-16 h-16 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-110"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${social.color} blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                    <div className="relative w-full h-full flex items-center justify-center text-white">
                      <social.icon size={28} />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="relative bg-black/40 border border-gray-800 rounded-3xl p-12 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10 opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-4xl font-bold text-white mb-10">Transmit Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 font-semibold mb-4 text-xl">
                        Neural ID
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-8 py-5 bg-gray-900/50 border border-purple-500/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-lg"
                        placeholder="Your Neural ID"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-300 font-semibold mb-4 text-xl">
                        Quantum Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-8 py-5 bg-gray-900/50 border border-purple-500/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-lg"
                        placeholder="your.neural@quantum.net"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-300 font-semibold mb-4 text-xl">
                      Transmission Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-8 py-5 bg-gray-900/50 border border-purple-500/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-lg"
                      placeholder="What's this neural transmission about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-300 font-semibold mb-4 text-xl">
                      Neural Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-8 py-5 bg-gray-900/50 border border-purple-500/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none text-lg"
                      placeholder="Share your quantum ideas or project vision..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-4 px-10 py-5 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-2xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/25 relative overflow-hidden text-xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                    <Send size={28} className="relative z-10" />
                    <span className="relative z-10">Transmit to Neural Network</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
