import React, { useRef, useState } from 'react';

export const LiquidGlassContainer = ({
  children,
  className = '',
  style = {},
  as: Component = 'div',
  showHighlight = true,
  enableSpecularHover = false,
  ...props
}) => {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!enableSpecularHover || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  const dynamicStyle = {
    ...style,
    ...(enableSpecularHover ? {
      '--mouse-x': `${mousePos.x}px`,
      '--mouse-y': `${mousePos.y}px`,
      '--mouse-opacity': isHovered ? 1 : 0
    } : {})
  };

  return (
    <Component
      ref={containerRef}
      className={`lg-container ${enableSpecularHover ? 'lg-specular-card' : ''} ${className}`}
      style={dynamicStyle}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {/* Dynamic Specular Highlights */}
      {showHighlight && <div className="lg-top-highlight" />}
      {children}
    </Component>
  );
};
export default LiquidGlassContainer;
