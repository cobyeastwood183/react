import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    const timers = [];

    // Test 1: Wait  0ms, then mark start, wait 750ms, mark end, measure ~750ms duration.
    timers.push(setTimeout(() => {
      performance.mark('test1_start');
      timers.push(setTimeout(() => {
        performance.mark('test1_end');
        performance.measure('test1_measure', 'test1_start', 'test1_end');
        const [measure] = performance.getEntriesByName('test1_measure');
        console.log('[Test 1] duration (should be ~750ms):', measure.duration.toFixed(2), 'ms');
      }, 750));
    }, 0));

    // Test 2: Wait 100ms, then mark start, wait 1000ms, mark end, measure ~1100ms duration.
    timers.push(setTimeout(() => {
      performance.mark('test2_start');
      timers.push(setTimeout(() => {
        performance.mark('test2_end');
        performance.measure('test2_measure', 'test2_start', 'test2_end');
        const [measure] = performance.getEntriesByName('test2_measure');
        console.log('[Test 2] duration (should be ~1100ms):', measure.duration.toFixed(2), 'ms');
      }, 1000));
    }, 100));

    // Test 3: Wait 750ms, then mark start, wait 500ms, mark end, measure ~1250ms duration.
    timers.push(setTimeout(() => {
      performance.mark('test3_start');
      timers.push(setTimeout(() => {
        performance.mark('test3_end');
        performance.measure('test3_measure', 'test3_start', 'test3_end');
        const [measure] = performance.getEntriesByName('test3_measure');
        console.log('[Test 3] duration (should be ~1250ms):', measure.duration.toFixed(2), 'ms');
      }, 500));
    }, 750));

    // Clean up timers when the component unmounts
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
      </header>
    </div>
  );
}

export default App;