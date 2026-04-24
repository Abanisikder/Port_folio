"use client";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Professional Bio */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-12 h-[2px] bg-blue-600"></span>
              About Me
            </h2>
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                I am a passionate <span className="font-semibold text-gray-900">Software Engineer</span> currently pursuing my B.Sc. in Computer Science & Engineering at 
                <span className="text-blue-600 font-medium"> Pabna University of Science and Technology</span>.
              </p>
              <p>
                My expertise lies in building robust web applications using the <span className="font-semibold text-gray-900">MERN Stack</span> and 
                streamlining development workflows through <span className="font-semibold text-gray-900">Docker</span> and CI/CD automation. 
                I thrive on solving complex architectural challenges and delivering clean, maintainable code.
              </p>
              <p>
                Beyond coding, I am a regular tech blogger at <span className="italic">jackteach.blogspot.com</span>, 
                where I share my journey of learning modern development tools and DevOps practices.
              </p>
            </div>

            {/* Quick Stats / Info */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="text-2xl font-bold text-gray-900">2022-26</h4>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Academic Session</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="text-2xl font-bold text-gray-900">10+</h4>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Projects Completed</p>
              </div>
            </div>
          </div>

          {/* Right Side: Philosophy / Approach */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">How I Work</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="text-blue-600 font-bold text-lg">01</div>
                <div>
                  <h4 className="font-bold text-gray-900">Analysis & Logic</h4>
                  <p className="text-sm text-gray-600">Deep diving into the problem before writing a single line of code.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="text-blue-600 font-bold text-lg">02</div>
                <div>
                  <h4 className="font-bold text-gray-900">Scalable Architecture</h4>
                  <p className="text-sm text-gray-600">Building systems that grow with the business needs using modern stacks.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="text-blue-600 font-bold text-lg">03</div>
                <div>
                  <h4 className="font-bold text-gray-900">Automated Deployment</h4>
                  <p className="text-sm text-gray-600">Ensuring zero-downtime and fast delivery through Dockerized environments.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}