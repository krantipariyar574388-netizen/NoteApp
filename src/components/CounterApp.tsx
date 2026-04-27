import React, { useState } from 'react';

const CounterApp = () => {
  // States
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center w-full max-w-md border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Counter</h1>
        <div className="text-5xl font-black text-indigo-600 my-6">
          {count}
        </div>
        
        <div className="flex flex-wrap justify-center gap-3">
          <button 
            onClick={() => setCount(count + 1)}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg font-bold shadow-md hover:shadow-lg transform active:scale-95 transition"
          >
            + Increment
          </button>
          <button 
            onClick={() => setCount(count > 0 ? count - 1 : 0 )}
            className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-lg font-bold shadow-md hover:shadow-lg transform active:scale-95 transition"
          >
            - Decrement
          </button>
          <button 
            onClick={() => setCount(0)}
            className="bg-slate-500 hover:bg-slate-600 text-white px-6 py-2 rounded-lg font-bold shadow-md hover:shadow-lg transform active:scale-95 transition"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
        <label className="block text-sm font-bold text-gray-600 mb-2 uppercase tracking-wide">
          Live Input Preview
        </label>
        <input 
          type="text" 
          placeholder="Enter enything "
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
        />
        <div className="mt-6 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
          <p className="text-xs font-bold text-indigo-400 uppercase mb-1">Result:</p>
          <p className="text-xl text-gray-800 font-medium break-all">
            {text || " "}
          </p>
        </div>
      </div>

    </div>
  );
};

export default CounterApp;