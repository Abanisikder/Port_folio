// "use client";
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import { projects } from '@/data/projects';

// export default function ProjectsPage() {
//   return (
//     <main className="min-h-screen bg-white">
//       <Navbar />
//       <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Featured Projects</h2>
//           <p className="text-gray-600">A collection of my best work, from web apps to DevOps pipelines.</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, idx) => (
//             <div key={idx} className="group bg-white border border-gray-100 p-6 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
//               <div className="h-48 bg-gray-100 rounded-2xl mb-6 flex items-center justify-center text-gray-400 font-bold uppercase tracking-widest overflow-hidden relative">
//                 {/* Image Placeholder */}
//                 <span>Project Preview</span>
//                 <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
//               </div>
              
//               <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
//                 {project.title}
//               </h3>
              
//               <p className="text-sm text-gray-600 mb-6 line-clamp-2">
//                 {project.description}
//               </p>
              
//               <div className="flex flex-wrap gap-2 mb-8">
//                 {project.tech.map((t) => (
//                   <span key={t} className="text-[10px] font-bold uppercase tracking-wider bg-gray-50 text-gray-500 px-3 py-1 rounded-full border border-gray-100">
//                     {t}
//                   </span>
//                 ))}
//               </div>
              
//               <a 
//                 href={project.link} 
//                 target="_blank" 
//                 className="inline-flex items-center text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors"
//               >
//                 View Source Code →
//               </a>
//             </div>
//           ))}
//         </div>
//       </section>
//       <Footer />
//     </main>
//   );
// }
"use client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <Navbar />
      
    
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[0%] right-[0%] w-[30%] h-[30%] bg-purple-600/10 rounded-full blur-[100px]"></div>
      </div>

      <section className="relative z-10 pt-44 pb-32 px-6 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Selected Work
          </h2>
          <p className="text-gray-400 max-w-xl text-lg font-light leading-relaxed">
            A visual journey through my latest development projects and technical solutions.
          </p>
        </div>

        {/* Improved Visibility Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="group relative flex flex-col bg-[#111] rounded-[2.5rem] border border-white/5 overflow-hidden hover:border-blue-500/40 transition-all duration-500 shadow-2xl"
            >
              {/* Image Section -  */}
              <div className="relative h-[320px] w-full overflow-hidden bg-[#1a1a1a]">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-900 text-gray-700 font-bold uppercase tracking-widest">
                    {project.title}
                  </div>
                )}
                
                {/* Subtle Gradient ( */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-60"></div>
                
                {/* Explore Badge */}
                <div className="absolute top-6 right-6 px-4 py-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-10px] group-hover:translate-y-0 text-[10px] font-bold tracking-widest text-blue-400">
                  LIVE VIEW
                </div>
              </div>

              {/* Content Section */}
              <div className="p-10">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="text-[9px] font-bold uppercase tracking-wider py-1 px-3 bg-blue-500/5 text-blue-400 border border-blue-500/10 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="text-3xl font-bold mb-4 text-gray-100 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-2">
                  {project.description}
                </p>

                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-blue-500 group-hover:gap-5 transition-all duration-300"
                >
                  Explore Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
