import React from 'react'

function App() {
  return (
    <div className="app">
      <h1>CSS Bundling Demo</h1>
      <p>This demonstrates CSS bundling with source maps</p>
      <button className="btn">Click to Test</button>
      <div className="card">
        <h2>Source Maps Active</h2>
        <p>Open DevTools to see CSS mapping to original SCSS files</p>
      </div>
      <div className="card">
        <h2>CSS Transformation</h2>
        <p>Multiple .scss files → One bundled .css file</p>
      </div>
    </div>
  )
}

export default App