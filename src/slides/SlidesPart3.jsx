import React from 'react';
import { motion } from 'framer-motion';
import { HeartCrack, Wind, Activity, CheckCircle, Search, ShieldCheck, HeartHandshake, FileWarning, Scale, TrendingUp } from 'lucide-react';

export const Slide11 = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full pt-6 md:pt-10 px-4 md:px-8 items-center justify-between overflow-y-auto pb-10">
      <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 md:pr-12">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-[#0F172A] leading-tight text-center md:text-left" style={{ fontFamily: 'var(--font-display)'}}
        >
          Distribución Global de Muertes
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="text-xl md:text-3xl text-slate-600 space-y-4 md:space-y-6 mt-4 md:mt-8"
        >
          <div className="flex items-center gap-4 text-purple-600"><div className="w-4 h-4 md:w-6 md:h-6 bg-purple-500 rounded-full flex-shrink-0"></div> ~40% Cardiovasculares</div>
          <div className="flex items-center gap-4 text-rose-600"><div className="w-4 h-4 md:w-6 md:h-6 bg-rose-500 rounded-full flex-shrink-0"></div> ~25% EPOC</div>
          <div className="flex items-center gap-4 text-orange-600"><div className="w-4 h-4 md:w-6 md:h-6 bg-orange-500 rounded-full flex-shrink-0"></div> ~20% Cáncer de Pulmón</div>
          <div className="flex items-center gap-4 text-slate-400"><div className="w-4 h-4 md:w-6 md:h-6 bg-slate-300 rounded-full flex-shrink-0"></div> ~15% Otras Causas</div>
        </motion.div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0 relative">
         <svg viewBox="0 0 400 400" className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] -rotate-90">
            <circle cx="200" cy="200" r="150" fill="none" stroke="#F1F5F9" strokeWidth="60" />
            
            {/* Cardiovasculares 40% */}
            <motion.circle cx="200" cy="200" r="150" fill="none" stroke="#A855F7" strokeWidth="60"
               strokeDasharray="942.47" initial={{ strokeDashoffset: 942.47 }} animate={{ strokeDashoffset: 942.47 - 376.99 }} transition={{ duration: 1, delay: 0.3 }} />
            {/* EPOC 25% */}
            <motion.circle cx="200" cy="200" r="150" fill="none" stroke="#F43F5E" strokeWidth="60"
               strokeDasharray="942.47" strokeDashoffset="942.47" style={{ rotate: '144deg', transformOrigin: '50% 50%' }}
               initial={{ strokeDashoffset: 942.47 }} animate={{ strokeDashoffset: 942.47 - 235.61 }} transition={{ duration: 1, delay: 0.8 }} />
            {/* Cancer 20% */}
            <motion.circle cx="200" cy="200" r="150" fill="none" stroke="#F97316" strokeWidth="60"
               strokeDasharray="942.47" strokeDashoffset="942.47" style={{ rotate: '234deg', transformOrigin: '50% 50%' }}
               initial={{ strokeDashoffset: 942.47 }} animate={{ strokeDashoffset: 942.47 - 188.49 }} transition={{ duration: 1, delay: 1.3 }} />
            
            <text x="200" y="200" className="text-3xl md:text-4xl font-bold fill-slate-800" transform="rotate(90 200 200)" textAnchor="middle" dominantBaseline="middle">8M+</text>
            <text x="200" y="230" className="text-sm md:text-xl font-medium fill-slate-400" transform="rotate(90 200 200)" textAnchor="middle" dominantBaseline="middle">Muertes/Año</text>
         </svg>

         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[120%] text-center bg-slate-100/80 backdrop-blur-md px-4 py-2 rounded-xl shadow-sm border border-slate-200">
           <p className="text-slate-600 font-medium text-xs md:text-sm">
             <strong className="text-slate-800">Figura 3:</strong> Gráfico de pastel (anillo) que representa la Distribución Global de Muertes atribuibles al tabaco.
           </p>
         </motion.div>
      </div>
    </div>
  );
};

