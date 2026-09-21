import React, { useState } from 'react';
import {
  Sparkles,
  Terminal,
  Cpu,
  Volume2,
  RefreshCw,
  Info,
  CheckCircle
} from 'lucide-react';

// Braille 6-dot matrix definitions: [dot1, dot2, dot3, dot4, dot5, dot6]
const BRAILLE_MAP = {
  a: [1, 0, 0, 0, 0, 0],
  b: [1, 1, 0, 0, 0, 0],
  c: [1, 0, 0, 1, 0, 0],
  d: [1, 0, 0, 1, 1, 0],
  e: [1, 0, 0, 0, 1, 0],
  f: [1, 1, 0, 1, 0, 0],
  g: [1, 1, 0, 1, 1, 0],
  h: [1, 1, 0, 0, 1, 0],
  i: [0, 1, 0, 1, 0, 0],
  j: [0, 1, 0, 1, 1, 0],
  k: [1, 0, 1, 0, 0, 0],
  l: [1, 1, 1, 0, 0, 0],
  m: [1, 0, 1, 1, 0, 0],
  n: [1, 0, 1, 1, 1, 0],
  o: [1, 0, 1, 0, 1, 0],
  p: [1, 1, 1, 1, 0, 0],
  q: [1, 1, 1, 1, 1, 0],
  r: [1, 1, 1, 0, 1, 0],
  s: [0, 1, 1, 1, 0, 0],
  t: [0, 1, 1, 1, 1, 0],
  u: [1, 0, 1, 0, 0, 1],
  v: [1, 1, 1, 0, 0, 1],
  w: [0, 1, 0, 1, 1, 1],
  x: [1, 0, 1, 1, 0, 1],
  y: [1, 0, 1, 1, 1, 1],
  z: [1, 0, 1, 0, 1, 1],
  ' ': [0, 0, 0, 0, 0, 0],
};

// Convert dot array to Unicode Braille Pattern character
const getBrailleUnicode = (dots) => {
  let code = 0x2800;
  if (dots[0]) code += 0x01; // Dot 1
  if (dots[1]) code += 0x02; // Dot 2
  if (dots[2]) code += 0x04; // Dot 3
  if (dots[3]) code += 0x08; // Dot 4
  if (dots[4]) code += 0x10; // Dot 5
  if (dots[5]) code += 0x20; // Dot 6
  return String.fromCharCode(code);
};

// Convert dot array to 6-bit binary string
const getBinaryMask = (dots) => {
  return '0b' + dots.map(d => d ? '1' : '0').join('');
};

