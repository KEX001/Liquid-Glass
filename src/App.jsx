import React, { useState, useMemo } from 'react';
import { 
  Sliders, 
  Sparkles, 
  Terminal, 
  Github, 
  Compass, 
  Info, 
  SlidersHorizontal,
  Flame,
  Droplet,
  Snowflake,
  PackageCheck
} from 'lucide-react';

// Core context provider
import { LiquidGlassProvider } from './components/core/LiquidGlassProvider';
import LiquidGlassContainer from './components/core/LiquidGlassContainer';

// Showcase child elements
import BottomDock from './components/showcase/BottomDock';
import MiniPlayer from './components/showcase/MiniPlayer';
import SpecularCard from './components/showcase/SpecularCard';
import LiquidSlider from './components/showcase/LiquidSlider';

// Playground helpers
import ParamSlider from './components/ui/ParamSlider';
import CodeBlock from './components/ui/CodeBlock';

export const App = () => {
  // Playground State variables
  const [blur, setBlur] = useState(12);
  const [scale, setScale] = useState(0.5);
  const [saturation, setSaturation] = useState(150);
  const [opacity, setOpacity] = useState(0.12);
  const [tint, setTint] = useState('#bbbbbc');
  const [accent, setAccent] = useState('#fc3c44');
  const [reflexLight, setReflexLight] = useState(0.3);
  const [reflexDark, setReflexDark] = useState(2);

  // Active Demo tab state
  const [activeTab, setActiveTab] = useState('dock');

  // Pre-configured physics presets
  const presets = [
    {
      name: 'Molten Glass',
      icon: Flame,
      values: { blur: 14, scale: 0.65, saturation: 180, opacity: 0.14, tint: '#ffdbdd', accent: '#ff4b5c', reflexLight: 0.45, reflexDark: 2 }
    },
    {
      name: 'Frosted Ice',
      icon: Snowflake,
      values: { blur: 24, scale: 0.15, saturation: 120, opacity: 0.08, tint: '#e0f2fe', accent: '#0284c7', reflexLight: 0.6, reflexDark: 1 }
    },
    {
      name: 'Mercury Fluid',
      icon: Droplet,
      values: { blur: 8, scale: 0.95, saturation: 160, opacity: 0.2, tint: '#bbbbbc', accent: '#a855f7', reflexLight: 0.3, reflexDark: 2.5 }
    }
  ];

  const applyPreset = (presetValues) => {
    setBlur(presetValues.blur);
    setScale(presetValues.scale);
    setSaturation(presetValues.saturation);
    setOpacity(presetValues.opacity);
    setTint(presetValues.tint);
    setAccent(presetValues.accent);
    setReflexLight(presetValues.reflexLight);
    setReflexDark(presetValues.reflexDark);
  };

  // Generate real-time copyable CSS configurations
  const generatedCss = useMemo(() => {
    return `:root {
  /* 🧪 Liquid Glass Custom Variables */
  --lg-blur: ${blur}px;
  --lg-scale: ${scale};
  --lg-saturation: ${saturation}%;
  --lg-opacity: ${opacity};
  --lg-glass-tint: ${tint};
  --lg-accent: ${accent};
  --lg-reflex-light: ${reflexLight};
  --lg-reflex-dark: ${reflexDark};
}`;
  }, [blur, scale, saturation, opacity, tint, accent, reflexLight, reflexDark]);

  return (
    <LiquidGlassProvider
      blur={blur}
      scale={scale}
      saturation={saturation}
      opacity={opacity}
      tint={tint}
      accent={accent}
      reflexLight={reflexLight}
      reflexDark={reflexDark}
    >
      <div className="showcase-bg" />
      <div className="showcase-grid" />
      <div className="ambient-glow-1" />
      <div className="ambient-glow-2" />

      <div className="app-container">
        {/* 🎛️ Left Sidebar Settings Panel */}
        <aside className="sidebar">
          <LiquidGlassContainer className="w-full h-full rounded-[28px] p-6 flex flex-col gap-5 overflow-hidden">
            <div className="logo-section">
              <span className="logo-tag">V1.0.0</span>
              <h1 className="logo-title">Liquid Glass</h1>
            </div>

            <p className="text-xs text-white/50 leading-relaxed">
              Tweak displacement vectors, frosting blurs, and chromatic parameters below. Liquid glass utilizes real-time SVG displacement channels.
            </p>

            {/* Slider Parameters Group */}
            <div className="flex flex-col gap-1 mt-2">
              <span className="section-title flex items-center gap-1.5">
                <SlidersHorizontal size={12} /> Sandbox Parameters
              </span>

              <ParamSlider 
                label="Distortion Scale (Mercury)" 
                min={0} 
                max={1.2} 
                step={0.05} 
                value={scale} 
                onChange={setScale} 
              />
              <ParamSlider 
                label="Backdrop Frost Blur" 
                min={0} 
                max={40} 
                value={blur} 
                onChange={setBlur} 
                suffix="px" 
              />
              <ParamSlider 
                label="Base Tint Opacity" 
                min={0.02} 
                max={0.35} 
                step={0.01} 
                value={opacity} 
                onChange={setOpacity} 
                suffix="" 
              />
              <ParamSlider 
                label="Color Bleed Saturation" 
                min={50} 
                max={300} 
                value={saturation} 
                onChange={setSaturation} 
                suffix="%" 
              />
              
              <div className="flex gap-3 w-full mb-3 mt-1">
                <div className="flex-1 flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-white/40 tracking-wider">Glass Tint</span>
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-1.5 h-10">
                    <input 
                      type="color" 
                      value={tint} 
                      onChange={(e) => setTint(e.target.value)}
                      className="w-6 h-6 border-none rounded cursor-pointer bg-transparent"
                    />
                    <span className="text-[10px] font-mono text-white/60">{tint.toUpperCase()}</span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-white/40 tracking-wider">Accent Glow</span>
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-1.5 h-10">
                    <input 
                      type="color" 
                      value={accent} 
                      onChange={(e) => setAccent(e.target.value)}
                      className="w-6 h-6 border-none rounded cursor-pointer bg-transparent"
                    />
                    <span className="text-[10px] font-mono text-white/60">{accent.toUpperCase()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Presets Selector Shelf */}
            <div className="flex flex-col gap-1.5">
              <span className="section-title flex items-center gap-1.5">
                <Sparkles size={12} /> Physics Presets
              </span>
              <div className="flex flex-col gap-2">
                {presets.map((preset) => {
                  const Icon = preset.icon;
                  return (
                    <button
                      key={preset.name}
                      onClick={() => applyPreset(preset.values)}
                      className="w-full h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between px-3 text-xs font-semibold text-white/80 hover:bg-white/10 cursor-pointer lg-active-scale transition-all"
                    >
                      <div className="flex items-center gap-2">
                        <Icon size={14} className="text-white/60" />
                        <span>{preset.name}</span>
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-white/30">Load</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </LiquidGlassContainer>
        </aside>

        {/* 🖼️ Right Main Stage Panel */}
        <main className="stage">
          {/* Header Banner */}
          <LiquidGlassContainer className="w-full rounded-[24px] p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-white/50 text-xs font-bold uppercase tracking-widest">
              <PackageCheck size={14} /> UI Component Showroom
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Molten Vector Physics & Aero Translucency
            </h2>
            <p className="text-xs text-white/60 leading-relaxed max-w-[650px]">
              This showroom demonstrates the standard liquid glass components configured to run directly on top of your local CSS settings. Toggle between tabs to test the responsive behaviors.
            </p>
          </LiquidGlassContainer>

          {/* Showroom Navigation Tabs */}
          <div className="showcase-tabs mt-2">
            <button 
              onClick={() => setActiveTab('dock')}
              className={`showcase-tab-btn ${activeTab === 'dock' ? 'active' : ''}`}
            >
              Bottom Dock
            </button>
            <button 
              onClick={() => setActiveTab('player')}
              className={`showcase-tab-btn ${activeTab === 'player' ? 'active' : ''}`}
            >
              Mini Player
            </button>
            <button 
              onClick={() => setActiveTab('card')}
              className={`showcase-tab-btn ${activeTab === 'card' ? 'active' : ''}`}
            >
              3D Specular Card
            </button>
            <button 
              onClick={() => setActiveTab('slider')}
              className={`showcase-tab-btn ${activeTab === 'slider' ? 'active' : ''}`}
            >
              Theme Slider
            </button>
          </div>

          {/* Core Interactive Showcase Grid Stage */}
          <div className="showcase-stage-area">
            {activeTab === 'dock' && <BottomDock />}
            {activeTab === 'player' && <MiniPlayer />}
            {activeTab === 'card' && <SpecularCard />}
            {activeTab === 'slider' && <LiquidSlider />}
          </div>

          {/* Generated Code Preview Block */}
          <div className="flex flex-col gap-2">
            <span className="section-title flex items-center gap-1.5">
              <Terminal size={12} /> Generated Liquid Glass CSS Tokens
            </span>
            <CodeBlock code={generatedCss} />
          </div>

          {/* Core Library Setup Docs */}
          <LiquidGlassContainer className="w-full rounded-[24px] p-6 flex flex-col gap-4">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-white/40">
              <Info size={14} /> Quick Installation Guide
            </div>
            
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-white">How to import in React / Vite / Next.js</h4>
              <p className="text-xs text-white/50 leading-relaxed">
                1. Copy the core stylesheet <code className="bg-white/5 px-1 py-0.5 rounded text-[11px] font-mono text-white/80">liquid-glass.css</code> to your styles folder and import it in your main entrypoint.
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-xs font-mono text-white/70 overflow-x-auto">
                {"// Import core styling styles\nimport './styles/liquid-glass.css';\n\n// Wrap your root components to inject the required SVG filter\nimport { LiquidGlassProvider } from './components/core/LiquidGlassProvider';"}
              </div>

              <p className="text-xs text-white/50 leading-relaxed">
                2. Wrap your layout files to automatically inject displacement nodes and set HSL properties.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-xs font-mono text-white/70 overflow-x-auto font-normal">
                {"export default function App() {\n  return (\n    <LiquidGlassProvider blur={12} scale={0.5}>\n      <div className=\"lg-container rounded-2xl p-6\">\n        <h3 className=\"text-white\">Liquid Glass Element</h3>\n      </div>\n    </LiquidGlassProvider>\n  );\n}"}
              </div>
            </div>
          </LiquidGlassContainer>
        </main>
      </div>

      <style>{`
        .text-2xl { font-size: 24px; }
        .gap-1\\.5 { gap: 6px; }
        .mt-2 { margin-top: 8px; }
        .truncate { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      `}</style>
    </LiquidGlassProvider>
  );
};

export default App;
