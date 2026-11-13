import React, { useState, useEffect, useRef } from 'react';
import type { ElementType, ReactNode, CSSProperties } from 'react';
import './LuminousType.css';

export interface LuminousTypeProps {
  children?: ReactNode;
  text?: string;
  as?: ElementType;
  baseOpacity?: number;
  radius?: string;
  tint?: string;
  color?: string;
  className?: string;
  idle?: 'drift' | 'center' | 'none';
  driftSpeed?: number;
  style?: CSSProperties;
}

export const LuminousType: React.FC<LuminousTypeProps> = ({
  children,
  text,
  as: Component = 'div',
  baseOpacity = 0.24,
  radius = '4.5em',
  tint = '#fbbf24',
  color = '#ffffff',
  className = '',
  idle = 'drift',
  driftSpeed = 1,
  style,
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);
  const animFrameRef = useRef<number | null>(null);

  // 1. Mouse Tracking Listener
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // 2. Organic Idle Drift Animation (Sinusoidal spotlight glide across text)
  useEffect(() => {
    if (idle !== 'drift') return;

    let startTime = performance.now();

    const animateDrift = (now: number) => {
      if (!isHovered && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          const t = (now - startTime) * 0.0008 * driftSpeed;
          // Lissajous figure-8 trajectory for natural ambient light drift
          const cx = rect.width / 2;
          const cy = rect.height / 2;
          const rx = rect.width * 0.38;
          const ry = rect.height * 0.32;

          const driftX = cx + Math.sin(t) * rx;
          const driftY = cy + Math.sin(t * 1.6) * ry;

          setMousePos({ x: driftX, y: driftY });
        }
      }
      animFrameRef.current = requestAnimationFrame(animateDrift);
    };

    animFrameRef.current = requestAnimationFrame(animateDrift);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [idle, isHovered, driftSpeed]);

  const content = text ?? children;

  return (
    <Component
      ref={containerRef as any}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        if (idle === 'none') {
          setMousePos({ x: -1000, y: -1000 });
        }
      }}
      className={`luminous-type-root ${className}`.trim()}
      style={{
        ...style,
        '--luminous-base-opacity': baseOpacity,
        '--luminous-x': `${mousePos.x}px`,
        '--luminous-y': `${mousePos.y}px`,
        '--luminous-radius': radius,
        '--luminous-tint': tint,
        '--luminous-color': color,
      } as CSSProperties}
    >
      {/* Base Layer: Dimmed Ambient Text */}
      <span className="luminous-base-layer" aria-hidden="true">
        {content}
      </span>

      {/* Illuminating Spotlight Overlay Layer with Radial Mask */}
      <span className="luminous-spotlight-layer">
        {content}
      </span>
    </Component>
  );
};

export default LuminousType;
