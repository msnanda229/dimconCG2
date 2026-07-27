import React, { useMemo, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { geoMercator } from 'd3-geo';
import { worldPath } from './WorldMapPath';

// Regions and specific services as requested
const regions = [
  { id: 'ca', name: 'Canada', coordinates: [-106.0, 56.0] },
  { id: 'us', name: 'United States', coordinates: [-95.0, 38.0] },
  { id: 'uk', name: 'United Kingdom', coordinates: [-3.0, 55.0], labelOffset: [0, -22] },
  { id: 'de', name: 'Germany', coordinates: [10.0, 51.0], labelOffset: [0, 20] },
  { id: 'ae', name: 'UAE', coordinates: [54.0, 24.0], labelOffset: [0, -22] },
  { id: 'in', name: 'India', coordinates: [78.0, 22.0] },
  { id: 'sg', name: 'Singapore', coordinates: [103.8, 1.3], labelOffset: [0, 20] },
  { id: 'jp', name: 'Japan', coordinates: [138.0, 36.0] },
  { id: 'au', name: 'Australia', coordinates: [133.0, -25.0] },
  { id: 'za', name: 'South Africa', coordinates: [24.0, -29.0] },
];

const connections = [
  { from: 'us', to: 'uk' },
  { from: 'us', to: 'ca' },
  { from: 'us', to: 'jp' },
  { from: 'uk', to: 'de' },
  { from: 'de', to: 'ae' },
  { from: 'ae', to: 'in' },
  { from: 'in', to: 'sg' },
  { from: 'sg', to: 'jp' },
  { from: 'sg', to: 'au' },
  { from: 'uk', to: 'za' },
  { from: 'ae', to: 'za' },
];

const GlobalOrganization = () => {
  const containerRef = useRef(null);
  const mapContainerRef = useRef(null);

  const projection = useMemo(
    () => geoMercator().scale(150).translate([500, 250]),
    []
  );

  const regionMap = useMemo(
    () => Object.fromEntries(regions.map(r => [r.id, r])),
    []
  );

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const mapScale = useTransform(scrollYProgress, [0, 0.4], [0.95, 1]);
  const mapOpacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative bg-white overflow-hidden py-14 lg:py-16 flex items-center"
    >


      <div className="max-w-[1500px] mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-4">
          
          {/* Left Side Content */}
          <div className="w-full lg:w-[32%] flex flex-col items-start z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="text-[#E28B2B] text-xs md:text-sm font-bold tracking-[0.15em] uppercase mb-4">
                Global Reach
              </h3>
              
              <h2 className="text-[clamp(32px,4vw,56px)] font-bold tracking-tight text-[#1E293B] mb-4 leading-[1.15]">
                Global Reach.<br/>
                Local Expertise.<br/>
                <span className="text-[#E28B2B]">Enterprise Impact.</span>
              </h2>
              
              <p className="text-slate-600 text-sm md:text-[15px] leading-[1.7] max-w-[430px] font-medium mb-5">
                Delivering enterprise transformation across industries with globally distributed expertise, strategic technology partnerships, and proven implementation methodologies.
              </p>

              <div className="w-12 h-0.5 bg-[#E28B2B]"></div>
            </motion.div>
          </div>

          {/* Right Side Map */}
          <div className="w-full lg:w-[68%] relative h-[320px] md:h-[420px] lg:h-[560px] flex items-center justify-center scale-100 lg:scale-105 2xl:scale-110">
            
            {/* 3D Tilt Container */}
            <motion.div 
              ref={mapContainerRef}
              style={{ 
                scale: mapScale, 
                opacity: mapOpacity
              }}
              className="w-full h-full relative z-10 scale-[1.05] will-change-transform"
            >
              {/* Native SVG Map */}
              <svg 
                viewBox="0 0 1000 500" 
                className="w-full h-full drop-shadow-[0_15px_25px_rgba(0,0,0,0.06)]"
                style={{ overflow: 'visible' }}
              >
                <defs>
                  <radialGradient id="glow">
                    <stop offset="0%" stopColor="#E28B2B" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#E28B2B" stopOpacity="0" />
                  </radialGradient>
                  {/* Drop shadow filter for map path */}
                  <filter id="mapShadow" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="2" dy="8" stdDeviation="2" floodColor="#000000" floodOpacity="0.08" />
                  </filter>
                </defs>

                {/* World Map Path */}
                <path 
                  d={worldPath} 
                  fill="#E2E8F0" 
                  stroke="#FFFFFF" 
                  strokeWidth="1.5"
                  filter="url(#mapShadow)"
                  className="transition-colors duration-500"
                />

                {/* Connections */}
                {connections.map((conn, idx) => {
                  const from = regionMap[conn.from];
                  const to = regionMap[conn.to];
                  if (!from || !to) return null;

                  const p1 = projection(from.coordinates);
                  const p2 = projection(to.coordinates);
                  if (!p1 || !p2) return null;

                  const [x1, y1] = p1;
                  const [x2, y2] = p2;

                  // Calculate a slight curve using Quadratic Bezier
                  const cx = (x1 + x2) / 2;
                  const cy = (y1 + y2) / 2 - 40; // Arch upward slightly

                  const pathD = `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;

                  return (
                    <g key={`conn-${idx}`}>
                      {/* Base glowing line */}
                      <path
                        d={pathD}
                        fill="none"
                        stroke="#E28B2B"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        className="opacity-30"
                        style={{
                          strokeDasharray: "1000",
                          strokeDashoffset: "1000",
                          animation: `drawLine ${1.5 + idx * 0.15}s ease-out forwards`
                        }}
                      />
                      {/* Data packets travelling */}
                      <path
                        d={pathD}
                        fill="none"
                        stroke="#E28B2B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        className="data-line opacity-80"
                        style={{ animationDelay: `${idx * 0.2}s` }}
                      />
                    </g>
                  );
                })}

                {/* Hub Nodes */}
                {regions.map((region) => {
                  const point = projection(region.coordinates);
                  if (!point) return null;
                  
                  const [x, y] = point;
                  
                  return (
                    <g 
                      key={region.id}
                      transform={`translate(${x}, ${y})`}
                    >
                      {/* Soft bloom aura */}
                      <circle r="12" fill="url(#glow)" opacity="0.4" />

                      {/* Solid orange center */}
                      <circle r="4" fill="#E28B2B" />
                      {/* Inner white dot */}
                      <circle r="1.5" fill="#FFFFFF" />

                      {/* Region Text Label */}
                      <text 
                        x={0} 
                        y={region.labelOffset?.[1] ?? -18} 
                        textAnchor="middle" 
                        fill="#334155" 
                        className="text-[9px] font-bold tracking-wide"
                        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                      >
                        {region.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(GlobalOrganization);
