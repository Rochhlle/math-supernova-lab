
import React, { useState } from 'react';
import { Calculator, BookOpen, Sparkles } from 'lucide-react';
import SolveMode from '../components/SolveMode';
import LearnMode from '../components/LearnMode';

const Index = () => {
  const [currentMode, setCurrentMode] = useState<'solve' | 'learn'>('solve');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/40 to-slate-900"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Header */}
      <header className="relative z-10 backdrop-blur-sm bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Math Super Solver
              </h1>
            </div>
            
            {/* Mode Toggle */}
            <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm rounded-lg p-1 border border-white/20">
              <button
                onClick={() => setCurrentMode('solve')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-300 ${
                  currentMode === 'solve'
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Calculator className="h-4 w-4" />
                <span>Solve</span>
              </button>
              <button
                onClick={() => setCurrentMode('learn')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-300 ${
                  currentMode === 'learn'
                    ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/50'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <BookOpen className="h-4 w-4" />
                <span>Learn</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="transition-all duration-500 ease-in-out">
          {currentMode === 'solve' ? <SolveMode /> : <LearnMode />}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-16 text-center text-gray-400 text-sm">
        <div className="flex items-center justify-center space-x-2">
          <span>AI by Math Super Solver</span>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
