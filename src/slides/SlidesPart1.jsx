import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Gamepad2, Gift, ShieldAlert, Activity } from 'lucide-react';

export const Slide01 = () => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 flex flex-col items-center"
      >
        <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
          <Activity className="w-12 h-12 md:w-16 md:h-16 text-cyan-400" />
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 text-center tracking-tight mb-4" style={{ fontFamily: 'var(--font-display)'}}>
          Día Mundial<br/>Sin Tabaco
        </h1>
        <h2 className="text-2xl md:text-4xl font-medium text-cyan-400 tracking-widest uppercase mb-12 text-center">
          Iniciativa Global de Salud
        </h2>
        
        <div className="flex flex-col items-center gap-2 mt-8 md:mt-16 bg-white/5 backdrop-blur-md px-8 py-4 rounded-full border border-white/10">
          <p className="text-lg md:text-2xl text-slate-300 font-light tracking-wide text-center">Mtra. Daniela Nazarena Hernández Fierros</p>
          <p className="text-sm md:text-lg text-slate-500 uppercase tracking-widest text-center">Universidad IEU</p>
        </div>
      </motion.div>
    </div>
  );
};

export const Slide02 = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full pt-6 md:pt-10 px-4 md:px-8 items-center overflow-y-auto">
      <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 md:pr-12">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-[#0F172A] leading-tight text-center md:text-left" style={{ fontFamily: 'var(--font-display)'}}
        >
          La Epidemia en México y el Mundo
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="text-xl md:text-3xl text-slate-600 space-y-4 md:space-y-6 leading-relaxed font-light text-center md:text-left"
        >
          <p>
            No es un "mal hábito", es una <strong className="text-slate-800">enfermedad crónica, adictiva y recurrente</strong>.
          </p>
          <div className="bg-rose-50 border border-rose-200 p-6 rounded-[24px] shadow-sm">
            <h4 className="font-bold text-rose-800 mb-2">Panorama Nacional (México):</h4>
            <ul className="list-disc pl-6 text-lg md:text-xl text-rose-700">
               <li>Más de <strong>15 millones de fumadores</strong>.</li>
               <li>Causa aprox. <strong>63,000 muertes al año</strong> (173 al día).</li>
            </ul>
          </div>
        </motion.div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center relative mt-8 md:mt-0 pb-10">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }}
          className="w-full md:w-[500px] h-auto bg-slate-900 rounded-[40px] shadow-2xl flex flex-col items-center justify-center p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-800 to-slate-900"></div>
          <div className="z-10 text-center text-white">
             <h3 className="text-5xl md:text-7xl font-black mb-2 text-rose-500">8M+</h3>
             <p className="text-xl md:text-3xl font-medium opacity-90">Muertes a nivel mundial</p>
             <div className="h-1 w-20 bg-rose-500 mx-auto mt-6 mb-6"></div>
             <p className="text-base md:text-lg text-slate-400">Es la principal causa de muerte prevenible, impulsada por más de 7,000 químicos tóxicos generados en la combustión.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export const Slide03 = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full pt-6 md:pt-10 px-4 md:px-8 items-center overflow-y-auto">
      <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 md:pr-12">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-[#0F172A] leading-tight text-center md:text-left" style={{ fontFamily: 'var(--font-display)'}}
        >
          Neurobiología de la Adicción
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="text-xl md:text-3xl text-slate-600 space-y-4 md:space-y-8 leading-relaxed font-light text-center md:text-left mt-8"
        >
          <p>
            La <strong className="text-slate-800">Nicotina</strong> es un alcaloide altamente adictivo que secuestra la vía de recompensa del cerebro.
          </p>
          <p>
            Alcanza el cerebro en <strong className="text-[#E11D48] font-bold">10-20 segundos</strong> tras la inhalación, liberando dopamina y generando tolerancia rápidamente.
          </p>
        </motion.div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center relative mt-8 md:mt-0 pb-10">
        <svg viewBox="0 0 400 400" className="w-full h-[400px] md:h-[600px] overflow-visible">
          {/* Stylized Brain background */}
          <path d="M200,50 C280,50 350,120 350,200 C350,280 280,330 200,330 C120,330 50,280 50,200 C50,120 120,50 200,50 Z" 
                fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="4" />
          <path d="M200,50 C230,80 200,150 200,330" fill="none" stroke="#E2E8F0" strokeWidth="4" />
          
          {/* Dopamine Receptors */}
          <circle cx="280" cy="150" r="15" fill="#E11D48" className="animate-pulse" />
          <circle cx="150" cy="120" r="15" fill="#E11D48" className="animate-pulse" style={{ animationDelay: '0.5s'}} />
          <circle cx="200" cy="220" r="15" fill="#E11D48" className="animate-pulse" style={{ animationDelay: '1s'}} />

          {/* Nicotine path drawing */}
          <motion.path 
            d="M200,400 C200,350 250,300 280,150" 
            fill="none" 
            stroke="#0EA5E9" 
            strokeWidth="8"
            strokeLinecap="round"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.path 
            d="M200,400 C150,350 100,250 150,120" 
            fill="none" 
            stroke="#0EA5E9" 
            strokeWidth="8"
            strokeLinecap="round"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: 0.3 }}
          />
        </svg>
      </div>
    </div>
  );
};

