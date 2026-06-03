import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import PipelineVisualizer from './PipelineVisualizer';
import TelemetryMonitor from './TelemetryMonitor';
import { useTelemetry } from '../hooks/useTelemetry';
import { Database, Waves, Map as MapIcon } from 'lucide-react';

const Dashboard = () => {
  const [isLowBandwidth, setLowBandwidth] = useState(false);
  const telemetry = useTelemetry(isLowBandwidth);

  return (
    <div className="min-h-screen bg-ocean-900 text-slate-100 flex">
      <Sidebar />
      <main className="flex-1 ml-64 flex flex-col h-screen">
        <Header isLowBandwidth={isLowBandwidth} setLowBandwidth={setLowBandwidth} />
        
        <div className="p-8 flex-1 overflow-y-auto grid grid-cols-12 gap-6">
          {/* Top Panel: Summary */}
          <div className="col-span-12 lg:col-span-8 bg-ocean-800 rounded-xl border border-ocean-700 p-6 flex flex-col gap-4">
             <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold tracking-tight">Vessel Operations Summary</h2>
                <div className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-mono font-bold">CRUISE_ID: NO-2026-06</div>
             </div>
             {isLowBandwidth ? (
               <div className="p-4 bg-orange-500/5 border border-orange-500/20 rounded-lg">
                 <p className="text-orange-400 text-sm font-mono uppercase tracking-widest">Low-Bandwidth Mode Active: Visuals Throttled / Local Cache Only</p>
               </div>
             ) : (
               <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Active Sensors', value: '42', icon: Database },
                    { label: 'Current Swell', value: '1.2m', icon: Waves },
                    { label: 'Coordinates', value: '44°N, 124°W', icon: MapIcon },
                  ].map(stat => (
                    <div key={stat.label} className="bg-ocean-900 p-4 rounded-lg border border-ocean-700">
                      <stat.icon className="text-blue-400 mb-2" size={20} />
                      <div className="text-2xl font-bold font-mono">{stat.value}</div>
                      <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">{stat.label}</div>
                    </div>
                  ))}
               </div>
             )}
          </div>

          {/* Right Top: System Health */}
          <div className="col-span-12 lg:col-span-4 bg-ocean-800 rounded-xl border border-ocean-700 p-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Edge System Health</h3>
            <div className="space-y-4">
              {['CPU', 'Memory', 'Disk', 'Sat-Link'].map(sys => (
                <div key={sys}>
                   <div className="flex justify-between text-xs font-mono mb-1">
                      <span>{sys}</span>
                      <span className="text-telemetry">{(Math.random() * 20 + 40).toFixed(1)}%</span>
                   </div>
                   <div className="h-1 bg-ocean-900 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500" style={{ width: `${Math.random() * 30 + 50}%` }} />
                   </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Left: Visualizer */}
          <div className="col-span-12 lg:col-span-7 h-[350px]">
             <PipelineVisualizer />
          </div>

          {/* Bottom Right: Telemetry */}
          <div className="col-span-12 lg:col-span-5 h-[350px]">
             <TelemetryMonitor telemetry={telemetry} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
