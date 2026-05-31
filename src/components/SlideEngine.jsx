import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SlideEngine = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scale, setScale] = useState(1);
  const [isPortrait, setIsPortrait] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [activeTool, setActiveTool] = useState('none'); // 'none', 'brush', 'eraser'
  
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const isDrawing = useRef(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    checkIsDesktop();
    
    const handleResize = () => {
      checkIsDesktop();
      const BASE_WIDTH = 1920;
      const BASE_HEIGHT = 1080;
      const portrait = window.innerHeight > window.innerWidth;
      setIsPortrait(portrait);
      
      const scaleX = portrait ? (window.innerHeight / BASE_WIDTH) : (window.innerWidth / BASE_WIDTH);
      const scaleY = portrait ? (window.innerWidth / BASE_HEIGHT) : (window.innerHeight / BASE_HEIGHT);
      setScale(Math.min(scaleX, scaleY));
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isDesktop && canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = 1920;
      canvas.height = 1080;
      const ctx = canvas.getContext('2d');
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctxRef.current = ctx;
    }
  }, [isDesktop]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        setCurrentSlide((prev) => prev === slides.length - 1 ? 0 : prev + 1);
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => prev === 0 ? slides.length - 1 : prev - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length]);

  const startDrawing = (e) => {
    if (!isDesktop || activeTool === 'none' || !ctxRef.current) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / scale;
    const y = (e.clientY - rect.top) / scale;
    
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(x, y);
    isDrawing.current = true;
  };

  const draw = (e) => {
    if (!isDrawing.current || activeTool === 'none' || !ctxRef.current) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / scale;
    const y = (e.clientY - rect.top) / scale;
    
    ctxRef.current.lineTo(x, y);
    
    if (activeTool === 'brush') {
      ctxRef.current.globalCompositeOperation = 'source-over';
      ctxRef.current.strokeStyle = '#ef4444'; // Delicate rose-500
      ctxRef.current.lineWidth = 4;
    } else if (activeTool === 'eraser') {
      ctxRef.current.globalCompositeOperation = 'destination-out';
      ctxRef.current.lineWidth = 40; // Wider eraser
    }
    
    ctxRef.current.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing.current || !ctxRef.current) return;
    ctxRef.current.closePath();
    isDrawing.current = false;
  };

  const clearCanvas = () => {
    if (!ctxRef.current || !canvasRef.current) return;
    ctxRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  const slideVariants = {
    initial: { opacity: 0, scale: 0.96, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 1.04, y: -20 }
  };

  const FallbackSlide = () => <div className="text-4xl text-slate-400">Diapositiva en Construcción</div>;
  const CurrentSlideComponent = slides[currentSlide] || FallbackSlide;

  return (
    <div 
      className="fixed inset-0 overflow-hidden bg-slate-900 select-none flex items-center justify-center"
      onPointerDown={activeTool !== 'none' ? startDrawing : undefined}
      onPointerMove={activeTool !== 'none' ? draw : undefined}
      onPointerUp={activeTool !== 'none' ? stopDrawing : undefined}
      onPointerCancel={activeTool !== 'none' ? stopDrawing : undefined}
    >
      {/* Explicitly Sized Layout Wrapper */}
      <div 
        style={{
          width: isPortrait ? `${1080 * scale}px` : `${1920 * scale}px`,
          height: isPortrait ? `${1920 * scale}px` : `${1080 * scale}px`,
          position: 'relative'
        }}
      >
        <div 
          ref={containerRef}
          style={{
            position: 'absolute',
            top: 0,
            left: isPortrait ? `${1080 * scale}px` : 0,
            width: '1920px',
            height: '1080px',
            transform: `scale(${scale}) ${isPortrait ? 'rotate(90deg)' : ''}`,
            transformOrigin: 'top left',
            flexShrink: 0
          }}
          className="bg-slate-50 shadow-2xl overflow-hidden flex flex-col"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-slate-50 to-rose-50/30 pointer-events-none"></div>
          
          {/* Decorative Orbs */}
          <motion.div animate={{ x: [0, 50, 0], y: [0, 30, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full bg-blue-400/20 blur-[120px] pointer-events-none"></motion.div>
          <motion.div animate={{ x: [0, -30, 0], y: [0, 50, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }} className="absolute bottom-[-10%] left-[-10%] w-[1000px] h-[1000px] rounded-full bg-purple-400/20 blur-[150px] pointer-events-none"></motion.div>

          <div className="w-full h-full flex flex-col relative z-10">
            {/* Top Banner Global */}
            <div className="w-full h-[90px] bg-white/40 backdrop-blur-2xl border-b border-white/60 flex items-center px-16 z-50 shadow-[0_4px_30px_rgba(0,0,0,0.03)] flex-shrink-0">
              <h1 className="text-slate-800 text-3xl font-black tracking-tight" style={{ fontFamily: 'var(--font-display)'}}>
                <span className="text-blue-700">Iniciativa Global de Salud</span> <span className="font-light opacity-30 mx-4">|</span> Día Mundial Sin Tabaco 2026
              </h1>
              <div className="ml-auto text-slate-500 font-medium text-xl tracking-wide">
                «Desenmascaremos su atractivo»
              </div>
            </div>
            
            {/* Main Slide Content Area */}
            <div className={`flex-1 w-full relative ${activeTool !== 'none' ? 'pointer-events-none' : 'pointer-events-auto'}`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  variants={slideVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full absolute top-0 left-0 p-8 md:p-16 pb-32 overflow-y-auto overflow-x-hidden pointer-events-auto scroll-smooth"
                >
                  <CurrentSlideComponent />
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Footer Progress */}
            <div className="absolute bottom-8 left-16 right-16 flex justify-between items-center z-50 pointer-events-none">
              <span className="text-slate-400 font-medium text-xl tracking-wide translate-y-[2px]">Directrices de la Organización Mundial de la Salud</span>
              <span className="text-slate-500 font-bold bg-white/70 backdrop-blur-xl px-8 py-3 rounded-full text-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-white/50">
                {currentSlide + 1} / {slides.length}
              </span>
            </div>
          </div>

          {/* Canvas for Drawing */}
          {isDesktop && (
            <canvas 
              ref={canvasRef}
              className={`absolute inset-0 z-40 ${activeTool !== 'none' ? 'pointer-events-auto' : 'pointer-events-none'}`}
            />
          )}

          {/* Drawing Toolbar */}
          {isDesktop && (
            <div className="absolute top-32 right-8 z-50 flex flex-col gap-2 bg-white/80 backdrop-blur-md p-2 rounded-2xl shadow-lg border border-slate-200">
              <button 
                onClick={() => setActiveTool(activeTool === 'brush' ? 'none' : 'brush')}
                className={`p-3 rounded-xl transition-all ${activeTool === 'brush' ? 'bg-rose-500 text-white shadow-md' : 'bg-transparent text-slate-600 hover:bg-slate-100'}`}
                title="Pincel"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"/><path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"/></svg>
              </button>
              <button 
                onClick={() => setActiveTool(activeTool === 'eraser' ? 'none' : 'eraser')}
                className={`p-3 rounded-xl transition-all ${activeTool === 'eraser' ? 'bg-blue-500 text-white shadow-md' : 'bg-transparent text-slate-600 hover:bg-slate-100'}`}
                title="Borrador"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
              </button>
              <button 
                onClick={clearCanvas}
                className="p-3 rounded-xl bg-transparent text-slate-600 hover:bg-slate-100 transition-all mt-2 border-t border-slate-200"
                title="Limpiar pantalla"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