export const Slide04 = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full pt-6 md:pt-10 px-4 md:px-8 items-center overflow-y-auto">
      <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 md:pr-12">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-[#0F172A] leading-tight text-center md:text-left" style={{ fontFamily: 'var(--font-display)'}}
        >
          Anatomía de un Vapeador
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="text-xl md:text-3xl text-slate-600 space-y-4 md:space-y-6 leading-relaxed font-light"
        >
          <p>
            La industria evolucionó: dejaron de quemar hojas para <strong>calentar líquidos industriales</strong>.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-lg md:text-2xl text-slate-700">
            <li><strong className="text-cyan-600">Batería Litio:</strong> Calienta la resistencia a altas temperaturas.</li>
            <li><strong className="text-cyan-600">Resistencia (Bobina):</strong> Vaporiza químicos, soltando metales pesados.</li>
            <li><strong className="text-cyan-600">Líquido (Pod):</strong> Contiene Propilenglicol, saborizantes artificiales y altísimas dosis de nicotina.</li>
          </ul>
        </motion.div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center relative mt-8 md:mt-0 pb-10">
        <div className="w-48 h-[400px] md:h-[500px] bg-slate-800 rounded-[40px] shadow-2xl relative border-8 border-slate-700 flex flex-col overflow-hidden">
           {/* Pod / Liquid section */}
           <div className="h-[30%] bg-cyan-400/20 w-full relative border-b-4 border-slate-700 p-2">
             <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-full h-full bg-cyan-500/50 rounded-2xl relative overflow-hidden">
                <div className="absolute bottom-0 w-full h-[60%] bg-cyan-400"></div>
                <div className="absolute inset-0 flex items-center justify-center text-cyan-900 font-bold text-sm">Líquido</div>
             </motion.div>
           </div>
           {/* Coil Section */}
           <div className="h-[20%] bg-slate-600 w-full flex items-center justify-center border-b-4 border-slate-700">
             <div className="w-12 h-16 border-4 border-orange-500 rounded-lg flex flex-col justify-evenly p-1 relative">
                <div className="w-full h-1 bg-orange-400"></div>
                <div className="w-full h-1 bg-orange-400"></div>
                <div className="w-full h-1 bg-orange-400"></div>
                <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute -top-4 -left-8 w-24 h-24 bg-orange-500/20 blur-xl rounded-full"></motion.div>
             </div>
           </div>
           {/* Battery Section */}
           <div className="flex-1 bg-slate-700 w-full flex items-center justify-center relative">
              <div className="w-16 h-32 border-4 border-slate-500 rounded-xl relative p-2 flex flex-col justify-end">
                 <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-2 bg-slate-500 rounded-t-sm"></div>
                 <div className="w-full h-[80%] bg-emerald-500 rounded-sm"></div>
                 <span className="absolute inset-0 flex items-center justify-center text-slate-900 font-bold rotate-90 tracking-widest text-sm">BATERÍA</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export const Slide05 = () => {
  const tactics = [
    { icon: Gift, color: "text-pink-500", bg: "bg-pink-50", title: "Diseño & Sabores", desc: "Más de 15,000 sabores dulces (algodón de azúcar) y diseño de 'juguete'." },
    { icon: ShieldAlert, color: "text-amber-500", bg: "bg-amber-50", title: "El Mito del Vapor", desc: "Mienten diciendo que es 'solo vapor de agua'. Es un aerosol tóxico." },
    { icon: Gamepad2, color: "text-purple-500", bg: "bg-purple-50", title: "Sales de Nicotina", desc: "Un solo pod desechable equivale a 40-60 cigarrillos (2 a 3 cajetillas)." }
  ];

  return (
    <div className="flex flex-col w-full h-full pt-6 md:pt-10 px-4 md:px-8 items-center overflow-y-auto">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold text-[#0F172A] mb-8 md:mb-12 text-center" style={{ fontFamily: 'var(--font-display)'}}
      >
        Tácticas y Mitos de la Industria
      </motion.h2>
      
      <p className="text-xl md:text-2xl text-slate-500 mb-8 max-w-4xl text-center">
        Han creado una "máscara tecnológica" para enganchar a las nuevas generaciones, ocultando niveles extremos de adicción.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1200px] pb-10">
        {tactics.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="flex flex-col gap-4 bg-white/40 backdrop-blur-2xl p-8 rounded-[24px] shadow-sm border border-white/60 items-center text-center"
          >
            <div className={`w-20 h-20 rounded-full ${item.bg} flex items-center justify-center mb-2`}>
              <item.icon className={`w-10 h-10 ${item.color}`} strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">{item.title}</h3>
            <p className="text-lg text-slate-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
