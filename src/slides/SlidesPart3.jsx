import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CustomPassiveSmokeIcon = ({ className, strokeWidth }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 21.5c-4.4 0-8-3.6-8-8 0-3.3 2-6.2 5-7.4" />
    <path d="M20 13.5c0 4.4-3.6 8-8 8" />
    <path d="M16 4.5c.9.5 1.7 1.2 2.3 2" />
    <path d="M12 4v4" />
    <path d="M15 6l-2 2" />
    <path d="M9 6l2 2" />
  </svg>
);

const CustomMonitorIcon = ({ className, strokeWidth }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
    <path d="M6 10l3-3 4 4 5-5" />
  </svg>
);

const CustomProtectIcon = ({ className, strokeWidth }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const CustomOfferIcon = ({ className, strokeWidth }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="M12 10v4" />
    <path d="M10 12h4" />
  </svg>
);

const CustomWarnIcon = ({ className, strokeWidth }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const CustomEnforceIcon = ({ className, strokeWidth }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
    <line x1="6" y1="1" x2="6" y2="4" />
    <line x1="10" y1="1" x2="10" y2="4" />
    <line x1="14" y1="1" x2="14" y2="4" />
  </svg>
);

const CustomRaiseIcon = ({ className, strokeWidth }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const CustomProtocolIcon = ({ className, strokeWidth }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12h6" />
    <path d="M12 9v6" />
    <path d="M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3" />
    <path d="M15 3a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2" />
  </svg>
);

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
          src="https://www.youtube.com/embed/UrA1dZNFx9M" 
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
          <CustomPassiveSmokeIcon className="w-16 h-16 text-rose-500 mb-4" />
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
    { letter: "M", title: "Monitorizar", icon: CustomMonitorIcon },
    { letter: "P", title: "Proteger (Libre de Humo)", icon: CustomProtectIcon },
    { letter: "O", title: "Ofrecer Apoyo", icon: CustomOfferIcon },
    { letter: "W", title: "Warn (Advertir)", icon: CustomWarnIcon },
    { letter: "E", title: "Enforce (Prohibir pub.)", icon: CustomEnforceIcon },
    { letter: "R", title: "Raise (Impuestos)", icon: CustomRaiseIcon },
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

export const Slide14B = () => {
  const steps = [
    { title: "Intervención Breve (Las 5 A's)", desc: "Averiguar, Aconsejar, Analizar, Ayudar y Acordar seguimientos.", color: "bg-blue-50", border: "border-blue-200" },
    { title: "Terapia de Reemplazo (TRN)", desc: "Parches, chicles o pastillas para controlar el síndrome de abstinencia de manera progresiva.", color: "bg-emerald-50", border: "border-emerald-200" },
    { title: "Tratamiento Farmacológico", desc: "Uso de medicamentos de primera línea (ej. Vareniclina, Bupropión) bajo estricta supervisión.", color: "bg-purple-50", border: "border-purple-200" },
    { title: "Apoyo Cognitivo-Conductual", desc: "Terapia psicológica para identificar desencadenantes y manejar recaídas.", color: "bg-orange-50", border: "border-orange-200" }
  ];

  return (
    <div className="flex flex-col w-full h-full pt-10 px-8 items-center text-center justify-center pb-20 overflow-y-auto">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold text-[#0F172A] mb-6" style={{ fontFamily: 'var(--font-display)'}}
      >
        Protocolo Clínico de Cesación
      </motion.h2>

      <p className="text-xl md:text-2xl text-slate-500 mb-10 max-w-4xl">
        El estándar médico para tratar la dependencia a la nicotina combina estrategias conductuales y farmacológicas.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[1100px]">
        {steps.map((step, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: i * 0.15, type: "spring" }} 
            className={`p-6 rounded-[24px] shadow-sm border ${step.border} ${step.color} flex flex-col items-start text-left`}
          >
            <div className="flex items-center gap-4 mb-3">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-200">
                  <CustomProtocolIcon className="w-6 h-6 text-slate-700" />
               </div>
               <h3 className="text-2xl font-bold text-slate-800">{step.title}</h3>
            </div>
            <p className="text-lg text-slate-600 pl-16">{step.desc}</p>
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
          <div className="bg-white p-6 rounded-3xl mb-6 shadow-xl flex flex-col items-center gap-6">
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

export const Slide16 = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleCard = (index) => {
    setFlippedCards(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const cards = [
    { myth: "El vapeo es solo vapor de agua inofensivo.", fact: "Es un aerosol que contiene metales pesados y químicos tóxicos." },
    { myth: "Los vapes sin nicotina no causan daño.", fact: "Contienen diacetilo y químicos que causan daño pulmonar irreversible." },
    { myth: "Fumar ocasionalmente no me hará daño.", fact: "El daño a nivel ADN y cardiovascular comienza desde la primera bocanada." },
    { myth: "El humo de tercera mano es un mito.", fact: "Falso. Los residuos tóxicos permanecen en ropa, muebles y superficies afectando a niños." }
  ];

  return (
    <div className="flex flex-col w-full h-full pt-10 px-8 items-center text-center pb-20 overflow-y-auto">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: 'var(--font-display)'}}
      >
        Interactúa: Mito vs Realidad
      </motion.h2>

      <p className="text-xl md:text-2xl text-slate-500 mb-8 max-w-4xl">
        Desactiva el pincel para voltear las cartas. Usa el pincel para calificar las respuestas del público.
      </p>

      <div className="grid grid-cols-2 gap-8 w-full max-w-[1200px] pointer-events-auto">
        {cards.map((card, i) => (
          <div key={i} className="relative h-[250px] w-full [perspective:1000px] cursor-pointer" onClick={() => toggleCard(i)}>
            <motion.div 
              className="w-full h-full absolute transition-all duration-500 [transform-style:preserve-3d]"
              initial={false}
              animate={{ rotateY: flippedCards[i] ? 180 : 0 }}
            >
              {/* Front (Myth) */}
              <div className="absolute w-full h-full [backface-visibility:hidden] bg-rose-50 border-2 border-rose-200 rounded-[32px] p-8 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                <span className="text-rose-500 font-bold uppercase tracking-widest mb-4">Mito</span>
                <p className="text-2xl font-medium text-slate-800">{card.myth}</p>
                <div className="mt-6 text-rose-400 text-sm italic">Haz clic para revelar la verdad</div>
              </div>
              
              {/* Back (Fact) */}
              <div className="absolute w-full h-full [backface-visibility:hidden] bg-emerald-50 border-2 border-emerald-200 rounded-[32px] p-8 flex flex-col items-center justify-center shadow-lg [transform:rotateY(180deg)]">
                <span className="text-emerald-600 font-bold uppercase tracking-widest mb-4">Realidad</span>
                <p className="text-2xl font-medium text-slate-800">{card.fact}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
