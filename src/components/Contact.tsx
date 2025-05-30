
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';
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
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "tishasolanki06@gmail.com",
      href: "mailto:tishasolanki06@gmail.com",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+91 8140878771",
      href: "tel:+918140878771",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Chitrakut, Porbandar - 360575",
      href: "#",
      color: "from-blue-500 to-indigo-500"
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-6 py-3 mb-6">
            <MessageCircle className="text-teal-400" size={20} />
            <span className="text-teal-400 font-semibold">Contact</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            Let's{' '}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                I'm always excited to discuss new opportunities, innovative projects, or potential collaborations. 
                Whether you're looking for a dedicated developer or want to explore ideas together, let's connect!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="group flex items-start gap-4 p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-teal-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-teal-400 transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-14 h-14 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg shadow-teal-500/25"
                >
                  <Github size={24} />
                </a>
                <a
                  href="#"
                  className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:tishasolanki06@gmail.com"
                  className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-10">
              <h3 className="text-3xl font-bold text-white mb-8">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-slate-300 font-semibold mb-3 text-lg">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-slate-700/50 border border-slate-600/50 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-slate-300 font-semibold mb-3 text-lg">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-slate-700/50 border border-slate-600/50 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-slate-300 font-semibold mb-3 text-lg">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-slate-700/50 border border-slate-600/50 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-300 font-semibold mb-3 text-lg">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 bg-slate-700/50 border border-slate-600/50 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-2xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-teal-500/25"
                >
                  <Send size={24} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
