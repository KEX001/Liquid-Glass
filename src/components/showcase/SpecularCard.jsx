import React, { useRef, useState } from 'react';
import { Shield, Sparkles, Cpu } from 'lucide-react';
import LiquidGlassContainer from '../core/LiquidGlassContainer';

export const SpecularCard = () => {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);
    setCoordinates({ x, y });

    // Compute 3D rotation angles based on cursor offset from card center
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((centerY - y) / centerY) * 10; // Max 10 deg
    const rotateY = ((x - centerX) / centerX) * 10; // Max 10 deg
    
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div 
      className="w-full max-w-[380px] perspective-container select-none"
      style={{ margin: '0 auto', perspective: '1000px' }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: 'transform 0.15s ease-out, box-shadow 0.3s ease',
          transformStyle: 'preserve-3d'
        }}
      >
        <LiquidGlassContainer
          className="w-full h-[260px] rounded-[28px] p-6 flex flex-col justify-between"
          showHighlight={true}
          enableSpecularHover={true}
        >
          {/* Card Top Block */}
          <div className="flex items-start justify-between w-full" style={{ transform: 'translateZ(20px)' }}>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase">
                Interactive Specular
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight mt-0.5">
                3D Aero Shine
              </h3>
            </div>
            
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <Sparkles size={18} className="text-white/60 animate-pulse" />
            </div>
          </div>

          {/* Microchips layout graphics in middle */}
          <div className="flex items-center gap-3 w-full" style={{ transform: 'translateZ(10px)' }}>
            <Cpu size={24} className="text-white/30" />
            <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 to-transparent" />
          </div>

          {/* Card Bottom Block */}
          <div className="flex flex-col gap-3 w-full" style={{ transform: 'translateZ(15px)' }}>
            <p className="text-xs text-white/50 leading-relaxed font-normal">
              Move your mouse across this card. A high-fidelity specular light flare tracks your cursor while the card tilts in 3D space.
            </p>

            <div className="flex items-center justify-between w-full pt-1">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-white/60">
                <Shield size={13} className="text-white/55" />
                <span>Aero Glass Enabled</span>
              </div>
              
              {/* Dynamic Coordinate Badge */}
              <div className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-[9px] font-mono text-white/40 tracking-wider">
                X: {coordinates.x}px | Y: {coordinates.y}px
              </div>
            </div>
          </div>
        </LiquidGlassContainer>
      </div>
      
      <style>{`
        .text-xl { font-size: 20px; }
        .tracking-tight { letter-spacing: -0.025em; }
        .leading-relaxed { line-height: 1.625; }
        .bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
        .from-white\\/10 { --tw-gradient-from: rgba(255, 255, 255, 0.1) var(--tw-gradient-from-position); --tw-gradient-to: rgba(255, 255, 255, 0) var(--tw-gradient-to-position); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
        .to-transparent { --tw-gradient-to: transparent var(--tw-gradient-to-position); }
      `}</style>
    </div>
  );
};

export default SpecularCard;
