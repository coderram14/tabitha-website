import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, BookOpen, Users, Heart, Phone, Mail, MapPin, ChevronRight, Star, ArrowRight, Sun } from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Color Palette derived from Logo:
  // Primary Blue: #1a237e (approximate royal blue)
  // Accent Yellow: #fdd835 (approximate gold)
  // Accent Red: #d32f2f (for highlights)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#our-story' },
    { name: 'Our Mission', href: '#mission' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo Area */}
            <div className="flex items-center space-x-3">
              {/* Logo Image with Fallback Logic */}
              <img 
                src="/assets/logo.png"
                alt="Tabitha Premier Logo" 
                className="w-12 h-12 md:w-14 md:h-14 object-contain drop-shadow-md"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.style.display = 'none';
                  if (e.target.nextSibling) {
                    e.target.nextSibling.style.display = 'flex';
                    e.target.nextSibling.classList.remove('hidden');
                  }
                }}
              />
              {/* Fallback if image missing */}
              <div 
                className="hidden w-10 h-10 rounded-full bg-white text-blue-900 items-center justify-center font-bold text-xl shadow-md"
                style={{ display: 'none' }} 
              >
                T
              </div>
              
              <span className={`font-bold text-lg md:text-xl tracking-tight ${isScrolled ? 'text-blue-900' : 'text-white drop-shadow-md'}`}>
                Tabitha Premier
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={`text-sm font-medium transition-colors hover:text-yellow-400 ${
                    isScrolled ? 'text-slate-700' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-yellow-400 text-blue-900 px-5 py-2 rounded-full font-bold text-sm hover:bg-yellow-300 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Apply Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md ${isScrolled ? 'text-blue-900' : 'text-white'}`}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-xl absolute w-full left-0 top-full border-t border-slate-100">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-blue-900 hover:bg-blue-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <button className="w-full bg-blue-900 text-white px-5 py-3 rounded-lg font-bold shadow-md">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/banner.png"
            alt="Students learningabc"
            className="w-full h-full object-cover"
          />

        </div>

      </header>

      {/* Story Section */}
      <section id="our-story" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-tl-3xl rounded-br-3xl -z-10"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500">
                <img 
                  src="/assets/OurStory.png"
                  alt="Children learning together" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-100 rounded-full text-blue-900">
                    <Heart size={20} fill="currentColor" />
                  </div>
                  <span className="font-bold text-blue-900">Heart of Passion</span>
                </div>
                <p className="text-sm text-slate-600">Built on a mission to give every child a chance.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                Our Story
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                Born From a <span className="text-blue-800">Heart of Passion</span>
              </h2>
              <div className="prose prose-lg text-slate-600">
                <p className="leading-relaxed">
                  Our story began with a Ghanaian woman who chased her dreams abroad, only to discover that her hard-earned degrees were not fully recognized. Instead of giving up, she came home with a bigger mission.
                </p>
                <div className="border-l-4 border-yellow-400 pl-4 my-4 italic text-slate-800 font-medium bg-yellow-50/50 py-2 pr-2 rounded-r-lg">
                  "To give children—especially those from single-parent homes and the vulnerable—the chance she never had."
                </div>
                <p className="leading-relaxed">
                  From a humble start in a remote part of Kumasi, she built a school where every child matters. Here, education goes beyond books—empowering students with knowledge, skills, and hope for a brighter future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Mission / "Treasures" Section */}
      <section id="mission" className="py-20 bg-blue-900 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block p-3 rounded-full bg-blue-800 mb-6">
              <Sun className="w-8 h-8 text-yellow-400" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Treasures Out of Darkness</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1 prose prose-lg prose-invert text-blue-100">
                <p className="leading-relaxed text-lg">
                  Tabitha Educational Complex <strong>"Tabitha Premier"</strong> is a distinguished elementary school, dedicated to providing a nurturing, inclusive, and academically rigorous environment for young learners.
                </p>
                <p className="leading-relaxed">
                  We don't just educate minds; we shape character, build confidence, and inspire future leaders. Our mission is to build strong foundations in knowledge, values, and creativity—preparing every child for a lifetime of success.
                </p>
                <p className="leading-relaxed text-white font-medium border-l-4 border-yellow-400 pl-4 mt-6">
                  With a charitable spirit, we are especially passionate about supporting children from single-parent households and those facing difficult life circumstances. We lovingly call them <span className="text-yellow-400">"Treasures Out of Darkness,"</span> because we believe every child deserves the same opportunity to shine through quality education.
                </p>
             </div>
             
             {/* Visual Side */}
             <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-8">
                  <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Students studying" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
                  <img src="/assets/school_photo1.png" alt="Smiling student" className="rounded-2xl shadow-lg w-full h-32 object-cover" />
                </div>
                <div className="space-y-4">
                  <img src="/assets/school_photo2.png" alt="Classroom" className="rounded-2xl shadow-lg w-full h-32 object-cover" />
                  <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Teacher and student" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Values / Features Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nurturing Future Leaders</h2>
            <p className="text-lg text-slate-600">We don't just teach subjects; we build character. Our holistic approach ensures your child is ready for the world.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-blue-900 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-900 mb-6 group-hover:bg-yellow-400 group-hover:text-blue-900 transition-colors">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-white">Confident Learners</h3>
              <p className="text-slate-600 group-hover:text-blue-100 leading-relaxed">
                Empowering students with deep knowledge and the self-belief to ask questions and seek answers.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-blue-900 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-yellow-400 group-hover:text-blue-900 transition-colors">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-white">Creative Thinkers</h3>
              <p className="text-slate-600 group-hover:text-blue-100 leading-relaxed">
                Fostering imagination and innovation to solve tomorrow's problems with fresh perspectives.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-blue-900 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-700 mb-6 group-hover:bg-yellow-400 group-hover:text-blue-900 transition-colors">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-white">Compassionate Leaders</h3>
              <p className="text-slate-600 group-hover:text-blue-100 leading-relaxed">
                Instilling empathy and integrity, guiding students to serve their communities with kindness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery / Life at School */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Life at Tabitha</h2>
              <p className="mt-2 text-slate-600">Capturing moments of joy and growth.</p>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 font-bold text-blue-700 hover:text-blue-900">
              View All Photos <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group h-64 md:h-96">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2132&q=80" 
                alt="Teacher helping student" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-bold text-lg">Classroom Engagement</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden group h-32 md:h-full">
              <img 
                src="https://images.unsplash.com/photo-1577896332298-5dc82946c192?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="School building" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden group h-32 md:h-full">
              <img 
                src="https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Library" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="col-span-2 relative rounded-2xl overflow-hidden group h-32 md:h-full">
               <img 
                src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Students playing" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-bold text-lg">Sports & Recreation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Admissions */}
      <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-10">
           <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFFFFF" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.1C93.5,9,82.2,22.3,71.5,33.5C60.8,44.7,50.7,53.8,39.6,60.8C28.5,67.8,16.4,72.7,2.8,70.9C-10.8,69.1,-25.9,60.6,-39.3,51.8C-52.7,43,-64.4,33.9,-72.1,22.2C-79.8,10.5,-83.5,-3.8,-79.8,-16.6C-76.1,-29.4,-65,-40.7,-53,-48.8C-41,-56.9,-28.1,-61.8,-15.5,-64.4C-2.9,-67,9.8,-67.3,22.9,-67.5L30.5,-63.4L44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Join the Tabitha Family</h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Admissions are open for the upcoming academic year. Give your child the gift of an education that values their unique potential.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all shadow-lg hover:shadow-yellow-400/30">
              Apply for Admission
            </button>
            <button className="bg-transparent border border-blue-400 text-blue-50 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition-all">
              Schedule a Visit
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                {/* Footer Logo */}
                <img 
                  src="/logo.png" 
                  alt="Tabitha Premier Logo" 
                  className="w-12 h-12 object-contain bg-white rounded-lg p-1"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span 
                  className="font-bold text-xl text-white hidden" 
                  style={{ display: 'none' }}
                >
                  Tabitha
                </span>
                
                <span className="font-bold text-xl text-white">Tabitha Premier</span>
              </div>
              <p className="text-sm leading-relaxed mb-6 text-slate-400">
                Training up the child with passion. An educational complex dedicated to excellence, integrity, and holistic development.
              </p>
              <div className="flex space-x-4">
                {/* Social Icons Placeholders */}
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Admissions</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Academic Calendar</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">News & Events</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Careers</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-bold mb-6">Contact Us</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                  <span>AK-216-4439 <br/>Anomangye Mpatasie<br/>Kumasi, Ghana</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-yellow-400 shrink-0" />
                  <span>+233-2419186</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-yellow-400 shrink-0" />
                  <span>tabithaeducomplex@gmail.com</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-white font-bold mb-6">Stay Updated</h3>
              <form className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                />
                <button className="w-full bg-yellow-400 text-blue-900 font-bold py-2 rounded-lg hover:bg-yellow-300 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Tabitha Educational Complex. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;