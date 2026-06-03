import { useState, useEffect } from 'react';

export type TelemetryData = {
  timestamp: string;
  depth: number;
  temp: number;
  salinity: number;
  latitude: string;
  longitude: string;
  heading: number;
}

export const useTelemetry = (isLowBandwidth: boolean) => {
  const [data, setData] = useState<TelemetryData[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newData: TelemetryData = {
        timestamp: new Date().toISOString(),
        depth: +(Math.random() * 500 + 100).toFixed(2),
        temp: +(Math.random() * 5 + 10).toFixed(2),
        salinity: +(Math.random() * 2 + 34).toFixed(2),
        latitude: "44° 24' 15\" N",
        longitude: "124° 59' 22\" W",
        heading: Math.floor(Math.random() * 360),
      };

      setData(prev => [newData, ...prev].slice(0, isLowBandwidth ? 5 : 20));
    }, isLowBandwidth ? 3000 : 800);

    return () => clearInterval(interval);
  }, [isLowBandwidth]);

  return data;
};
