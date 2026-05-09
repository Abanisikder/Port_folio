"use client";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 pt-20 pb-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Bio */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-6">Abani Sikder</h2>
            <p className="text-sm leading-relaxed mb-6">
              Software Engineer passionate about building digital products that solve real-world problems. 
              Specialized in MERN stack and DevOps.
            </p>
            <div className="flex gap-5 text-sm font-medium">
              <a href="https://github.com/Abanisikder" target="_blank" className="hover:text-white transition underline underline-offset-4">GitHub</a>
              <a href="https://www.linkedin.com/in/abani-sikder-448a222a1/" target="_blank" className="hover:text-white transition underline underline-offset-4">LinkedIn</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Navigation</h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Contact Me</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Email</p>
                <a href="mailto:abanisikder312@mail.com" className="text-sm hover:text-white transition">
                  abanisikder312@mail.com
                </a>
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Phone</p>
                <p className="text-sm">+880 1938-551373</p>
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Location</p>
                <p className="text-sm">Dhaka, Bangladesh</p>
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Blog</p>
                <a href="https://jackteach.blogspot.com" target="_blank" className="text-sm hover:text-white transition">
                  jackteach.blogspot.com
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-widest font-medium">
          <p>© 2026 Abani Sikder. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Built with Next.js & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
