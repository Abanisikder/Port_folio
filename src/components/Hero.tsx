"use client";
import { ArrowRight, Code2, Rocket, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs font-bold mb-8 uppercase tracking-wider">
            <Rocket size={14} /> Available for New Projects
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Building Scalable <span className="text-blue-600">MERN</span> <br /> 
            Solutions with <span className="underline decoration-blue-200">Docker</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Hi, I'm <span className="font-semibold text-gray-900">Abani Sikder</span>. 
            A Software Engineer specialized in developing high-performance web applications 
            and automating deployment pipelines.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="#projects" className="flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-all shadow-lg">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all">
              Let's Talk
            </a>
          </div>

          {/* Trust Badges / Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl border-t border-gray-100 pt-12">
            <div className="flex flex-col items-center">
              <Code2 className="text-blue-600 mb-2" size={28} />
              <h3 className="font-bold text-gray-900">Full Stack Dev</h3>
              <p className="text-sm text-gray-500 text-center">Modern MERN & Next.js apps</p>
            </div>
            <div className="flex flex-col items-center">
              <ShieldCheck className="text-blue-600 mb-2" size={28} />
              <h3 className="font-bold text-gray-900">DevOps Ready</h3>
              <p className="text-sm text-gray-500 text-center">Docker & CI/CD Pipelines</p>
            </div>
            <div className="flex flex-col items-center">
              <Rocket className="text-blue-600 mb-2" size={28} />
              <h3 className="font-bold text-gray-900">Optimized Code</h3>
              <p className="text-sm text-gray-500 text-center">Scalable & Clean Architecture</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}