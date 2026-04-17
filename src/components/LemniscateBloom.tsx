import React, { useEffect, useRef } from 'react';

interface LemniscateBloomProps {
  className?: string;
  color?: string;
}

const LemniscateBloom: React.FC<LemniscateBloomProps> = ({ className = "", color = "#FFB800" }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const groupRef = useRef<SVGGElement>(null);
  const particlesRef = useRef<SVGCircleElement[]>([]);

  const config = {
    particleCount: 50,
    trailSpan: 0.4,
    durationMs: 5600,
    pulseDurationMs: 5000,
    strokeWidth: 2,
    lemniscateA: 20,
    lemniscateBoost: 7,
    point(progress: number, detailScale: number) {
      const t = progress * Math.PI * 2;
      const scale = this.lemniscateA + detailScale * this.lemniscateBoost;
      const denom = 1 + Math.pow(Math.sin(t), 2);
      return {
        x: 50 + (scale * Math.cos(t)) / denom,
        y: 50 + (scale * Math.sin(t) * Math.cos(t)) / denom,
      };
    },
  };

  useEffect(() => {
    if (!svgRef.current || !pathRef.current || !groupRef.current) return;

    const group = groupRef.current;
    
    // Create particles
    const particles: SVGCircleElement[] = [];
    for (let i = 0; i < config.particleCount; i++) {
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('fill', 'currentColor');
      group.appendChild(circle);
      particles.push(circle);
    }
    particlesRef.current = particles;

    const normalizeProgress = (p: number) => ((p % 1) + 1) % 1;
    
    const getDetailScale = (time: number) => {
      const pulseProgress = (time % config.pulseDurationMs) / config.pulseDurationMs;
      const pulseAngle = pulseProgress * Math.PI * 2;
      return 0.52 + ((Math.sin(pulseAngle + 0.55) + 1) / 2) * 0.48;
    };

    const buildPath = (detailScale: number, steps = 120) => {
      let d = "";
      for (let i = 0; i <= steps; i++) {
        const point = config.point(i / steps, detailScale);
        d += `${i === 0 ? 'M' : 'L'} ${point.x.toFixed(2)} ${point.y.toFixed(2)}`;
      }
      return d;
    };

    const getParticleProps = (index: number, progress: number, detailScale: number) => {
      const tailOffset = index / (config.particleCount - 1);
      const point = config.point(normalizeProgress(progress - tailOffset * config.trailSpan), detailScale);
      const fade = Math.pow(1 - tailOffset, 0.56);
      return {
        x: point.x,
        y: point.y,
        radius: 0.5 + fade * 1.5,
        opacity: 0.04 + fade * 0.96,
      };
    };

    let animationId: number;
    const startedAt = performance.now();

    const render = (now: number) => {
      const time = now - startedAt;
      const progress = (time % config.durationMs) / config.durationMs;
      const detailScale = getDetailScale(time);

      if (pathRef.current) {
        pathRef.current.setAttribute('d', buildPath(detailScale));
      }

      particlesRef.current.forEach((node, index) => {
        const p = getParticleProps(index, progress, detailScale);
        node.setAttribute('cx', p.x.toFixed(2));
        node.setAttribute('cy', p.y.toFixed(2));
        node.setAttribute('r', p.radius.toFixed(2));
        node.setAttribute('opacity', p.opacity.toFixed(3));
      });

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationId);
      particles.forEach(p => p.remove());
    };
  }, []);

  return (
    <div className={`w-full h-full flex items-center justify-center bg-[#050505] overflow-hidden ${className}`}>
      <svg 
        ref={svgRef} 
        viewBox="0 0 100 100" 
        className="w-full h-full overflow-visible" 
        style={{ color }}
      >
        <g ref={groupRef}>
          <path 
            ref={pathRef} 
            stroke="currentColor" 
            strokeWidth={config.strokeWidth} 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            fill="none"
            opacity="0.1" 
          />
        </g>
      </svg>
    </div>
  );
};

export default LemniscateBloom;
