import React, { useState } from 'react';
import { Ship, Cpu, Satellite, Cloud, ChevronRight, Info } from 'lucide-react';

const PipelineVisualizer = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const nodes = [
    { id: 'vessel', label: 'Vessel Sensors', icon: Ship, protocol: 'NMEA 0183', details: 'Real-time sonar and GPS strings.' },
    { id: 'edge', label: 'Edge DB', icon: Cpu, protocol: 'Protocol Buffers', details: 'Local compaction and caching.' },
    { id: 'sat', label: 'Satellite Uplink', icon: Satellite, protocol: 'Iridium Short Burst', details: 'Message queuing for intermittent link.' },
    { id: 'cloud', label: 'Cloud Engine', icon: Cloud, protocol: 'Parquet / S3', details: 'Long-term storage and ML indexing.' },
  ];

  return (
    <div className="bg-ocean-800 rounded-xl border border-ocean-700 p-6 flex flex-col h-full">
      <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
        <Cpu size={16} /> Data Pipeline Map
      </h3>
      
      <div className="flex-1 flex items-center justify-between px-4">
        {nodes.map((node, i) => (
          <React.Fragment key={node.id}>
            <div 
              className={`flex flex-col items-center gap-3 cursor-pointer group relative`}
              onClick={() => setSelected(node.id)}
            >
              <div className={`p-4 rounded-full border-2 transition-all ${
                selected === node.id ? 'bg-blue-500/20 border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'bg-ocean-900 border-ocean-600 hover:border-slate-400'
              }`}>
                <node.icon size={24} className={selected === node.id ? 'text-blue-400' : 'text-slate-400 group-hover:text-white'} />
              </div>
              <span className={`text-xs font-mono font-bold ${selected === node.id ? 'text-blue-400' : 'text-slate-500'}`}>
                {node.label}
              </span>
            </div>
            {i < nodes.length - 1 && (
              <ChevronRight className="text-ocean-700 animate-pulse" />
            )}
          </React.Fragment>
        ))}
      </div>

      {selected && (
        <div className="mt-6 p-4 bg-ocean-900 rounded-lg border border-ocean-700 animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-blue-400 text-xs font-bold uppercase tracking-tighter">Protocol: {nodes.find(n => n.id === selected)?.protocol}</span>
            <button onClick={() => setSelected(null)} className="text-slate-500 hover:text-white text-xs">✕</button>
          </div>
          <p className="text-sm text-slate-300">{nodes.find(n => n.id === selected)?.details}</p>
        </div>
      )}
    </div>
  );
};

export default PipelineVisualizer;
