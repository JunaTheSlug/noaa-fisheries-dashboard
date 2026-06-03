import React from 'react';
import { LayoutDashboard, Database, Satellite, Anchor, Settings, Activity } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Mission Control', active: true },
    { icon: Database, label: 'Fleet Data' },
    { icon: Satellite, label: 'Uplink Status' },
    { icon: Activity, label: 'Telemetry' },
    { icon: Anchor, label: 'Vessel Logs' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className="w-64 bg-ocean-900 border-r border-ocean-700 h-screen flex flex-col fixed left-0 top-0">
      <div className="p-6 border-b border-ocean-700">
        <h1 className="text-xl font-bold text-white flex items-center gap-2">
          <Anchor className="text-blue-400" />
          <span>NOAA EDGE</span>
        </h1>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <div
            key={item.label}
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
              item.active ? 'bg-ocean-800 text-blue-400' : 'hover:bg-ocean-800/50 text-slate-400 hover:text-white'
            }`}
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
          </div>
        ))}
      </nav>
      <div className="p-4 border-t border-ocean-700 text-xs text-slate-500 uppercase tracking-widest font-mono">
        System v1.0.4-POC
      </div>
    </aside>
  );
};

export default Sidebar;
