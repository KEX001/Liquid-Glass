import React, { useState } from 'react';
import { Home, Compass, Library, MessageSquare, Search } from 'lucide-react';
import LiquidGlassContainer from '../core/LiquidGlassContainer';

export const BottomDock = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [prevTab, setPrevTab] = useState(0);
  const [animating, setAnimating] = useState(false);

  const tabs = [
    { label: 'Home', icon: Home },
    { label: 'Explore', icon: Compass },
    { label: 'Library', icon: Library },
    { label: 'Chat', icon: MessageSquare }
  ];

  const handleTabClick = (index) => {
    if (index === activeTab) return;
    setPrevTab(activeTab);
    setActiveTab(index);
    setAnimating(true);
    
    // Clear animation class after transition finishes (400ms)
    setTimeout(() => {
      setAnimating(false);
    }, 400);
  };

  // Determine direction to stretch active mercury bubble
  const getMorphClass = () => {
    if (!animating) return '';
    return activeTab > prevTab ? 'lg-morph-right' : 'lg-morph-left';
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-[500px]" style={{ margin: '0 auto' }}>
      <div className="flex items-center gap-3 w-full">
        {/* Main Fluid Dock Panel */}
        <LiquidGlassContainer 
          className="flex-1 h-16 rounded-[32px] flex items-center justify-around px-2 overflow-hidden"
          showHighlight={true}
        >
          <div className="flex w-full justify-around relative">
            {tabs.map((tab, idx) => {
              const Icon = tab.icon;
              const isActive = idx === activeTab;
              
              return (
                <button
                  key={tab.label}
                  onClick={() => handleTabClick(idx)}
                  className="relative flex flex-col items-center justify-center p-2 min-w-[64px] border-none bg-transparent cursor-pointer group lg-active-scale"
                  style={{
                    color: isActive ? 'var(--lg-accent)' : 'rgba(255, 255, 255, 0.4)',
                    outline: 'none',
                    transition: 'color 0.3s ease'
                  }}
                >
                  {/* Sliding Liquid Active Pill */}
                  {isActive && (
                    <div 
                      className={`absolute inset-0 rounded-[14px] lg-pill z-[-1] ${getMorphClass()}`}
                      style={{
                        backgroundColor: 'color-mix(in srgb, var(--lg-glass-tint) calc(var(--lg-opacity) * 150%), transparent)'
                      }}
                    />
                  )}
                  
                  <Icon 
                    size={20} 
                    className="transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={2.2}
                  />
                  <span className="text-[10px] font-semibold mt-1 tracking-wide uppercase opacity-80">
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </LiquidGlassContainer>

        {/* Circular Action Button */}
        <LiquidGlassContainer
          className="w-16 h-16 rounded-full flex items-center justify-center cursor-pointer lg-active-scale"
          showHighlight={true}
          style={{ flexShrink: 0 }}
        >
          <Search size={22} className="text-white opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300" strokeWidth={2.2} />
        </LiquidGlassContainer>
      </div>

      {/* Tailwind Utility Classes mappings wrapper to support standard flex/alignment utilities */}
      <style>{`
        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .flex-1 { flex: 1; }
        .items-center { align-items: center; }
        .justify-center { justify-content: center; }
        .justify-around { justify-content: space-around; }
        .gap-3 { gap: 12px; }
        .gap-6 { gap: 24px; }
        .w-full { width: 100%; }
        .max-w-\\[500px\\] { max-width: 500px; }
        .h-16 { height: 64px; }
        .rounded-\\[32px\\] { border-radius: 32px; }
        .rounded-full { border-radius: 50%; }
        .px-2 { padding-left: 8px; padding-right: 8px; }
        .overflow-hidden { overflow: hidden; }
        .relative { position: relative; }
        .absolute { position: absolute; }
        .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
        .rounded-\\[14px\\] { border-radius: 14px; }
        .z-\\[-1\\] { z-index: -1; }
        .min-w-\\[64px\\] { min-width: 64px; }
        .p-2 { padding: 8px; }
        .bg-transparent { background-color: transparent; }
        .cursor-pointer { cursor: pointer; }
        .text-\\[10px\\] { font-size: 10px; }
        .font-semibold { font-weight: 600; }
        .mt-1 { margin-top: 4px; }
        .tracking-wide { letter-spacing: 0.025em; }
        .uppercase { text-transform: uppercase; }
        .opacity-80 { opacity: 0.8; }
        .opacity-60 { opacity: 0.6; }
        .hover\\:opacity-100:hover { opacity: 1; }
        .hover\\:scale-110:hover { transform: scale(1.1); }
        .transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
        .duration-300 { transition-duration: 300ms; }
      `}</style>
    </div>
  );
};

export default BottomDock;
