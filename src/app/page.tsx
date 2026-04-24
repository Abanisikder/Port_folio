import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About'; // এটি যোগ করুন
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About /> {/* Hero এর নিচে About সেকশন */}
      <Projects />
      <Footer />
    </main>
  );
}