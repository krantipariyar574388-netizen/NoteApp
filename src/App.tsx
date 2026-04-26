import React from 'react';
import CounterApp from './components/CounterApp';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 py-6 px-4">
      <div className="max-w-2xl mx-auto">
        <main>
          <CounterApp />
        </main>
      </div>
    </div>
  );
}

export default App;