"use client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-gray-600">A collection of my best work, from web apps to DevOps pipelines.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group bg-white border border-gray-100 p-6 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="h-48 bg-gray-100 rounded-2xl mb-6 flex items-center justify-center text-gray-400 font-bold uppercase tracking-widest overflow-hidden relative">
                {/* Image Placeholder */}
                <span>Project Preview</span>
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-sm text-gray-600 mb-6 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] font-bold uppercase tracking-wider bg-gray-50 text-gray-500 px-3 py-1 rounded-full border border-gray-100">
                    {t}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.link} 
                target="_blank" 
                className="inline-flex items-center text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors"
              >
                View Source Code →
              </a>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}