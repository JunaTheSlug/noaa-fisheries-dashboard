import { Wifi, WifiOff, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  isLowBandwidth: boolean;
  setLowBandwidth: (val: boolean) => void;
}

const Header = ({ isLowBandwidth, setLowBandwidth }: HeaderProps) => {
  return (
    <header className="h-16 bg-ocean-900/80 backdrop-blur-md border-b border-ocean-700 flex items-center justify-between px-8 sticky top-0 z-10">
      <div className="flex items-center gap-4 text-sm font-mono">
        <div className="flex items-center gap-2 text-green-400">
          <ShieldCheck size={16} />
          <span>SECURE_UPLINK_READY</span>
        </div>
        <div className="text-slate-500">|</div>
        <div className="text-slate-300">OPS_CENTER: PORTLAND_HUB</div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            {isLowBandwidth ? 'At-Sea Mode' : 'High-Speed Broadband'}
          </span>
          <button
            onClick={() => setLowBandwidth(!isLowBandwidth)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              isLowBandwidth ? 'bg-orange-500' : 'bg-blue-600'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isLowBandwidth ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          {isLowBandwidth ? <WifiOff size={18} className="text-orange-500" /> : <Wifi size={18} className="text-blue-500" />}
        </div>
      </div>
    </header>
  );
};

export default Header;
