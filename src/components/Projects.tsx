import { projects } from '@/data/projects';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map(t => <span key={t} className="text-xs bg-gray-100 px-2 py-1 rounded-md">{t}</span>)}
            </div>
            <a href={project.link} target="_blank" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:underline">
              View on GitHub <ExternalLink size={14} className="ml-1" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}