"use client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactPage() {
  // Formspree setup (Get your ID from formspree.io)
  const [state, handleSubmit] = useForm("mwvaadol");

  if (state.succeeded) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-40 pb-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Thanks for reaching out!</h2>
          <p className="text-gray-600 mb-8">I will get back to you as soon as possible.</p>
          <a href="/" className="text-blue-600 font-bold underline">Go back home</a>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Left Side Info */}
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Let's build something <span className="text-blue-600">extraordinary</span>.</h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <div className="space-y-4 text-sm font-medium">
              <p className="text-gray-500 uppercase tracking-widest text-[10px]">Email Me</p>
              <p className="text-lg text-gray-900">abanisikder312@mail.com</p>
            </div>
          </div>

          {/* Right Side: Formspree Form */}
          <div className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="full-name" className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                <input id="full-name" type="text" name="name" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="Your Name" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <input id="email" type="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="name@example.com" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="Tell me about your project..."></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button 
                type="submit" 
                disabled={state.submitting}
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition shadow-lg disabled:bg-gray-400"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}