import React from 'react';
import { motion } from 'framer-motion';

const CustomFlameIcon = ({ className, strokeWidth }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
  </svg>
);

const CustomVapeWindIcon = ({ className, strokeWidth }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12.8 19.6A2 2 0 1 0 14 16H2" />
    <path d="M17.5 8a2.5 2.5 0 1 0 2-4H2" />
    <path d="M9.8 4.4A2 2 0 1 1 11 8H2" />
    <path d="M19.5 16a2.5 2.5 0 1 1-2 4H2" />
  </svg>
);

const CustomHeartbeatIcon = ({ className, strokeWidth }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

const CustomDNAMutationIcon = ({ className, strokeWidth }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 15c6.667-6 13.333 0 20-6" />
    <path d="M9 22c1.798-1.579 2.791-3.328 3.25-5" />
    <path d="M11.75 7c.459-1.672 1.452-3.421 3.25-5" />
    <line x1="8" y1="12" x2="16" y2="12" />
    <line x1="5" y1="18" x2="7" y2="15.5" />
    <line x1="17" y1="8.5" x2="19" y2="6" />
    <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
  </svg>
);

export const Slide06 = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full pt-6 md:pt-10 px-4 md:px-8 items-center overflow-y-auto">
      <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 md:pr-12">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-[#0F172A] leading-tight text-center md:text-left" style={{ fontFamily: 'var(--font-display)'}}
        >
          Niveles Extremos de Nicotina
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="text-xl md:text-3xl text-slate-600 space-y-4 md:space-y-8 leading-relaxed font-light text-center md:text-left"
        >
          <p>
            Los E-cigarettes de nueva generación usan <strong>"sales de nicotina"</strong>, lo que permite inhalar concentraciones masivas sin irritar la garganta.
          </p>
          <p>
            Un solo pod desechable contiene la misma cantidad de nicotina que <strong className="text-[#E11D48]">2 a 3 CAJETILLAS completas</strong>.
          </p>
          <p className="font-bold text-2xl md:text-4xl text-slate-800 mt-4">= 40 a 60 cigarrillos.</p>
        </motion.div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center relative mt-8 md:mt-0 pb-10">
        <div className="flex items-end gap-12 h-[400px] md:h-[500px]">
           <div className="w-24 md:w-32 h-[300px] md:h-[400px] bg-slate-800 rounded-3xl relative overflow-hidden flex flex-col justify-end shadow-2xl">
              <motion.div 
                initial={{ height: "0%" }} animate={{ height: "100%" }} transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                className="w-full bg-[#E11D48] relative"
              ><div className="absolute inset-0 bg-white/20"></div></motion.div>
           </div>
           
           <span className="text-4xl md:text-6xl font-bold text-slate-400 mb-10">=</span>

           <div className="flex flex-col-reverse items-center gap-1 md:gap-2 mb-10">
              {[...Array(6)].map((_, row) => (
                <div key={row} className="flex gap-1 md:gap-2">
                  {[...Array(6 - row)].map((_, col) => (
                    <motion.div 
                      key={col} 
                      initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1 + (row * 0.1) + (col * 0.05) }}
                      className="w-3 h-12 md:w-6 md:h-24 bg-amber-100 border border-amber-200 rounded-sm relative"
                    >
                      <div className="absolute top-0 w-full h-4 md:h-6 bg-amber-600"></div>
                    </motion.div>
                  ))}
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export const Slide07 = () => {
  const substances = [
    { title: "Monóxido de Carbono (CO)", desc: "Asfixia los tejidos.", type: "cigarro", color: "bg-slate-100", border: "border-slate-300" },
    { title: "Alquitrán", desc: "Resina causante de cáncer.", type: "cigarro", color: "bg-slate-200", border: "border-slate-400" },
    { title: "Diacetilo", desc: "Causa 'Pulmón de Palomitas'.", type: "vape", color: "bg-cyan-50", border: "border-cyan-300" },
    { title: "Metales Pesados", desc: "Plomo y Níquel a los pulmones.", type: "vape", color: "bg-blue-50", border: "border-blue-300" },
    { title: "Formaldehído", desc: "Químico para embalsamar.", type: "vape", color: "bg-fuchsia-50", border: "border-fuchsia-300" }
  ];

  return (
    <div className="flex flex-col w-full h-full pt-10 px-8 items-center text-center pb-20 overflow-y-auto">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold text-[#0F172A] mb-8" style={{ fontFamily: 'var(--font-display)'}}
      >
        Anatomía de los Químicos
      </motion.h2>

      <p className="text-xl md:text-2xl text-slate-500 mb-10 max-w-4xl">
        Ninguno es inofensivo. El cigarro funciona por combustión, el vapeador degrada químicos industriales térmicamente.
      </p>

      <div className="flex flex-wrap justify-center gap-6 w-full max-w-[1200px]">
        {substances.map((sub, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.15, type: "spring" }}
            className={`flex flex-col text-left p-6 md:p-8 rounded-[24px] border ${sub.border} ${sub.color} shadow-lg w-full md:w-[calc(33%-1rem)]`}
          >
            <div className="flex items-center gap-3 mb-4">
               {sub.type === 'cigarro' ? <CustomFlameIcon className="w-6 h-6 text-slate-700" /> : <CustomVapeWindIcon className="w-6 h-6 text-cyan-600" />}
               <span className={`text-sm font-bold uppercase tracking-widest ${sub.type === 'cigarro' ? 'text-slate-500' : 'text-cyan-600'}`}>
                 {sub.type === 'cigarro' ? 'Combustión' : 'Aerosol Térmico'}
               </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">{sub.title}</h3>
            <p className="text-base md:text-lg text-slate-600">{sub.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const Slide08 = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full pt-6 md:pt-10 px-4 md:px-8 items-center justify-between overflow-y-auto">
      <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 md:pr-12">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-[#0F172A] leading-tight text-center md:text-left" style={{ fontFamily: 'var(--font-display)'}}
        >
          EVALI y Daño Sistémico
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="text-lg md:text-2xl text-slate-600 space-y-4 md:space-y-6 leading-relaxed"
        >
          <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700 text-white p-6 rounded-[24px] mb-6 shadow-2xl">
            <span className="font-mono text-rose-400 font-bold block mb-2">E V A L I :</span>
            <span className="block mb-2 font-medium">Lesión Pulmonar Aguda Asociada al Vapeo (Neumonía lipoidea).</span>
          </div>
          <div className="flex flex-col gap-4">
             <div className="flex items-start gap-4">
               <CustomHeartbeatIcon className="w-8 h-8 text-rose-500 flex-shrink-0" />
               <div><strong className="text-slate-800 block">Cardiovascular:</strong> Disfunción endotelial, rigidez arterial e infartos prematuros.</div>
             </div>
             <div className="flex items-start gap-4">
               <CustomDNAMutationIcon className="w-8 h-8 text-purple-500 flex-shrink-0" />
               <div><strong className="text-slate-800 block">ADN / Oncológico:</strong> Inhibe la apoptosis celular, propiciando mutaciones a largo plazo.</div>
             </div>
          </div>
        </motion.div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center relative mt-8 md:mt-0 pb-10">
         <div className="w-full md:w-[500px] h-[400px] md:h-[500px] bg-slate-900 rounded-[40px] p-6 shadow-2xl relative overflow-hidden flex flex-col items-center">
            <h3 className="text-slate-400 font-mono tracking-widest uppercase mb-4">Radiografía de Tórax</h3>
            <div className="flex-1 w-full relative flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="w-full h-full opacity-60 mix-blend-screen">
                <path d="M50,150 C30,100 50,50 80,50 C90,50 95,70 100,100 C105,70 110,50 120,50 C150,50 170,100 150,150 C130,180 105,180 100,150 C95,180 70,180 50,150 Z" fill="none" stroke="white" strokeWidth="4" />
                <path d="M100,20 L100,100" stroke="white" strokeWidth="6" />
                <motion.circle cx="70" cy="120" r="20" fill="#E11D48" className="mix-blend-screen" animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                <motion.circle cx="130" cy="110" r="15" fill="#E11D48" className="mix-blend-screen" animate={{ opacity: [0.2, 0.7, 0.2], scale: [1, 1.1, 1] }} transition={{ duration: 2.5, repeat: Infinity }} />
              </svg>
            </div>
            <div className="w-full flex items-center justify-center gap-2 mt-4 text-rose-500 font-bold bg-rose-500/10 py-2 rounded-lg border border-rose-500/20">
              <CustomHeartbeatIcon className="w-6 h-6 animate-pulse" />
              <span>Opacidades Bilaterales Detectadas</span>
            </div>
         </div>
      </div>
    </div>
  );
};

export const Slide09 = () => {
  return (
    <div className="flex flex-col w-full h-full pt-6 md:pt-10 px-4 md:px-8 items-center text-center overflow-y-auto pb-10">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold text-[#0F172A] mb-8 md:mb-12" style={{ fontFamily: 'var(--font-display)'}}
      >
        Distribución por Edad
      </motion.h2>

      <div className="w-full max-w-[1200px] h-[450px] relative">
         <svg viewBox="0 0 1000 400" className="w-full h-full overflow-visible">
            <line x1="100" y1="350" x2="900" y2="350" stroke="#CBD5E1" strokeWidth="2" />
            <line x1="100" y1="50" x2="100" y2="350" stroke="#CBD5E1" strokeWidth="2" />
            
            <text x="200" y="380" className="text-xl fill-slate-500 font-medium">12-15</text>
            <text x="400" y="380" className="text-xl fill-slate-500 font-medium">18-24</text>
            <text x="600" y="380" className="text-xl fill-slate-500 font-medium">25-44</text>
            <text x="800" y="380" className="text-xl fill-slate-500 font-medium">45-65+</text>

            <motion.path 
               d="M100,350 Q200,300 200,200 C300,50 400,50 500,150 C600,250 800,320 900,340"
               fill="none" stroke="#3B82F6" strokeWidth="8" strokeLinecap="round"
               initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeOut" }}
            />

            <motion.circle cx="200" cy="200" r="10" fill="#E11D48" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} />
            <motion.circle cx="200" cy="200" r="25" fill="none" stroke="#E11D48" strokeWidth="4"
               initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: [0, 1, 0], scale: [0.5, 2, 2] }}
               transition={{ delay: 1.2, duration: 1.5, repeat: Infinity }}
            />
            
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
               <rect x="180" y="80" width="400" height="100" rx="16" fill="white" stroke="#E2E8F0" filter="url(#shadow)" />
               <text x="200" y="120" className="text-xl font-bold fill-rose-600">Edad Crítica (12-15 años)</text>
               <text x="200" y="150" className="text-lg fill-slate-500">Edad de inicio del consumo a nivel global</text>
            </motion.g>
            <defs>
              <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%"><feDropShadow dx="0" dy="10" stdDeviation="15" floodOpacity="0.05" /></filter>
            </defs>
         </svg>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="mt-6 bg-slate-100 px-6 py-3 rounded-full border border-slate-200">
        <p className="text-slate-600 font-medium text-sm md:text-lg">
          <strong className="text-slate-800">Figura 1:</strong> Gráfico de líneas que representa la Distribución por Edad de inicio del consumo.
        </p>
      </motion.div>
    </div>
  );
};

export const Slide10 = () => {
  return (
    <div className="flex flex-col w-full h-full pt-6 md:pt-10 px-4 md:px-8 items-center text-center overflow-y-auto pb-10">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: 'var(--font-display)'}}
      >
        Prevalencia por Región (OMS)
      </motion.h2>

      <p className="text-xl md:text-2xl text-slate-500 mb-8 max-w-4xl">
        Aunque Europa lidera los porcentajes actuales, la industria tabacalera enfoca agresivamente sus esfuerzos de crecimiento en el continente africano.
      </p>

      <div className="w-full max-w-[1000px] h-[400px] md:h-[480px] relative mt-8 flex flex-col justify-end pb-24 border-b-4 border-slate-200">
         <div className="absolute inset-0 flex flex-col justify-between pb-24 z-0 opacity-20 pointer-events-none">
            <div className="w-full h-px bg-slate-400"></div><div className="w-full h-px bg-slate-400"></div><div className="w-full h-px bg-slate-400"></div>
         </div>

         <div className="flex justify-center items-end gap-10 md:gap-20 w-full z-10">
            {/* Europa */}
            <div className="flex flex-col items-center">
               <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white/80 px-4 py-2 rounded-xl mb-4 shadow-sm border border-rose-100">
                 <span className="text-2xl md:text-4xl font-black text-rose-600">25.3%</span>
               </motion.div>
               <motion.div initial={{ height: 0 }} animate={{ height: 300 }} transition={{ duration: 1, type: "spring" }} className="w-24 md:w-40 bg-gradient-to-t from-rose-600 to-rose-400 rounded-t-[32px]"></motion.div>
               <h4 className="text-2xl md:text-3xl font-bold text-slate-800 mt-4 absolute -bottom-10">Europa</h4>
               <span className="absolute -bottom-16 bg-rose-50 text-rose-600 text-xs md:text-sm font-bold px-3 py-1 rounded-full border border-rose-200 whitespace-nowrap">Mayor Prevalencia</span>
            </div>
            
            {/* Pacífico */}
            <div className="flex flex-col items-center">
               <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white/80 px-4 py-2 rounded-xl mb-4 shadow-sm border border-orange-100">
                 <span className="text-2xl md:text-4xl font-black text-orange-500">24.6%</span>
               </motion.div>
               <motion.div initial={{ height: 0 }} animate={{ height: 280 }} transition={{ duration: 1, delay: 0.2, type: "spring" }} className="w-24 md:w-40 bg-gradient-to-t from-orange-500 to-orange-300 rounded-t-[32px]"></motion.div>
               <h4 className="text-2xl md:text-3xl font-bold text-slate-800 mt-4 absolute -bottom-10">Pacífico</h4>
               <span className="absolute -bottom-16 bg-orange-50 text-orange-600 text-xs md:text-sm font-bold px-3 py-1 rounded-full border border-orange-200 whitespace-nowrap">Principal Consumidor Masc.</span>
            </div>
            
            {/* África */}
            <div className="flex flex-col items-center relative">
               <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-white/90 px-6 py-2 rounded-xl mb-4 shadow-xl border-2 border-blue-500 relative">
                 <span className="text-2xl md:text-4xl font-black text-blue-600">Alerta</span>
                 <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1.5 }} className="absolute -top-2 -right-2 w-4 h-4 bg-rose-500 rounded-full border-2 border-white"></motion.div>
               </motion.div>
               <motion.div initial={{ height: 0 }} animate={{ height: 180 }} transition={{ duration: 1, delay: 0.4, type: "spring" }} className="w-24 md:w-40 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-[32px]"></motion.div>
               <h4 className="text-2xl md:text-3xl font-bold text-slate-800 mt-4 absolute -bottom-10">África</h4>
               <span className="absolute -bottom-16 bg-blue-50 text-blue-600 text-xs md:text-sm font-bold px-3 py-1 rounded-full border border-blue-200 whitespace-nowrap">Nuevo Blanco (↑)</span>
            </div>
         </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-20 bg-slate-100 px-6 py-3 rounded-full border border-slate-200">
        <p className="text-slate-600 font-medium text-sm md:text-lg">
          <strong className="text-slate-800">Figura 2:</strong> Gráfico representativo de la Prevalencia de Consumo de Tabaco (OMS).
        </p>
      </motion.div>
    </div>
  );
};
