import React from 'react';
import { Terminal, ArrowDownRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center px-6 relative border-b border-zinc-800">
      
      {/* Decorative Top Bar */}
      <div className="absolute top-0 left-0 w-full p-4 border-b border-zinc-800 flex justify-between text-xs text-zinc-500 uppercase tracking-widest">
        <span>System.Ready</span>
        <span>Kito_OS v1.0</span>
      </div>

      <div className="max-w-5xl w-full mx-auto pt-20">
        
        {/* The "Glitch" Name */}
        <div className="mb-8">
          <p className="text-green-500 mb-4 text-sm tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 animate-pulse"></span>
            ONLINE // METRO MANILA
          </p>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase mb-2">
            Keith Alan<br />
            <span className="text-zinc-700">Speirs.</span>
          </h1>
        </div>

        {/* The Grid Layout Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-zinc-800 pt-8">
          
          <div className="space-y-6">
            <h2 className="text-xl text-white font-bold flex items-center gap-2">
              <Terminal className="w-5 h-5" />
              CURRENT STATUS
            </h2>
            <p className="text-zinc-400 leading-relaxed max-w-md">
              Data Intern at <span className="text-white border-b border-green-500">UnionDigital Bank</span>.
              <br />
              Architecting serverless pipelines and wrestling with SQL queries until they submit.
            </p>
          </div>

          <div className="space-y-6">
             <h2 className="text-xl text-white font-bold flex items-center gap-2">
              <ArrowDownRight className="w-5 h-5" />
              INITIATE CONTACT
            </h2>
            <div className="flex flex-col gap-3">
              <a href="https://github.com/SirkitoGio" target="_blank" rel="noreferrer" 
                 className="group flex items-center justify-between p-4 border border-zinc-800 hover:bg-white hover:text-black transition-all duration-300">
                <span className="flex items-center gap-3"><Github className="w-5 h-5" /> GITHUB</span>
                <ArrowDownRight className="w-4 h-4 opacity-0 group-hover:opacity-100" />
              </a>
              
              <a href="https://www.linkedin.com/in/keith-speirs/" target="_blank" rel="noreferrer"
                 className="group flex items-center justify-between p-4 border border-zinc-800 hover:bg-blue-600 hover:text-white transition-all duration-300">
                <span className="flex items-center gap-3"><Linkedin className="w-5 h-5" /> LINKEDIN</span>
                <ArrowDownRight className="w-4 h-4 opacity-0 group-hover:opacity-100" />
              </a>

              <a href="mailto:keithalan.speirs25@gmail.com" 
                 className="group flex items-center justify-between p-4 border border-zinc-800 hover:bg-green-500 hover:text-black transition-all duration-300">
                <span className="flex items-center gap-3"><Mail className="w-5 h-5" /> EMAIL_ME</span>
                <ArrowDownRight className="w-4 h-4 opacity-0 group-hover:opacity-100" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;