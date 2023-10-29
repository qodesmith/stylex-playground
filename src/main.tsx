import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import './index.css'

import inject from '@stylexjs/dev-runtime'

inject({
  dev: true,
  test: false,
  classNamePrefix: 'x',
  styleResolution: 'application-order',
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <div>Hi</div>
  </React.StrictMode>
)
