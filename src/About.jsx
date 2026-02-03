import React from 'react';
import { Coffee, Cpu } from 'lucide-react';

const About = () => {
  return (
    <section className="py-24 bg-transparent border-t border-zinc-800 text-zinc-300">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        
        {/* LEFT COLUMN: The Personal "Log" */}
        <div className="space-y-8">
          <div className="border-l-2 border-purple-500 pl-6">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
              Personal_Log
            </h2>
            <p className="mt-2 text-zinc-500 font-mono text-sm">
              Beyond the terminal.
            </p>
          </div>

          <div className="space-y-6 text-lg leading-relaxed font-light">
            <p>
              <strong className="text-white font-bold">CURRENT STATUS:</strong><br/>
              When I'm not optimizing SQL queries or helping on pipeliens for UnionDigital Bank, I'm usually head first into Python scripts or building things. I love all things IT. I believe data isn't just numbers. It's the architecture of modern truth. 
            </p>

            <p>
              <strong className="text-white font-bold">OFFLINE MODE:</strong><br/>
              The physical keeps the mental sharp. You can find me exploring the city or hunting for the perfect coffee spot with my friends(hence the Kape4U app), or experimenting with new tech stacks just to see if I can break and build them.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 border border-zinc-800 bg-zinc-900">
                <Coffee className="w-5 h-5 text-purple-500 mb-2" />
                <span className="text-xs font-mono text-zinc-500 uppercase">Fuel Source</span>
                <p className="font-bold text-white">Iced Americano and being with my Girlfriend</p>
              </div>
              <div className="p-4 border border-zinc-800 bg-zinc-900">
                <Cpu className="w-5 h-5 text-green-500 mb-2" />
                <span className="text-xs font-mono text-zinc-500 uppercase">Core Stack</span>
                <p className="font-bold text-white">Java, Python, React, & AWS</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-white"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-white"></div>
          
          <div className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out cursor-pointer">
            {}
            <img 
              src="2ME.JPG" 
              alt="Keith Alan Speirs" 
              className="w-full h-auto object-cover border border-zinc-800"
            />
          </div>

          <div className="flex justify-between items-center mt-4 text-xs font-mono text-zinc-500 uppercase">
            <span>me.jpg</span>
            <span>100% Rendered</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;