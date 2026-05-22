import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, X, Volume2 } from 'lucide-react';
import LiquidGlassContainer from '../core/LiquidGlassContainer';

export const MiniPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(45);
  const [volume, setVolume] = useState(80);
  const [isVisible, setIsVisible] = useState(true);
  const [time, setTime] = useState(72); // in seconds, starting at 1:12

  // Simulate progress bar movement when playing
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 0.5;
        });
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins}:${remainder < 10 ? '0' : ''}${remainder}`;
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleReset = () => {
    setIsVisible(true);
  };

  if (!isVisible) {
    return (
      <div className="w-full max-w-[500px] h-[136px] flex items-center justify-center select-none" style={{ margin: '0 auto' }}>
        <LiquidGlassContainer 
          className="w-full h-full rounded-[22px] flex items-center justify-center p-6"
          showHighlight={true}
        >
          <button 
            onClick={handleReset}
            className="px-6 py-3 rounded-2xl lg-pill text-xs font-bold text-white cursor-pointer lg-active-scale uppercase tracking-wider border-none bg-transparent outline-none"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--lg-glass-tint) calc(var(--lg-opacity) * 150%), transparent)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 4px 10px rgba(0,0,0,0.25)'
            }}
          >
            Restore Music Player
          </button>
        </LiquidGlassContainer>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 w-full max-w-[500px] select-none" style={{ margin: '0 auto' }}>
      <div className="flex items-center gap-3 w-full">
        {/* Main Player Glass Container */}
        <LiquidGlassContainer 
          className="flex-1 h-[76px] rounded-[22px] flex flex-col justify-between overflow-hidden p-3"
          showHighlight={true}
        >
          <div className="flex items-center justify-between w-full">
            {/* Album Art & Title Details */}
            <div className="flex items-center gap-3 min-w-0">
              <div 
                className="w-11 h-11 rounded-[10px] flex-shrink-0 flex items-center justify-center relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #8a2387, #e94057, #f27121)',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)'
                }}
              >
                {/* Micro record-disk rotating animation */}
                <div 
                  className={`w-6 h-6 rounded-full border border-white/20 flex items-center justify-center ${isPlaying ? 'animate-spin' : ''}`}
                  style={{ animationDuration: '4s' }}
                >
                  <div className="w-2 h-2 rounded-full bg-black/60" />
                </div>
              </div>

              <div className="flex flex-col min-w-0">
                <span className="text-sm font-semibold text-white truncate tracking-wide">
                  Synthetic Waves
                </span>
                <div className="flex items-center gap-2 mt-0.5">
                  {/* Equalizer animation */}
                  <div className={`lg-eq-container ${isPlaying ? 'playing' : ''}`}>
                    <div className="lg-eq-bar lg-eq-bar-1" />
                    <div className="lg-eq-bar lg-eq-bar-2" />
                    <div className="lg-eq-bar lg-eq-bar-3" />
                  </div>
                  <span className="text-[11px] text-white/50 truncate">
                    Neon Rhythm
                  </span>
                </div>
              </div>
            </div>

            {/* Media Action Button Controls */}
            <div className="flex items-center gap-1">
              <button className="p-2 bg-transparent border-none text-white/40 hover:text-white/90 cursor-pointer lg-active-scale">
                <SkipBack size={16} fill="currentColor" />
              </button>
              
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-10 h-10 rounded-full flex items-center justify-center lg-pill text-white cursor-pointer lg-active-scale"
                style={{
                  backgroundColor: 'color-mix(in srgb, var(--lg-glass-tint) calc(var(--lg-opacity) * 150%), transparent)'
                }}
              >
                {isPlaying ? (
                  <Pause size={16} fill="currentColor" />
                ) : (
                  <Play size={16} fill="currentColor" className="ml-0.5" />
                )}
              </button>

              <button className="p-2 bg-transparent border-none text-white/40 hover:text-white/90 cursor-pointer lg-active-scale">
                <SkipForward size={16} fill="currentColor" />
              </button>
            </div>
          </div>

          {/* Interactive Specular Glassy Progress Bar */}
          <div className="w-full flex items-center justify-between gap-3 px-1">
            <span className="text-[9px] font-mono text-white/40">{formatTime(time)}</span>
            <div className="flex-1 relative h-6 flex items-center group">
              <input
                type="range"
                min="0"
                max="100"
                step="0.1"
                value={progress}
                onChange={(e) => {
                  setProgress(parseFloat(e.target.value));
                  setTime(Math.round((parseFloat(e.target.value) / 100) * 160));
                }}
                className="w-full absolute inset-0 cursor-pointer h-full z-10 opacity-0"
              />
              
              {/* Progress Slider Track (Frosted mirror style) */}
              <div className="w-full h-[3px] bg-white/5 rounded-full overflow-hidden relative">
                {/* Active slider highlight */}
                <div 
                  className="h-full rounded-full transition-all duration-100 relative"
                  style={{
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, color-mix(in srgb, var(--lg-accent) 50%, transparent), var(--lg-accent))',
                    boxShadow: '0 0 8px var(--lg-accent-glow)'
                  }}
                />
              </div>

              {/* Dynamic Specular Slide Thumb */}
              <div 
                className="absolute top-1/2 w-3 h-3 rounded-full bg-white z-20 pointer-events-none lg-active-scale group-hover:scale-125"
                style={{
                  left: `calc(${progress}% - 6px)`,
                  transform: 'translateY(-50%)',
                  boxShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 2px 4px rgba(0, 0, 0, 0.4)'
                }}
              >
                {/* Inner shine reflective layers */}
                <div className="lg-slider-thumb-filter" />
                <div className="lg-slider-thumb-specular" />
              </div>
            </div>
            <span className="text-[9px] font-mono text-white/40">2:40</span>
          </div>
        </LiquidGlassContainer>

        {/* Close Button Panel */}
        <button 
          onClick={handleClose}
          className="w-14 h-[76px] rounded-[22px] flex items-center justify-center cursor-pointer border-none bg-transparent lg-active-scale p-0"
        >
          <LiquidGlassContainer className="w-full h-full rounded-[22px] flex items-center justify-center">
            <X size={20} className="text-white/30 hover:text-white/80 transition-colors" strokeWidth={2.2} />
          </LiquidGlassContainer>
        </button>
      </div>

      {/* Extra volume controller inside sub-shelf */}
      <LiquidGlassContainer 
        className="w-full h-11 rounded-[16px] flex items-center justify-between px-4 py-2"
        showHighlight={true}
      >
        <div className="flex items-center gap-2 text-white/50">
          <Volume2 size={15} />
        </div>
        <div className="flex-1 max-w-[280px] relative h-6 flex items-center group ml-3">
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(parseInt(e.target.value))}
            className="w-full absolute inset-0 cursor-pointer h-full z-10 opacity-0"
          />
          <div className="w-full h-[3px] bg-white/5 rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full transition-all duration-100"
              style={{
                width: `${volume}%`,
                background: 'rgba(255, 255, 255, 0.3)'
              }}
            />
          </div>
          <div 
            className="absolute top-1/2 w-2.5 h-2.5 rounded-full bg-white/85 z-20 pointer-events-none group-hover:scale-125"
            style={{
              left: `calc(${volume}% - 5px)`,
              transform: 'translateY(-50%)'
            }}
          />
        </div>
        <span className="text-[10px] font-semibold text-white/40 tracking-wider w-8 text-right font-mono">
          {volume}%
        </span>
      </LiquidGlassContainer>

      {/* Embedded rotating disc styles */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 3s linear infinite;
        }
        .truncate {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .text-sm { font-size: 14px; }
        .text-xs { font-size: 12px; }
        .text-right { text-align: right; }
        .font-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }
        .mt-0\\.5 { margin-top: 2px; }
        .ml-3 { margin-left: 12px; }
        .w-8 { width: 32px; }
      `}</style>
    </div>
  );
};

export default MiniPlayer;
