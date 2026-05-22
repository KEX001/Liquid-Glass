import React, { createContext, useContext, useEffect, useMemo } from 'react';

// Create context for adjusting and fetching live parameters
const LiquidGlassContext = createContext(null);

export const useLiquidGlass = () => {
  const context = useContext(LiquidGlassContext);
  if (!context) {
    throw new Error('useLiquidGlass must be used within a LiquidGlassProvider');
  }
  return context;
};

// Base64-encoded displacement WebP map (highly optimized for smooth liquid distortion physics)
const WEBP_DISPLACEMENT_MAP = "data:image/webp;base64,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+X65Z6A5XvX/bT/D3369r56jY9X56/uP7T8rU70DqA17yPe6fGPtfMrePz+aHe7YdE89vXy3Mv7C9X/+Xv7+f79e988DufvQO6eU7754KCpXP7+fW6Xl+v485H6eXo6OnY7t9fDud+hXyDOf7yZ73p7Xf3/+v69X/6/v173zwO6eU7754KCpXP7+fW6Xl+v485H6eXo6OnY7t9fDud+hXyDOf7yZ73p7Xf3/+v69X/6/v173zwO6eU7754KCpXP7+fW6Xl+v485H6eXo6OnY7t9fDud+hXyDOf7yZ73p7Xf3/+v69X/6/v173zwO6eU7754KCpXP7+fW6Xl+v485H6eXo6OnY7t9fDud+hXyDOf7yZ73p7Xf3/+v69X/6/v173zwO6eU7754KCpXP7+fW6Xl+v485H6eXo6OnY7t9fDud+hXyDOf7yZ73p7Xf3/+v69X/6/v173zwO6eU7754KCpXP7+fW6Xl+v485H6eXo6OnY7t9fDud+hXyDOf7yZ73p7Xf3/+v69X/6/v173zwO6eU7754KCpXP7+fW6Xl+v485H6eXo6OnY7t9fDud+hXyDOf7yZ73p7Xf3/+v69X/6/v173zwO6eU7754KCpXP7+fW6Xl+v485H6eXo6OnY7t9fDud+hXyDOf7yZ73p7Xf3/+v69X/6/v173zwO6eU7754KCpXP7+fW6Xl+v485H6eXo6OnY7t9fDud+hXyDOf7yZ73p7Xf3/+v69X/6/v173f++fH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx=";

export const LiquidGlassProvider = ({ 
  children,
  blur = 12,
  scale = 0.5,
  saturation = 150,
  opacity = 0.12,
  tint = '#bbbbbc',
  accent = '#fc3c44',
  accentGlow = 'rgba(252, 60, 68, 0.4)',
  reflexLight = 0.3,
  reflexDark = 2
}) => {

  // Synchronize CSS custom properties with current React props
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--lg-blur', `${blur}px`);
    root.style.setProperty('--lg-scale', `${scale}`);
    root.style.setProperty('--lg-saturation', `${saturation}%`);
    root.style.setProperty('--lg-opacity', `${opacity}`);
    root.style.setProperty('--lg-glass-tint', tint);
    root.style.setProperty('--lg-accent', accent);
    root.style.setProperty('--lg-accent-glow', accentGlow);
    root.style.setProperty('--lg-reflex-light', `${reflexLight}`);
    root.style.setProperty('--lg-reflex-dark', `${reflexDark}`);
  }, [blur, scale, saturation, opacity, tint, accent, accentGlow, reflexLight, reflexDark]);

  // Compute normalized blur/displacement stdDeviation based on user input scale
  const stdDeviation = useMemo(() => {
    // Normalizing SVG standard deviation relative to glass blur and scale
    return Math.max(0.005, (scale * 0.04)).toFixed(3);
  }, [scale]);

  const value = useMemo(() => ({
    blur, scale, saturation, opacity, tint, accent, reflexLight, reflexDark
  }), [blur, scale, saturation, opacity, tint, accent, reflexLight, reflexDark]);

  return (
    <LiquidGlassContext.Provider value={value}>
      {children}
      
      {/* 🧼 High-fidelity SVG Displacement Filter injection */}
      <svg 
        className="lg-svg-filter" 
        aria-hidden="true" 
        style={{
          position: 'absolute',
          width: 0,
          height: 0,
          pointerEvents: 'none',
          visibility: 'hidden'
        }}
      >
        <defs>
          <filter id="liquid-glass-filter" primitiveUnits="objectBoundingBox">
            <feImage 
              result="map" 
              width="100%" 
              height="100%" 
              x="0" 
              y="0" 
              href={WEBP_DISPLACEMENT_MAP}
            />
            {/* The blur amount here creates a smoother blending region where elements merge */}
            <feGaussianBlur 
              in="SourceGraphic" 
              stdDeviation={stdDeviation} 
              result="blur"
            />
            <feDisplacementMap 
              id="disp" 
              in="blur" 
              in2="map" 
              scale={scale} 
              xChannelSelector="R" 
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
    </LiquidGlassContext.Provider>
  );
};
