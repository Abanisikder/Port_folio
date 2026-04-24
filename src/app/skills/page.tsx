// "use client";
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

// export default function SkillsPage() {
//   const categories = [
//     {
//       title: "Frontend Development",
//       color: "border-blue-600",
//       accent: "bg-blue-600",
//       skills: [
//         { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
//         { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
//         { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
//         { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
//         { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
//         { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
//       ]
//     },
//     {
//       title: "Backend & Database",
//       color: "border-green-600",
//       accent: "bg-green-600",
//       skills: [
//         { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
//         { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
//         { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
//         { name: "REST APIs", icon: "https://img.icons8.com/fluency/96/api.png" },
//       ]
//     },
//     {
//       title: "DevOps & Automation",
//       color: "border-purple-600",
//       accent: "bg-purple-600",
//       skills: [
//         { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
//         { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
//         { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
//         { name: "CI/CD", icon: "https://img.icons8.com/fluency/96/workflow.png" },
//       ]
//     },
//     {
//   title: "Soft Skills & Leadership",
//   color: "border-amber-500",
//   accent: "bg-amber-500",
//   skills: [
//     { 
//       name: "Communication", 
//       icon: "https://www.svgrepo.com/show/491501/chat-left-dots.svg" 
//     },
//     { 
//       name: "Leadership", 
//       icon: "https://www.svgrepo.com/show/490848/star.svg" 
//     },
//     { 
//       name: "Problem Solver", 
//       icon: "https://www.svgrepo.com/show/491028/lightbulb.svg" 
//     },
//     { 
//       name: "Language (En/Bn)", 
//       icon: "https://www.svgrepo.com/show/490915/translate.svg" 
//     },
//   ]
// }
//   ];

//   return (
//     <main className="min-h-screen bg-[#0a0c10] text-white">
//       <Navbar />
//       <section className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
        
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold mb-4 tracking-tight">Professional <span className="text-blue-500">Skills</span></h2>
//           <p className="text-gray-400">A comprehensive overview of my technical and interpersonal abilities.</p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {categories.map((cat, idx) => (
//             <div key={idx} className={`bg-[#11141b] rounded-3xl p-8 border ${cat.color} border-opacity-30 relative overflow-hidden flex flex-col`}>
//               {/* Vertical accent line */}
//               <div className={`absolute left-6 top-8 bottom-48 w-1.5 rounded-full bg-opacity-80 ${cat.accent}`}></div>
              
//               <h3 className="text-2xl font-bold ml-6 mb-10">{cat.title}</h3>
              
//               <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-auto">
//                 {cat.skills.map((skill) => (
//                   <div key={skill.name} className="bg-[#1a1f29] border border-gray-800 p-6 rounded-2xl flex flex-col items-center justify-center hover:bg-[#232936] transition-all group cursor-default">
//                     <img src={skill.icon} alt={skill.name} className="w-10 h-10 mb-4 group-hover:scale-110 transition-transform filter brightness-90 contrast-125" />
//                     <span className="text-xs font-semibold text-gray-400 group-hover:text-white text-center">{skill.name}</span>
//                   </div>
//                 ))}
//               </div>
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

export default function SkillsPage() {
  const technicalCategories = [
    {
      title: "Frontend Development",
      color: "border-blue-600",
      accent: "bg-blue-600",
      skills: [
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      ]
    },
    {
      title: "Backend & Database",
      color: "border-green-600",
      accent: "bg-green-600",
      skills: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "REST APIs", icon: "https://img.icons8.com/fluency/96/api.png" },
      ]
    },
    {
      title: "DevOps & Automation",
      color: "border-purple-600",
      accent: "bg-purple-600",
      skills: [
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "CI/CD", icon: "https://img.icons8.com/fluency/96/workflow.png" },
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#0a0c10] text-white">
      <Navbar />
      <section className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Professional <span className="text-blue-500">Skills</span></h2>
          <p className="text-gray-400 font-medium">My technical stack and interpersonal strengths.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Technical Skill Cards */}
          {technicalCategories.map((cat, idx) => (
            <div key={idx} className={`bg-[#11141b] rounded-3xl p-8 border ${cat.color} border-opacity-30 relative overflow-hidden flex flex-col`}>
              <div className={`absolute left-6 top-8 bottom-48 w-1.5 rounded-full bg-opacity-80 ${cat.accent}`}></div>
              <h3 className="text-2xl font-bold ml-6 mb-10">{cat.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="bg-[#1a1f29] border border-gray-800 p-6 rounded-2xl flex flex-col items-center justify-center hover:bg-[#232936] transition-all group cursor-default">
                    <img src={skill.icon} alt={skill.name} className="w-10 h-10 mb-4 group-hover:scale-110 transition-transform filter brightness-90 contrast-125" />
                    <span className="text-xs font-semibold text-gray-400 group-hover:text-white text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Soft Skills Card (With Inline SVGs to ensure they show up) */}
          <div className="bg-[#11141b] rounded-3xl p-8 border border-amber-500 border-opacity-30 relative overflow-hidden flex flex-col">
            <div className="absolute left-6 top-8 bottom-48 w-1.5 rounded-full bg-opacity-80 bg-amber-500"></div>
            <h3 className="text-2xl font-bold ml-6 mb-10 text-white">Soft Skills & Leadership</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {/* Problem Solver */}
              <div className="bg-[#1a1f29] border border-gray-800 p-6 rounded-2xl flex flex-col items-center justify-center hover:bg-[#232936] transition-all group">
                <svg className="w-10 h-10 mb-4 text-amber-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.674M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span className="text-xs font-semibold text-gray-400 group-hover:text-white text-center">Problem Solver</span>
              </div>

              {/* Leadership */}
              <div className="bg-[#1a1f29] border border-gray-800 p-6 rounded-2xl flex flex-col items-center justify-center hover:bg-[#232936] transition-all group">
                <svg className="w-10 h-10 mb-4 text-amber-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <span className="text-xs font-semibold text-gray-400 group-hover:text-white text-center">Leadership</span>
              </div>

              {/* Language Efficiency */}
              <div className="bg-[#1a1f29] border border-gray-800 p-6 rounded-2xl flex flex-col items-center justify-center hover:bg-[#232936] transition-all group">
                <svg className="w-10 h-10 mb-4 text-amber-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 11.37 9.193 15.873 5.5 18.938" />
                </svg>
                <span className="text-xs font-semibold text-gray-400 group-hover:text-white text-center">Language (En/Bn)</span>
              </div>

              {/* Communication */}
              <div className="bg-[#1a1f29] border border-gray-800 p-6 rounded-2xl flex flex-col items-center justify-center hover:bg-[#232936] transition-all group">
                <svg className="w-10 h-10 mb-4 text-amber-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
                <span className="text-xs font-semibold text-gray-400 group-hover:text-white text-center">Communication</span>
              </div>
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </main>
  );
}