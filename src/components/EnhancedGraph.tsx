
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import FuturisticCard from './FuturisticCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

const EnhancedGraph: React.FC = () => {
  const [equation, setEquation] = useState('sin(x)');
  const [zoom, setZoom] = useState(1);
  
  // Generate data points for the graph
  const generateData = (eq: string) => {
    const data = [];
    for (let x = -10; x <= 10; x += 0.1) {
      try {
        let y;
        const xVal = x;
        switch (eq.toLowerCase()) {
          case 'sin(x)':
            y = Math.sin(xVal);
            break;
          case 'cos(x)':
            y = Math.cos(xVal);
            break;
          case 'x^2':
            y = xVal * xVal;
            break;
          case 'x^3':
            y = xVal * xVal * xVal;
            break;
          default:
            y = Math.sin(xVal);
        }
        data.push({ x: Number(xVal.toFixed(1)), y: Number(y.toFixed(3)) });
      } catch {
        data.push({ x: Number(x.toFixed(1)), y: 0 });
      }
    }
    return data;
  };

  const data = generateData(equation);

  return (
    <FuturisticCard className="h-96">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Interactive Graph
        </h3>
        <div className="flex gap-2">
          <Button 
            size="sm" 
            variant="outline" 
            onClick={() => setZoom(z => Math.max(0.5, z - 0.2))}
            className="border-blue-500/30 hover:border-blue-500/50"
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            onClick={() => setZoom(z => Math.min(3, z + 0.2))}
            className="border-blue-500/30 hover:border-blue-500/50"
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            onClick={() => setZoom(1)}
            className="border-blue-500/30 hover:border-blue-500/50"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="mb-4">
        <Input
          value={equation}
          onChange={(e) => setEquation(e.target.value)}
          placeholder="Enter equation: sin(x), cos(x), x^2, x^3"
          className="bg-slate-800/50 border-slate-600/50 text-white"
        />
      </div>

      <div className="h-64 bg-slate-900/30 rounded-lg p-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#334155" 
              strokeOpacity={0.3}
            />
            <XAxis 
              dataKey="x" 
              stroke="#64748b"
              fontSize={12}
            />
            <YAxis 
              stroke="#64748b"
              fontSize={12}
            />
            <Line 
              type="monotone" 
              dataKey="y" 
              stroke="#3b82f6" 
              strokeWidth={2}
              dot={false}
              strokeOpacity={0.8}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </FuturisticCard>
  );
};

export default EnhancedGraph;
