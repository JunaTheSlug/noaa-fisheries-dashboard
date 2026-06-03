import React from 'react';
import { Activity, Terminal } from 'lucide-react';
import { TelemetryData } from '../hooks/useTelemetry';

interface Props {
  telemetry: TelemetryData[];
}

const TelemetryMonitor = ({ telemetry }: Props) => {
  return (
    <div className="bg-ocean-800 rounded-xl border border-ocean-700 p-6 flex flex-col h-full overflow-hidden">
      <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
        <Activity size={16} /> Live Telemetry Feed
      </h3>

      <div className="flex-1 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
        {telemetry.map((entry, i) => (
          <div key={i} className="bg-ocean-900/50 p-3 rounded border border-ocean-700/50 flex justify-between items-center group hover:border-telemetry/50 transition-colors">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-slate-500 font-mono">{entry.timestamp}</span>
              <div className="flex items-center gap-3">
                <span className="text-telemetry font-mono text-sm">DEP: {entry.depth}m</span>
                <span className="text-blue-400 font-mono text-sm">TMP: {entry.temp}°C</span>
                <span className="text-purple-400 font-mono text-sm">HDG: {entry.heading}°</span>
              </div>
            </div>
            <Terminal size={14} className="text-slate-600 group-hover:text-telemetry" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TelemetryMonitor;
