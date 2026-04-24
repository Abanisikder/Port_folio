// "use client";

// import Link from 'next/link';
// import { useState } from 'react';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//  const navLinks = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/#about' }, // Eta home page-er id-te niye jabe
//     { name: 'Skills', href: '/skills' }, // Eta alada page-e niye jabe
//     { name: 'Projects', href: '/projects' },
//     { name: 'Contact', href: '/contact' },
//   ];

//   return (
//     <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
//       <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
//         {/* Logo */}
//         <Link href="/" className="font-bold text-2xl text-blue-600 tracking-tighter">
//           AS<span className="text-gray-900">.</span>
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex gap-8 items-center">
//           {navLinks.map((link) => (
//             <Link 
//               key={link.name} 
//               href={link.href} 
//               className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
//             >
//               {link.name}
//             </Link>
//           ))}
          
//           <div className="h-4 w-[1px] bg-gray-200 mx-2"></div>

//           <div className="flex items-center gap-5">
//             <a 
//   href="https://drive.google.com/file/d/18my4WNoEcVEFwD19jkKN8hLwHk3hDFO-/view?usp=drive_link" 
//   target="_blank" // ড্রাইভ লিঙ্কের জন্য target="_blank" দেওয়া ভালো
//   rel="noopener noreferrer"
//   className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition shadow-md"
// >
//   Resume
// </a>
//           </div>
//         </div>

//         {/* Mobile Toggle */}
//         <button className="md:hidden font-bold" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? "CLOSE" : "MENU"}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white border-b border-gray-100 px-4 py-6 flex flex-col gap-4">
//           {navLinks.map((link) => (
//             <Link 
//               key={link.name} 
//               href={link.href} 
//               onClick={() => setIsOpen(false)}
//               className="text-lg font-medium text-gray-900 border-b pb-2"
//             >
//               {link.name}
//             </Link>
//           ))}
//           <a 
//             href="/Abani_Sikder_Resume.pdf" 
//             download 
//             className="text-center bg-blue-600 text-white px-4 py-3 rounded-xl font-bold"
//           >
//             Download CV
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// }
"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="font-bold text-2xl text-blue-600 tracking-tighter">
          Abani Sikder<span className="text-gray-900"></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          <div className="h-4 w-[1px] bg-gray-200 mx-2"></div>

          <div className="flex items-center gap-5">
            {/* Resume Download Link */}
            <a 
              href="/Abani_resume.pdf" 
              download="Abani_resume.pdf"
              className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition shadow-md"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden font-bold text-gray-900 px-2" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "CLOSE" : "MENU"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 py-6 flex flex-col gap-4 shadow-lg animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-900 border-b border-gray-50 pb-2"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="/Abani_resume.pdf" 
            download="Abani_resume.pdf"
            className="text-center bg-blue-600 text-white px-4 py-3 rounded-xl font-bold shadow-blue-100 shadow-lg"
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}