import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <header className="bg-white shadow-md p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">[Your Name]</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#works" className="hover:text-blue-600">Works</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      <section className="text-center py-20 bg-gradient-to-r from-blue-100 to-purple-100">
        <h2 className="text-4xl font-bold mb-4">Graphic Artist & Visual Storyteller</h2>
        <p className="text-lg max-w-xl mx-auto">Turning ideas into powerful visuals that communicate, captivate, and inspire.</p>
      </section>

      <section id="about" className="max-w-4xl mx-auto p-8">
        <h3 className="text-2xl font-semibold mb-4">About Me</h3>
        <p>I’m a passionate graphic artist with [X] years of experience in branding, social media content, marketing collaterals, UI/UX elements, and motion graphics. I bring ideas to life through design.</p>
      </section>

      <section id="skills" className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-8">
          <h3 className="text-2xl font-semibold mb-6">Skills & Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-gray-100 p-4 rounded-xl">Adobe Photoshop</div>
            <div className="bg-gray-100 p-4 rounded-xl">Illustrator</div>
            <div className="bg-gray-100 p-4 rounded-xl">Figma</div>
            <div className="bg-gray-100 p-4 rounded-xl">After Effects</div>
            <div className="bg-gray-100 p-4 rounded-xl">Canva</div>
            <div className="bg-gray-100 p-4 rounded-xl">UI/UX Design</div>
            <div className="bg-gray-100 p-4 rounded-xl">Motion Graphics</div>
            <div className="bg-gray-100 p-4 rounded-xl">Branding</div>
          </div>
        </div>
      </section>

      <section id="works" className="py-12">
        <div className="max-w-6xl mx-auto px-8">
          <h3 className="text-2xl font-semibold mb-6">Selected Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow rounded-xl overflow-hidden">
              <img src="/project1.jpg" alt="Project 1" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-bold">Branding – Café Bloom</h4>
                <p>Minimalist identity design for a boutique café.</p>
              </div>
            </div>
            <div className="bg-white shadow rounded-xl overflow-hidden">
              <img src="/project2.jpg" alt="Project 2" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-bold">UI Design – Energy Dashboard</h4>
                <p>Clean interface for energy resource tracking.</p>
              </div>
            </div>
            <div className="bg-white shadow rounded-xl overflow-hidden">
              <img src="/project3.jpg" alt="Project 3" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-bold">Motion Graphics – Jops TV</h4>
                <p>Upbeat animated intro for a YouTube channel.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-blue-100 py-12">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Let’s Work Together</h3>
          <p className="mb-6">Get in touch for commissions, collaborations, or just to say hi!</p>
          <div className="space-y-2">
            <p>Email: <a href="mailto:your@email.com" className="text-blue-600">your@email.com</a></p>
            <p>Phone: +63 XXX XXX XXXX</p>
            <p>Social: [Instagram | Behance | LinkedIn]</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
      </footer>
    </div>
  );
}
