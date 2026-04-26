import React from 'react';
import WindowTracker from "./components/WindowTracker";
import UserList from './components/UserList';
import PostList from './components/PostList';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 py-6 px-4">
      <div className="max-w-2xl mx-auto">
        <main>
           {/* {/* <CounterApp /> 
          <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <WindowTracker />
      <UserList />
    </div> */}
    <div className="min-h-screen bg-gray-50 py-10">
      <PostList />
    </div> 
        </main>
      </div>
    </div>
  );
}

export default App;