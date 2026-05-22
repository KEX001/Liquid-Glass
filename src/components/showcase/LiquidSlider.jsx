import React, { useState } from 'react';
import { Sun, Moon, Sparkles } from 'lucide-react';
import LiquidGlassContainer from '../core/LiquidGlassContainer';

export const LiquidSlider = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  const [prevOption, setPrevOption] = useState(0);
  const [animating, setAnimating] = useState(false);

  const options = [
    { label: 'Light', icon: Sun, color: '#f3f4f6', tint: 'rgba(255, 255, 255, 0.45)', text: '#111827' },
    { label: 'Dark', icon: Moon, color: '#111827', tint: 'rgba(0, 0, 0, 0.35)', text: '#f9fafb' },
    { label: 'Indigo', icon: Sparkles, color: '#1e1b4b', tint: 'rgba(99, 102, 241, 0.25)', text: '#e0e7ff' }
  ];

  const handleSelect = (idx) => {
    if (idx === selectedOption) return;
    setPrevOption(selectedOption);
    setSelectedOption(idx);
    setAnimating(true);
    
    setTimeout(() => {
      setAnimating(false);
    }, 400);
  };

  // Compute animation stretching classes based on direction
  const getMorphClass = () => {
    if (!animating) return '';
    return selectedOption > prevOption ? 'lg-morph-right' : 'lg-morph-left';
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-[380px]" style={{ margin: '0 auto' }}>
      
      {/* Outer slider panel */}
      <LiquidGlassContainer 
        className="w-full h-16 rounded-[20px] flex items-center p-1.5 relative overflow-hidden"
        showHighlight={true}
      >
        <div className="flex w-full h-full justify-between items-center relative">
          
          {/* Morphing Sliding Backdoor Active Pill */}
          <div 
            className={`absolute h-full rounded-[14px] lg-pill z-[1] ${getMorphClass()}`}
            style={{
              width: 'calc(33.333% - 4px)',
              left: `calc(${selectedOption * 33.333}% + 2px)`,
              backgroundColor: 'color-mix(in srgb, var(--lg-glass-tint) calc(var(--lg-opacity) * 160%), transparent)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 4px 10px rgba(0,0,0,0.25)',
              transition: 'left 0.4s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.4s, box-shadow 0.4s'
            }}
          />

          {options.map((opt, idx) => {
            const Icon = opt.icon;
            const isSelected = idx === selectedOption;
            
            return (
              <button
                key={opt.label}
                onClick={() => handleSelect(idx)}
                className="w-[33.333%] h-full relative z-10 flex items-center justify-center gap-2 border-none bg-transparent cursor-pointer text-sm font-semibold lg-active-scale"
                style={{
                  color: isSelected ? 'var(--lg-accent)' : 'rgba(255, 255, 255, 0.5)',
                  transition: 'color 0.3s ease',
                  outline: 'none'
                }}
              >
                <Icon size={15} strokeWidth={2.2} />
                <span>{opt.label}</span>
              </button>
            );
          })}
        </div>
      </LiquidGlassContainer>

      {/* Adaptive Mini Sandbox Preview Window */}
      <div 
        className="w-full h-24 rounded-2xl flex items-center justify-center p-4 border border-white/5 relative overflow-hidden transition-all duration-500"
        style={{
          backgroundColor: options[selectedOption].color,
          boxShadow: '0 8px 30px rgba(0,0,0,0.3)'
        }}
      >
        <div className="absolute inset-0 bg-grid opacity-15" />
        
        {/* Inside Glass Card demonstrating context integration */}
        <LiquidGlassContainer 
          className="px-5 py-2.5 rounded-xl text-center"
          showHighlight={true}
        >
          <span 
            className="text-xs font-semibold tracking-wide"
            style={{ color: options[selectedOption].text }}
          >
            {options[selectedOption].label} Theme Active
          </span>
        </LiquidGlassContainer>
      </div>

      <style>{`
        .bg-grid {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
          background-size: 15px 15px;
          background-position: center;
        }
      `}</style>
    </div>
  );
};

export default LiquidSlider;