function BrailleDemo() {
  const [inputText, setInputText] = useState('DHAYAN');
  const [activeCharIndex, setActiveCharIndex] = useState(0);

  const cleanChars = inputText.slice(0, 12).split('');

  const activeChar = cleanChars[activeCharIndex]?.toLowerCase() || 'a';
  const activeDots = BRAILLE_MAP[activeChar] || [0, 0, 0, 0, 0, 0];

  const presets = ['DHAYAN', 'AI/ML', 'BRAILLE', 'WELCOME'];

  return (
    <section id="braille-demo" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            Live Project Simulator
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Interactive <span className="gradient-text">Text-to-Braille Converter</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Directly test the tactile 6-dot actuation logic engineered for the assistive reading project 
            developed with Python, Arduino, and embedded solenoids.
          </p>
        </div>

        {/* Interactive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Controls & Text Input */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">
                Type Text to Translate (Max 12 chars):
              </label>
              
              <input
                type="text"
                value={inputText}
                maxLength={12}
                onChange={(e) => {
                  setInputText(e.target.value.toUpperCase());
                  setActiveCharIndex(0);
                }}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-mono text-lg font-bold tracking-widest focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all uppercase"
                placeholder="TYPE HERE..."
              />

              {/* Quick Presets */}
              <div className="flex items-center gap-2 mt-4">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Presets:</span>
                {presets.map((preset) => (
                  <button
                    key={preset}
                    onClick={() => {
                      setInputText(preset);
                      setActiveCharIndex(0);
                    }}
                    className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    {preset}
                  </button>
                ))}
              </div>

              {/* Translated String Chips */}
              <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800">
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                  Click a character to inspect solenoid pin state:
                </p>
                <div className="flex flex-wrap gap-2">
                  {cleanChars.map((char, idx) => {
                    const dots = BRAILLE_MAP[char.toLowerCase()] || [0, 0, 0, 0, 0, 0];
                    const unicode = getBrailleUnicode(dots);
                    const isSelected = activeCharIndex === idx;

                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveCharIndex(idx)}
                        className={`flex flex-col items-center justify-center w-12 h-14 rounded-xl border transition-all ${
                          isSelected
                            ? 'border-orange-500 bg-orange-500/10 text-orange-600 dark:text-orange-400 scale-105 shadow-md'
                            : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:border-orange-300'
                        }`}
                      >
                        <span className="text-sm font-extrabold">{char}</span>
                        <span className="text-base font-serif">{unicode}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Hardware Specs Card */}
              <div className="mt-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-slate-700 dark:text-slate-300 space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-amber-700 dark:text-amber-400">
                  <Info className="w-4 h-4" />
                  <span>Hardware &amp; Firmware Parameters</span>
                </div>
                <p>• Baud Rate: 9600 bps UART Serial</p>
                <p>• Solenoid Pulse Width: 120ms (prevents thermal runaway)</p>
                <p>• Transistor Driver: ULN2803 High-Voltage Darlington Array</p>
              </div>
            </div>
          </div>

          {/* Right Column: 6-Dot Physical Solenoid Actuation Matrix */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-center justify-around gap-8">
              
              {/* Tactile Solenoid Pin Cell */}
              <div className="flex flex-col items-center">
                <div className="text-center mb-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    Active Char: <strong className="text-orange-600 dark:text-orange-400 text-base ml-1">{activeChar.toUpperCase()}</strong>
                  </span>
                </div>

                {/* The 2x3 Solenoid Pin Array */}
                <div className="p-6 rounded-3xl bg-slate-900 border-4 border-slate-800 shadow-2xl grid grid-cols-2 gap-6 w-48 h-64 items-center justify-items-center relative">
                  
                  {/* Pin 1 (Top Left) */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full border-2 transition-all duration-300 flex items-center justify-center font-bold text-xs ${
                        activeDots[0]
                          ? 'bg-orange-500 border-orange-300 shadow-[0_0_18px_#f97316] text-white scale-110'
                          : 'bg-slate-800 border-slate-700 text-slate-500'
                      }`}
                    >
                      1
                    </div>
                  </div>

                  {/* Pin 4 (Top Right) */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full border-2 transition-all duration-300 flex items-center justify-center font-bold text-xs ${
                        activeDots[3]
                          ? 'bg-orange-500 border-orange-300 shadow-[0_0_18px_#f97316] text-white scale-110'
                          : 'bg-slate-800 border-slate-700 text-slate-500'
                      }`}
                    >
                      4
                    </div>
                  </div>

                  {/* Pin 2 (Mid Left) */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full border-2 transition-all duration-300 flex items-center justify-center font-bold text-xs ${
                        activeDots[1]
                          ? 'bg-orange-500 border-orange-300 shadow-[0_0_18px_#f97316] text-white scale-110'
                          : 'bg-slate-800 border-slate-700 text-slate-500'
                      }`}
                    >
                      2
                    </div>
                  </div>

                  {/* Pin 5 (Mid Right) */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full border-2 transition-all duration-300 flex items-center justify-center font-bold text-xs ${
                        activeDots[4]
                          ? 'bg-orange-500 border-orange-300 shadow-[0_0_18px_#f97316] text-white scale-110'
                          : 'bg-slate-800 border-slate-700 text-slate-500'
                      }`}
                    >
                      5
                    </div>
                  </div>

                  {/* Pin 3 (Bottom Left) */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full border-2 transition-all duration-300 flex items-center justify-center font-bold text-xs ${
                        activeDots[2]
                          ? 'bg-orange-500 border-orange-300 shadow-[0_0_18px_#f97316] text-white scale-110'
                          : 'bg-slate-800 border-slate-700 text-slate-500'
                      }`}
                    >
                      3
                    </div>
                  </div>

                  {/* Pin 6 (Bottom Right) */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full border-2 transition-all duration-300 flex items-center justify-center font-bold text-xs ${
                        activeDots[5]
                          ? 'bg-orange-500 border-orange-300 shadow-[0_0_18px_#f97316] text-white scale-110'
                          : 'bg-slate-800 border-slate-700 text-slate-500'
                      }`}
                    >
                      6
                    </div>
                  </div>

                </div>

                <div className="mt-3 text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Orange = Solenoid Raised (HIGH)
                </div>
              </div>

              {/* Data Telemetry Terminal */}
              <div className="w-full md:w-64 space-y-4">
                <div className="p-4 rounded-2xl bg-slate-900 text-emerald-400 font-mono text-xs shadow-inner space-y-2">
                  <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
                    <span className="flex items-center gap-1">
                      <Terminal className="w-3.5 h-3.5" />
                      UART Stream
                    </span>
                    <span className="text-[10px] text-emerald-500">LIVE</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Target Char:</span> '{activeChar.toUpperCase()}'
                  </div>
                  <div>
                    <span className="text-slate-500">Unicode Braille:</span> {getBrailleUnicode(activeDots)}
                  </div>
                  <div>
                    <span className="text-slate-500">6-Bit Pin Mask:</span>{' '}
                    <span className="text-amber-400">{getBinaryMask(activeDots)}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Active Pins:</span>{' '}
                    {activeDots.map((d, i) => d ? `D${i+1}` : null).filter(Boolean).join(', ') || 'None'}
                  </div>
                  <div>
                    <span className="text-slate-500">Packet Status:</span> ACK_OK
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                    Impact of Text-to-Braille
                  </h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300">
                    Provides low-cost, real-time tactile feedback for visually impaired users by translating digital educational material directly onto physical touch pins.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default BrailleDemo;