export const Slide12 = () => {
  return (
    <div className="flex flex-col w-full h-full pt-10 px-8 items-center text-center pb-20 overflow-y-auto">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold text-[#0F172A] mb-8" style={{ fontFamily: 'var(--font-display)'}}
      >
        La Realidad del Daño Pulmonar
      </motion.h2>

      <p className="text-xl md:text-2xl text-slate-500 mb-8 max-w-4xl">
        Concientización sobre el impacto real y severo que tiene el tabaquismo y el vapeo en la calidad de vida.
      </p>

      {/* Contenedor del Video con efecto Glassmorphism */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[900px] aspect-video bg-slate-900 rounded-[32px] p-4 shadow-2xl relative overflow-hidden border border-slate-700"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-rose-900/40 to-slate-900/40 pointer-events-none"></div>
        
        {/* Iframe de YouTube */}
        <iframe 
          className="w-full h-full rounded-[20px] relative z-10"
          src="https://www.youtube.com/embed/tpol12kcMl0" 
          title="Video de concientización sobre Tabaquismo" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </motion.div>
    </div>
  );
};

export const Slide13 = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full pt-6 md:pt-10 px-4 md:px-8 items-center justify-center gap-8 md:gap-16 overflow-y-auto pb-10">
      <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8">
        <motion.div 
          initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}
          className="bg-white/60 backdrop-blur-xl p-8 rounded-[32px] border border-white shadow-lg"
        >
          <HeartCrack className="w-16 h-16 text-rose-500 mb-4" />
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Tabaquismo Pasivo</h2>
          <p className="text-xl text-slate-600">El "Humo de Tabaco Ajeno" causa infecciones respiratorias severas y asma en infantes, y enfermedades cardíacas en familiares no fumadores.</p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 bg-rose-600/90 backdrop-blur-2xl rounded-[40px] p-8 md:p-12 shadow-2xl border border-rose-400/50 text-white relative overflow-hidden"
      >
        <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight">Impacto Económico</h2>
        <div className="space-y-6 text-xl md:text-2xl font-medium text-rose-50">
          <p>A nivel global las pérdidas superan el billón de dólares, pero en <strong className="text-white font-bold">México:</strong></p>
          <div className="bg-white/10 p-4 rounded-2xl border border-white/20">
             <span className="text-4xl md:text-5xl font-black text-white block tracking-tight mb-2">$116 Mil Millones MXN</span>
             <p className="opacity-90 text-lg md:text-xl">Gastan anualmente las instituciones (como el IMSS) en atender enfermedades asociadas al tabaquismo.</p>
          </div>
          <p className="text-lg opacity-80 mt-4">Generando además un grave empobrecimiento en el gasto de bolsillo familiar.</p>
        </div>
      </motion.div>
    </div>
  );
};

export const Slide14 = () => {
  const mpower = [
    { letter: "M", title: "Monitorizar", icon: Search },
    { letter: "P", title: "Proteger (Libre de Humo)", icon: ShieldCheck },
    { letter: "O", title: "Ofrecer Apoyo", icon: HeartHandshake },
    { letter: "W", title: "Warn (Advertir)", icon: FileWarning },
    { letter: "E", title: "Enforce (Prohibir pub.)", icon: Scale },
    { letter: "R", title: "Raise (Impuestos)", icon: TrendingUp },
  ];

  return (
    <div className="flex flex-col w-full h-full pt-10 px-8 items-center text-center justify-center pb-20 overflow-y-auto">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold text-[#0F172A] mb-6" style={{ fontFamily: 'var(--font-display)'}}
      >
        Estrategia MPOWER y Cesación
      </motion.h2>

      <p className="text-xl md:text-2xl text-slate-500 mb-10 max-w-4xl">
        La fuerza de voluntad no siempre basta; requiere ayuda profesional médica y psicológica.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-[1100px]">
        {mpower.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} className="bg-white/40 backdrop-blur-md p-6 rounded-[24px] shadow-sm border border-white/60 flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-3"><item.icon className="w-6 h-6" /></div>
            <h3 className="text-2xl font-black text-slate-800 mb-1">{item.letter}</h3>
            <h4 className="text-sm md:text-base font-bold text-slate-600">{item.title}</h4>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const Slide15 = () => {
  return (
    <div className="flex flex-col w-full h-full bg-gradient-to-br from-[#0F172A] via-slate-900 to-[#1e1b4b] items-center justify-center text-center relative overflow-hidden text-white px-8">
      <motion.h2 
        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", bounce: 0.4 }}
        className="text-3xl md:text-6xl font-bold mb-6 relative z-10" style={{ fontFamily: 'var(--font-display)'}}
      >
        «¡No te conviertas en su cliente,<br/>conviértete en quien desenmascara su atractivo!»
      </motion.h2>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="relative z-10 flex flex-col items-center mt-12 bg-white/10 backdrop-blur-md border border-white/20 p-12 rounded-[32px]">
          <div className="bg-white p-4 rounded-2xl mb-6 shadow-xl">
             <img src={`${import.meta.env.BASE_URL}qr.png?v=2`} alt="Código QR" className="w-32 h-32 md:w-48 md:h-48 object-contain" />
         </div>
         <h3 className="text-xl md:text-3xl font-bold mb-2">Universidad IEU</h3>
         <p className="text-lg md:text-xl text-white/90 font-medium">(01) Herramientas Tecnológicas para el Profesional de la Salud</p>
         <p className="text-base md:text-lg text-white/80 mt-2">Mtra. Daniela Nazarena Hernández Fierros</p>
         <p className="text-sm md:text-lg text-rose-300 mt-4 font-bold tracking-widest uppercase">Escanea para recursos</p>
      </motion.div>
    </div>
  );
};
